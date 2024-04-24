/*
 * @Author: kasuie
 * @Date: 2024-04-24 15:35:59
 * @LastEditors: kasuie
 * @LastEditTime: 2024-04-24 16:22:55
 * @Description:
 */
let footer = false;

const footerStyle = `
  .footer {
    position: fixed;
    padding-top: 0;
    bottom: 0;
    display: flex !important;
  
    .mio-footer-main {
      font-size: 14px;
      transition: all 0.3s ease-in-out;
  
      > img {
        width: 18px;
        height: 18px;
        border-radius: 50%;
      }
  
      > a:hover {
        text-decoration: underline;
      }
    }
  }
`;
const onPatchStyle = (style) => {
  const styleElement = document.createElement("style");
  styleElement.textContent = style;
  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(styleElement);
};

const renderFooter = () => {
  const target = document.querySelector(".footer > div");
  if (target) {
    onPatchStyle(footerStyle);
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
}, 300);
