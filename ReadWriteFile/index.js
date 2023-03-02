//Blocking (Sync) รออ่านไฟล์เสร็จก่อน ก็ทำ => จบการทำงาน
// const fs= require('fs')

// //read File input.txt
// const data = fs.readFileSync('ReadWriteFile/myFiles/input.txt','utf-8')
// console.log(data)
// console.log("จบการทำงาน")

// //WriteFile
// const outputText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
// fs.writeFileSync('ReadWriteFile/myFiles/output.txt',outputText)
// console.log("เขียนไฟล์เรียบร้อย")

//Non-Blocking
const fs= require('fs')
fs.readFile('ReadWriteFile/myFiles/input.txt','utf-8',(err,data)=>{
    if(err) return console.log("เกิดข้อผิดพลาด",err)
    const outputText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`
    fs.writeFile('ReadWriteFile/myFiles/output.txt',outputText,err=>{
        if(err) return console.log("เกิดข้อผิดพลาด",err)
        console.log("เขียนไฟล์เรียบร้อย")
    })
})

console.log("จบการทำงาน")