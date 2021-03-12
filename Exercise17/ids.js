
const uuid = require('uuid');

const uuidList = [];

for(var i = 0; i < 30; i++){
    uuidList.push(uuid.v4());
}

uuidList.sort();

for (var i in uuidList) {
    console.log(uuidList[i]);
}

var stringList = uuidList.join().split().toString();

stringList = stringList.replace(',','');

letterCount = getFrequency(stringList);

delete letterCount[","];
delete letterCount["-"];

var sorted = Object.entries(letterCount).sort((a, b) => b[1] - a[1]);

// Print the first 5 frequency letter
for (var i = 0; i <= 4; i++) {
    process.stdout.write(sorted[i][0] + " ");
}

// Check if there are ties
for (var i = 5; i <= sorted.length; i++) {
    if (sorted[4][1] == sorted[i][1]) {
        process.stdout.write(sorted[i][0] + " ");
    } else {
        process.stdout.write("\n");
        break;
    }
}

// Function to count the frequency of the letter
function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};