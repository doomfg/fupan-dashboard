#!/usr/bin/env python3
"""拉取中国流动性监测指标：用问财 macro_query，token从.xiaoyienv读。打印完整结果。"""
import subprocess, sys

ENV = "/home/sandbox/.openclaw/.xiaoyienv"
SKILL = "/home/sandbox/.openclaw/workspace/skills/hithink-iwencai"

token = None
with open(ENV) as f:
    for line in f:
        line = line.strip()
        if line.startswith("117862897_login_token="):
            token = line.split("=", 1)[1]
            break
if not token:
    print("NO_TOKEN")
    sys.exit(1)

queries = [
    "7天期逆回购操作利率",
    "一年期LPR利率",
    "中期借贷便利MLF利率",
    "存款准备金率",
    "DR001利率",
    "DR007利率",
    "R001",
    "R007利率",
    "M2同比增速",
    "社会融资规模",
    "新增人民币贷款",
]

for q in queries:
    try:
        r = subprocess.run(
            ["python3", f"{SKILL}/scripts/macro_query.py",
             "--query", q, "--api-key", token, "--limit", "1"],
            capture_output=True, text=True, timeout=60,
        )
        out = (r.stdout or "").strip()
        err = (r.stderr or "").strip()
        print(f"##### QUERY: {q}")
        print("STDOUT:", out)
        if err:
            print("STDERR:", err[:500])
        print()
    except Exception as e:
        print(f"##### QUERY: {q}\nEXC: {e}\n")
