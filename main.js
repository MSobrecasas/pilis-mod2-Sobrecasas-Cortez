window.addEventListener('load', () => {

  let val_temp = document.getElementById('valor_temp');
  let desc_temp = document.getElementById('desc_temp');
  let icon = document.getElementById('icon');
  let vel_viento = document.getElementById('vel_viento');
  let humedad = document.getElementById('humedad');
  let container_pronostico = document.getElementById('pronostico');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      let api = "742cc42f63362b2cd908a39ab24ed2f5";
      let part = "minutely,hourly";
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=es&units=metric&exclude=${part}&appid=${api}`
      console.log(url);


      fetch(url)
        .then(response => { return response.json() })
        .then(data => {
          console.log(data.current.temp)
          let temp_actual = Math.round(data.current.temp);
          val_temp.textContent = `${temp_actual} °C`;

          console.log(data.current.weather[0].description);
          let des = data.current.weather[0].description;
          desc_temp.textContent = des.toUpperCase();

          console.log(data.current.wind_speed);
          let vel = data.current.wind_speed;
          vel_viento.textContent = `Viento: a ${vel} Kh/h`

          console.log(data.current.humidity);
          let hum = data.current.humidity;
          humedad.textContent = `Humedad: ${hum} %`

          console.log(data.current.weather[0].main)
          let icon_img = data.current.weather[0].main;

          setIcono(icon, icon_img);



          cards_pronosticos(data,container_pronostico);



        })
        .catch(err => {
          console.log(err);
        })
    })
  }
});


let setIcono = (icon, icon_img) => {

  switch (icon_img) {
    case 'Thunderstorm':
      icon.src = 'assets/icons/thunder.svg'
      console.log('TORMENTA');
      break;
    case 'Drizzle':
      icon.src = 'assets/icons/rainy-2.svg'
      console.log('LLOVIZNA');
      break;
    case 'Rain':
      icon.src = 'assets/icons/rainy-7.svg'
      console.log('LLUVIA');
      break;
    case 'Snow':
      icon.src = 'assets/icons/snowy-6.svg'
      console.log('NIEVE');
      break;
    case 'Clear':
      icon.src = 'assets/icons/day.svg'
      console.log('LIMPIO');
      break;
    case 'Atmosphere':
      icon.src = 'assets/icons/weather.svg'
      console.log('ATMOSFERA');
      break;
    case 'Clouds':
      icon.src = 'assets/icons/cloudy-day-1.svg'
      console.log('NUBES');
      break;
    default:
      icon.src = 'assets/icons/cloudy-day-1.svg'
      console.log('por defecto');
  }
}

let cards_pronosticos = (data,container_pronostico) => {

  let days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
  ///////pronostico dia 1
  let pron1 = document.createElement("div");
  pron1.className += "pronostico__card";

  let dia = document.createElement("h1");
  let timestamp = data.daily[0].dt;
  let a = new Date(timestamp*1000);
  let dayOfWeek = days[a.getDay()]
  console.log(dayOfWeek);
  let texto = document.createTextNode(dayOfWeek);
  dia.appendChild(texto);
  pron1.appendChild(dia);

  let icon_div1 = document.createElement("div");
  icon_div1.className += "icon__container";

  let icon1 = document.createElement("img");
  icon1.className += "icon__img";
  let icon_img1 = data.daily[0].weather[0].main;
  setIcono(icon1, icon_img1);
  icon_div1.appendChild(icon1);
  pron1.appendChild(icon_div1);


  let min = data.daily[0].temp.min;
  let max = data.daily[0].temp.max;
  let datos = document.createElement("h5");
  let newContent = document.createTextNode(`Min: ${min}°  Max: ${max}°`);
  datos.appendChild(newContent);
  pron1.appendChild(datos);


  let hum1 = data.daily[0].himidity;

 
  //pronostico dia 2
  let pron2 = document.createElement("div");
  pron2.className += "pronostico__card";

  let dia1 = document.createElement("h1");
  let timestamp1 = data.daily[1].dt;
  let b = new Date(timestamp1*1000);
  let dayOfWeek1 = days[b.getDay()]
  console.log(dayOfWeek1);
  let texto1 = document.createTextNode(dayOfWeek1);
  dia1.appendChild(texto1);
  pron2.appendChild(dia1);

  let icon_div2 = document.createElement("div");
  icon_div2.className += "icon__container";

  let icon2 = document.createElement("img");
  icon2.className += "icon__img";
  let icon_img2 = data.daily[1].weather[0].main;
  setIcono(icon2, icon_img2);
  icon_div2.appendChild(icon2);
  pron2.appendChild(icon_div2);


  let min1 = data.daily[1].temp.min;
  let max1 = data.daily[1].temp.max;
  let datos1 = document.createElement("h5");
  let newContent1 = document.createTextNode(`Min: ${min1}°  Max: ${max1}°`);
  datos1.appendChild(newContent1);
  pron2.appendChild(datos1);


  let hum2 = data.daily[1].himidity;


  ///pronostico dia3

  let pron3 = document.createElement("div");
  pron3.className += "pronostico__card";

  let dia2 = document.createElement("h1");
  let timestamp2 = data.daily[2].dt;
  let c = new Date(timestamp2*1000);
  let dayOfWeek2 = days[c.getDay()]
  console.log(dayOfWeek2);
  let texto2 = document.createTextNode(dayOfWeek2);
  dia2.appendChild(texto2);
  pron3.appendChild(dia2);

  let icon_div3 = document.createElement("div");
  icon_div3.className += "icon__container";

  let icon3 = document.createElement("img");
  icon3.className += "icon__img";
  let icon_img3 = data.daily[2].weather[0].main;
  setIcono(icon3, icon_img3);
  icon_div3.appendChild(icon3);
  pron3.appendChild(icon_div3);


  let min2 = data.daily[2].temp.min;
  let max2 = data.daily[2].temp.max;
  let datos2 = document.createElement("h5");
  let newContent2 = document.createTextNode(`Min: ${min1}°  Max: ${max1}°`);
  datos2.appendChild(newContent2);
  pron3.appendChild(datos2);


  let hum3 = data.daily[2].himidity;
  
  
  container_pronostico.appendChild(pron1);
  container_pronostico.appendChild(pron2);
  container_pronostico.appendChild(pron3);
}