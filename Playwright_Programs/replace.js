//Replace some words //

let str = 'bad boy is bad'
let newStr = ''
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'b' && str[i + 1] === 'a' && str[i + 2] === 'd') {
        newStr += 'good'
        i += 2

    } else {
        newStr += str[i]
    }
}
console.log(newStr)