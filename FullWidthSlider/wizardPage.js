function getSettings(){
	var obj = {
		'ads-enabled': document.all['radio-ads-on'].checked,
		'analytics-enabled': document.all['radio-track-on'].checked,
		'track-enabled': document.all['radio-track-on'].checked
	};
	
	if(document.all['radio-soc-on'].checked){
		obj['facebook-check'] = true;
		obj['google-check'] = true;
		obj['vkontakte-check'] = true;
	}else{
		obj['facebook-check'] = false;
		obj['google-check'] = false;
		obj['vkontakte-check'] = false;
	}
	
	return obj;
}

var onclickHandler = function(){
	var settings = getSettings();
	alert('Ready');
	//window.close();
};

document.all.save1.onclick = onclickHandler;
document.all.save2.onclick = onclickHandler;

/*safari.self.addEventListener("message", function(messageEvent){
	var data = messageEvent.message;
	
	switch (messageEvent.name) {
		case "getWizardSettings":
			var 	locNodes = document.querySelectorAll('[data-l10n-id]'),
						key;
						
			for(var i = 0, len = locNodes.length; i < len; i++ ){
				key = locNodes[i].dataset.l10nId;
				if (data[key]) {
					locNodes[i].textContent = data[key];
				}
			}
		break;
	}
}, false);

safari.self.tab.dispatchMessage("getWizardSettings");*/
