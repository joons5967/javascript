const bbb = "자바스크립트";

const ccc = []; 
ccc[0] = "java"
ccc[1] = "css"
ccc[0] += "scss"
ccc[2] = ""

const mytest = ["이준성", "리액트","노드"]

for( i in mytest){ 
  if(ccc[i]){ // 0, 1
   ccc[i] += mytest[i]

  }else{ // 2
    ccc[i] = mytest[i]
  }
}







console.log(ccc)


// 콘솔로 확인하기 ( 2단 출력 /  for / `구구단 ${ccc[0]}`)
// * + - /  
const zzz = [];
zzz[0] = "2x1 = "
zzz[1] = "2x2 = "
zzz[2] = "2x3 = "
zzz[3] = "2x4 = "
zzz[4] = "2x5 = "

const www = [`${2*1}`, `${2*2}`, `${2*3}`, `${2*4}` ,`${2*5}`]

for( i in www){
  zzz[i] += www[i]
}

console.log(zzz);

for( x = 2; x < 10 ; x++ ){
  console.log(`2X${x}=${2*x}`)
}

const navi=[[1, 'com'],[2,'net']]

console.log(navi[0][1])

const gnb=[ 
  ["http://www.naver.com","네이버"],
  ["http://www.daum.net","다음"]
]

// 콘솔로 찍었을때

{/* <a href="http://www.naver.com">네이버</a> */}

//console.log(`<a href="${gnb[0][0]}">${gnb[0][1]}</a>`);
//

let mycode = "";

for( x in gnb){
   mycode +=`<a href="${gnb[x][0]}">${gnb[x][1]}</a>`

}

console.log(mycode)

const obj = {
  nm : "네이버",
  href : "http://www.naver.com"
}

const objarr = [{
  nm : "네이버",
  href : "http://www.naver.com"
},
{
  nm : "다음",
  href : "http://www.daum.com"
},
{
  nm : "구글",
  href : "http://www.google.com"
}]
let mycode2 = ""

for( x in objarr){
  mycode2 += `<a href='${objarr[x].href}'>${objarr[x].nm}</a>`
}

console.log(mycode2)

