
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
    };
    

console.log(sum);

// get total of cars sold by using 2022 data only
let sumTotal = 0;

for (let i = 0; i < cars2022.length; i++) {

    let cars2022Total = cars2022[i]

    sumTotal += cars2022Total.Number_Vehicles
};

let sum2021 = 0;

for (let i = 0; i < cars2021.length; i++) {

    let cars2021Total = cars2021[i]

    sum2021 += cars2021Total.Number_Vehicles
};

let sum2020 = 0;

for (let i = 0; i < cars2020.length; i++) {

    let cars2020Total = cars2020[i]

    sum2020 += cars2020Total.Number_Vehicles
};

let sum2019 = 0;

for (let i = 0; i < cars2019.length; i++) {

    let cars2019Total = cars2019[i]

    sum2019 += cars2019Total.Number_Vehicles
};

let sum2018 = 0;

for (let i = 0; i < cars2018.length; i++) {

    let cars2018Total = cars2018[i]

    sum2018 += cars2018Total.Number_Vehicles
};

let sum2017 = 0;

for (let i = 0; i < cars2017.length; i++) {

    let cars2017Total = cars2017[i]

    sum2017 += cars2017Total.Number_Vehicles
};

let sum2016 = 0;

for (let i = 0; i < cars2016.length; i++) {

    let cars2016Total = cars2016[i]

    sum2016 += cars2016Total.Number_Vehicles
};

let sum2015 = 0;

for (let i = 0; i < cars2015.length; i++) {

    let cars2015Total = cars2015[i]

    sum2015 += cars2015Total.Number_Vehicles
};

let sum2014 = 0;

for (let i = 0; i < cars2014.length; i++) {

    let cars2014Total = cars2014[i]

    sum2014 += cars2014Total.Number_Vehicles
};

let sum2013 = 0;

for (let i = 0; i < cars2013.length; i++) {

    let cars2013Total = cars2013[i]

    sum2013 += cars2013Total.Number_Vehicles
};

let sum2012 = 0;

for (let i = 0; i < cars2012.length; i++) {

    let cars2012Total = cars2012[i]

    sum2012 += cars2012Total.Number_Vehicles
};

let sum2011 = 0;

for (let i = 0; i < cars2011.length; i++) {

    let cars2011Total = cars2011[i]

    sum2011 += cars2011Total.Number_Vehicles
};

let sum2010 = 0;

for (let i = 0; i < cars2010.length; i++) {

    let cars2010Total = cars2010[i]

    sum2010 += cars2010Total.Number_Vehicles
};

var sumSales2022 = (sumTotal - sum2021);
var sumSales2021 = (sum2021 - sum2020);
var sumSales2020 = (sum2020 - sum2019);
var sumSales2019 = (sum2019 - sum2018);
var sumSales2018 = (sum2018 - sum2017);
var sumSales2017 = (sum2017 - sum2016);
var sumSales2016 = (sum2016 - sum2015);
var sumSales2015 = (sum2015 - sum2014);
var sumSales2014 = (sum2014 - sum2013);
var sumSales2013 = (sum2013 - sum2012);
var sumSales2012 = (sum2012 - sum2011);
var sumSales2011 = (sum2011 - sum2010);
var sumSales2010 = (sum2010);

// split this data by fuel type for each year (2022 = Total 2010-2023)

//Electric

let totalElectric = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        totalElectric += row.Number_Vehicles;
    }
};

let Electric2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2021 += row.Number_Vehicles;
    }
};

let Electric2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2020 += row.Number_Vehicles;
    }
};

let Electric2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2019 += row.Number_Vehicles;
    }
};

let Electric2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2018 += row.Number_Vehicles;
    }
};

let Electric2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2017 += row.Number_Vehicles;
    }
};

let Electric2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2016 += row.Number_Vehicles;
    }
};

let Electric2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2015 += row.Number_Vehicles;
    }
};

let Electric2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2014 += row.Number_Vehicles;
    }
};

let Electric2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2013 += row.Number_Vehicles;
    }
};

let Electric2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2012 += row.Number_Vehicles;
    }
};

let Electric2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2011 += row.Number_Vehicles;
    }
};

