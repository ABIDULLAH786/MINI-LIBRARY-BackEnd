const express  = require('express')
const cors = require('cors')
const app = new express()

const BooksRoutes = require('./routes/BookRoutes') 
const StudentsRoutes = require('./routes/StudentRoutes') 
app.use(express.json())
app.use(cors())


app.use(BooksRoutes)
app.use(StudentsRoutes)
app.use(function(req,res,next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err)
})
app.use(function(err,res,req,next){
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get('env')==='development'
    });
})

app.listen(8000, ()=>
{
    console.log("server is listening to port 8000")
})