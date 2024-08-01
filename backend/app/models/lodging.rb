class Lodging < ActiveRecord::Base
  belongs_to :trip

  def self.most_frequent_stay
    all_lodgings = Lodging.all
    most_frequent = Lodging
                      .select('name, COUNT(*) as stay_count')
                      .group(:name)
                      .order('stay_count DESC')
                      .first

    {
      all_lodgings: all_lodgings,
      most_frequent_stay: most_frequent
    }
  end
end
