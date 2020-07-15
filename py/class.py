class Foo:
  counter = 0

  def __init__(self, value = ''):
    self.value = value

  def get_value_and_counter(self):
    self.counter += 1
    return self.value + str(self.counter)

foo = Foo('Hello')
print(foo.get_value_and_counter())
print(foo.get_value_and_counter())


PI = 3.14

PI += 1

print(PI)
