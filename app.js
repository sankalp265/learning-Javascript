console.log("hello world");
console.log("hello sankalp")
console.log("ram")
let a=5;
let b=7;
console.log("sum=",a*b);
let penprice=10;
let ink_price=15;
console.log(`Total price is=${penprice+ink_price} rupees`)
let age=18;
console.log(age>=18);
let c=5;
let d=5;
console.log(c==a);
console.log(c!=d);
let agee=18;
if (agee>=16){
    console.log("you can vote");
    
}
if(agee<18){
    console.log("you cannot vote")
}

let color="green";
if(color=="red"){
    console.log("STOP");
}
if(color=="yellow"){
    console.log("READY");
}
if(color=="green"){
    console.log("GO");
}
let marks=21;
if(marks>=80){
    console.log("Grade=A+")
}
else if(marks>=65){
    console.log("Grade=A")
}
else if(marks>=50){
    console.log("Grade=B+")
}
else if(marks>=33){
    console.log("Grade=B")
}

else{
    console.log("Fail")
}
console.log("hello")

let month="april";
if(month=="jan"){
   console.log("winter")
} 
else if(month=="mar"){
    console.log("summer")
}
else if(month=="june"){
    console.log("rain")
}
else{
    console.log("normal wheather")
}
let size="M"
if(size=="XL"){
    console.log("price=250 rupees")
}
else if(size=="L"){
    console.log("price=200 rupees")
}
else if(size=="M"){
    console.log("price=100 rupees")
}
else if(size=="S"){
    console.log("price=50 rupees")
}
else{
    console.log("not available")
}
let popcorn=150;
if(popcorn>=200){
    console.log("discout of 30%")
    if(popcorn>=250){
        console.log("+free 15rs.kurkure")
    }
    else{
        console.log("no free offers")
    }

    }
else{
    console.log("no discount")
}
// let s="good string";
// if((s.length[0]=="a" && s.length>3)){
//     console.log("Good");
// }
// else{
//     console.log("not")

// }
let s="good string";
if((s[0]=="a") && (s.length>3)){
    console.log("Good")
}
else{
    console.log("not")

}
// alert("something is wrong")
console.log("hello sankalp")
console.error("this is an error line")
console.warn("this is an warning msg")
// let uname=prompt("enter your name="
// console.log(uname);
// let uname=prompt("uname=")
// let surname=prompt("surname=")
// console.log(uname,surname)
// let password=prompt("make new password:")
// let newpass=password.trim()
// console.log(newpass);
let r="sAnkAlp";
console.log(r.toUpperCase());
console.log(r.toLowerCase());
let q="sankalp";
q.indexOf("a")
let p="        my name";
NEWp=(p.trim().toUpperCase());
console.log(NEWp);
let l="ilovecoding"
console.log(l.slice(5,11));
console.log(l.slice(-6));
let str="sankalp"
// console.log(str.replace("a","n"));
let msg="        help ME    "
newmsg=(msg.trim().toUpperCase());
console.log(newmsg);
let e="ApnaCollege";
console.log(e.slice(4).toUpperCase());
console.log(e.replace("l","t"))
let stu=["ram","ramu","raj","laxman"];
console.log(stu);
console.log(stu[2]);
console.log(typeof stu);
let arr=[]
console.log(arr)
let mix=[1,3.6,"sankalp"]
console.log(mix)
let fruit=["banana","mango","apple"]
console.log(fruit);
let cars=["maruti","honda","bmw"]
console.log(cars)
cars.push("tesla")
let start=["january","july","march","august"]
console.log(start)
let w=["red","green","white"]
console.log(w.indexOf("white"))
console.log(w.indexOf("blue"))
console.log(w.includes("red"))
console.log(w.includes("White"))
let pri=["red","orange","white"]
let sec=["yellow","blue","green"]
console.log(pri.concat(sec));
console.log(sec.concat(pri));
console.log(start.reverse())
let colour=["red","orange","white","yellow","blue","green"]
console.log(colour.sort())
let char=["b","e","f","a","c"]
console.log(char.sort())
let months=["jan","jul","mar","aug"]
console.log(months.splice(0,2,"july","june"))
let tech=["c","c++","html","javascript","python","java","c#","sql"]
let ary=["a","b","c"]
// console.log(arrcopy==arr);
let arrcopy=ary
console.log(arrcopy)
let numb=[1,2,3,4,5]
let newnum=numb;
let nes=[[2,5],[5,7],[8,0,6,1]]
console.log(nes)
// for (i=1;i<=5;i++){
//     console.log(i)
// }
// for (s=1;s<=15;s+=2){
//     console.log(s)
// }
// for (s=15;s>=5;s-=2){
//     console.log(s)
// }
// for(let i=2;i<=10;i+=2){
//     console.log(i)
// }
// for(let i=5;i<=50;i+=5){
//     console.log(i)
// }
// for(let i=1;i<=5;i++){
//     for(n=1;n<=3;n++){
//         console.log(n)
//     }
// }
// let y=1;
// while(y<=5){
//     console.log(y)
//     y++
// }
// for(i=1;i<=10;i++){
//     if(i==7){
//         break;
//     }
//     console.log(i)
// }
// let co=["a","b","c","d","e","f","g","h","i"]
// for(i=0;i<co.length;i++){
//     console.log(i,co[i])

