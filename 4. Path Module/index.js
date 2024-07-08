import { copyFileSync } from "fs";
import path from "path";

// console.log(path.basename("c:\\nodejs\\app.js","".js));
// console.log(path.dirname("c:\\nodejs\\app.js",".js"));
// console.log(path.extname("c:\\nodejs\\app.js"));

// console.log(path.join("c:","harsh","courses","redux"));
// // GO UP A LEVEL
// console.log(path.join("c:","harsh","courses","redux",".."));


// NORMLIZE


// PARSE
console.log(path.parse("c:\\nodejs\\app.js"));
// console.log(path.parse("c:\\nodejs\\app.js").base);
// console.log(path.parse("c:\\nodejs\\app.js").dirname);
// console.log(path.parse("c:\\nodejs\\app.js").ext);