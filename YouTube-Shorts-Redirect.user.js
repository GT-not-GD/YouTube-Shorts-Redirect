// ==UserScript==
// @name         YouTube Shorts Redirect (重定向 Shorts 到标准观看页面)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically redirects YouTube Shorts URLs (youtube.com/shorts/...) to standard watch URLs (youtube.com/watch?v=...)
// @author       GT
// @match        https://www.youtube.com/shorts/*
// @grant        none
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @downloadURL  https://raw.githubusercontent.com/GT-not-GD/YouTube-Shorts-Redirect/master/YouTube-Shorts-Redirect.user.js)
// @updateURL    https://raw.githubusercontent.com/GT-not-GD/YouTube-Shorts-Redirect/master/YouTube-Shorts-Redirect.user.js)
// ==UserScript==

(function() {
    'use strict';

    // 获取当前页面的 URL
    const currentUrl = window.location.href;

    // 检查 URL 是否符合 Shorts 的格式 (https://www.youtube.com/shorts/...)
    // 使用正则表达式更精确地匹配和提取视频 ID
    // /shorts\/([^/?#]+)/ 匹配 "/shorts/" 后面的部分，直到遇到 "/", "?", 或 "#"
    const shortsRegex = /^https:\/\/(www\.)?youtube\.com\/shorts\/([^/?#]+)/;
    const match = currentUrl.match(shortsRegex);

    // 如果当前 URL 是 Shorts 链接，并且成功提取了视频 ID
    if (match && match[2]) {
        const videoId = match[2]; // match[2] 是正则表达式捕获到的视频 ID

        // 构建新的标准观看页面 URL
        const newUrl = `https://www.youtube.com/watch?v=${videoId}`;

        // 进行重定向
        // 使用 window.location.replace() 比 window.location.href = newUrl 更推荐
        // 因为 replace() 会替换当前历史记录条目，而不是添加一个新的，
        // 这样点击浏览器的后退按钮时，就不会回到 Shorts 页面，而是回到打开 Shorts 之前的页面。
        console.log(`[YouTube Shorts Redirect] Redirecting: ${currentUrl} -> ${newUrl}`); // 在控制台输出一条消息，方便调试
        window.location.replace(newUrl);
    }

    // 如果当前 URL 不是 Shorts 链接，则脚本不做任何事情。

})();