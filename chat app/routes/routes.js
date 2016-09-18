module.export = function(express,app){
	var router = express.Router();

	router.get('/', function(req,res,next){
		res.render('index',{title:'welcome to chat app'});
	})

	route.get('/chatroom',function(req,res,next){
		res.render('chatroom',{title:'chatApp|Chat room'});
	})

	app.use('/',router);

}