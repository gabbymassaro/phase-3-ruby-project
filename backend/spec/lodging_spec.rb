RSpec.describe Lodging do
  let!(:lodging1) { Lodging.create(lodging_type: "Hotel", name: "Mariott", price_per_night: 100.00, check_in: "2024-08-29 14:45:30.123456", check_out:"2024-09-01 14:45:30.123456") }
  let!(:lodging2) { Lodging.create(lodging_type: "Hotel", name: "Hilton", price_per_night: 100.00, check_in: "2024-07-10 14:45:30.123456", check_out:"2024-07-16 14:45:30.123456") }
  let!(:lodging3) { Lodging.create(lodging_type: "Hotel", name: "Hampton", price_per_night: 100.00, check_in: "2024-06-01 14:45:30.123456", check_out:"2024-06-02 14:45:30.123456") }

  describe '#longest_stay' do
    it 'returns the name and the amount of days between checkin/checkout of the lodge with the longest stay' do
      expect(Lodging.longest_stay).to eq(["Hilton", 6])
    end
  end
end
