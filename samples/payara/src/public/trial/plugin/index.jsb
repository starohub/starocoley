function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
	
	var params = webd.getQueryMap(session);
	var name = webd.stringParam(params, 'name', 'John');
	
	var trial = mod("com.starohub.trial.plugin").pkg('trial');
	
	var args = util.newHashMap();
	args.put('name', name);
	args.put('message', trial.trial());
	var output = util.newHashMap();
	
	webd.theme(session, output, '/trial/plugin/plugin.vm', args);
	
	data.output(output);
}