let Electric2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Battery Electric (BEV)") {

        Electric2010 += row.Number_Vehicles;
    }
};

//Electric Sales by Year

var ElectricSales2022 = (totalElectric - Electric2021);
var ElectricSales2021 = (Electric2021 - Electric2020);
var ElectricSales2020 = (Electric2020 - Electric2019);
var ElectricSales2019 = (Electric2019 - Electric2018);
var ElectricSales2018 = (Electric2018 - Electric2017);
var ElectricSales2017 = (Electric2017 - Electric2016);
var ElectricSales2016 = (Electric2016 - Electric2015);
var ElectricSales2015 = (Electric2015 - Electric2014);
var ElectricSales2014 = (Electric2014 - Electric2013);
var ElectricSales2013 = (Electric2013 - Electric2012);
var ElectricSales2012 = (Electric2012 - Electric2011);
var ElectricSales2011 = (Electric2011 - Electric2010);
var ElectricSales2010 = (Electric2010);

//Diesel

let totalDiesel = 0;

for (let k = 0; k < cars2022.length; k++) {
    row = cars2022[k];

    if (row.Fuel_Type == "Diesel") {

        totalDiesel += row.Number_Vehicles;
    }
};

let Diesel2021 = 0;

for (let k = 0; k < cars2021.length; k++) {
    row = cars2021[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2021 += row.Number_Vehicles;
    }
};

let Diesel2020 = 0;

for (let k = 0; k < cars2020.length; k++) {
    row = cars2020[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2020 += row.Number_Vehicles;
    }
};

let Diesel2019 = 0;

for (let k = 0; k < cars2019.length; k++) {
    row = cars2019[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2019 += row.Number_Vehicles;
    }
};

let Diesel2018 = 0;

for (let k = 0; k < cars2018.length; k++) {
    row = cars2018[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2018 += row.Number_Vehicles;
    }
};

let Diesel2017 = 0;

for (let k = 0; k < cars2017.length; k++) {
    row = cars2017[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2017 += row.Number_Vehicles;
    }
};

let Diesel2016 = 0;

for (let k = 0; k < cars2016.length; k++) {
    row = cars2016[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2016 += row.Number_Vehicles;
    }
};

let Diesel2015 = 0;

for (let k = 0; k < cars2015.length; k++) {
    row = cars2015[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2015 += row.Number_Vehicles;
    }
};

let Diesel2014 = 0;

for (let k = 0; k < cars2014.length; k++) {
    row = cars2014[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2014 += row.Number_Vehicles;
    }
};

let Diesel2013 = 0;

for (let k = 0; k < cars2013.length; k++) {
    row = cars2013[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2013 += row.Number_Vehicles;
    }
};

let Diesel2012 = 0;

for (let k = 0; k < cars2012.length; k++) {
    row = cars2012[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2012 += row.Number_Vehicles;
    }
};

let Diesel2011 = 0;

for (let k = 0; k < cars2011.length; k++) {
    row = cars2011[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2011 += row.Number_Vehicles;
    }
};

let Diesel2010 = 0;

for (let k = 0; k < cars2010.length; k++) {
    row = cars2010[k];

    if (row.Fuel_Type == "Diesel") {

        Diesel2010 += row.Number_Vehicles;
    }
};

//Diesel Sales by Year

var DieselSales2022 = (totalDiesel - Diesel2021);
var DieselSales2021 = (Diesel2021 - Diesel2020);
var DieselSales2020 = (Diesel2020 - Diesel2019);
var DieselSales2019 = (Diesel2019 - Diesel2018);
var DieselSales2018 = (Diesel2018 - Diesel2017);
var DieselSales2017 = (Diesel2017 - Diesel2016);
var DieselSales2016 = (Diesel2016 - Diesel2015);
var DieselSales2015 = (Diesel2015 - Diesel2014);
var DieselSales2014 = (Diesel2014 - Diesel2013);
var DieselSales2013 = (Diesel2013 - Diesel2012);
var DieselSales2012 = (Diesel2012 - Diesel2011);
var DieselSales2011 = (Diesel2011 - Diesel2010);
var DieselSales2010 = (Diesel2010);


//Gasoline

