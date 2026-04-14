const str = 'apple';

let freq = {};

// Step 1: Count frequency
for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (freq[ch]) {
        freq[ch]++;
    } else {
        freq[ch] = 1;
    }
}

console.log(freq)

// Step 2: Find max frequency
let max = 0;

for (let key in freq) {
    if (freq[key] > max) {
        max = freq[key];
    }
}

// Step 3: Print maintaining order
let result = '';

for (let i = max; i >= 1; i--) {

    for (let j = 0; j < str.length; j++) {

        let ch = str[j];

        if (freq[ch] === i) {

            // ✅ FIX: print all occurrences
            for (let k = 0; k < freq[ch]; k++) {
                result += ch;
            }

            // mark visited AFTER printing
            freq[ch] = 0;
        }
    }
}

console.log(result);