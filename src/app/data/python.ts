export default {
  meta: {
    label: 'Python',
    syntax: 'py',
  },
  data: {
    cli: {
      showVersion: 'python --version',
      runningAFile: '$ python foo.py',
      repl: '$ python',
      inlineExecution: `$ python -c 'print("hi!")'`,
    },
    basics: {
      helloWorld: `# $ cat hello.py
print ("Hello World!");

# $ python3 hello.py`,
    },
    commments: {
      singleLine: '	# comment',
      multiLine: `'''comment line
another line'''`,
    },
    variables: {
      locals: `x = 1
y, z = 2, 3`,
      constants: `PI = 3.14
PI += 1
print(PI)
# 4.140000000000001
# Not enforced`,
      parallelAssigement: `x, y, z = 1, 2, 3`,
      swap: `x, y = y, x`,
      increments: `x += 1
y -= 1`,
    },
    executionControl: {
      if: `if 0 == n:
  print('no hits')
elif 1 == n:
  print('one hit')
else:
  print(str(n) + ' hits')`,
      switch: `# N/A`,
      while: `while i < 100:
  i += 1`,
      for: `for i in range(1, 11):
  print(i)`,
      break: `for i in range(30, 50):
  if i % 7 == 0:
    print('first multiple: ' + str(i))
    break

# first multiple: 35`,
      continue: `for i in range(30, 35):
  if i % 2 == 0:
    continue
  print('odd:' + str(i))

# odd:31
# odd:33`,
    },
  },
};
