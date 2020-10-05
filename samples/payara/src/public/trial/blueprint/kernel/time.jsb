function __exec__(data) {
	var func = data.func();
	var uri = data.input().get("uri");
	var session = data.input().get("session");
	
	var webd = mod("webd").pkg("webd");
	var util = pkg("jsb.util");
		
	var args = util.newHashMap();
	
	var krn = webd.blueprint(session).kernel("com.starohub.trial.kernel");
	args.put('time', krn.currentTime());
	
	var output = util.newHashMap();
	var atw = webd.blueprint(session).artwork("com.starohub.trial.artwork");
	output.put('_return_html', atw.mergeHtml('common', 'time.vm', null, args));
	
	data.output(output);
}