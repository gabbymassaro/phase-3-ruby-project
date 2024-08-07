class Lodging < ActiveRecord::Base
  belongs_to :trip

  def self.with_duration
    select("lodgings.*, CAST((JULIANDAY(check_out) - JULIANDAY(check_in)) AS INTEGER)
    AS duration_days")
      .order("duration_days DESC")
  end

  def self.all_lodgings
    Lodging.all
  end

  def self.most_frequent_stay
    Lodging
      .select("name, COUNT(*) as stay_count")
      .group(:name)
      .order("stay_count DESC")
      .first
  end

  def self.longest_stay
    with_duration.first
  end

  def self.most_expensive_stay
    Lodging
      .select("price_per_night, name")
      .order("price_per_night DESC")
      .first
  end

  def self.least_expensive_stay
    Lodging
      .select("price_per_night, name")
      .order("price_per_night ASC")
      .first
  end

  def self.lodging_data
    {
      all_lodgings: all_lodgings,
      most_frequent_stay: most_frequent_stay,
      longest_stay: longest_stay,
      most_expensive_stay: most_expensive_stay,
      least_expensive_stay: least_expensive_stay,
    }
  end
end
