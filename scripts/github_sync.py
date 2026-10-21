#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 每日工作台自动同步脚本：复制最新复盘+流动性简报 → 重建索引 → git 提交推送 → Pages 自动更新
import subprocess, os, glob, json, datetime

BASE = '/home/sandbox/.openclaw/workspace/简报工作台'
REVIEWS_SRC = '/home/sandbox/.openclaw/workspace/复盘存档'
KEY_PATH = '/home/sandbox/.openclaw/.github_token'
OWNER, REPO = 'doomfg', 'fupan-dashboard'

def log(m): print(m, flush=True)

def read_key():
    with open(KEY_PATH) as f: return f.read().strip()

def repo_url(key):
    return 'https://x-access-token:{k}@github.com/{o}/{r}.git'.format(k=key, o=OWNER, r=REPO)

def sync_reviews():
    n = 0
    for src in glob.glob(os.path.join(REVIEWS_SRC, '*_复盘简报.md')):
        dt = os.path.basename(src).split('_')[0]
        dst = os.path.join(BASE, 'data', 'reviews', dt + '.md')
        with open(src, encoding='utf-8') as f: content = f.read()
        with open(dst, 'w', encoding='utf-8') as f: f.write(content)
        n += 1
    return n

def gen_index():
    subs = {'reviews': '复盘', 'liquidity-cn': '中国流动性', 'liquidity-us': '美国流动性'}
    dates = set(); files = {s: {} for s in subs}
    for s in subs:
        d = os.path.join(BASE, 'data', s)
        if not os.path.isdir(d): continue
        for fn in os.listdir(d):
            if fn.endswith('.md'):
                dt = fn[:-3]; dates.add(dt); files[s][dt] = 'data/' + s + '/' + fn
    dates = sorted(dates, reverse=True)
    with open(os.path.join(BASE, 'index.json'), 'w', encoding='utf-8') as f:
        json.dump({'dates': dates, 'files': files}, f, ensure_ascii=False, indent=1)
    return dates

def commit_and_push(key):
    today = datetime.date.today().isoformat()
    url = repo_url(key)
    subprocess.run(['git', 'add', '-A'], cwd=BASE, capture_output=True, text=True)
    com = subprocess.run(
        ['git', '-c', 'user.name=doomfg', '-c', 'user.email=doomfg@users.noreply.github.com',
         'commit', '-m', 'auto-sync %s' % today],
        cwd=BASE, capture_output=True, text=True)
    psh = subprocess.run(['git', 'push', url, 'main:main'], cwd=BASE, capture_output=True, text=True)
    return com, psh

def main():
    key = read_key()
    log('[1/4] 同步复盘简报')
    n = sync_reviews()
    log('      已同步 %d 份复盘简报' % n)
    log('[2/4] 重建索引')
    dates = gen_index()
    log('      索引日期数: %d（最新: %s）' % (len(dates), dates[0] if dates else '-'))
    log('[3/4] Git 提交 + 推送')
    com, psh = commit_and_push(key)
    if 'nothing to commit' in (com.stdout + com.stderr):
        log('      无新内容可提交（数据未变化）')
    elif com.returncode != 0:
        log('      commit 状态码 %d: %s' % (com.returncode, (com.stdout + com.stderr).strip()[:200]))
    if psh.returncode != 0:
        log('      ✗ push 失败: %s' % psh.stderr[:300])
        return 1
    log('      ✓ 推送成功，GitHub Pages 将自动更新')
    log('[4/4] 完成')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
