# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'faker'
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Movie.destroy_all
Tvshow.destroy_all
Book.destroy_all


25.times do
Movie.create(name:Faker::Movie.title, quote:Faker::Movie.quote, releasedate:Faker::Date.between(from: '1990-09-23', to: '2022-09-25'))
end 

25.times do
Tvshow.create(name:Faker::TvShows::NewGirl.character, quote:Faker::TvShows::NewGirl.quote, releasedate:Faker::Date.between(from: '1990-09-23', to: '2022-09-25'))
end 

25.times do
Book.create(title:Faker::Book.title, author:Faker::Book.author, genre:Faker::Book.genre)
end 

puts 'seeds db'
puts "#{Movie.all.size}"
puts "#{Tvshow.all.size}"
puts "#{Book.all.size}"