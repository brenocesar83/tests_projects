def remove_text(text, markers)
  indexes = markers.map { |m| text.index(m) }.compact
  return text.strip if indexes.empty?

  text[0...indexes.min].strip
end

Given('a string {string}') do |input|
  @input = input
  puts "[STEP] String recebida: #{@input}"
end

Given(/^os marcadores (.+)$/) do |markers|
  @markers = markers.gsub(/[\[\]\"]/, '').split(',').map(&:strip)
  puts "[STEP] Marcadores: #{@markers}"
end

When('eu processar a string') do
  puts "[STEP] Processando string..."
  @result = remove_text(@input, @markers)
  puts "[DEBUG] Resultado intermediário: #{@result}"
end

Then('o texto resultante deve ser {string}') do |expected|
  puts "[STEP] Validando resultado esperado"
  puts "[EXPECTED] #{expected}"
  puts "[ACTUAL] #{@result}"

  raise "Erro: #{@result}" unless @result == expected
end