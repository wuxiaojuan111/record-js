const tree_menu = document.getElementsByClassName('tree-menu')[0];
// console.log(tree_menu);
// let { getChild } = tools;
//左边树形菜单
renderTree(0);
function renderTree(num) {
    // let html = '';
    let html = `<ul>
        <li>
            <div class="tree-title tree-ico open">
                <span><i></i>${data[num].title}</span>
            </div>
        </li>
    `;
    let ary = getChild(num);
    if (ary.length) {
        html += `<ul>
        ${
            ary.map(ele => {
                let sclass = getChild(ele.id).length ? 'tree-title tree-ico close' : 'tree-title tree-ico-none';
                return (
                    `<li data-id="${ele.id}">
                        <div class="${sclass}">
                            <span><i></i>${ele.title}</span>
                        </div>
                    </li>`
                )
            }).join('')
            }
    </ul > `;
    }
    html += `</ul >`;
    tree_menu.innerHTML = html;
    return html;
}
tree_menu.onclick = function (ev) {
    if (ev.target.tagName === 'SPAN') {
        let li = ev.target.parentNode.parentNode;
        let id = li.dataset.id * 1;
        if (id) {
            // debugger;
            globalId = id;
            renderBreadNav();
            console.log(id)
            render(id);
            // console.log(ev.target)
            if (!li.children[0].classList.contains('tree-ico-none')) {
                let o = !li.children[0].classList.toggle('close');
                renderChild(li, id, o);
            }

        }
    }
}

//创建子级
function renderChild(li, num, onoff) {
    if (onoff) {
        li.children[0].classList.add('open');
        li.children[0].classList.remove('close');
    } else {
        li.children[0].classList.add('close');
        li.children[0].classList.remove('open');
    }

    if (li.lastElementChild.tagName !== 'UL') {
        let ary = getChild(num);
        let html = '<ul>';
        if (ary.length && onoff) {
            html += `
        ${
                ary.map(ele => {
                    let sclass = getChild(ele.id).length ? 'tree-title tree-ico close' : 'tree-title tree-ico-none';
                    return (
                        `<li data-id="${ele.id}">
                        <div class="${sclass}">
                            <span><i></i>${ele.title}</span>
                        </div>
                    </li>`
                    )
                }).join('')
                }
    </ul> `;
        }
        // html += `</ul >`;
        li.innerHTML += html;
        console.log(li)
    } else {
        let uls = li.getElementsByTagName('ul');
        if (onoff) {
            li.children[1].style.display = 'block';
        } else {
            for (let i = 0; i < uls.length; i++) {
                uls[i].style.display = 'none';
                uls[i].previousElementSibling.className = 'tree-title tree-ico close';
            }
        }
    }
}



