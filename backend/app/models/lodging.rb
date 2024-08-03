class Lodging < ActiveRecord::Base
  belongs_to :trip

  class << self
    def with_duration
      select("lodgings.*, CAST((JULIANDAY(check_out) - JULIANDAY(check_in)) AS INTEGER)
      AS duration_days")
        .order(duration_days: :desc)
    end

    def longest_stay
      with_duration.first
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
        longest_stay: longest_stay,
        most_expensive_stay: most_expensive_stay,
        least_expensive_stay: least_expensive_stay,
      }
    end
  end
end
