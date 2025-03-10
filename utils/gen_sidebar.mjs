import path from "node:path"
import fs from "node:fs"
// 文件根目录
const DIR_PATH = path.resolve();
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ["index.md", ".vitepress","node_modules",".idea", "assets"];
// 判断是否是文件夹
const isDirectory = (path) =>fs.lstatSync(path).isDirectory()
// 取差值
const intersections = (arr1, arr2) =>Array.from(new Set(arr1.filter((item) =>!new Set(arr2).has(item))))
// 把方法导出直接使用
function getList(params, path1, pathname) {
    // 存放结果    
    const res = []
    // 开始遍历params    f
    for(let file in params) {
        // 拼接目录        
        const dir = path.join(path1, params[file])
        // 判断是否是文件夹        
        const isDir = isDirectory(dir)
        if (isDir) {
            // 如果是文件夹,读取之后作为下一次递归参数            
            const files = fs.readdirSync(dir)
            res.push({ text: params[file], collapsible: true, items: getList(files, dir, `${pathname}/${params[file]}`), })
        } else {
            // 获取名字            
            const name = path.basename(params[file])
            // 排除非 md 文件            
            const suffix = path.extname(params[file])
            if (suffix !== ".md" ) {
                continue
            }
            let link=`${pathname}/${name}`;
            link=link.replace("/docs","")
            res.push({ text: name.replace(".md",""), link:link, })
        }
    } 
    //目录排序
    var resSort=res.sort(function(a,b){
        var aNum=a.text.split("-")[0];
        var bNum=b.text.split("-")[0];
        return aNum-bNum;
        
    });
    return resSort;
}


export const setSidebar = (pathname) =>{    
    console.log("11111111111");
    console.log(pathname)
    // 获取pathname的路径
    const dirPath = path.join(DIR_PATH, pathname)
    console.log(dirPath);
    // 读取pathname下的所有文件或者文件夹    
    const files = fs.readdirSync(dirPath)
    // 过滤掉    
    const items = intersections(files, WHITE_LIST)
    // getList 函数后面会讲到    
    console.log(getList(items, dirPath, pathname));
    return getList(items, dirPath, pathname)
}

