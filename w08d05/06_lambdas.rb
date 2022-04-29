# blocks, procs, lambdas

dogs = ['Snoop', 'Ranger', 'Mylo', 'Kilo', 'Diogi']

# dogs.each do |dog|
#   puts "#{dog} is a good dog!"
# end


my_block = Proc.new do |dog, index|
  puts "#{dog} is a good dog!"
end

# another_block = my_block

# my_block = lambda do |dog, index|
#   puts "#{dog} is a good dog!"
# end

dogs.each &my_block


(1..5).each &my_block
