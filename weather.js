
var request= require('request')
let key='914349766b66114517bfb3835de8ce77'
module.exports=function(location, callback){ // we can use this function so that we can import ans use this fun anywhere so we are exporting 
var loc=location

    let api= `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${key}&units=metric`

request({
    url:api,
    json:true
},function(error,response,body){
    if(error){
        console.log('something went wrong');
    }else{
        console.log(body);
        callback(`Its ${body.main.temp} max ${body.main.temp_max} in ${body.name}`);
        //console.log(`Its ${body.main.temp_max} in ${body.name}`);
        callback(`Its ${body.main.pressure} in ${body.name}`);
        callback(`Its ${body.main.humidity} in ${body.name}`);

    }
})
}