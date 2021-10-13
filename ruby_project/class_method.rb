class User

  @@count = 0

  def initialize(name)
    @name = name
    @@count += 1
  end

  def hello
    puts "I am #{@name}. #{@@count} instance(s)."
  end

  def self.info
    puts "#{@@count} instance(s)"
  end
end

emma = User.new('Emma')
emma.hello
olivia = User.new('Olivia')
olivia = User.new('Olivia')
mary = User.new('mary')

User.info
