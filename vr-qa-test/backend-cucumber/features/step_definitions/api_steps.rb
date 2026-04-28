require 'httparty'
require 'json'

Given('que faço uma requisição para a API VR') do
  url = "https://portal.vr.com.br/api-web/comum/enumerations/VRPAT"

  puts ">> REQUEST: GET #{url}"

  @response = HTTParty.get(url)

  puts "<< RESPONSE STATUS: #{@response.code}"
  puts "<< RESPONSE BODY:"
  puts @response.body

  @json = JSON.parse(@response.body)
end

Then('o JSON deve conter a chave {string}') do |key|
  puts "[STEP] Validando presença da chave: #{key}"
  raise "Chave não encontrada" unless @json.key?(key)

  lista = @json[key]
  raise "Lista vazia" unless lista.is_a?(Array) && !lista.empty?

  sample = lista.sample

  %w[key name label].each do |campo|
    raise "Campo #{campo} ausente" unless sample.key?(campo)
  end

  puts "[INFO] Tipo aleatório: #{sample}"
end