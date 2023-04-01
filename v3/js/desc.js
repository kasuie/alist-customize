/*
 * @Author: kasuie
 * @Date: 2023-04-01 20:53:12
 * @LastEditors: kasuie
 * @LastEditTime: 2023-04-01 22:35:55
 * @Description: 
 */
const menus = document.querySelectorAll('ul.d-kasuie-tabs > li');
const contents = document.querySelectorAll('ul.d-kasuie-main > li');
const background = document.querySelector('.link-background');
let isActiveIndex = 0;
menus.forEach((menu,index) => {
    menu.addEventListener('click',(e) => {
        background.style.transform = `translateX(${100 * index}%)`;
        menus[isActiveIndex].classList.remove('d-kasuie-tab-is-active');
        e?.currentTarget.classList.add('d-kasuie-tab-is-active');
        index < contents?.length && contents[index].classList.add('d-kasuie-main-is-active');
        isActiveIndex < contents?.length && contents[isActiveIndex].classList.remove('d-kasuie-main-is-active');
        isActiveIndex = index;
    });
})