# frozen_string_literal: true

Trip.destroy_all
Activity.destroy_all
Location.destroy_all
Lodging.destroy_all

puts "🌱 Seeding actvities..."
activity1 = Activity.create(name: "Sightseeing Tour", price: 50.0, date: Date.today)
activity2 = Activity.create(name: "Museum Visit", price: 20.0, date: Date.tomorrow)
activity3 = Activity.create(name: "Hiking", price: 0.0, date: Date.today + 2.days)

puts "🌱 Seeding locations..."
location1 = Location.create(country: "USA", state: "California", city: "San Francisco")
location2 = Location.create(country: "USA", state: "New York", city: "New York")
location3 = Location.create(country: "Canada", state: "Ontario", city: "Toronto")

puts "🌱 Seeding lodgings..."
lodging1 = Lodging.create(lodging_type: "AirBnB", name: "Hotel California", price_per_night: 150.0,
                          check_in: DateTime.now + 1.day, check_out: DateTime.now + 3.days)
lodging2 = Lodging.create(lodging_type: "Hotel", name: "NYC Hostel", price_per_night: 50.0,
                          check_in: DateTime.now + 2.days, check_out: DateTime.now + 5.days)
lodging3 = Lodging.create(lodging_type: "Hotel", name: "Toronto Suites", price_per_night: 120.0,
                          check_in: DateTime.now + 3.days, check_out: DateTime.now + 7.days)

puts "🌱 Seeding trips..."
Trip.create(title: "San Francisco Adventure", start_date: Date.today + 1.week,
            end_date: Date.today + 2.weeks, location_id: location1.id,
            activity_id: activity1.id, lodging_id: lodging1.id)
Trip.create(title: "New York Cultural Tour", start_date: Date.today + 2.weeks,
            end_date: Date.today + 3.weeks, location_id: location2.id,
            activity_id: activity2.id, lodging_id: lodging2.id)
Trip.create(title: "Toronto Nature Escape", start_date: Date.today + 1.month,
            end_date: Date.today + 1.month + 1.week, location_id: location3.id,
            activity_id: activity3.id, lodging_id: lodging3.id)

puts "✅ Done seeding!"
