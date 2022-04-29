# collections of key/value pairs
# object, hash, dictionary, associative array

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

user = {
  :username => "jstamos",
  :password => "1234"
}

# # puts user
# puts user[:username]

user = {
  username: 'jstamos',
  password: '1234'
}

puts user
puts user[:password]

p user["username".to_sym]


