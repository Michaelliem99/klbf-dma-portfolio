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
	if(radioValue == 'descriptive'){
		containerDescriptive.style.display = 'flex'
		containerPredictive.style.display = 'none';
	}else if(radioValue == 'diagnostic'){
	
	}else if(radioValue == 'predictive'){
		containerPredictive.style.display = 'flex'
		containerDescriptive.style.display = 'none';
	}else if(radioValue == 'prescriptive'){
	
	}else if(radioValue == 'preemptive'){
	
	}
})