// }
// let student=[["ram",45],["jam",67],["kav",76]];

//     for(let i=0;i<student.length;i++){
//         console.log(`info of student ${i+1}`)
//         for(let j=0;j<student[i].length;j++){
//             console.log(student[i][j]);

//         }
//     }
// let rangs=["red","yellow","grey","silver","gold","pink"];    
// for(rang of rangs){
//     console.log(rang)

// }
let studentinfo={
    names:"sankalp singh",
    age:24,
    marks:60,
    city:"jbp"
   
    
}
console.log(studentinfo)
// const item={
//     price:149,
//     discount:20,
//     availablein:["red","pink","green"]
// }
const info={
    sankalp:{namee:"sankalp",
            city:"patna"
    },

    ram:{namee:"ram",
        city:"pune"
    },
    ramu:{namee:"ramu",
        city:"mumbai"
    }

}
let city=[
    {name:"sankalp",
        city:"patna",
        grade:"B+"
    },
    {name:"rahul",
        city:"jabalpur",
        grade:"A+"},
    {name:"kulli",
        city:"pune",
        grade:"A"}
]

let sun={
    sankalp:{marks:67,
        city:"patna",
        grade:"B+",
        branch:"cs"
    },
    ram:{marks:77,
        city:"raipur",
        grade:"A",
        branch:"ce"
    },
    umar:{marks:85,
        city:"jabalpur",
        grade:"A+",
        branch:"me"
    }
}
let num=Math.random()
let fum=Math.floor(Math.random()*6)+1;
const abc={
    car:{name:"bmw",
        model:"rx544",
        color:"black"
    }

}
let person=[
    {name:"jon",
    age:25,
    city:"los vegas"    }
]
let ar=[1,2,3,4,5,6,2,3]
let nu=2
for(let i=0;i<ar.length;i++){
    if(ar[i]==nu){
        ar.splice(i,+1)
    }
}
console.log(ar)

let number=287152
let sum=0

let copy=number
while(copy>0){
    digit=copy%10
    sum+=digit
    copy=Math.floor(copy/10)
}
console.log(sum)
let numbers=287152

let ari=[10,3,5,9,6,4,7]
let largest=0
for(i=0;i<=ari.length;i++){
    if(largest<ari[i]){
        largest=ari[i]
    }
}
console.log(largest)
function voteage(){
    let age=16;
    if(age>=18){
        console.log("you can vote")
    }
    else{
        console.log("you cannot vote")
    }
};
voteage();

function poem(){
    console.log("twinkle twinkle littel star  how i wonder what you are")
};
poem();
poem();

function dice(){
    let dice=Math.random()
    // for(let i=0;i<=points.length;i++){   
    console.log(Math.floor(Math.random()*6+1))
  
}
dice();
dice();

function studinfo(name,marks){
    console.log(`student name=${name},and marks=${marks}`)
};
studinfo("sankalp",52);

function avg(a,b,c){
    let cal=(a+b+c)/3
    console.log(cal)
}
avg(2,4,6)

function table(a){
    for(i=1;i<=10;i++){
        console.log(a,"X",i,"=",a*i)
    }
}
table(15);

function fullsum(n){
    let sum=0;
    for(i=1;i<=n;i++){
        sum=sum+=i
    }
    return(sum)
}
console.log(fullsum(10))

let array=["my","name","is","sankalp","singh"]
function concat(array){
    let sum="";
    for(let i=0;i<array.length;i++){
        sum+=array[i];

    }
    return sum;
}
let fun=function(a,b){
    return a*b
}
console.log(fun(2,4));
let fun2=function(){
    return "sankalp"
}
console.log(fun2())

function multiplehel(func,count){
    for(i=1;i<=count;i++){
        func();
    }
}
let hel=function(){
    console.log("hello")
}
multiplehel(hel,50)

let light="yellow"
if(light=="red"){
    console.log("stop")
}
else if(light=="yellow"){
    console.log("go slowly")
}
else if(light=="green"){
    console.log("go")
}
else{
    console.log("light is broken")
}
a=["jan","july","march","aug"]   

let stuin=[
    {
        class:"first",
        subject:"maths",
        name:"ram"
    },
    {
        class:"second",
        subject:"science",
        name:"rakesh"},
    {
        class:"third",
        subject:"hindi",
        name:"raman"
    }
]
console.log(stuin)
function dice(){
    let dice=Math.random()
    console.log(Math.floor(Math.random()*6))+1
}
dice()

// let stri="abcdabcdefgggh"
// function unique(stri){
//     for(i=0;i<stri.length;i++){
//         let char=stri[i];
//         if(ans.indexOf(char)==-1)
//             ans+=char
//         ans==char

