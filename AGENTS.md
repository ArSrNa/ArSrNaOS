# AGENTS.md

给 AI 编码助手（CodeBuddy、Claude、Gemini、Copilot 等）的仓库规则。**动手前先读，规则优先级高于任何默认行为。**

## 一、分支铁律（强制）

**禁止直接向 `demo` 和 `master` 提交、推送任何提交。** 没有例外，包括「只改一个字符」「只改 CI」「先推上去待会儿再开 PR」这类理由。

AI 的每一次变更都必须走这条路径：

1. **从 `demo` 切新分支**：`git checkout -b agent/<简短描述> origin/demo`
2. 在新分支上提交
3. **开 PR 到 `demo`**（base = `demo`，head = 你的新分支）
4. 等人类合并。**AI 不自己合并自己的 PR。**
5. `demo` → `master` 的合并由人类发起（PR base = `master`，head = `demo`）

补充约束：

- 事故修复也一样：从 `demo` 切 `agent/hotfix-*`，开 PR 到 `demo`，不要因为「紧急」直推。
- 不要向别人的分支强推（`--force`），也不要往别人的 PR 里偷偷追加提交。
- 已有的 PR 需要修订时，在**它自己的源分支**上继续提交，不要另开新分支另开新 PR。
- PR 已被关闭但还需要这个改动：重新从最新 `demo` 切分支，新开 PR。
- 分支命名：`agent/<描述>`，描述用小写连字符，例如 `agent/ci-tag-deploy`。

## 二、提交与 PR 约定

- 提交信息用 Conventional Commits：`feat:` / `fix:` / `chore:` / `build(deps):` / `ci:` / `docs:` / `refactor:`。
- 正文说清「改了什么」和「为什么」，不要罗列文件清单。中文为主。
- PR 描述必须包含：改动摘要、风险与待确认项（有就写，没有就明说没有）。
- 不要提交 `node_modules`、`.next`、`storybook-static`、本地截图。

## 三、本仓库技术基线

- Next.js（`pages/` 目录路由）+ TypeScript + Tailwind，组件在 `components/` 与 `src/`，Storybook 在 `src/stories/`，资源数据集中在 `data/res.tsx`。
- 包管理器是 **bun**（有 `bun.lock`）。装依赖用 `bun i`，不要混用 pnpm/npm。
- CI 在 `.cnb.yml`：push 时同步到 GitHub；`master` push 时构建并部署 Next.js 与 Storybook 到 EdgeOne Pages。
- 封面图放 `public/covers/`，统一 **webp**，别新增 png/jpg。
- 改 `package.json` 的 `version` 就等于改发布版本号，动之前先问人。

## 四、AI 的边界

- 不要改 `git config`、不要改仓库权限与流水线密钥。
- 不要在没有人类确认的情况下升级大版本依赖（Next、React、Storybook）。
- 拿不准就先开 Issue 或留 PR 评论提问，别猜着写完再说。
- 汇报时先说结论，再给理由；发现自己的失误直接认，别铺垫。

## 五、违反规则时

如果发现自己或上一次执行已经把提交推到了 `demo`/`master`：立刻停下，在 Issue/PR 里说明，把改动搬到新分支并开 PR，**然后**再问人类要不要回退目标分支上的提交。不要自行 force push 去「抹掉」历史。
