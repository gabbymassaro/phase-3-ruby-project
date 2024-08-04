class Lodging < ActiveRecord::Base
  belongs_to :trip

  class << self
    def longest_stay
      lodges = Lodging.select(:name, :check_in, :check_out).map do |c|
        [c.name, (c.check_out.to_time.to_i / 86_400) - (c.check_in.to_time.to_i / 86_400)]
      end
      lodges.max_by { |_, b| b }
    end

    def all_lodgings
      all
    end

    def most_frequent_stay
      select("name, COUNT(*) as stay_count")
        .group(:name)
        .order("stay_count DESC")
        .first
    end

    def most_expensive_stay
      select(:price_per_night, :name)
        .order(price_per_night: :desc)
        .first
    end

    def least_expensive_stay
      select(:price_per_night, :price_per_night, :name)
        .order(:price_per_night, :asc)
        .first
    end

    def lodging_data
      {
        all_lodgings: all_lodgings,
        most_frequent_stay: most_frequent_stay,
        # with_duration: with_duration,
        longest_stay: longest_stay,
        most_expensive_stay: most_expensive_stay,
        least_expensive_stay: least_expensive_stay
      }
    end
  end
end
