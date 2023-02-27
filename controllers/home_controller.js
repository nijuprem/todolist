
const TodoLists = require('../models/todo');

module.exports.home = function(req, res){
    TodoLists.find({},function(err,todo){
        if(err){
            console.log('error in fetching data');
            return
        }
        
        return res.render('home',{
            title:"Home",
            todoList:todo
           
        })
    })
}


// function for new Data
function DateValue(dueD){
    let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'] // static value for implementing month value


    newdate = '';
    let monapp = '';
    // checking months 
    if(dueD[1] == '01'){
        monapp=months[0];
    }
    else if(dueD[1] == '02'){
        monapp=months[1];
    }else if(dueD[1] == '03'){
        monapp=months[2];
    }else if(dueD[1] == '04'){
        monapp=months[3];
    }else if(dueD[1] == '04'){
        monapp=months[3];
    }else if(dueD[1] == '05'){
        monapp=months[4];
    }else if(dueD[1] == '06'){
        monapp=months[5];
    }else if(dueD[1] == '07'){
        monapp=months[6];
    }else if(dueD[1] == '08'){
        monapp=months[7];
    }else if(dueD[1] == '09'){
        monapp=months[8];
    }else if(dueD[1] == '10'){
        monapp=months[9];
    }else if(dueD[1] == '11'){
        monapp=months[10];
    }else if(dueD[1] == '12'){
        monapp=months[11];
    }
    newdate =dueD[2]+'-'+monapp+'-'+dueD[0] // displaying date in dd-mm-yyyy format
    return newdate;
}

// function for creating toto list
module.exports.createTodo = function(req,res){
    dueD =req.body.duedate.split('-'); // splitting date and taking month value
   let newdate='';
    newdate= DateValue(dueD);     
    TodoLists.create({ // creating new todo and storing into DB
        desc:req.body.desc,
        category:req.body.category,
        dueD: newdate
    },function(err,newArr){
        if(err){
            console.log('Oops error occoured');
            return;
        }
        return res.redirect('/')
    })
}
// function for deleting todo list
module.exports.deleteTodo = function(req,res){ 
    sp = req.query.id; // getting the id from ui
    newsp = sp.split(','); 
    for(let i=0;i<newsp.length;i++){ // looping over newsp  to delete all the checked value
        TodoLists.findByIdAndDelete(newsp[i],function(err){
            if(err){
                console.log('err')
                return;
            }
        })
    }
return res.redirect('/');
}