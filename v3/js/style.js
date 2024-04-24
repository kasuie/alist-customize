/*
 * @Author: kasuie
 * @Date: 2024-04-24 15:35:59
 * @LastEditors: kasuie
 * @LastEditTime: 2024-04-24 16:09:36
 * @Description:
 */
let footer = false;

const onPatchStyle = (src) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.type = "text/css";
  linkElement.href = src;
  const head = document.head || document.getElementsByTagName("head")[0];
  head.insertBefore(linkElement, head.firstChild);
};

const renderFooter = () => {
  const target = document.querySelector(".footer > div");
  if (target) {
    onPatchStyle(
      "https://cdn.jsdelivr.net/gh/kasuie/alist-customize@main/v3/css/patch.min.css"
    );
    target.classList.add("mio-footer-main");
    target.innerHTML = `
            <img src='https://api.iowen.cn/favicon/kasuie.cc.png' />
            <a target='_blank' rel='noopener noreferrer' href='https://kasuie.cc'>©Theme by kasuie</a>
            <span>|</span>
            <img src='https://api.iowen.cn/favicon/github.com.png' />
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/kasuie'>Github</a>
            <span>|</span>
            <a href="/@manage">管理</a>
        `;
    footer = true;
  }
};

const interval = setInterval(() => {
  renderFooter();
  if (footer) {
    clearInterval(interval);
  }
}, 200);
