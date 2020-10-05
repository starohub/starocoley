function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
	
	var params = webd.getQueryMap(session);
	var name = webd.stringParam(params, 'name', 'John');
	
	var args = util.newHashMap();
	args.put('name', name);
	var output = util.newHashMap();
	
	var dts = webd.blueprint(session).dataset("com.starohub.trial.dataset");
	var json = dts.mergeJsonObject('buyer', 'common', 'buyer.json', null, args);
	args.put('buyer', json);
	
	output.put('_return_html', dts.mergeHtml('common', 'business.vm', null, args));
	
	data.output(output);
}