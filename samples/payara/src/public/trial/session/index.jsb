function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	session.files();
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
		
	var params = util.newHashMap();
	if (session.method() == 'POST') {
		params = webd.postQueryMap(session);
	} else if (session.method() == 'GET') {
		params = webd.getQueryMap(session);
	}
	var name = webd.stringParam(params, 'name', null);
	var location = webd.stringParam(params, 'location', null);
	var interest = webd.stringParam(params, 'interest', null);

	if (name == null) {
		name = session.getData('name', '');
	}
	if (location == null) {
		location = session.getData('location', '');
	}
	if (interest == null) {
		interest = session.getData('interest', '');
	}
	
	session.setData('name', name);
	session.setData('location', location);
	session.setData('interest', interest);
				
	var args = util.newHashMap();
	var output = util.newHashMap();
	args.put('name', name);
	args.put('location', location);
	args.put('interest', interest);
	args.put('method', session.method());
	args.put('sessionId', session.sessionId());
	args.put('host', session.host());
	args.put('port', session.port() + '');
	
	webd.theme(session, output, '/trial/session/index.vm', args);
	
	data.output(output);
}