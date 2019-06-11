//面包屑
let { getParent, getParents } = tools;

function renderBreadNav() {
    let html = '';
    let ary = getParents(globalId);

    ary.forEach((item, i, all) => {
        if (i != all.length - 1) {
            html += `<a data-id=${item.id} href="javascript:;">${item.title}</a>`
        } else {
            html += `<span>${item.title}</span>`;
        }
    });
    // console.log(ary)
    breadNav.innerHTML = html;
}
//点击面包屑
breadNav.onclick = function (ev) {
    if (ev.target.tagName === 'A') {
        let ary = getChild(globalId);
        ary.forEach(item => item.checked = false);
        render(ev.target.getAttribute('data-id'));
        renderBreadNav();
        // debugger;
        console.log(ary)
    }
}

renderBreadNav();
