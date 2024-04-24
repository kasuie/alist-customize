/*
 * @Author: kasuie
 * @Date: 2024-04-24 15:35:59
 * @LastEditors: kasuie
 * @LastEditTime: 2024-04-24 17:35:46
 * @Description:
 */
let footer = false;

const footerStyle = `
  .footer {
    position: fixed;
    padding-top: 0;
    bottom: 0;
    display: flex !important;
  }
  .mio-footer-main {
    font-size: 14px;
    transition: all 0.3s ease-in-out;
  }
  .mio-footer-main > img {
    width: 18px !important;
    height: 18px !important;
    border-radius: 50%;
  }

  .mio-footer-main > a:hover {
    text-decoration: underline;
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
    onPatchStyle(footerStyle);
    target.innerHTML = "";
    target.classList.add("mio-footer-main");
    if (data?.length) {
      for (let index = 0; index < data.length; index++) {
        const { url: href, text, icon, target: aTarget } = data[index];
        const aDom = onCreateElement("a", { target: aTarget || "_self", href });
        const ImgDom = icon
          ? onCreateElement("img", {
              src: `https://api.iowen.cn/favicon/${new URL(href).host}.png`,
            })
          : null;
        aDom && (aDom.innerText = text);
        if (index) {
          const split = onCreateElement("span", null);
          split.innerText = "|";
          split && target.appendChild(split);
        }
        ImgDom && target.appendChild(ImgDom);
        aDom && target.appendChild(aDom);
      }
    }
    footer = true;
  }
};

const init = () => {
  const footerDataDom = document.querySelector("#footer-data");
  if (footerDataDom) {
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
