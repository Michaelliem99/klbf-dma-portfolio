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
	var containerDiagnostic = document.getElementById('container-diagnostic');
	var containerPredictive = document.getElementById('container-predictive');

	var title = $('#project-category-title');

	if(radioValue == 'descriptive'){
		containerDescriptive.style.display = 'flex';
		containerPredictive.style.display = 'none';
		containerDiagnostic.style.display = 'none';
		title.text("Descriptive Analytics Use Case");
	}else if(radioValue == 'diagnostic'){
		containerDescriptive.style.display = 'none'
		containerPredictive.style.display = 'none';
		containerDiagnostic.style.display = 'flex';
		title.text("Diagnostic Analytics Use Case");
	}else if(radioValue == 'predictive'){
		containerDescriptive.style.display = 'none'
		containerPredictive.style.display = 'flex';
		containerDiagnostic.style.display = 'none';
		title.text("Predictive Analytics Use Case");
	}
})

