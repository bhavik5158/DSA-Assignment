//   ----------------  Q1   --------------------
let ar = [4, 5, 7, 2, 9, 5, 4, 12, 25, 3, 19]
let num = 15
let ans = []
for(let i=0; i < ar.length; i++){
    for(let j=0; j < ar.length; j++){
        if(i != j){
            (ar[i] + ar[j]) == num ? ans.push([ar[i], ar[j]].sort((a, b) => a - b)) : null

        }
    }
}
console.log(ans)


//    ---------------   Q2   -----------------
let ar1 = [3, 5, 9, 11, 2]
ar1.reverse()
console.log(ar1)


//     ---------------   Q3   ------------------  
let str1 = "Hello";
let str2 = "olleh"

function revereStr(string) {
    return (string.split('').reverse().join('')).toLowerCase()
}
if (revereStr(str1) == str2.toLowerCase()) {
    console.log('Two strings are rotation of each other')
}
else {
    console.log(`Two strings aren't rotation of each other`)
}

//    ---------------    Q4    -----------------
let str4 = 'helloworld'
for (let i = 0; i < str4.length; i++) {
    let occurence_ = 1
    for (let j = 0; j < str4.length; j++) {
        if (i != j) {
            if (str4[i] == str4[j]) {
                occurence_ += 1
                console.log(occurence_)
            }
        }
    }
    if (occurence_ == 1) {
        console.log(`${str4[i]} is the first non-repeating character.`)
        break;
    }
}


//   -----------------   Q9   ----------------------
let stack = [1,2,3,6,7]
function insertAtBtm(x1){
    if(stack.length == 0){
        stack.push(x1)
    }
    else{
        let ele = stack.pop()
        insertAtBtm(x1)
        stack.push(ele)
    }
}
function reverseStack(){
    if(stack.length > 0){
        let ele1 = stack.pop()
        reverseStack()
        insertAtBtm(ele1)
    }
}
reverseStack()
console.log(`Reversed Stack: ${stack}`)
