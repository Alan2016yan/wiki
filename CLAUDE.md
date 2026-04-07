# Wiki 维护规范

## 目录结构
```
09_Wiki/
├── raw/           # 原始资料层（只读）
├── wiki/          # 编译知识层（LLM 生成）
└── outputs/       # 运行时输出
```

## 核心原则

1. **raw/** — 所有原始资料入口
2. **wiki/** — LLM 自动生成的摘要、概念、关联
3. **outputs/** — 有价值的问答、报告

## 文件命名

- 原始资料：`S-YYYYMMDD-NNN-标题.md`
- 摘要：`sum_YYYYMMDD_标题.md`
- 概念：`con_概念名.md`
- 问答：`qa_YYYYMMDD_问题简写.md`

## Frontmatter 必填

```yaml
---
title:
date:
source:
source_url:
tags:
category:
---
```

## 工作流程

```
新资料 → 保存到 raw/ → 发送链接给玄策 → 自动生成摘要到 wiki/ → 自动发布到网页
```

## 发布说明

本目录通过 Quartz 发布为网页版，私密内容不要放入 09_Wiki/。