let totalGasoline = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Gasoline") {

        totalGasoline += row.Number_Vehicles;
    }
};

let Gasoline2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2021 += row.Number_Vehicles;
    }
};

let Gasoline2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2020 += row.Number_Vehicles;
    }
};

let Gasoline2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2019 += row.Number_Vehicles;
    }
};

let Gasoline2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2018 += row.Number_Vehicles;
    }
};

let Gasoline2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2017 += row.Number_Vehicles;
    }
};

let Gasoline2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2016 += row.Number_Vehicles;
    }
};

let Gasoline2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2015 += row.Number_Vehicles;
    }
};

let Gasoline2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2014 += row.Number_Vehicles;
    }
};

let Gasoline2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2013 += row.Number_Vehicles;
    }
};

let Gasoline2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2012 += row.Number_Vehicles;
    }
};

let Gasoline2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2011 += row.Number_Vehicles;
    }
};

let Gasoline2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Gasoline") {

        Gasoline2010 += row.Number_Vehicles;
    }
};

//Gasoline Sales by Year

var GasolineSales2022 = (totalGasoline - Gasoline2021);
var GasolineSales2021 = (Gasoline2021 - Gasoline2020);
var GasolineSales2020 = (Gasoline2020 - Gasoline2019);
var GasolineSales2019 = (Gasoline2019 - Gasoline2018);
var GasolineSales2018 = (Gasoline2018 - Gasoline2017);
var GasolineSales2017 = (Gasoline2017 - Gasoline2016);
var GasolineSales2016 = (Gasoline2016 - Gasoline2015);
var GasolineSales2015 = (Gasoline2015 - Gasoline2014);
var GasolineSales2014 = (Gasoline2014 - Gasoline2013);
var GasolineSales2013 = (Gasoline2013 - Gasoline2012);
var GasolineSales2012 = (Gasoline2012 - Gasoline2011);
var GasolineSales2011 = (Gasoline2011 - Gasoline2010);
var GasolineSales2010 = (Gasoline2010);


//Flex Fuel

let totalFlexFuel = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Flex Fuel") {

        totalFlexFuel += row.Number_Vehicles;
    }
};

let FlexFuel2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2021 += row.Number_Vehicles;
    }
};

let FlexFuel2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2020 += row.Number_Vehicles;
    }
};

let FlexFuel2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2019 += row.Number_Vehicles;
    }
};

let FlexFuel2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2018 += row.Number_Vehicles;
    }
};

let FlexFuel2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2017 += row.Number_Vehicles;
    }
};

let FlexFuel2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2016 += row.Number_Vehicles;
    }
};

let FlexFuel2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2015 += row.Number_Vehicles;
    }
};

let FlexFuel2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2014 += row.Number_Vehicles;
    }
};

let FlexFuel2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2013 += row.Number_Vehicles;
    }
};

let FlexFuel2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2012 += row.Number_Vehicles;
    }
};

let FlexFuel2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2011 += row.Number_Vehicles;
    }
};

let FlexFuel2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Flex Fuel") {

        FlexFuel2010 += row.Number_Vehicles;
    }
};

//Flex Fuel Sales by Year

var FlexFuelSales2022 = (totalFlexFuel - FlexFuel2021);
var FlexFuelSales2021 = (FlexFuel2021 - FlexFuel2020);
var FlexFuelSales2020 = (FlexFuel2020 - FlexFuel2019);
var FlexFuelSales2019 = (FlexFuel2019 - FlexFuel2018);
var FlexFuelSales2018 = (FlexFuel2018 - FlexFuel2017);
var FlexFuelSales2017 = (FlexFuel2017 - FlexFuel2016);
var FlexFuelSales2016 = (FlexFuel2016 - FlexFuel2015);
var FlexFuelSales2015 = (FlexFuel2015 - FlexFuel2014);
var FlexFuelSales2014 = (FlexFuel2014 - FlexFuel2013);
var FlexFuelSales2013 = (FlexFuel2013 - FlexFuel2012);
var FlexFuelSales2012 = (FlexFuel2012 - FlexFuel2011);
var FlexFuelSales2011 = (FlexFuel2011 - FlexFuel2010);
var FlexFuelSales2010 = (FlexFuel2010);

