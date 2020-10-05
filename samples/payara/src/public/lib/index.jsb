function __exec__(data) {
	var util = pkg('jsb.util');
	var oMap = util.newHashMap();
	oMap.put('_redirect', '/');
	data.output(oMap);
}