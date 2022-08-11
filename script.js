$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});



$('input[type=radio]').click(function(e){
	var radioValue = $("input[name='project']:checked").val();
	var containerDescriptive = document.getElementById('container-descriptive');
	var containerPredictive = document.getElementById('container-predictive');

	var title = $('#project-category-title');

	if(radioValue == 'descriptive'){
		containerDescriptive.style.display = 'flex'
		containerPredictive.style.display = 'none';
		title.text("Descriptive Analytics Use Case");
	}else if(radioValue == 'diagnostic'){
		title.text("Diagnostic Analytics Use Case");
	}else if(radioValue == 'predictive'){
		containerPredictive.style.display = 'flex'
		containerDescriptive.style.display = 'none';
		title.text("Predictive Analytics Use Case");
	}else if(radioValue == 'prescriptive'){
		title.text("Prescriptive Analytics Use Case");
	}else if(radioValue == 'preemptive'){
		title.text("Preemptive Analytics Use Case");
	}
})