//Fuel Cell

let totalFuelCell = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        totalFuelCell += row.Number_Vehicles;
    }
};

let FuelCell2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2021 += row.Number_Vehicles;
    }
};

let FuelCell2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2020 += row.Number_Vehicles;
    }
};

let FuelCell2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2019 += row.Number_Vehicles;
    }
};

let FuelCell2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2018 += row.Number_Vehicles;
    }
};

let FuelCell2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2017 += row.Number_Vehicles;
    }
};

let FuelCell2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2016 += row.Number_Vehicles;
    }
};

let FuelCell2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2015 += row.Number_Vehicles;
    }
};

let FuelCell2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2014 += row.Number_Vehicles;
    }
};

let FuelCell2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2013 += row.Number_Vehicles;
    }
};

let FuelCell2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2012 += row.Number_Vehicles;
    }
};

let FuelCell2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2011 += row.Number_Vehicles;
    }
};

let FuelCell2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Fuel Cell (FCEV)") {

        FuelCell2010 += row.Number_Vehicles;
    }
};

//Fuel Cell Sales by Year

var FuelCellSales2022 = (totalFuelCell - FuelCell2021);
var FuelCellSales2021 = (FuelCell2021 - FuelCell2020);
var FuelCellSales2020 = (FuelCell2020 - FuelCell2019);
var FuelCellSales2019 = (FuelCell2019 - FuelCell2018);
var FuelCellSales2018 = (FuelCell2018 - FuelCell2017);
var FuelCellSales2017 = (FuelCell2017 - FuelCell2016);
var FuelCellSales2016 = (FuelCell2016 - FuelCell2015);
var FuelCellSales2015 = (FuelCell2015 - FuelCell2014);
var FuelCellSales2014 = (FuelCell2014 - FuelCell2013);
var FuelCellSales2013 = (FuelCell2013 - FuelCell2012);
var FuelCellSales2012 = (FuelCell2012 - FuelCell2011);
var FuelCellSales2011 = (FuelCell2011 - FuelCell2010);
var FuelCellSales2010 = (FuelCell2010);

//Gasoline Hybrid

let totalGasolineHybrid = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        totalGasolineHybrid += row.Number_Vehicles;
    }
};

let GasolineHybrid2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2021 += row.Number_Vehicles;
    }
};

let GasolineHybrid2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2020 += row.Number_Vehicles;
    }
};

let GasolineHybrid2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2019 += row.Number_Vehicles;
    }
};

let GasolineHybrid2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2018 += row.Number_Vehicles;
    }
};

let GasolineHybrid2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2017 += row.Number_Vehicles;
    }
};

let GasolineHybrid2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2016 += row.Number_Vehicles;
    }
};

let GasolineHybrid2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2015 += row.Number_Vehicles;
    }
};

let GasolineHybrid2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2014 += row.Number_Vehicles;
    }
};

let GasolineHybrid2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2013 += row.Number_Vehicles;
    }
};

let GasolineHybrid2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2012 += row.Number_Vehicles;
    }
};

let GasolineHybrid2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2011 += row.Number_Vehicles;
    }
};

let GasolineHybrid2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Gasoline Hybrid") {

        GasolineHybrid2010 += row.Number_Vehicles;
    }
};

// Gasoline Hybrid Sales by Year

var GasolineHybridSales2022 = (totalGasolineHybrid - GasolineHybrid2021);
var GasolineHybridSales2021 = (GasolineHybrid2021 - GasolineHybrid2020);
var GasolineHybridSales2020 = (GasolineHybrid2020 - GasolineHybrid2019);
var GasolineHybridSales2019 = (GasolineHybrid2019 - GasolineHybrid2018);
var GasolineHybridSales2018 = (GasolineHybrid2018 - GasolineHybrid2017);
var GasolineHybridSales2017 = (GasolineHybrid2017 - GasolineHybrid2016);
var GasolineHybridSales2016 = (GasolineHybrid2016 - GasolineHybrid2015);
var GasolineHybridSales2015 = (GasolineHybrid2015 - GasolineHybrid2014);
var GasolineHybridSales2014 = (GasolineHybrid2014 - GasolineHybrid2013);
var GasolineHybridSales2013 = (GasolineHybrid2013 - GasolineHybrid2012);
var GasolineHybridSales2012 = (GasolineHybrid2012 - GasolineHybrid2011);
var GasolineHybridSales2011 = (GasolineHybrid2011 - GasolineHybrid2010);
var GasolineHybridSales2010 = (GasolineHybrid2010);

