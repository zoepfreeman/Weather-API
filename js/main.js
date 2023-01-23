// Grab the form
let form = document.getElementById('cityForm');

async function handleFormSubmit(e){
    e.preventDefault();
    // Get the input data from the form
    let cityName = e.target.cityName.value;
    let city = await getCityInfo(cityName);
    console.log(city)
    buildCityCard(city,cityName);
    e.target.cityName.value = '';
};

form.addEventListener('submit', handleFormSubmit)

async function getCityInfo(cityName){
    try{
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=39e26bad6d2b1d43cbf581c8308e8a3b`);
        let data = await res.json();
        return data.main;
    } catch(err) {
        console.error(err);
    };
}

function buildCityCard(cityObj,cityName){

    //Current Temp//
    // Create the card div
    const tempcard = document.createElement('div');
    tempcard.className = "card text-bg-info mx-auto my-3";
    // Create card body
    const tempBody = document.createElement('div');
    tempBody.className = 'card-body';
    // Create city name and temp elements
    const tempTitle = document.createElement('h5');
    tempTitle.className = 'card-title'
    tempTitle.innerHTML = 'Current';
    const temp = document.createElement('p');
    temp.className = 'card-text'
    temp.innerHTML = `${Number.parseFloat(((cityObj.temp-273.15)*1.8)+32).toFixed(2)} °F`
    // Append title and population to card body
    tempBody.append(tempTitle);
    tempBody.append(temp);
    // Add card body to card div
    tempcard.append(tempBody);
    // Create our column for the row
    const tempcol = document.createElement('div');
    tempcol.className = 'col-12 col-md-6 col-lg-3'
    // Add the card to the column
    tempcol.append(tempcard)
    // Get the city display row
    const tempDisplay = document.getElementById('cityDisplay');
    // Add the new column to our display
    tempDisplay.append(tempcol);

    //Max Temp//
    // Create the card div
    const maxcard = document.createElement('div');
    maxcard.className = "card text-bg-danger mx-auto my-3";
    // Create card body
    const maxBody = document.createElement('div');
    maxBody.className = 'card-body';
    // Create city name and temp elements
    const maxTitle = document.createElement('h5');
    maxTitle.className = 'card-title'
    maxTitle.innerHTML = 'High';
    const max = document.createElement('p');
    max.className = 'card-text'
    max.innerHTML = `${Number.parseFloat(((cityObj.temp_max-273.15)*1.8)+32).toFixed(2)} °F`
    // Append title and population to card body
    maxBody.append(maxTitle);
    maxBody.append(max);
    // Add card body to card div
    maxcard.append(maxBody);
    // Create our column for the row
    const maxcol = document.createElement('div');
    maxcol.className = 'col-12 col-md-6 col-lg-3'
    // Add the card to the column
    maxcol.append(maxcard)
    // Get the city display row
    const maxDisplay = document.getElementById('cityDisplay');
    // Add the new column to our display
    maxDisplay.append(maxcol);

    //Min Temp//
     // Create the card div
     const mincard = document.createElement('div');
     mincard.className = "card text-bg-primary mx-auto my-3";
     // Create card body
     const minBody = document.createElement('div');
     minBody.className = 'card-body';
     // Create city name and temp elements
     const minTitle = document.createElement('h5');
     minTitle.className = 'card-title'
     minTitle.innerHTML = 'Low';
     const min = document.createElement('p');
     min.className = 'card-text'
     min.innerHTML = `${Number.parseFloat(((cityObj.temp_min-273.15)*1.8)+32).toFixed(2)} °F`
     // Append title and population to card body
     minBody.append(minTitle);
     minBody.append(min);
     // Add card body to card div
     mincard.append(minBody);
     // Create our column for the row
     const mincol = document.createElement('div');
     mincol.className = 'col-12 col-md-6 col-lg-3'
     // Add the card to the column
     mincol.append(mincard)
     // Get the city display row
     const minDisplay = document.getElementById('cityDisplay');
     // Add the new column to our display
     minDisplay.append(mincol);

     //Feels like//
      // Create the card div
    const flcard = document.createElement('div');
    flcard.className = "card text-bg-success mx-auto my-3";
    // Create card body
    const flBody = document.createElement('div');
    flBody.className = 'card-body';
    // Create city name and temp elements
    const flTitle = document.createElement('h5');
    flTitle.className = 'card-title'
    flTitle.innerHTML = 'Feels Like';
    const fl = document.createElement('p');
    fl.className = 'card-text'
    fl.innerHTML = `${Number.parseFloat(((cityObj.feels_like-273.15)*1.8)+32).toFixed(2)} °F`
    // Append title and population to card body
    flBody.append(flTitle);
    flBody.append(fl);
    // Add card body to card div
    flcard.append(flBody);
    // Create our column for the row
    const flcol = document.createElement('div');
    flcol.className = 'col-12 col-md-6 col-lg-3'
    // Add the card to the column
    flcol.append(flcard)
    // Get the city display row
    const flDisplay = document.getElementById('cityDisplay');
    // Add the new column to our display
    flDisplay.append(flcol);
};