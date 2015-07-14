class AddDefaultToComments < ActiveRecord::Migration
  def change
    change_column_default :comments, :like, 0
  end
end