//Natural Gas

let totalNaturalGas = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Natural Gas") {

        totalNaturalGas += row.Number_Vehicles;
    }
};

let NaturalGas2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2021 += row.Number_Vehicles;
    }
};

let NaturalGas2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2020 += row.Number_Vehicles;
    }
};

let NaturalGas2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2019 += row.Number_Vehicles;
    }
};

let NaturalGas2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2018 += row.Number_Vehicles;
    }
};

let NaturalGas2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2017 += row.Number_Vehicles;
    }
};

let NaturalGas2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2016 += row.Number_Vehicles;
    }
};

let NaturalGas2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2015 += row.Number_Vehicles;
    }
};

let NaturalGas2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2014 += row.Number_Vehicles;
    }
};

let NaturalGas2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2013 += row.Number_Vehicles;
    }
};

let NaturalGas2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2012 += row.Number_Vehicles;
    }
};

let NaturalGas2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2011 += row.Number_Vehicles;
    }
};

let NaturalGas2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Natural Gas") {

        NaturalGas2010 += row.Number_Vehicles;
    }
};

//Natural Gas Sales by Year

var NaturalGasSales2022 = (totalNaturalGas - NaturalGas2021);
var NaturalGasSales2021 = (NaturalGas2021 - NaturalGas2020);
var NaturalGasSales2020 = (NaturalGas2020 - NaturalGas2019);
var NaturalGasSales2019 = (NaturalGas2019 - NaturalGas2018);
var NaturalGasSales2018 = (NaturalGas2018 - NaturalGas2017);
var NaturalGasSales2017 = (NaturalGas2017 - NaturalGas2016);
var NaturalGasSales2016 = (NaturalGas2016 - NaturalGas2015);
var NaturalGasSales2015 = (NaturalGas2015 - NaturalGas2014);
var NaturalGasSales2014 = (NaturalGas2014 - NaturalGas2013);
var NaturalGasSales2013 = (NaturalGas2013 - NaturalGas2012);
var NaturalGasSales2012 = (NaturalGas2012 - NaturalGas2011);
var NaturalGasSales2011 = (NaturalGas2011 - NaturalGas2010);
var NaturalGasSales2010 = (NaturalGas2010);

//Propane

let totalPropane = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Propane") {

        totalPropane += row.Number_Vehicles;
    }
};

let Propane2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Propane") {

        Propane2021 += row.Number_Vehicles;
    }
};

let Propane2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Propane") {

        Propane2020 += row.Number_Vehicles;
    }
};

let Propane2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Propane") {

        Propane2019 += row.Number_Vehicles;
    }
};

let Propane2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Propane") {

        Propane2018 += row.Number_Vehicles;
    }
};

let Propane2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Propane") {

        Propane2017 += row.Number_Vehicles;
    }
};

let Propane2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Propane") {

        Propane2016 += row.Number_Vehicles;
    }
};

let Propane2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Propane") {

        Propane2015 += row.Number_Vehicles;
    }
};

let Propane2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Propane") {

        Propane2014 += row.Number_Vehicles;
    }
};

let Propane2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Propane") {

        Propane2013 += row.Number_Vehicles;
    }
};

let Propane2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Propane") {

        Propane2012 += row.Number_Vehicles;
    }
};

let Propane2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Propane") {

        Propane2011 += row.Number_Vehicles;
    }
};

let Propane2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Propane") {

        Propane2010 += row.Number_Vehicles;
    }
};

//Propane Sales by Year

