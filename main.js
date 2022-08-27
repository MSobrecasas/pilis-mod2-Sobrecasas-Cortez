window.addEventListener('load', () => {

<<<<<<< HEAD
<<<<<<< HEAD
    let val_temp = document.getElementById('valor_temp');
    let desc_temp = document.getElementById('desc_temp');
    let icon = document.getElementById('icon');
    let vel_viento = document.getElementById('vel_viento');
    let humedad = document.getElementById('humedad');
    let container_pronostico = document.getElementById('pronostico');
=======
=======
>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700
  let valorTemperatura = document.getElementById('valor_temp');
  let descripcionTemperatura = document.getElementById('desc_temp');
  let icon = document.getElementById('icon');
  let velcidadViento = document.getElementById('vel_viento');
  let humedad = document.getElementById('humedad');
  let containerPronostico = document.getElementById('pronostico');
<<<<<<< HEAD
>>>>>>> 03cd2354088494e2598bc4a298ddcb130e2c6556


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            let api = "742cc42f63362b2cd908a39ab24ed2f5";
            let part = "minutely,hourly";
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=es&units=metric&exclude=${part}&appid=${api}`
            console.log(url);

<<<<<<< HEAD

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    console.log(data.current.temp)
                    let temp_actual = Math.round(data.current.temp);
                    val_temp.textContent = `${temp_actual} °C`;

                    console.log(data.current.weather[0].description);
                    let des = data.current.weather[0].description;
                    desc_temp.textContent = des.toUpperCase();
=======
=======

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      let api = "742cc42f63362b2cd908a39ab24ed2f5";
      let part = "minutely,hourly";
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=es&units=metric&exclude=${part}&appid=${api}`
      console.log(url);


>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700
      fetch(url)
        .then(response => { return response.json() })
        .then(data => {
          console.log(data.current.temp)
          let temperaturaActual = Math.round(data.current.temp);
          valorTemperatura.textContent = `${temperaturaActual} °C`;

          console.log(data.current.weather[0].description);
          let des = data.current.weather[0].description;
          descripcionTemperatura.textContent = des.toUpperCase();

          console.log(data.current.wind_speed);
          let vel = data.current.wind_speed;
          velcidadViento.textContent = `Viento: a ${vel} Kh/h`
<<<<<<< HEAD
>>>>>>> 03cd2354088494e2598bc4a298ddcb130e2c6556
=======
>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700

          console.log(data.current.humidity);
          let hum = data.current.humidity;
          humedad.textContent = `Humedad: ${hum} %`

<<<<<<< HEAD
<<<<<<< HEAD
                    console.log(data.current.humidity);
                    let hum = data.current.humidity;
                    humedad.textContent = `Humedad: ${hum} %`

                    console.log(data.current.weather[0].main)
                    let icon_img = data.current.weather[0].main;
=======
          console.log(data.current.weather[0].main)
          let iconImg = data.current.weather[0].main;

          setIcono(icon, iconImg);
>>>>>>> 03cd2354088494e2598bc4a298ddcb130e2c6556
=======
          console.log(data.current.weather[0].main)
          let iconImg = data.current.weather[0].main;

          setIcono(icon, iconImg);

>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700


<<<<<<< HEAD

<<<<<<< HEAD
=======
          cardsPronosticos(data, containerPronostico);
>>>>>>> 03cd2354088494e2598bc4a298ddcb130e2c6556

                    cards_pronosticos(data, container_pronostico);
=======
          cardsPronosticos(data, containerPronostico);
>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700



        })
        .catch(err => {
          console.log(err);
        })
    })
  }
});


