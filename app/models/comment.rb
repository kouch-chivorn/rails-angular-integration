class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :votes, as: :voteable, dependent: :destroy
  has_many :liked_users, through: :votes, source: :user
  def as_json(options = {})
    super(options.merge(include: :user))
  end
end