var PropaneSales2022 = (totalPropane - Propane2021);
var PropaneSales2021 = (Propane2021 - Propane2020);
var PropaneSales2020 = (Propane2020 - Propane2019);
var PropaneSales2019 = (Propane2019 - Propane2018);
var PropaneSales2018 = (Propane2018 - Propane2017);
var PropaneSales2017 = (Propane2017 - Propane2016);
var PropaneSales2016 = (Propane2016 - Propane2015);
var PropaneSales2015 = (Propane2015 - Propane2014);
var PropaneSales2014 = (Propane2014 - Propane2013);
var PropaneSales2013 = (Propane2013 - Propane2012);
var PropaneSales2012 = (Propane2012 - Propane2011);
var PropaneSales2011 = (Propane2011 - Propane2010);
var PropaneSales2010 = (Propane2010);

//Plug-in Hybrid

let totalPlugINhybrid = 0;

for (let j = 0; j < cars2022.length; j++) {
    row = cars2022[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        totalPlugINhybrid += row.Number_Vehicles;
    }
};

let PlugINhybrid2021 = 0;

for (let j = 0; j < cars2021.length; j++) {
    row = cars2021[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2021 += row.Number_Vehicles;
    }
};

let PlugINhybrid2020 = 0;

for (let j = 0; j < cars2020.length; j++) {
    row = cars2020[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2020 += row.Number_Vehicles;
    }
};

let PlugINhybrid2019 = 0;

for (let j = 0; j < cars2019.length; j++) {
    row = cars2019[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2019 += row.Number_Vehicles;
    }
};

let PlugINhybrid2018 = 0;

for (let j = 0; j < cars2018.length; j++) {
    row = cars2018[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2018 += row.Number_Vehicles;
    }
};

let PlugINhybrid2017 = 0;

for (let j = 0; j < cars2017.length; j++) {
    row = cars2017[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2017 += row.Number_Vehicles;
    }
};

let PlugINhybrid2016 = 0;

for (let j = 0; j < cars2016.length; j++) {
    row = cars2016[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2016 += row.Number_Vehicles;
    }
};

let PlugINhybrid2015 = 0;

for (let j = 0; j < cars2015.length; j++) {
    row = cars2015[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2015 += row.Number_Vehicles;
    }
};

let PlugINhybrid2014 = 0;

for (let j = 0; j < cars2014.length; j++) {
    row = cars2014[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2014 += row.Number_Vehicles;
    }
};

let PlugINhybrid2013 = 0;

for (let j = 0; j < cars2013.length; j++) {
    row = cars2013[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2013 += row.Number_Vehicles;
    }
};

let PlugINhybrid2012 = 0;

for (let j = 0; j < cars2012.length; j++) {
    row = cars2012[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2012 += row.Number_Vehicles;
    }
};

let PlugINhybrid2011 = 0;

for (let j = 0; j < cars2011.length; j++) {
    row = cars2011[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2011 += row.Number_Vehicles;
    }
};

let PlugINhybrid2010 = 0;

for (let j = 0; j < cars2010.length; j++) {
    row = cars2010[j];

    if (row.Fuel_Type == "Plug-in Hybrid (PHEV)") {

        PlugINhybrid2010 += row.Number_Vehicles;
    }
};

//Plug-in Hybrid Sales by Year

var PlugINhybridSales2022 = (totalPlugINhybrid - PlugINhybrid2021);
var PlugINhybridSales2021 = (PlugINhybrid2021 - PlugINhybrid2020);
var PlugINhybridSales2020 = (PlugINhybrid2020 - PlugINhybrid2019);
var PlugINhybridSales2019 = (PlugINhybrid2019 - PlugINhybrid2018);
var PlugINhybridSales2018 = (PlugINhybrid2018 - PlugINhybrid2017);
var PlugINhybridSales2017 = (PlugINhybrid2017 - PlugINhybrid2016);
var PlugINhybridSales2016 = (PlugINhybrid2016 - PlugINhybrid2015);
var PlugINhybridSales2015 = (PlugINhybrid2015 - PlugINhybrid2014);
var PlugINhybridSales2014 = (PlugINhybrid2014 - PlugINhybrid2013);
var PlugINhybridSales2013 = (PlugINhybrid2013 - PlugINhybrid2012);
var PlugINhybridSales2012 = (PlugINhybrid2012 - PlugINhybrid2011);
var PlugINhybridSales2011 = (PlugINhybrid2011 - PlugINhybrid2010);
var PlugINhybridSales2010 = (PlugINhybrid2010);

