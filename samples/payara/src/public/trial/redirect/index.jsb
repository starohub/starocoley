function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
		
	var args = util.newHashMap();
	var output = util.newHashMap();
	
	webd.theme(session, output, '/trial/redirect/index.vm', args);
	
	data.output(output);
}