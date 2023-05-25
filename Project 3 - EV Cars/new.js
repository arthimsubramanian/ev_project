  
  var total_evs = 0;
  
  for (var i = 0; i < data.length; i++) {
    var entry = data[i];
    if (entry['Fuel_Type'] === 'Battery Electric (BEV)') {
      total_evs += entry['Number_Vehicles'];
    }
  }
  
  console.log(total_evs);