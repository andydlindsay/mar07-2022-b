# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds..."

puts "creating the categories"

10.times do
  Category.create(
    name: Faker::Food.ethnic_category
  )
end

puts "retrieving the categories"

categories = Category.all

puts "creating the dishes"

50.times do
  Dish.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    category: categories.sample
  )
end

puts "all done!"
