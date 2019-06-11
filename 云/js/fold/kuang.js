//框选碰撞
let { duang } = tools;
// console.log(duang)
let checkedNum = 0;
fBox.onmousedown = function (ev) {

    //当前点击的是file-item的时候，阻止默认行为
    if (ev.target.classList.contains('file-item') || ev.target.parentNode.classList.contains('file-item')) {
        return false;
    }

    //当点下的时候清除所有的选中
    let ary = getChild(globalId);
    ary.forEach(ele => ele.checked = false);
    // checkedAll.className = '';
    render(globalId);
    // console.log(ary)

    //创建kuang
    let kuang = document.createElement('div');
    kuang.className = 'kuang';

    // console.log(kuang)
    //存了一个按下的坐标            
    let l = ev.pageX;
    let t = ev.pageY;
    // console.log(l, t)
    let fBoxl = fBox.offsetLeft;
    let fBoxt = fBox.offsetTop + section.offsetTop;
    // console.log(fBoxl, fBoxt)
    kuang.style.cssText = 'left:' + l + 'px;top:' + t + 'px';
    fBox.append(kuang);
    // console.log(1)
    fBox.onmousemove = function (ev) {
        checkedNum = 0;
        // kuang.style.display = 'block';
        //设置left和top值
        kuang.style.left = Math.min(l - fBoxl, ev.pageX - fBoxl) + 'px';
        kuang.style.top = Math.min(t - fBoxt, ev.pageY - fBoxt) + 'px';
        //设置宽高
        kuang.style.width = Math.abs(ev.pageX - l) + 'px';
        kuang.style.height = Math.abs(ev.pageY - t) + 'px';
        const file_item = fBox.querySelectorAll('.file-item');
        file_item.forEach(ele => {
            if (duang(kuang, ele)) {
                data[ele.dataset.id].checked = true;
                checkedNum++;
                // console.log(file_item)

            } else {
                data[ele.dataset.id].checked = false;
            }
        });
        console.log(checkedNum)
        //
        if (checkedNum === file_item.length) {
            checkedAll.className = 'checked';
        } else {
            checkedAll.className = '';
        }

        render(globalId);
        // debugger;
        return false;
    }

    document.onmouseup = function () {
        kuang.remove();
        fBox.onmousemove = document.onmouseup = null;

    }
    // return false;
    // ev.cancelBubble = true;
}