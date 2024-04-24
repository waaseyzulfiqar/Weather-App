const weatherDiv = document.querySelector('.weather')

const input = document.querySelector('#input')

const form = document.querySelector('#form')

const temp = document.querySelector('.temp')

const city = document.querySelector('.city')

const humidity = document.querySelector('.humidity')

const wind = document.querySelector('.wind')

const submitBtn = document.querySelector('#submit')

const weatherIcon = document.querySelector('.weather-icon')



function data(){

    axios(`http://api.weatherapi.com/v1/current.json?key=0566935661604fc9aed81531242304&q=${input.value}`)

    .then((res)=>{
    
        console.log(res.data);
        
        temp.innerHTML = res.data.current.temp_c + '°C'
        city.innerHTML = res.data.location.name
        humidity.innerHTML = res.data.current.humidity + '%'
        wind.innerHTML = res.data.current.wind_kph + ' kph'


        if(res.data.current.condition.text == 'Mist'){

            weatherIcon.src = 'assets/mist.png'

          }else if(res.data.current.condition.text == 'Sunny'){

            weatherIcon.src = 'assets/clear.png'

          }else if(res.data.current.condition.text == 'Partly cloudy'){

            weatherIcon.src = 'assets/clouds.png'

          }else if(res.data.current.condition.text == 'Patchy light rain with thunder'){

            weatherIcon.src = 'assets/drizzle.png'

          }else if(res.data.current.condition.text == 'Overcast'){

            weatherIcon.src = 'assets/clouds.png'

          }
        

          weatherDiv.style.display = 'block'

    
    })
    .catch((err)=>{

        alert('Invalid City Name')
        console.log(err);
    })
    

}

submitBtn.addEventListener('click', function(){

    data(input);
})