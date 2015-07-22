class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user
  has_many :votes, as: :voteable, dependent: :destroy
  has_many :liked_users, through: :votes, source: :user

  def as_json(options = {})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end
end
