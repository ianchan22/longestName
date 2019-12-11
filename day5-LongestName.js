
function greet(x) {
    document.write("Hello, " + names[x] + "!")
    document.write('<br>')
}

const names = ['Nicholas', 'Kevin', 'Audrey', 'KJ', 'Delilah', 'Josh', 'ian']

let i = 0;
let longestName = names[i]
while (i < names.length) {
    greet(i)
    let currentName = names[i]
    if (longestName.length < currentName.length) {
        longestName = currentName }
    i++;
}
document.write('<br>')
document.write("Longest name is: " + longestName)
document.write('<br>')

