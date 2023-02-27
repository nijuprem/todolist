
const TodoLists = require('../models/todo');

module.exports.home = function (req, res) {
    TodoLists.find({}, function (err, todo) {
        if (err) {
            console.log('error in fetching data');
            return
        }

        return res.render('home', {
            title: "Home",
            todoList: todo

        })
    })
}


function DateValue(dueD) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'] // static value for implementing month value

    newdate = '';
    let monapp = '';
    // checking months 

    for (let i=0; i<months.length; i++){
        if(dueD[1] == i){
            monapp = months[i]
        }
    }

    newdate = dueD[2] + '-' + monapp + '-' + dueD[0] // displaying date in dd-mm-yyyy format
    return newdate;
}


// function for creating toto list
module.exports.createTodo = function (req, res) {
    dueD = req.body.duedate.split('-'); // splitting date and taking month value. The split() method splits a string into an array of substrings.
    let newdate = '';
    newdate = DateValue(dueD);
    TodoLists.create({ // creating new todo and storing into DB
        desc: req.body.desc,
        category: req.body.category,
        dueD: newdate
    }, function (err, newArr) {
        if (err) {
            console.log('Oops error occoured');
            return;
        }
        return res.redirect('/')
    })
}

module.exports.deleteTodo = function (req, res) {
    del_id = req.query.id;
    TodoLists.findByIdAndDelete(del_id, function (err) {
        if (err) {
            console.log('err')
            return;
        }
    });
    return res.redirect('/');
}




