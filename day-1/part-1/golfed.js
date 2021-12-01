d=require("fs").readFileSync("./input.txt","utf8")
console.log(d.split`\n`.reduce((p,c,i,a)=>+c>+a[i-2]?+p+1:+p))