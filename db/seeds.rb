# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'faker'
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Movie.destroy
Tvshow.destroy
Book.destroy


15.times
Movie.create(name:Faker::Movies.name, quote:Faker::Movies.quote, releasedate:Faker::Dates.releasedate)
end 

15.times
Tvshow.create(name:Faker::Tvshows.name, quote:Faker::Tvshows.quote, releasedate:Faker::Dates.releasedate)
end 

15.times
Book.create(title:Faker::Title.title, author:Faker::Authors.author, genre:Faker::Genre.genre)
end 

puts 'seeds db'
puts "#{Movie.all.size}"
puts "#{Tvshow.all.size}"
puts "#{Book.all.size}"