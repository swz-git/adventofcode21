d=require("fs").readFileSync("./input.txt","utf8")
d.map((e=>+e));t=e[0],l=0;for(n in e){r=[e[n],e[n-1],e[n-2]].reduce(((e,t)=>e+t));r>t&&l++,t=r}console.log(l)