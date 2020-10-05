function __exec__(data) {
	var util = pkg('jsb.util');
	var oMap = util.newHashMap();
	oMap.put('_redirect', '/password.yo');
	data.output(oMap);
}