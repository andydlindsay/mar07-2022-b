i = 0

# loop do
#   puts "jello"

#   i += 1
#   break if i > 10
# end

# while i < 10 do 
#   puts "hello #{i}"
#   i += 1
# end

# until i > 10 do
#   puts "hello #{i}"
#   i += 1
# end

dogs = ['Snoop', 'Ranger', 'Mylo', 'Kilo', 'Diogi']

# for..of
# for dog in dogs do
#   puts "hello there #{dog}"
# end

# dogs.each do |dog|
#   puts "#{dog} is a good dog!"
# end

# filter === select
# selected_dogs = dogs.select do |dog|
#   dog.start_with? 'R'
# end

# p selected_dogs
# p dogs

15.downto(10) do |num|
  puts "hello there #{num}"
end
