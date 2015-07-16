class RemoveForeignKeyFromVotes < ActiveRecord::Migration
  def change
    remove_reference :votes, :posts
    remove_reference :votes, :users
    add_reference :votes, :voteable, polymorphic: true, index: true
  end
end