let setIcono = (icon, iconImg) => {

<<<<<<< HEAD
<<<<<<< HEAD
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

let cards_pronosticos = (data, container_pronostico) => {

    let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    ///////pronostico dia 1
    let pron1 = document.createElement("div");
    pron1.className += "pronostico__card";

    let dia = document.createElement("h1");
    let timestamp = data.daily[0].dt;
=======
=======
>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700
  switch (iconImg) {
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

let cardsPronosticos = (data, containerPronostico) => {

  let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];


  for (let i = 1; i < 4; i++) {

    let pronostico = document.createElement("div");
    pronostico.className += "pronostico__card";

    let dia = document.createElement("h1");
    let timestamp = data.daily[i].dt;
<<<<<<< HEAD
>>>>>>> 03cd2354088494e2598bc4a298ddcb130e2c6556
=======
>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700
    let a = new Date(timestamp * 1000);
    let dayOfWeek = days[a.getDay()]
    console.log(dayOfWeek);
    let texto = document.createTextNode(dayOfWeek);
    dia.appendChild(texto);
<<<<<<< HEAD
<<<<<<< HEAD
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
    let b = new Date(timestamp1 * 1000);
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
    let c = new Date(timestamp2 * 1000);
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
=======
    pronostico.appendChild(dia);

    let iconDiv = document.createElement("div");
    iconDiv.className += "icon__container";

    let icon = document.createElement("img");
    icon.className += "icon__img";
    let iconImg = data.daily[i].weather[0].main;
    setIcono(icon, iconImg);
    iconDiv.appendChild(icon);
    pronostico.appendChild(iconDiv);


    let min = data.daily[i].temp.min;
    let max = data.daily[i].temp.max;
    let datosMin = document.createElement("h5");
    let newContent = document.createTextNode(`Min: ${min}°`);
    datosMin.appendChild(newContent);
    pronostico.appendChild(datosMin);
    let datosMax = document.createElement("h5");
    let newContent1 = document.createTextNode(`Max: ${max}°`);
    datosMax.appendChild(newContent1);
    pronostico.appendChild(datosMax);


    let hum1 = data.daily[i].humidity;
    let humedad = document.createElement("h5");
    let newContentH = document.createTextNode(`Humedad: ${hum1}%`);
    humedad.appendChild(newContentH);
    pronostico.appendChild(humedad);

    containerPronostico.appendChild(pronostico);
  }


>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700
}

/*formulario */


function onclick(event) {
    event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click ...");
    console.log(event);

    const mensaje = {

        nombre: document.getElementById('nombre').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value,

    }
    console.log(mensaje);


    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(mensaje),
            headers: { "Content-type": "application/json; charset" }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            Swal.fire(
                'Mensaje enviado',
                'sucess'
            );
            cleanForm();

        })
        .catch((err) => console.log(err));

    function cleanForm() {
        let formulario = document.getElementById('formulario');
        formulario.reset();
    }

    function redirectUrl() {
        window.location.href = "https://google.com";
    }

}
let boton = document.getElementById("enviar");
<<<<<<< HEAD
boton.addEventListener("click", onclick);
=======
    pronostico.appendChild(dia);

    let iconDiv = document.createElement("div");
    iconDiv.className += "icon__container";

    let icon = document.createElement("img");
    icon.className += "icon__img";
    let iconImg = data.daily[i].weather[0].main;
    setIcono(icon, iconImg);
    iconDiv.appendChild(icon);
    pronostico.appendChild(iconDiv);


    let min = data.daily[i].temp.min;
    let max = data.daily[i].temp.max;
    let datosMin = document.createElement("h5");
    let newContent = document.createTextNode(`Min: ${min}°`);
    datosMin.appendChild(newContent);
    pronostico.appendChild(datosMin);
    let datosMax = document.createElement("h5");
    let newContent1 = document.createTextNode(`Max: ${max}°`);
    datosMax.appendChild(newContent1);
    pronostico.appendChild(datosMax);


    let hum1 = data.daily[i].humidity;
    let humedad = document.createElement("h5");
    let newContentH = document.createTextNode(`Humedad: ${hum1}%`);
    humedad.appendChild(newContentH);
    pronostico.appendChild(humedad);

    containerPronostico.appendChild(pronostico);
  }


}
>>>>>>> 03cd2354088494e2598bc4a298ddcb130e2c6556
=======
boton.addEventListener("click", onclick);
>>>>>>> 66f3dea6ba5965e530b3ac1602010c936610a700
