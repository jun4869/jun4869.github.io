class User

  def initialize(name)
    puts 'initialize!!'
    @name = name
  end

  def hello
    puts "Hello! I am #{@name}."
  end
end

user = User.new('Emma')
user.hello
olivia = User.new('Olovia')
olivia.hello