//计算folders高度
let iH = window.innerHeight;
let headH = head.offsetHeight;
let breadmenuH = document.querySelector('.breadmenu').offsetHeight;
const folders = document.querySelector('.folders');
const fullTipBox = document.querySelector('.full-tip-box');
const breadNav = document.querySelector('.bread-nav');
const f_empty = document.getElementsByClassName('f-empty')[0];


//新建运动封装
let { startMove, getChild } = tools;
function fullbox(val) {
    fullTipBox.innerHTML = val;
    startMove({
        obj: fullTipBox,
        json: { top: 0 },
        durtion: 500,
        fx: 'bounceOut',
        cb() {
            setTimeout(() => {
                startMove({
                    obj: fullTipBox,
                    json: { top: -40 },
                    durtion: 500,
                })
            }, 1000)
        }
    })
}


folders.style.height = iH - headH - breadmenuH + 'px';

