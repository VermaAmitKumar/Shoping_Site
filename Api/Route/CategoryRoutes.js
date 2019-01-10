module.exports = function(app) {
    var Category = require('../Controller/CategoryController');
    // var Category = require('../controller/course_categoryController');

    /*create users /admin*/
    app.route('/user')
        .get(Category.list_all_Category)
        // .post(user.create_a_User);
};