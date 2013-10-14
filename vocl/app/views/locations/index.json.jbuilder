json.array!(@locations) do |location|
  json.extract! location, :name, :address, :logo
  json.url location_url(location, format: :json)
end
