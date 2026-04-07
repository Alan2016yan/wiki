---
title: Karpathy 开源 Agent + Obsidian 个人知识库方案
alias: [LLM Wiki, 第二大脑, 个人知识库, AI知识管理, Karpathy LLM Wiki, Obsidian第二大脑]
category: 08_知识管理
tags: [AI工具, Obsidian, 知识管理, LLM, Karpathy, 第二大脑, 知识工程]
source: 逛逛GitHub
source_url: https://mp.weixin.qq.com/s/FG2gEdgZwpMkA3ApQMksnw
create_date: 2026-04-07
update_date: 2026-04-07
status: 已标准化
---

## 核心定义

前 OpenAI 大佬 Andrej Karpathy 开源的 LLM + Obsidian「个人第二大脑」方案。核心思想：**让 LLM 像程序员维护代码库一样，持续构建和维护结构化的 Markdown 知识库**，实现知识的复利增长。

**解决什么问题**：传统笔记软件「只收藏不整理」的死循环，以及 Wiki 维护成本高、难以坚持的问题。

---

## 核心内容

### 一、三层架构

| 层级 | 名称 | 作用 |
|------|------|------|
| 第一层 | 原始资料层（Raw Sources） | 存放未处理的论文、文章、网页等，**只读** |
| 第二层 | 知识库层（The Wiki） | LLM 生成的摘要、实体页面、交叉引用，**可读可写**，复利核心 |
| 第三层 | 规则层（The Schema） | CLAUDE.md 等配置文件，定义组织规则和操作流程 |

### 二、三大核心操作

#### 1. 录入（Ingest）
- 添加新资料后，LLM 自动提取信息
- 更新相关 Wiki 页面
- 添加交叉引用

#### 2. 提问（Query）
- LLM 基于 Wiki 内容生成回答
- 有价值的问答可保存为新的 Wiki 页面

#### 3. 体检（Lint）
- 定期检查 Wiki 的矛盾、过时内容或缺失链接
- LLM 建议优化方案
- 保持知识库「健康」

### 三、核心观点

> **LLM 不应仅作为搜索引擎，而应作为持续维护知识库的「工程师」。**

- 知识库应具备**复利效应**：每添加新资料，LLM 会自动更新 Wiki（摘要、交叉引用、矛盾标注）
- **人类与 LLM 分工明确**：用户负责提出高质量问题，LLM 承担繁琐的维护工作
- LLM 不会厌倦，可零成本保持知识库健康

### 四、推荐工具链

| 工具 | 作用 |
|------|------|
| Obsidian | IDE 实时浏览 Wiki |
| Obsidian Web Clipper | 网页转 Markdown |
| Claude Code | 作为后台「程序员」，自动化维护 |
| qmd | 搜索工具 |
| Marp | 生成幻灯片 |

---

## 适用场景

- ✅ 深度知识体系建设（研究型用户）
- ✅ 需要知识复利效应的长期积累者
- ✅ 习惯用 Markdown 管理内容的用户
- ⚠️ 需要一定 AI 使用经验，门槛比普通笔记软件高

---

## 注意事项

- 需要持续维护 CLAUDE.md 规则文件
- 复利效果需要时间积累，短期内看不到明显收益
- 依赖 LLM API 稳定性和成本

---

## 延伸阅读

### 相关 Wiki 词条
[[WorkBuddy + IMA 自动同步知识库方案]] — 腾讯系 AI 知识库方案

### 外部参考链接
- Karpathy 原文：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f

---

## 个人笔记

> **Allan 的现状与 Karpathy 方案的对应：**
>
> | Karpathy 方案 | Allan 现状 | 对应情况 |
> |-------------|-----------|---------|
> | Raw Sources | `03_知识沉淀/08_网络剪藏/` | ✅ 已有 |
> | The Wiki | `09_Wiki/wiki/` | ✅ 已建立 Quartz 发布 |
> | The Schema (CLAUDE.md) | `09_Wiki/CLAUDE.md` | ✅ 已有 |
> | Ingest | 玄策整理网络文章 | ✅ 已在用 |
> | Query | 问玄策 | ✅ 已在用 |
> | Lint | 未建立定期机制 | ⚠️ 待补充 |
>
> **下一步行动**：建立每月一次「Wiki 体检」机制，让玄策检查过时内容、断链、矛盾。

---

*本文由玄策整理 | 2026-04-07*
