# YouTube Shorts Redirect to Watch URL Script

一个简单的 Tampermonkey/Greasemonkey 用户脚本，用于自动将 YouTube Shorts 的 URL ( `youtube.com/shorts/...` ) 重定向到标准的 YouTube 视频观看页面 ( `youtube.com/watch?v=...` )。

Many users prefer the standard YouTube watch page experience over the specialized Shorts interface, which might lack features like comments, chapters, or specific player controls in the same way. This script ensures you always land on the familiar watch page.

许多用户更喜欢标准的 YouTube 观看页面的体验，而不是 Shorts 的特殊界面。Shorts 界面有时可能缺少评论、章节或特定的播放器控制等功能。此脚本确保您始终跳转到熟悉的标准观看页面。

## ✨ Features (功能)

*   Automatically detects YouTube Shorts URLs (`youtube.com/shorts/VIDEO_ID`).
*   Redirects to the corresponding standard watch URL (`youtube.com/watch?v=VIDEO_ID`).
*   Uses `window.location.replace` for a cleaner browser history (pressing the back button goes to the page *before* the Shorts link, not the Shorts page itself).
*   Lightweight and efficient.

## 🚀 Installation (安装)

Before installing this script, you will need to install a user script manager, such as:

在安装此脚本之前，您需要先安装一个用户脚本管理器，例如：

*   **Tampermonkey** (适用于 Chrome, Edge, Firefox, Safari, Opera, Dolphin Browser, UC Browser): [https://www.tampermonkey.net/](https://www.tampermonkey.net/)
*   **Violentmonkey** (适用于 Chrome, Edge, Firefox): [https://violentmonkey.github.io/](https://violentmonkey.github.io/)

安装用户脚本管理器后，请点击以下链接来安装此脚本：

➡️ **[点击此处安装脚本](https://raw.githubusercontent.com/GT-not-GD/youtube-windowed-fullscreen-script/master/YouTube-Shorts-Redirect.user.js)**

## 🤝 Contributing (贡献)

Feel free to open issues or submit pull requests if you have suggestions for improvements or bug fixes.

如果您有改进建议或错误修复，欢迎提交 issues 或 pull requests。

## 📄 License (许可证)

This script is released under the [MIT License](https://opensource.org/licenses/MIT).

此项目根据 [MIT 许可证](https://opensource.org/licenses/MIT) 发布。