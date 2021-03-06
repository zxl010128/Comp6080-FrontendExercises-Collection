## Exercise12 - Simple NodeJS script

### Writing the code

A javascript file that can be run with `node` has been created in `range.js`. The program must be completed by you. The program must read in a text file (one of `data1.txt`, `data2.txt`, or `data3.txt`) which contains integers on some of the lines. The program will determine the lowest and highest valued number, and print out the "range" (i.e. difference between max and min) as per the output below:
```txt
The range is 421.
```

Ensure your code works for all 3 data files. You must not import any libraries. Try and write it as standard C/python style as you can, don't try and overcomplicate things on the first run.

You can assume the first two lines of code don't need to be fully understood, but if you're familiar with python they should generally make sense.

```js
fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');

const lines = data.split("\n");

let min = 99999999999;
let max = -99999999999;

for (const line of lines) {
  if (line != '') {
  	const number = parseInt(line);
  	if (min > number) {
  		min = number;
  	}
  	if (max < number) {
  		max = number;
  	}
  }
}

console.log('The range is ' + (max - min));
```

### Optimisations

(Optional) What improvements can we make to our code to make it more concise? Or employ other strategies discussed in lectures?

```js
fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');

const lines = data.split("\n").filter(l => l !== '').map(l => parseInt(l));
console.log(`The range is ${Math.max(...lines) - Math.min(...lines)}`);
```

> Key things that have been changed are
>  * Usage of filter to remove empty lines from input data
>  * Usage of map to transform data from string to integer
>  * Use of back quotes to add for easy interpolation and avoid the use of `+` concatenation
>  * I'm sure there are many more
> Things that might need discussion are:
>  * How you can chain the map and the filter
>  * How map and filter are passed in functions
>  * The spread operator being used on lines to turn it from a single argument of a list, to a list of arguments that are just an integer each
