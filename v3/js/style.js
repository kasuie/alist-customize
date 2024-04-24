/*
 * @Author: kasuie
 * @Date: 2024-04-24 15:35:59
 * @LastEditors: kasuie
 * @LastEditTime: 2024-04-24 17:14:16
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

const onCreateElement = (tag, attrs) => {
  const dom = document.createElement(tag);
  if (attrs && typeof attrs == "object") {
    for (const key in attrs) {
      if (Object.hasOwnProperty.call(attrs, key)) {
        dom.setAttribute(key, attrs[key]);
      }
    }
  }
  return dom;
};

const renderFooter = (data) => {
  const target = document.querySelector(".footer > div");
  if (target) {
    target.innerHTML = "";
    if (data?.length) {
      for (let index = 0; index < data.length; index++) {
        const { url: href, text, icon, target: aTarget } = data[index];
        const aDom = onCreateElement("a", { target: aTarget || "_self", href });
        const ImgDom = icon
          ? onCreateElement("img", {
              src: `https://api.iowen.cn/favicon/${new URL(url).host}.png`,
            })
          : null;
        if (!index) {
          target.innerHTML = ImgDom
            ? target.innerHTML + ImgDom + aDom
            : target.innerHTML + aDom;
        } else {
          target.innerHTML = ImgDom
            ? "<span>|</span>" + target.innerHTML + ImgDom + aDom
            : "<span>|</span>" + target.innerHTML + aDom;
        }
      }
    }
    footer = true;
  }
};

const init = () => {
  const footerDataDom = document.querySelector("#footer-data");
  if (footerDataDom) {
    onPatchStyle(footerStyle);
    let footerData = JSON.parse(
      document.querySelector("#footer-data").innerText
    );
    const interval = setInterval(() => {
      if (footer) clearInterval(interval);
      renderFooter(footerData);
    }, 300);
  }
};

init();
