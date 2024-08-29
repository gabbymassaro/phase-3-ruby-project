RSpec.describe Trip do
  describe '#total_activities_cost' do
    it 'returns the sum of the prices of all activities for a given trip' do
      trip = Trip.create(title: "Vacation", start_date: '2024-10-05', end_date: '2024-10-10')
      trip.activities.create(name: "Activity 1", price: 100.0)
      trip.activities.create(name: "Activity 2", price: 400.0)
      trip.activities.create(name: "Activity 3", price: 50.0)
      trip.activities.create(name: "Activity 1", price: 25.0)

      expect(trip.total_activities_cost).to eq(575.0)
    end

    it 'returns zero if there are no activities' do
      trip = Trip.create(title: "Vacation", start_date: '2024-10-05', end_date: '2024-10-10')

      expect(trip.total_activities_cost).to eq(0)
    end
  end

  describe '#length_of_trip' do
    it 'returns the length of a trip in days as an integer' do
      trip = Trip.create(title: "Vacation", start_date: '2024-10-05', end_date: '2024-10-10')
      expect(trip.length_of_trip).to eq(5)
    end
  end

  describe '#total_cost_of_stay' do
    it 'returns the sum of the price of a hotel stay for a trip' do
      trip = Trip.create(title: "Vacation", start_date: '2024-10-05', end_date: '2024-10-10')
      trip.lodgings.create(lodging_type: "Hotel", name: "Mariott", price_per_night: 100.00, check_in: "2024-08-29 14:45:30.123456", check_out:"2024-09-01 14:45:30.123456")

      expect(trip.total_cost_of_stay).to eq(300)
    end
  end
end
