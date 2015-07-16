class Vote < ActiveRecord::Base
  belongs_to :user
  belongs_to :voteable, polymorphic: true
  validates_uniqueness_of :voteable_id, scope: :user_id
end
