//渲染右边内容
const create = document.getElementById('create');
const checkedAll = document.getElementById('checkedAll');

// let { getChild } = tools;
let globalId = 0;
// console.log(sublevel(0))

// console.log(f_empty)
function render(id) {
    globalId = id * 1;
    folders.innerHTML = '';
    let ary = getChild(globalId);
    // let ary = sublevel(id);
    if (ary && ary.length) {
        f_empty.style.display = 'none';
        checkedAll.className = ary.every(e => e.checked) ? 'checked' : '';
        ary.forEach(ele => {
            // function aa() {
            let div = document.createElement('div');
            div.className = ele.checked ? 'file-item active' : 'file-item';
            div.dataset.id = ele.id;
            div.ondblclick = function () {
                // console.log(ele.id)
                let arr = getChild(ele.id);
                if (arr && arr.length) {
                    render(ele.id);
                    // console.log(arr)
                } else {
                    f_empty.style.display = 'block';
                    globalId = ele.id;
                    folders.innerHTML = '';
                }
                checkedAll.className = '';
                ary.forEach(item => item.checked = false);//双击把上层的选中清空
                console.log(ary)
                renderBreadNav();
            }
            let img = document.createElement('img');
            img.src = 'img/folder-b.png';
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = ele.title;
            // span.contentEditable = true;
            let input = document.createElement('input');
            input.className = 'editor';
            input.value = ele.title;
            let i = document.createElement('i');
            i.className = ele.checked ? 'checked' : '';
            //点击复选框选中
            i.onclick = function () {
                data[ele.id].checked = this.classList.toggle('checked');
                render(globalId);
            }
            // i.className = 'checked';
            //点击复选框选中
            // div.addEventListener('mousedown', function (ev) {
            //     if (ev.target.tagName == 'I') {
            //         // i.className = 'checked';
            //         let onoff = ev.target.classList.contains('checked');
            //         if (!onoff) {
            //             i.classList.add('checked');
            //             div.classList.add('active');
            //         } else {
            //             i.classList.remove('checked');
            //             div.classList.remove('active');
            //         }
            //     }
            //     // ev.cancelBubble = true;
            // });


            div.append(img);
            div.append(span);
            div.append(input);
            div.append(i);
            folders.appendChild(div);
        });
    } else {
        // debugger;
        console.log('进来');
        f_empty.style.display = 'block';
        checkedAll.className = '';

    }
}
render(0);

            // }
            // aa();

            //重命名
            // rename.onmousedown = function () {
            //     // console.log(1)
            //     let editor = document.querySelectorAll('.editor');
            //     let folder_name = document.querySelectorAll('.folder-name');
            //     // let iss = document.getElementsByTagName('i')[0];
            //     const is = fBox.querySelectorAll('.file-item i');
            //     for (let i = 0; i < is.length; i++) {
            //         let onf = is[i].classList.contains('checked');
            //         // console.log(is[i])
            //         if (onf) {
            //             editor[i].style.display = 'block';
            //             editor[i].value = folder_name[i].innerHTML;
            //             editor[i].select();
            //             // editor[i].focus();
            //             rename.onmouseup = function () {
            //                 editor[i].onblur = function () {//失焦的时候创建完成
            //                     editor[i].style.display = 'none';
            //                     let v = this.value;
            //                     let cm = ary.some(ele => ele.title === v);
            //                     if (!cm) {
            //                         ary.push({
            //                             id: +new Date,
            //                             pid: id,
            //                             title: v,
            //                             checked: false
            //                         });
            //                         folder_name[i].innerHTML = v;
            //                     } else {
            //                         let num = 0;
            //                         let v2 = v;
            //                         while (cm) {
            //                             v2 = v2.replace(/\(\d+\)/, '') + '(' + (++num) + ')';
            //                             cm = ary.some(ele => ele.title === v2);
            //                         }
            //                         ary.push({
            //                             id: +new Date,
            //                             pid: id,
            //                             title: v2,
            //                             checked: false
            //                         });
            //                         folder_name[i].innerHTML = v2;
            //                     }
            //                 }
            //             }

            //         }
            //     }

            // }







