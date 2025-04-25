# YouTube Shorts Redirect to Watch URL Script

一个简单的 Tampermonkey/Greasemonkey 用户脚本，用于自动将 YouTube Shorts 的 URL ( `youtube.com/shorts/...` ) 重定向到标准的 YouTube 视频观看页面 ( `youtube.com/watch?v=...` )。

许多用户更喜欢标准的 YouTube 观看页面的体验，而不是 Shorts 的特殊界面。Shorts 界面有时可能缺少评论、章节或特定的播放器控制等功能。此脚本确保您始终跳转到熟悉的标准观看页面。

## ✨ Features (功能)

*   自动检测 YouTube Shorts URL（`youtube.com/shorts/VIDEO_ID`）。
*   重定向到相应的标准观看网址（`youtube.com/watch?v=VIDEO_ID`）。
*   使用 `window.location.replace` 来获得更清晰的浏览器历史记录（按下后退按钮会转到 Shorts 链接*之前*的页面，而不是 Shorts 页面本身）。
*   轻巧、高效。

## 🚀 Installation (安装)

在安装此脚本之前，您需要先安装一个用户脚本管理器，例如：

*   **Tampermonkey** (适用于 Chrome, Edge, Firefox, Safari, Opera, Dolphin Browser, UC Browser): [https://www.tampermonkey.net/](https://www.tampermonkey.net/)
*   **Violentmonkey** (适用于 Chrome, Edge, Firefox): [https://violentmonkey.github.io/](https://violentmonkey.github.io/)

安装用户脚本管理器后，请点击以下链接来安装此脚本：

➡️ **[点击此处安装脚本](https://raw.githubusercontent.com/GT-not-GD/YouTube-Shorts-Redirect/master/YouTube-Shorts-Redirect.user.js)**

点击链接后，您的用户脚本管理器会打开一个安装确认页面。请检查脚本信息，然后点击“安装”或“确认”按钮。

## 使用方法

安装脚本后，访问任何 YouTube Shorts 视频页面即可。脚本将在页面加载后自动重定向。

## 兼容性

此脚本设计用于 `https://www.youtube.com/shorts/*`。

## 📄 License (许可证)

此项目根据 [MIT 许可证](https://opensource.org/licenses/MIT) 发布。