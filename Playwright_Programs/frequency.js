
const str = 'asfhfhgjk'

let freq = {}
for (let i = 0; i < str.length; i++) {
    let map = str[i]
    if (freq[map]) {
        freq[map]++
    
    }else {
        freq[map] = 1
        
    }

}
console.log(freq)

// Step 2: Find max frequency
let max = 0;
let maxChar = '';

for (let key in freq) {
    
    if (freq[key] > max) {
        max = freq[key];
        maxChar = key;
    }
}

console.log("Max Frequency:", max);
console.log("Character:", maxChar);