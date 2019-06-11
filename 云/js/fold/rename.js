//重命名
const rename = document.getElementById('rename');
rename.onclick = function () {
    let ary = getChild(globalId);
    let arr = ary.filter(ele => ele.checked);
    let len = arr.length;
    if (len !== 1) {
        fullbox('请选择一个文件');
    } else {
        let i = folders.querySelector('i[class="checked"]');
        // i.className = 'checked';
        let input = i.previousElementSibling;
        let span = input.previousElementSibling;
        console.log(i);
        input.style.display = 'block';
        span.style.display = 'none';
        input.select();

        input.onblur = function () {//失焦的时候
            console.log('chog')
            let v = this.value.trim();
            if (v === arr[0].title) return;
            if (!v) {
                fullbox('请输入文件名！');
                return;
            }
            let id = arr[0].id;
            //同级所有数据,并且排除选中数据
            let ary = getChild(globalId).filter(el => el.id !== id);
            let cm = ary.some(ele => ele.title === v);
            if (!cm) {
                data[id].title = v;
            } else {
                let num = 0;
                let v2 = v;
                while (cm) {
                    v2 = v2.replace(/\(\d+\)/, '') + '(' + (++num) + ')';
                    console.log(v2)
                    cm = ary.some(ele => ele.title === v2);
                }
                data[id].title = v2;
            }
            render(globalId);
            renderTree(0);
            fullbox('重命名成功！');
        }

    }
}