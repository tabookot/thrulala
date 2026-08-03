[English](README.md) | [中文](README.ZH.md) | [Русский](README.ru.md)

# THRULALA 🦅

<a href="https://tabookot.github.io/thrulala/" style="display: inline-block; padding: 10px 24px; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #1d9bf0; text-decoration: none; border-radius: 8px;">🚀 打开 THRULALA</a>

> 绝对政治真相的模拟器。它创造你所见过的最伟大、最胜利、最史诗级的帖子。没有人能做得更好！

这个单页网页应用会生成荒诞但语法几乎正确的、夸张至极的帖子，风格类似于竞选宣传语。生成器预先编程了典型短语、国家名称、现任政治人物以及标志性的史诗级华丽辞藻。

作者团队 — GLM, Kimi, Gemini。

![Thrulala Preview](https://img.shields.io/badge/Status-Absolutely%20Great-red) ![Tech Stack](https://img.shields.io/badge/HTML%2FCSS%2FJS-Vanilla-gold)

## 🇺🇸 特性

* **多角色信息流**：时间线融合了几个色彩鲜明的人物。新帖子会随机以他们中任何人的名义生成。
* **真实的刷数据**：机器人农场和 X 算法不断刷赞、刷火焰、刷骷髅和刷大便。刷数据的速度取决于原型的真实粉丝数量（特朗普获得最大加成！）。
* **多语言支持**：界面支持英语、中文和俄语。如果角色的基础语言（例如，特朗普用英语思考）与您的不同，帖子下方会出现一个“翻译”按钮。
* **18+ Canvas 验证码**：完全通过 Canvas API 绘制的独立验证码。要进入，您必须勾选一个确认您已准备好面对失望的复选框，并输入“成年人暗号”（TAXES, MORTGAGE, 税收）。
* **自动生成与自动清理**：信息流有自己的生命——它会自动生成帖子，并轻柔地溶解旧帖子（限制为 50 条），这样就不会让您的设备超载。
* **高级设计**：深色背景，采用 X (Twitter) / Threads 风格，具有流畅的入场、消散动画，以及清除信息流时的核爆炸效果。
* **零依赖**：纯 HTML、CSS 和原生 JavaScript。不需要 `npm install`。

## 🚀 如何在本地运行

1. 下载存储库（或克隆它：`git clone https://github.com/tabookot/thrulala.git`）。
2. 在任何现代浏览器中打开 `index.html` 文件。
3. 通过验证码，点击 **Thru** 按钮，享受有史以来最伟大的声明。

## 🌐 在 GitHub Pages 上部署

该项目最初是为在 GitHub Pages 上托管而适配的：

1. 将文件（`index.html`、`script.js` 和包含角色的 `pers/` 文件夹）上传到您的 GitHub 存储库。
2. 进入存储库的 **Settings**。
3. 在左侧菜单中，选择 **Pages** 部分。
4. 在 *Build and deployment* 块下，选择 **Deploy from a branch**。
5. 选择 `main` 分支和 `/ (root)` 文件夹。点击 **Save**。
6. 几分钟后，您的模拟器将可以通过 `https://<您的用户名>.github.io/thrulala/` 访问。

## 🛠 技术栈

* HTML5
* CSS3 (Flexbox, Animations, Backdrop Filter)
* 原生 JavaScript (从数组生成字符串，处理 LocalStorage)
* Canvas API (生成无后端的自定义验证码)

## ⚠️ 免责声明

本项目纯属讽刺和恶搞。所有生成的文本都是绝对的随机事件，与现实无关。任何与真实政治家、事件或推文声明的相似之处纯属巧合。让我们再次让你伟大！