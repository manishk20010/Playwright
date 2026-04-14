
let arr = [9,7,6,5,4,3,2,1]
let n= arr.length

for (let i = 0; i < n; i++) {
//console.log(arr)
    for (let j = 0; j < n - 1 - i; j++) {
 
        if (arr[j] < arr[j + 1]) {

            //swap//
            let temp = arr[j+1]
            arr[j+1]=arr[j]
            arr[j] = temp  
        }
       
    }
}
console.log(arr)
