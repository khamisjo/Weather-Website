const request = require ('request')

const forecast =(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=1c35ab7e43569c861a62700b51a3f5ec&query='+latitude+','+longitude +'&units=f'
    request ({url, json:true},(error,response)=>{
        if(error){
            callback("Unable to connect to weather service",undefined)
        }
        
        else if (response.body.error){
           callback(response.body.error.info,undefined)
        }
        else{
            callback(undefined,`${response.body.current.weather_descriptions[0]}: It is currently ${response.body.current.temperature}, but it feels lile ${response.body.current.feelslike}`)
        }
        
    })
}

module.exports =forecast