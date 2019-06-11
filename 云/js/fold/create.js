//新建文件夹
create.onclick = function () {//鼠标按下的时候创建
    f_empty.style.display = 'none';//点击新建的时候，让f_empty隐藏
    let div = document.createElement('div');
    div.className = 'file-item';
    let img = document.createElement('img');
    img.src = 'img/folder-b.png';
    let span = document.createElement('span');
    span.className = 'folder-name';
    span.innerHTML = '';
    let input = document.createElement('input');
    input.className = 'editor';
    let i = document.createElement('i');
    div.append(img);
    div.append(span);
    div.append(input);
    div.append(i);
    folders.appendChild(div);
    // console.log(folders)

    // folder_name.innerHTML = '';
    input.style.display = 'block';
    input.value = '新建文件夹';
    input.select();

    input.onblur = function () {//失焦的时候创建完成
        input.style.display = 'none';
        let v = this.value;
        let ary = getChild(globalId);
        let cm = ary.some(ele => ele.title === v);
        let id = +new Date;
        if (!cm) {
            data[id] = {
                id,
                pid: globalId,
                title: v,
                checked: false
            };
            span.innerHTML = v;
        } else {
            let num = 0;
            let v2 = v;
            while (cm) {
                v2 = v2.replace(/\(\d+\)/, '') + '(' + (++num) + ')';
                cm = ary.some(ele => ele.title === v2);
            }
            data[id] = {
                id,
                pid: globalId,
                title: v2,
                checked: false
            };
            span.innerHTML = v2;
        }
        console.log(data);
        render(globalId);
        renderTree(0);
        fullbox('新建文件夹成功');
    }
}

// create.onmouseup = function () {//鼠标抬起的时候命名
    // const editor = folders.lastElementChild.getElementsByClassName('editor')[0];
    // const folder_name = folders.lastElementChild.getElementsByClassName('folder-name')[0];
    // console.log(folder_name)
    // folder_name.innerHTML = '';
    // editor.style.display = 'block';
    // editor.value = '新建文件夹';
    // editor.select();


    // crash();
    // console.log(ary)
// }