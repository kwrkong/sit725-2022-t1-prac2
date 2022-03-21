var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

var adder = function(num1,num2){
    var result = num1 + num2
    return result
}

app.get('/adder', function(req,res){
    var num1 = parseInt(req.query.num1)
    var num2 = parseInt(req.query.num2)
    var result = adder(num1,num2)
    res.send('The result is: '+result)
})

app.post('/multiplier', function(req,res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = parseInt(num1) * parseInt(num2)
    res.send('<h3>The result is '+ result + '.</h3>')
})

port = 3000
app.listen(port)
console.log('Server listening on '+port)