require 'sinatra'
require 'httparty'

get '/' do
  redirect '/index.html'
end
