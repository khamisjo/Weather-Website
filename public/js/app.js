const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messsage-1') // matches first element it finds
const messageTwo = document.querySelector('#message-2')

const fetchWeather = (address)=>{
    fetch('http://localhost:3000/weather?address='+address).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
             messageOne.textContent = data.error
             messageTwo.textContent=''
        }
        else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
        }
    })
})
}

//messageOne.textContent = 'From JavaScript'
weatherForm.addEventListener('submit',(e)=>{
   
    e.preventDefault() //don't refresh the browser everytime we search
    const location = search.value
    fetchWeather(location)  
})