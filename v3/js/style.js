/*
 * @Author: kasuie
 * @Date: 2024-04-24 15:35:59
 * @LastEditors: kasuie
 * @LastEditTime: 2024-04-25 21:01:06
 * @Description:
 */
let footer = false;

const footerStyle = `
  .footer {
    position: fixed;
    padding-top: 0;
    bottom: 0;
    display: flex !important;
    padding-bottom: 10px;
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

  .markdown-body li>p {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;
const onPatchStyle = (style) => {
  const styleElement = document.createElement("style");
  styleElement.textContent = style;
  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(styleElement);
};

const setCssVariable = (variable, value) => {
  console.log(variable, value);
  document.documentElement.style.setProperty(variable, value);
};

const onCreateElement = (tag, attrs) => {
  const dom = document.createElement(tag);
  if (attrs && typeof attrs == "object") {
    for (const key in attrs) {
      if (Object.hasOwnProperty.call(attrs, key) && attrs[key]) {
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
        const aDom = onCreateElement("a", { target: aTarget || null, href });
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
    let count = 0;
    const interval = setInterval(() => {
      if (footer || count > 10) clearInterval(interval);
      ++count;
      renderFooter(footerData);
    }, 300);
  }

  const setVar = (backTopDom) => {
    if (backTopDom) {
      let primary = window.getComputedStyle(backTopDom).backgroundColor;
      primary = primary?.includes("rgb")
        ? primary.replace("rgb(", "").replace(")", "")
        : null;
      if (primary) {
        const rgb = primary.split(",");
        const vars = ["--mio-primary", "--mio-primary50"];
        vars.map((v) => {
          if (v == "--mio-primary") {
            setCssVariable(`${v}-js`, primary);
          } else if (v == "--mio-primary50") {
            let primary50 = "";
            rgb.forEach((vv, index) => {
              if (index) {
                primary50 = `${primary50}, ${+vv - 10}`;
              } else {
                primary50 = `${+vv - 40}`;
              }
            });
            setCssVariable(`${v}-js`, primary50);
          }
        });
      }
    }
  };

  let flag = 0;
  const interval1 = setInterval(() => {
    const backTopDom = document.querySelector(".hope-c-PJLV-ihMpUpe-css");
    backTopDom && setVar(backTopDom);
    if (backTopDom || flag > 10) clearInterval(interval1);
    ++flag;
  }, 300);

  // const navHome = document.querySelector(".hope-c-PJLV-ibMsOCJ-css");
  // if (navHome) {
  //   navHome.innerHTML = "✨";
  // }
};

init();
