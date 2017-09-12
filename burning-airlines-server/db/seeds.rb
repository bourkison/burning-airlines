Airplane.destroy_all

a1 = Airplane.create :name => "Qantas", :rows => '1', :cols => 'A'

a2 = Airplane.create :name => "Virgin", :rows => '2',
:cols => 'B'

a3 = Airplane.create :name => "Virgin", :rows => '2',
:cols => 'C'



Flight.destroy_all

f1 = Flight.create :flight_number => 23, :date => '3/1/18', :from => 'JFK', :to => 'SFO'

f2 = Flight.create :flight_number => 87, :date => '13/10/17', :from => 'SYD', :to => 'LAX'

f3 = Flight.create :flight_number => 97, :date => '13/11/17', :from => 'SYD', :to => 'JFK'


Reservation.destroy_all

r1 = Reservation.create :row => '1', :col => 'A'
r2 = Reservation.create :row => '2', :col => 'B'
r3 = Reservation.create :row => '2', :col => 'C'


User.destroy_all

u1 = User.create :name => 'Mina', :username => 'mina@gmail.com', :password => 'chicken', :password_confirmation => 'chicken'

u2 = User.create :name => 'Miriam', :username => 'miriam@gmail.com', :password => 'chicken', :password_confirmation => 'chicken'

u3 = User.create :name => 'Harrison', :username => 'harrison@gmail.com', :password => 'chicken', :password_confirmation => 'chicken'


################ Assosiation

a1.flights << f1
a2.flights << f2
a3.flights << f3

f1.reservations << r1
f2.reservations << r2
f3.reservations << r3

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3
