var indexController = {
	index: function(req, res) {
		console.log(req.session.match)
		res.render('index', 
			{ingredients: req.session.ingredients || [],
			matches: req.session.match || []}
		);
	}
};

module.exports = indexController;