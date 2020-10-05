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
	
	webd.theme(session, output, '/hello/hello.vm', args);
	
	data.output(output);
}