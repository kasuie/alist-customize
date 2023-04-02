/*
 * @Author: kasuie
 * @Date: 2023-03-31 17:00:13
 * @LastEditors: kasuie
 * @LastEditTime: 2023-04-02 20:15:39
 * @Description: 
 */
let footer = false, desc = false, homeIcon = false;

const setFooter = () => {
    const target = document.querySelector(".footer > div");
    if (target) {
        target.innerHTML = "<a class='hope-anchor hope-c-iHuheP hope-c-PJLV hope-c-PJLV-idrWMwW-css' target='_blank' rel='noopener noreferrer' href='https://kasuie.cc'>© 2020 - 2023 By KASUIE</a>";
        footer = true;
    }
}
const setDesc = () => {
    const self = document.querySelector(".d-kasuie");
    const target = document.querySelector(".body.hope-c-PJLV-iiHckfM-css");
    if (target) {
        self.style.display = "unset";
        target.appendChild(self);
        desc = true;
    }
}
// const setHomeIcon = () => {
//     const homeIcon = document.querySelector("nav.nav > .hope-c-cPYwgm > li.hope-c-khZXrc");
//     if (homeIcon) {
//         const homeIconA = homeIcon.getElementsByClassName("nav-link")[0];
//         homeIconA.innerHTML = "💙";
//         homeIcon.addEventListener("click", (e) => {
//             const _homeIconA = document.querySelector("nav.nav > .hope-c-cPYwgm > li.hope-c-khZXrc > a.nav-link");
//             _homeIconA.innerHTML = "💙";
//         })
//         homeIcon = true;
//     }
// }

let interval = setInterval(() => {
    setFooter();
    setDesc();
    // setHomeIcon();
    if(footer && desc) {
        clearInterval(interval);
    }
}, 200);