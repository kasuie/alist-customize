/*
 * @Author: kasuie
 * @Date: 2023-03-31 17:00:13
 * @LastEditors: kasuie
 * @LastEditTime: 2023-03-31 17:12:59
 * @Description: 
 */
const setFooter = () => {
    const target = document.querySelector(".footer > div");
    console.log(target);
    if (target) {
        target.innerHTML = "<a class='hope-anchor hope-c-iHuheP hope-c-PJLV hope-c-PJLV-idrWMwW-css' target='_blank' rel='noopener noreferrer' href='https://kasuie.cc'>© 2020 - 2023 By KASUIE</a>";
        clearInterval(interval);
    }
}

let interval = setInterval(() => {
    setFooter();
}, 200);