
//点击全选
// console.log(checkedAll)
checkedAll.onclick = function () {
    let bool = checkedAll.classList.toggle('checked');
    // console.log(bool)
    let ary = getChild(globalId);
    ary.forEach(ele => {
        ele.checked = bool ? true : false;
    });
    render(globalId);
}