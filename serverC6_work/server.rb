require 'sinatra'
require 'httparty'

get '/' do
  redirect '/jQuery.html'
end
