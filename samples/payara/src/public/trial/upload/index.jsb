function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
		
	var params = util.newHashMap();
	if (session.method() == 'POST') {
		params = webd.postQueryMap(session);
	} else if (session.method() == 'GET') {
		params = webd.getQueryMap(session);
	}
	var name = webd.stringParam(params, 'name', '');
	var location = webd.stringParam(params, 'location', '');
	var interest = webd.stringParam(params, 'interest', '');
	if (name.length() == 0) {
		name = pkg('jsb.tool').uniqid();
	}
	
	if (session.method() == 'POST') {
		if (session.hasFile('file')) {
			session.saveFile('file', '/tmp/' + name + '.txt');
		}
	}
				
	var args = util.newHashMap();
	var output = util.newHashMap();
	args.put('name', name);
	args.put('location', location);
	args.put('interest', interest);
	args.put('method', session.method());
	args.put('sessionId', session.sessionId());
	
	webd.theme(session, output, '/trial/upload/index.vm', args);
	
	data.output(output);
}