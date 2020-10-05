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
	
	var atw = webd.blueprint(session).artwork("com.starohub.trial.artwork");
	output.put('_return_html', atw.mergeHtml('common', 'hello.vm', null, args));
	
	data.output(output);
}