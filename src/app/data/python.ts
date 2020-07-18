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
      conditionalExpression: `True if x > 0 else False`,
      nullTest: `v is None`,
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
    math: {
      compoundAssignment: `# Arithmetic:
+= -= *= /= //= %= **=

# String:
+= *=

# Logical:
&= |= ^=

# Bitwise:
<<= >>= &= |= ^=
`,
    },
    strings: {
      stringType: `str`,
      singleLineliteral: `'don\\'t say "no"'
"don't say \\"no\\""
"don't " 'say "no"'

"first line\\nSecond line"

# Python 2 (and Python 3):
u'lorem'
u"ipsum"
`,
      multiLineLiteral: `'''first line
second line'''

"""first line
second line"""`,
      variableInterpolation: `count = 3
item = 'ball'

# old way
'%d %ss' % (count, item)

# with format
s = "{} {}s".format(count, item)
s = '{count} {item}s'.format(**locals())

# new ways
s = f'{count} {item}s'
`,
      expressionInterpolation: `'1 + 1 = {}'.format(1 + 1)
f'1 + 1 = {1 + 1}'`,
      concatenate: `s = 'Hello, ' + 'World!'
s = 'Hello, ' 'World!'
`,
      transformCase: `'lorem'.upper()
'LOREM'.lower()`,
      trimming: `' lorem '.strip()
' lorem'.lstrip()
'lorem '.rstrip()`,
      padding: `'1'.ljust(2, '0') # '01'
'1'.rjust(2, '0') # '10'
'1'.center(3, '0') # '010'
# using format
'{:0^3}'.format(1) # '010'
'{:0<3}'.format(1) # '100
'{:0>3}'.format(1) # '001'
`,
      lookup: `'ABC'[0] # "A"
str = 'abcd'
str[-1] # 'd'
str[-2] # 'c'
`,
      asciiCode: `ord('A'); # 65
chr(65) # "A"
`,
      stringToArray: `list('abcd')`,
      numberFormatting: `'{:.2f}'.format(3.141592653589793) # '3.14'`,
      stringToNumber: `'value: ' + str(8)`,
      numberToString: `
int('10') # 10
int('af', 16) # 175

int('10am') # ValueError:
# invalid literal for int() with base 10: '10am'
`,
      join: `
', '.join(['do', 're', 'mi', 'fa']) # 'do, re, mi, fa'
' '.join([1, 2, 3]) # TypeError:
# sequence item 0: expected str instance, int found
`,
      split: `'do re  mi '.split(' ') # ['do', 're', '', 'mi', '']`,
      length: `len('lorem')`,
      startEndWith: `'foobar'.startsWith('foo')
'foobar'.endsWith('bar')`,
      substring: `'lorem ipsum'[6:11] # 'ipsum'`,
      repeat: `'-' * 80`,
      find: `'lorem ipsum'.indexOf('ipsum')`,
    },
  }, // the end
};
