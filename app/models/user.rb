class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :votes,as: :voteable, dependent: :destroy
  has_many :liked_posts, through: :votes, source: :voteable, source_type: "Post"
  has_many :liked_comments, through: :votes, source: :voteable, source_type: "Comment"
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
end
