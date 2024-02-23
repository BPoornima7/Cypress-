str ="This is porrnima"
str2 =str.split(" ")
//console.log(str2)
final=""
for(i=0;i<=str2.length-1;i++){
    
    str3=str2[i]
str4=str3.split("").reverse().join("")
//console.log(str4)
final=final+str4+" "
}
console.log(final)



function reverse(input){
    var store="";
    
    for(leti=input.length-1;i>=0;i--){

store +=input[i]
    }
    return store
}
const reversed=reverse(str)
console.log(reversed)

