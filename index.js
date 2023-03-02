//---------------Callback-------------------

// function calculate(x,y,callback){
//     setTimeout(()=>{
//         console.log("กำลังคำนวณ....")
//         const sum =x+y
//         callback(sum)
//     },3000) 
// }


// //ฟังก์ชั่นแบบ callback
// calculate(100,50,function(result){
//     console.log(`ผลบวก = ${result}`)
// })

// const url1="kong.dev/file1.json"
// const url2="kong.dev/file2.json"
// const url3="kong.dev/file3.json"

//เขียนโปรแกรมดาว์โหลดไฟล์ Callback
// function downloading(url,callback){
//     console.log(`กำลังโหลด ${url} `)
//     setTimeout(()=>{
//         callback(url)
//     },3000)
// }

// downloading(url1,function(result){
//     console.log(`ดาว์โหลด ${result} เรียบร้อย`)
// })


//-----------Create Promise----------------
// const url1="kong.dev/file1.json"
// const url2="kong.dev/file2.json"
// const url3="kong.dev/file3.json"
// const url4="kong.dev/file4.json"
// const url5="kong.dev/file5.json"

// const connect = true
// function downloading(url){
//     console.log(`กำลังโหลดไฟล์จาก ${url}`)
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              if(connect){
//             resolve(`โหลด ${url} เรียบร้อย`)
//         }else{
//             reject(`เกิดข้อผิดพลาด`)
//         }
//         },3000)
//     })
// }

// downloading(url1).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("จบการทำงาน")
// })
// downloading(url1).then(function(result){
//     console.log(result)
//     return downloading(url2)
// }).then(function(result){
//     console.log(result)
//     return downloading(url3)
// })

//-----------Create Async & Await----------------
const url1="kong.dev/file1.json"
const url2="kong.dev/file2.json"
const url3="kong.dev/file3.json"
const url4="kong.dev/file4.json"
const url5="kong.dev/file5.json"

const connect = true
function downloading(url){
    console.log(`กำลังโหลดไฟล์จาก ${url}`)
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
             if(connect){
            resolve(`โหลด ${url} เรียบร้อย`)
        }else{
            reject(`เกิดข้อผิดพลาด`)
        }
        },3000)
    })
}

async function start(){
    await downloading(url1)
    await downloading(url2)
    await downloading(url3)
    await downloading(url4)
    await downloading(url5)
}

start()