class QuestionController < ApplicationController
	
	def question_params 
    	params.require(:question).permit(:question_text)
	end

end