//var electricSales = [
  //{
    //x: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021","2022"],
    //y: [ElectricSales2010, ElectricSales2011, ElectricSales2012, ElectricSales2013, ElectricSales2014, ElectricSales2015, ElectricSales2016, ElectricSales2017, ElectricSales2018, ElectricSales2019, ElectricSales2020, ElectricSales2021, ElectricSales2022],
    //type: "line"
 //}
  //];

//Plotly.newPlot('plot', electricSales);

function init() {

  traceTotal = [
    {
      x: ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"],
      y: [totalElectric, totalDiesel, totalGasoline, totalPlugINhybrid, totalPropane, totalNaturalGas, totalGasolineHybrid, totalFuelCell, totalFlexFuel],
      type: "bar" }];
      

      Plotly.newPlot('plot', traceTotal);
    }

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
  let dropdownMenu = d3.select("#selDataset");

  let dataset = dropdownMenu.property("value");

  let x = [];
  let y = [];

  if (dataset === "2011") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2011, DieselSales2011, GasolineSales2011, PlugINhybridSales2011, PropaneSales2011, NaturalGasSales2011, GasolineHybridSales2011, FuelCellSales2011, FlexFuelSales2011];
  }

  else if (dataset === "2012") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2012, DieselSales2012, GasolineSales2012, PlugINhybridSales2012, PropaneSales2012, NaturalGasSales2012, GasolineHybridSales2012, FuelCellSales2012, FlexFuelSales2012];
  }

  else if (dataset === "2013") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2013, DieselSales2013, GasolineSales2013, PlugINhybridSales2013, PropaneSales2013, NaturalGasSales2013, GasolineHybridSales2013, FuelCellSales2013, FlexFuelSales2013];
  }

  else if (dataset === "2014") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2014, DieselSales2014, GasolineSales2014, PlugINhybridSales2014, PropaneSales2014, NaturalGasSales2014, GasolineHybridSales2014, FuelCellSales2014, FlexFuelSales2014];
  }

  else if (dataset === "2015") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2015, DieselSales2015, GasolineSales2015, PlugINhybridSales2015, PropaneSales2015, NaturalGasSales2015, GasolineHybridSales2015, FuelCellSales2015, FlexFuelSales2015];
  }

  else if (dataset === "2016") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2016, DieselSales2016, GasolineSales2016, PlugINhybridSales2016, PropaneSales2016, NaturalGasSales2016, GasolineHybridSales2016, FuelCellSales2016, FlexFuelSales2016];
  }

  else if (dataset === "2017") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2017, DieselSales2017, GasolineSales2017, PlugINhybridSales2017, PropaneSales2017, NaturalGasSales2017, GasolineHybridSales2017, FuelCellSales2017, FlexFuelSales2017];
  }

  else if (dataset === "2018") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2018, DieselSales2018, GasolineSales2018, PlugINhybridSales2018, PropaneSales2018, NaturalGasSales2018, GasolineHybridSales2018, FuelCellSales2018, FlexFuelSales2018];
  }

  else if (dataset === "2019") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2019, DieselSales2019, GasolineSales2019, PlugINhybridSales2019, PropaneSales2019, NaturalGasSales2019, GasolineHybridSales2019, FuelCellSales2019, FlexFuelSales2019];
  }

  else if (dataset === "2020") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2020, DieselSales2020, GasolineSales2020, PlugINhybridSales2020, PropaneSales2020, NaturalGasSales2020, GasolineHybridSales2020, FuelCellSales2020, FlexFuelSales2020];
  }

  else if (dataset === "2021") {
    x = ["Electric", "Diesel", "Gasoline", "Plug-in Hybrid", "Propane", "Natural Gas", "Gasoline Hybrid", "Fuel Cell", "Flex Fuel E85"];
    y = [ElectricSales2021, DieselSales2021, GasolineSales2021, PlugINhybridSales2021, PropaneSales2021, NaturalGasSales2021, GasolineHybridSales2021, FuelCellSales2021, FlexFuelSales2021];
  }

  Plotly.restyle("plot", "x", [x]);
  Plotly.restyle("plot", "y", [y]);
}

init();
