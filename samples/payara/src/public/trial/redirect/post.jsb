function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
	
	var params = webd.getQueryMap(session);
	var code = webd.stringParam(params, 'code', '');
	var slug = webd.stringParam(params, 'slug', '');
	
	var args = util.newHashMap();
	args.put('code', code);
	args.put('slug', slug);
	var output = util.newHashMap();
	
	webd.theme(session, output, '/trial/redirect/post.vm', args);
	
	data.output(output);
}