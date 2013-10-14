json.array!(@surveys) do |survey|
  json.extract! survey, :name, :user_id
  json.url survey_url(survey, format: :json)
end
