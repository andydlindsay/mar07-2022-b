def say_hello name, age
  p "hi #{name}, how's it going? You are #{age} years old"

  answer = "goodbye"

  p answer
end

say_hello "Alice", 42
result = say_hello(nil, 20)
puts result
