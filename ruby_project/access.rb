class User
  def initialize(name)
    @name = name
  end

  def say
    hello
  end

  private
    def hello
      puts "Hello! I am #{@name}."
    end
end

user = User.new('Katahira')
# user.hello
user.say