// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


function remove_answer(link) {
	var linkObject = $(link);

	linkObject.siblings("input[type=hidden]").val(1); // TODO : make selector more specific, along with the below hide()
  	linkObject.parent(".fields").hide();

}

function remove_question(link) {
	var linkObject = $(link);

	linkObject.siblings("input[type=hidden]").val(1); // TODO : make selector more specific, along with the below hide()
  	linkObject.parent(".field").hide();

  	// Hide the child answers
	linkObject.find(".answers:first-child").hide();

}

// function add_fields(link, association, content) {
// 	var date = new Date().getTime();
// 	var regexp = new RegExp("new_" + association, "g");
	
// 	var newAssociation = "new_" + association;

// 	var uniqueHtml = content.replace("[new_questions]", "[" + newAssociation + "]" + "[" + date + "]")

// 	$(uniqueHtml).insertBefore(link);

// 	// Change the id's as they are not unique
	
// 	var questionInput = $("#survey_questions_attributes_new_questions_question_text");
// 	var newId = questionInput.attr('id') + '_' + date;
// 	questionInput.attr('id', newId);

// 	var questionDestoryInput = $("#survey_questions_attributes_new_questions__destroy");
// 	var newId = questionDestoryInput.attr('id') + '_' + date;
// 	questionDestoryInput.attr('id', newId);

// 	var answerInput = $("#survey_questions_attributes_0_answers_attributes_new_answers_answer_text");
// 	var newId = answerInput.attr('id') + '_' + date;
// 	answerInput.attr('id', newId);

// 	var answerDestoryInput = $("#survey_questions_attributes_0_answers_attributes_new_answers__destroy");
// 	var newId = answerDestoryInput.attr('id') + '_' + date;
// 	answerDestoryInput.attr('id', newId);

// }

// this adds an attribute that is not permitted, the timestamp
function add_fields(link, association, content) {
        var new_id = new Date().getTime();
        var regexp = new RegExp("new_" + association, "g");
        $(link).parent().before(content.replace(regexp, new_id));
}