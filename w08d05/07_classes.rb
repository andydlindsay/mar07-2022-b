class Car
  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

  # attr_reader :model
  # attr_writer :model

  attr_accessor :year, :model, :make

  # def make
  #   @make
  # end

  # def make= new_make
  #   @make = new_make
  # end
end

# const myCar = new Car
# my_car = Car.new('Toyota', 'Tercel', 1986)
my_car = Car.new 'Toyota', 'Tercel', 1986

p my_car
puts my_car.make

# my_car.make=('Ford')
my_car.make = 'Ford'
p my_car

puts my_car.model
my_car.model = 'F150'
p my_car

puts my_car.year
my_car.year = 2000
p my_car
