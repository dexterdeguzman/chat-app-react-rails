class Channel < ActiveRecord::Base
  has_and_belongs_to_many :users

  #Channel class_name "User", foreign_key:owner_id
end
