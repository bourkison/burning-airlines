class User < ApplicationRecord
  has_secure_password
  validates :username, :presence => true, :uniqueness => true
  has_many :reservations
  has_many :flights, :through => :reservations
end
