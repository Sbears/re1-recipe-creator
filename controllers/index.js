var indexController = {
	index: function(req, res) {
		console.log('index: ',req.session.match);
		res.render('index', 
			{ingredients: req.session.ingredients || [],
			matches: req.session.match || []}
		);
	}
};

module.exports = indexController;