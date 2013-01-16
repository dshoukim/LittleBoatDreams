module.exports = function(app, express){
	app.configure(function(){
	  //app.set('port', process.env.PORT || 3000);
	  	app.set('views', app.root + 'app/server/views');
	  	app.set('view engine', 'jade');
	  	app.set('view options', {doctype:"html", pretty: true})
	  	app.use(express.bodyParser());
		app.use(express.cookieParser());
		app.use(express.session({secret:'super-duper-secret-secret'}));
	  	app.use(express.methodOverride());
		app.use(require('stylus').middleware({src: app.root + '/app/public'}));
	  	app.use(express.static(app.root+'/app/public'));
	});	
}