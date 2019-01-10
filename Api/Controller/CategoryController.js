var Category = require('../Modal/Category');

exports.list_all_Category = function(req, res) {
    Category.getAllCategory(function(err, Category) {
        console.log('---=-----Category controller-------')
        if (err)
            res.send(err);
        console.log('res', Category);
        res.send(Category);
    });
};

