//删除文件
const del = document.getElementById('del');
const tanbox = document.getElementById('tanbox');
const close_ico = document.querySelector('.close-ico');
const conf_btn = document.querySelectorAll('.conf-btn a');
console.log(tanbox)
del.onclick = function () {
    let ary = getChild(globalId);
    let len = ary.filter(ele => ele.checked).length;
    if (len <= 0) {
        fullbox('请选择删除文件');
    } else {
        tanbox.style.display = 'block';
    }

    conf_btn[0].onclick = function () {
        ary.forEach(element => {
            if (element.checked) {
                delete data[element.id];
                element.checked = false;
            }
            console.log(element)
        });
        render(globalId);
        renderTree(0);
        tanbox.style.display = 'none';
        checkedAll.className = '';
        console.log(ary)
    }
    conf_btn[1].onclick = close_ico.onclick = function () {
        tanbox.style.display = 'none';
    }



}