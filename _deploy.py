#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import subprocess, urllib.request, urllib.error, json, os

TOKEN = open('/home/sandbox/.openclaw/.github_token').read().strip()
OWNER = 'doomfg'
REPO  = 'fupan-dashboard'
PROJECT = '/home/sandbox/.openclaw/workspace/简报工作台'
REPO_URL = f'https://x-access-token:{TOKEN}@github.com/{OWNER}/{REPO}.git'

def run(cmd, cwd=None):
    r = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    return r.returncode, (r.stdout + r.stderr)

print('[1/3] 推送代码到 GitHub ...')
code, out = run(['git', 'push', REPO_URL, 'main:main'], cwd=PROJECT)
print('  push 退出码:', code)
# 打印时脱敏 token（若被回显）
clean = out.replace(TOKEN, '[REDACTED]')
if code != 0:
    print('  '+clean.strip().replace('\n','\n  '))
else:
    print('  ✓ 推送成功')

print('[2/3] 开启 GitHub Pages ...')
payload = json.dumps({'source': {'branch': 'main', 'path': '/'}}).encode()
req = urllib.request.Request(
    f'https://api.github.com/repos/{OWNER}/{REPO}/pages',
    data=payload, method='POST',
    headers={'Authorization': f'Bearer {TOKEN}', 'Accept': 'application/vnd.github+json'})
try:
    with urllib.request.urlopen(req) as resp:
        d = json.loads(resp.read().decode())
        print('  ✓ Pages 开启，状态:', d.get('status'))
        print('  页面 URL:', d.get('html_url'))
except urllib.error.HTTPError as e:
    body = e.read().decode()
    if 'already' in body.lower() or e.code == 409:
        print('  Pages 可能已存在，尝试更新配置')
        req2 = urllib.request.Request(
            f'https://api.github.com/repos/{OWNER}/{REPO}/pages',
            data=json.dumps({'source': {'branch': 'main', 'path': '/'}}).encode(),
            method='PUT', headers={'Authorization': f'Bearer {TOKEN}', 'Accept': 'application/vnd.github+json'})
        try:
            with urllib.request.urlopen(req2) as resp2:
                d2 = json.loads(resp2.read().decode())
                print('  ✓ Pages 更新，状态:', d2.get('status'), '| URL:', d2.get('html_url'))
        except urllib.error.HTTPError as e2:
            print('  ✗ Pages 操作失败 HTTP', e2.code, ':', e2.read().decode()[:200].replace(TOKEN,'[R]'))
    else:
        print('  ✗ Pages 开启失败 HTTP', e.code, ':', body[:200].replace(TOKEN, '[R]'))

print('[3/3] 完成')
