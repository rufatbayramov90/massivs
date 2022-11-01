//#region
//Maasivin ikinci elementinin deyerini deyis
/*const names = ["Rufat","Bayram","Roman"];
console.log(names[2]);
names[2] = "CLASSIFIED";
console.log(names)
//#endregion

//#region
// Massiv elementlerinin konsola cixar massiv iterasiyasindan istifade et
let arr = ["New Hope","The Empire Strikers Back","Return of the Jdi"];
for(let i=0;i<arr.length;i++){
  // console.log(`Eposide 4: ${arr[0]} Eposide 5: ${arr[1]} Eposide 6: ${arr[2]}`)
   console.log(`Eposide ${i+5}: ${arr[i]}`)
}

//#region
//5 eded daxil et en kiciyini cixar
let numbers = prompt('Vergulle bes reqem daxil et');
let numArr = numbers.split(",");
let min = +numArr[0] > +numArr[1] ? +numArr[0] : +numArr[1];
for(let i = 0 ; i<numbers.length; i++){
    if(+min > +numArr[i]){
        min = +numArr[i];
    }
}
console.log(min)
//#endregion

//#region
//Massivin sonuna ad elave et birinci adi sil
let namesArr = ["Rufat","Azer","Ibo"];
namesArr.push("Ali");
namesArr.shift();
console.log(namesArr);
//#endregion

//#region
// massivdeki verguller noqte vergulle evzlensin
let pagesString = '31,32,35,36,37';
let pagesArr = pagesString.split(",");
pagesString = pagesArr.join(";");
console.log(pagesString)
//#endregion


//#region
// ilk iki reqemi deyisenlere yazin qalanlarini massiv edin
let numsArr = '1,2,3,4,5,6,7,8,9,10';
let NumSS = numsArr.split(',');
const [fistArr,twoArr,...otherNums] = NumSS;
console.log(fistArr);
console.log(twoArr);
console.log(otherNums)
//#endregion


//#region
const myArr = [12,25,4,-32,-4,8,9,14,52,11];
console.log(Math.max(...myArr));
/#endregion


//#region
let Arrnum = [5,2,4,3,6];
let persons = [...Arrnum];
for(i=0;i<persons.length;i++){
    persons[i] *=2;
}
console.log(Arrnum);
console.log(persons) 
//#endregion


//#region
// Programlasma sobesinin  iscilerini saxlayan massiv
let employes = [
    [ 'Jaylee Macy', 'marketing' ],
  [ 'John Smith', 'management' ],
  [ 'Blossom Hartley', 'design' ],
  [ 'Austin Carpenter', 'marketing' ],
  [ 'Joan Knowles', 'development' ],
  [ 'Sally Nunez', 'management' ],
  [ 'Laurel Ward', 'development' ],
  [ 'Lark Simon', 'marketing' ],
  [ 'Jane Stone', 'management' ],
  [ 'Courtney Olson', 'development' ],
];
let development = [];
for(i=0;i<employes.length;i++){
    if(employes[i][1] =="development"){
        development.push(employes[i]);
    }
}
console.log(development);
console.log(employes)
//#endregion
*/

//#region
// menfi edeleri konsola cixar
function printNegatives(array){
    array.forEach((value)=>{
        if(value<0){
            console.log(value)
        }
    })
}
    printNegatives([2,-2,-5,4,2,5,-6])
//---------------------------------------------
    const arrNegative = ([4,12,15,-18,-19,20,-42]);
    function callss(item,index){
        if(item<0){
            console.log(`${item} menfi ededdir` )
        }
    }
    arrNegative.forEach(callss)
   
//------------------------------------------
    const positiveNum = ([4,5,-8,-2,8,1]);
    positiveNum.forEach((item,index) => {
        if(item>0){
        console.log(`${item} musbet ededdir`);
    }
    })

 //#endregion