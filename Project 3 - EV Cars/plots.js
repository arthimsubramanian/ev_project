
//data.forEach(function(item, index) {
    //console.log(item, index);
//});

// split entire dataset by year

let sum = 0;

cars2010 = [];
cars2011 = [];
cars2012 = [];
cars2013 = [];
cars2014 = [];
cars2015 = [];
cars2016 = [];
cars2017 = [];
cars2018 = [];
cars2019 = [];
cars2020 = [];
cars2021 = [];
cars2022 = [];
cars2023 = [];



for (let i = 0; i < data.length; i++) {

    let cars = data[i]

    sum += cars.Number_Vehicles


    if (cars.Year < 2011) {
        cars2010.push(cars);
      } else if (cars.Year < 2012) {
        cars2011.push(cars);
      } else if (cars.Year < 2013) {
        cars2012.push(cars);
      } else if (cars.Year < 2014) {
        cars2013.push(cars);
      } else if (cars.Year < 2015) {
        cars2014.push(cars);
      } else if (cars.Year < 2016) {
        cars2015.push(cars);
      } else if (cars.Year < 2017) {
        cars2016.push(cars);
      } else if (cars.Year < 2018) {
        cars2017.push(cars);
      } else if (cars.Year < 2019) {
        cars2018.push(cars);
      } else if (cars.Year < 2020) {
        cars2019.push(cars);
      } else if (cars.Year < 2021) {
        cars2020.push(cars);
      }  else if (cars.Year < 2022) {
        cars2021.push(cars);
      } else if (cars.Year < 2023) {
        cars2022.push(cars);
      } else {
        cars2023.push(cars);
      }
    }
    

console.log(sum);

// get total of cars sold by using 2022 data only
let sum1 = 0;

for (let i = 0; i < cars2022.length; i++) {

    let cars2022Total = cars2022[i]

    sum1 += cars2022Total.Number_Vehicles
}

console.log(cars2022)

// split this data by fuel type for each year (2022 = Total 2010-2023)

let totalElectric = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        totalElectric += row.Number_Vehicles;
    }
}

let totalDiesel = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Diesel") {

        totalDiesel += row.Number_Vehicles;
    }
};

let totalGasoline = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Gasoline") {

        totalGasoline += row.Number_Vehicles;
    }
};

var chart = [
    {
        x: ["Total Electric", "Total Diesel", "Total Gasoline"],
        y: [totalElectric, totalDiesel, totalGasoline],
        width: [0.2, 0.2, 0.2,],
        title: "Fuel Type by Year",
        type: "bar"
    } 
];

var layout = {

    title: 'Fuel Type by Year'}

Plotly.newPlot('plot', chart, layout)