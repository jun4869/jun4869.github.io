puts '---数値を入力してください---'
i = gets.to_i

begin
  puts 10 / i
rescue => ex
  puts 'error!'
  puts ex.message
  puts ex.class
ensure
  puts 'end'
end