class AddLocationIdToSurveys < ActiveRecord::Migration
  def change
    add_column :surveys, :location_id, :integer
  end
end
