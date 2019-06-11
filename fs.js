const fs = require('fs');

//读文件操作：fs.readFile/fs.readFileSync
// fs.readFile('./www/1.txt', (error, data) => { 
//     if (error) {
//         console.log(404);
//     } else { 
//         console.log(data.toString());
//     }
// });

// try {
//     let data = fs.readFileSync('./www/1.txt');
//     console.log(data.toString())
// } catch (error) { 
//     console.log(404);
// }

//写入文件操作：fs.writeFile/fs.writeFileSync
// fs.writeFile('./www/2.txt', 'wojiaosha', (error) => { 
//     if (error) {
//         console.log('失败');
//     } else { 
//         console.log('成功');
//     }
// });

// try { 
//     fs.writeFileSync('./www/3.txt', 'qwerrtt')
//     console.log('成功');
// }catch(error){ 
//     console.log('失败');
// }

//删除文件操作：fs.unlink/fs.unlinkSync
// fs.unlink('./www/3.txt', (error) => { 
//     if (error) {
//         console.log('失败');
//     } else { 
//         console.log('成功');
//     }
    
// });

try {
    fs.unlinkSync('./www/3.txt')
    console.log('成功');
} catch (error) { 
    console.log('失败');
}