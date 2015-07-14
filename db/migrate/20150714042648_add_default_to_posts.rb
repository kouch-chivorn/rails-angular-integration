class AddDefaultToPosts < ActiveRecord::Migration
  def change
    change_column_default :posts, :like, 0
    change_column_default :posts, :view, 0
  end
end