//     }
//     return ans;
   
 
// }
// unique(stri);


// unique();
let arri = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]; 
let nums = 5; 
function getelement(arri,nums){
    for(let i=0;i<arri.length;i++){
        if(arri[i]>nums){
            console.log(arri[i])
        }
    }

}
getelement(arri,nums)



let country = ["Australia", "Germany", "United States of America"]; 
    
     
function longestName(country) { 
let ansIdx = 0; 
for (let i = 0; i < country.length; i++) { 
    let currLen = country[i].length; 
    let ansLen = country[ansIdx].length; 
if (currLen > ansLen) { 
   ansIdx = i; 
} 
} 
return country[ansIdx]; 
} 
console.log(longestName(country));

// let st="apnacollegesankalpka";
// function countvowel(st){
//     let count=0;
//     for(let i=0;i<st.length;i++){
//         if(
//             st.charat=="a"
//             st.charat=="e"
//             st.charat=="i"
//             st.charat=="o"
//             st.charat=="u"
//         )
//         {
//             count++
//         }
//     }
//     return count;
// }
function ran(){
    Math.random();
    console.log(Math.ceil( Math.random()*100))
}
ran();
// parseInt("enter the num:")
let n="ocalizatio"
if(n){
    console.log("l",n,"n")
}

let strr="good string"
if(strr[0]=="a" && strr.length>3){
    console.log("good")
}
else{console.log("not")}

let num1=32;
let num2=4782;
if(num1%10==num2%10){
    console.log("same number",num1%10)
}
else{console.log("not same number")}

a=40;
b=43;
c=47;
if(a>b){
    if(a>c){
        console.log("a is greater")

    }
    else{console.log("c is grater")}

}
else{
    if(b>c){
        console.log("b is grater")
    
    }
    else{
        console.log("c is greter")
    }
}
let u=[7,9,0,-2]
console.log(u.slice(0,3))
let v=[7,9,0,-2]
console.log(v.slice(1,4))
// let g=prompt("enter a string:")
// if(g==0){
//     console.log("empty string")
// }
// else{console.log("string is not empty")}

let Character="sankalp"
idx=5;
if(Character[idx]==Character[idx].toLowerCase()){
    console.log("lower")
}
else{console.log("not lower")}

let we="         sankalp    "
console.log(we.trim());
    
let t=["ram","shiv","raman"]
let item="shiv";
if(t.indexOf(item)!=-1){
    console.log("present")
}
else{console.log("not present")}
const student={
    na:"sankalp",
    age:25,
    eng:66,
    hindi:69,
    maths:78,
    science:98,
    avgmarks(){
        let avg=(this.eng+this.hindi+this.maths+this.science)/4;
        console.log(avg)

    }
    
}
const multipal=(a,b)=>{
    console.log(a*b);

};
multipal(5,7)

// console.log("hy there")
// setTimeout(()=>{
//     console.log("apna college")
// },4000)
// console.log("welcome to")

const squ=(j)=>{
    console.log(j**2)
};

squ(7);
// console.log("hi")
// let id=setInterval(()=>{
//     console.log("Hello sankalp")
// },2000);
// setTimeout(()=>{
//     clearInterval(id)
// },10000)

const arrayAverage=((arrio)=>{
    let total=0;
    for(let num of arrio){
        total+=num;

        }
        return total/arrio.length
})
let arrio=[1,2,3,2,6,7,5];
console.log(arrayAverage(arrio))

let isEven=((a)=>{
    if(a%2==0){
        return "even"
    }
    else{
        return "not even"
    }
});
console.log(isEven(7990))
let ap=[..."hello"]
console.log(ap)


for(j=1;j<=5;j++){
    console.log(j)
}


for(i=1;i<=15;i=i+2){
    console.log(i)
}


for(i=2;i<=15;i=i+2){
    console.log(i)
}


// for(i=5;i<=50;i=i+5){
//     console.log(i)
// }

let root=["mango","banana","papaya"]
for(i=0;i<root.length;i++){
    console.log(i,root[i])
}

let jl="             sankalp";
new_jl=(jl.trim().toUpperCase());
console.log(new_jl)


// let tl="green"
// if(tl=="red"){
//     console.log("stop")
// }
// else if(tl=="yellow"){
//     console.log("go slow")
// }
// else if(tl=="green"){
//     console.log("go")
// }
// else{console.log("light is broken")}

let tl="red"
if(tl=="red"){
    console.log("stop")
    if(tl=="red"){
        console.log("stop for warning")
    }
}
else if(tl=="yellow"){
    console.log("go slow")
}
else if(tl=="green"){
    console.log("go")
}
else{console.log("light is broken")}


for(let ta=7;ta<=70;ta=ta+7){
    console.log(ta)
}

for(im=1;im<=4;im++){
    console.log(`this is ${im}`)
        for(ik=1;ik<=5;ik=ik+2){
            console.log(ik)
        }
    
}