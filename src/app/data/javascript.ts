export default {
  meta: {
    label: 'JavaScript',
    syntax: 'js',
  },
  data: {
    cli: {
      showVersion: 'node --version',
      runningAFile: '$ node foo.js',
      repl: '$ node',
      inlineExecution: '$ node -e "console.log("hi!");"',
    },
    basics: {
      helloWorld: `// $ cat hello.js
console.log("Hello World");

// $ node hello.js`,
    },
    commments: {
      singleLine: '// comment',
      multiLine: `/* line
another line */`,
    },
    variables: {
      locals: `let x = 1;
let y = 2, z = 3;`,
      constants: `const PI = 3.14;
PI += 1;
console.log(PI);
// TypeError: Assignment to constant variable.`,
      parallelAssigement: `let [x, y, z] = [1, 2, 3];`,
      swap: `[x, y] = [y, x]`,
      increments: `x++;
y--;
x += 1;
y -= 1;`,
    },
    executionControl: {
      if: `if (n === 0) {
  console.log('no hits');
} else if (n === 1) {
  console.log('1 hit');
} else {
  console.log(n + ' hits');
}

// also for single line

if (n === 0) console.log('no hits');
else if (n === 1) console.log('1 hit');
else console.log(n + ' hits');
`,
      conditionalExpression: `x > 0 ? true : false`,
      nullTest: `v === null`,
      switch: `switch (n) {
  case 0:
    console.log('no hits');
    break;
  case 1:
    console.log('one hit');
    break;
  default:
    console.log(n + ' hits');
}`,
      while: `while (i < 100) {
  i += 1;
}`,
      for: `for (let i = 0; i < 10; ++i) {
  console.log(i);
}`,
      break: `for (let i = 30; i < 50; ++i) {
  if (i % 7 === 0) {
    console.log('first multiple: ' + i);
    break;
  }
}

// first multiple: 35`,
      continue: `for (let i = 30; i < 50; ++i) {
  if (i % 7 === 0) {
    continue;
  }
  console.log('not divisible: ' + i);
}

// odd:31
// odd:33`,
    },
    math: {
      compoundAssignment: `// Arithmetic:
+= -= *= /= %=

// String:
+=

// Logical:
// N/A

// Bitwise:
<<= >>= &= |= ^=
`,
    },
    strings: {
      stringType: `String`,
      singleLineliteral: `'don\\'t say "no"'
"don't say \\"no\\""
"first line\\nSecond line"
`,
      multiLineLiteral: '`first line\nsecond line`',
      variableInterpolation: `let count = 3;
let item = 'ball';
let s = \`\${count} \${item}s\`;`,
      expressionInterpolation: '`1 + 1 = ${1 + 1}`',
      concatenate: `let s = 'Hello, ' + 'World!';`,
      transformCase: `'lorem'.toUpperCase()
'LOREM'.toLowerCase()`,
      trimming: `' lorem '.trim()
' lorem'.trimLeft()
'lorem '.trimRight()`,
      padding: `'1'.padStart(2, '0'); // '01'
'1'.padEnd(2, '0'); // '10'
'1'.padEnd(2, '0').padStart(3, '0'); // '010'
`,
      lookup: `'ABC'[0] // "A"
let str = 'abcd';
str[str.length - 1] // 'd'
str[str.length - 2] // 'c'
`,
      asciiCode: `'ABC'.charCodeAt(0); // 65
String.fromCharCode(65); // 'A'
String.fromCharCode([65, 66, 67]); // 'ABC'
`,
      stringToArray: `'abcd'.split('');
Array.from('abcd');
[...'abcd'];`,
      numberFormatting: `3.141592653589793.toFixed(2); // "3.14"`,
      stringToNumber: `'value: ' + 8`,
      numberToString: `
parseInt('10'); // 10
parseInt('af', 16); // 175

parseInt('10am'); // 10
Number.parseInt('10am'); // 10

Number('10am') // NaN
Number('10') // 10

+'10am' // NaN
+'10' // 10
`,
      join: `
['do', 're', 'mi'].join(', ') // "do, re, mi"
[1,2,3].join(' ') // '1 2 3'
`,
      split: `"do, re, mi".split(', ') // ["do", "re", "mi"]`,
      length: `'lorem'.length`,
      startEndWith: `'foobar'.startsWith('foo')
'foobar'.endsWith('bar')`,
      substring: `'lorem ipsum'.substr(6, 5) // "ipsum" (by start and length)
'lorem ipsum'.substring(6, 11) // "ipsum" (by start and end)`,
      repeat: `// lodash:
_.repeat('-', 80);`,
      find: `'lorem ipsum'.indexOf('ipsum')`,
    },
  }, // the end
};
