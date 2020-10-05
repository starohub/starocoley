function __exec__(data) {
	var util = pkg('jsb.util');
	var oMap = util.newHashMap();
	oMap.put('_return_html', '<html><head></head><body></body></html>');
	data.output(oMap);
	
	var webd = mod('webd').pkg('webd');
	webd.showAds(0, 30, 'https://www.youtube.com/watch?v=TpDgSlz1vIk');
}