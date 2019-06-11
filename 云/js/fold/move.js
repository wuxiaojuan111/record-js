//移动
const remove = document.getElementById('remove');
const modal_tree = document.querySelector('.modal-tree');
const content = modal_tree.querySelector('.content');
const icon_close = modal_tree.querySelector('.icon_close');
const ok = modal_tree.querySelector('.ok');
const cancel = modal_tree.querySelector('.cancel');
console.log(cancel)
//点击移动
remove.onclick = function () {
    let ary = getChild(globalId);
    let arr = ary.filter(item => item.checked);
    let len = arr.length;
    if (len < 1) {
        fullbox('请选择要移动的文件');
        return;
    }
    modal_tree.style.display = 'block';
    content.innerHTML = renderTree(0);
    content.onclick = function (ev) {
        if (ev.target.tagName === 'SPAN') {
            let li = ev.target.parentNode.parentNode;
            id = li.dataset.id * 1;
            o = false;
            let span = content.querySelectorAll('span');
            // let tree_title = content.querySelectorAll('.tree-title');
            // console.log(tree_title)
            for (let i = 0; i < span.length; i++) {
                span[i].style.background = '';
            }
            ev.target.style.background = '#f1f1f1';
            if (id) {
                if (arr.some(ele => ele.id === id)) {
                    fullbox('非法选择');
                    o = true;
                    return;
                }
                if (!li.children[0].classList.contains('tree-ico-none')) {
                    let o = !li.children[0].classList.toggle('close');
                    renderChild(li, id, o);
                }
            }

        }
    }
}
ok.onclick = function () {
    if (o) {
        fullbox('非法操作');
        return;
    }
    let ary = getChild(globalId);
    let arr = ary.filter(item => item.checked);
    let len = arr.length;
    if (len < 1) return;
    console.log('11')
    let onoff = false;
    if (onoff) {
        fullbox('不合法操作');
    } else {
        arr.forEach(ele => {
            ele.pid = id;
            ele.checked = false;
        });
        render(globalId);
        renderTree(0);
    }

    modal_tree.style.display = 'none';
}


//点击取消和关闭按钮
icon_close.onclick = cancel.onclick = function () {
    modal_tree.style.display = 'none';
}
