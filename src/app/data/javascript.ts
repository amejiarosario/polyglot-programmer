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
  },
};
