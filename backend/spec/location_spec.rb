RSpec.describe Location do
  let!(:location_usa) { Location.create(country: 'USA') }
  let!(:location_canada) { Location.create(country: 'Canada') }
  let!(:location_france) { Location.create(country: 'France') }

  describe '.traveled_abroad' do
    it 'returns countries outside of the USA' do
      expect(Location.traveled_abroad).to match_array(['Canada', 'France'])
    end
  end
end