// 1. Reverse a String


function reverseString(str) {
    const result = str.split('').reverse().join('')
    return result
}
console.log(reverseString('Hello Sir'))



//2. Largest number
function largest(arr) {
    return (Math.max(...arr))
}
console.log(largest([1, 2, 3, 6, 9999]))



//3. Check Palindrome

function isPalindromString(str) {
    const res = str.split('').reverse().join('')
    return res === str
}
    console.log(isPalindromString('Madam'))

      

//4.factorial

function factorial(n){

    if(n===0) return 1;
    return n *(n-1)
    
    }
     console.log(factorial(9))

// 5. Remove Duplicates from Array

  function removeDuplicate(arr){

       return [...new Set(arr)]

  }
console.log(removeDuplicate([111,222,333,111]))

//6.Find Second Largest Number

function secLargest(arr){

     const res = [...new Set(arr)].sort((a,b)=>a-b)
     return res [1]
}

console.log(secLargest([1,9,4,3,4,6]))

const map = new Map();

map.set('name', 'Manish');
map.set('age', 25);

console.log(map);