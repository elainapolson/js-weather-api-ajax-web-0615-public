function getFarenheits(data) {
  var tempArray = [];
  var temps = data.hourly_forecast;
  for (var i=0; i < temps.length; i++) {
    tempArray.push(temps[i].temp.english);
  }
  return tempArray;
}

function getHours(data) {
  var hoursArray = [];
  
  var temps = data.hourly_forecast;
  for (var i=0; i < temps.length; i++) {
    hoursArray.push(temps[i]['FCTTIME'].hour);
  }
  return hoursArray;
}

function generateDataSet(labels, data) {
  var dataset = { 
    labels : labels, 
    datasets : [ { label : 'Hourly Weather for New York', fillColor : 'rgba(220,220,220,0.2)', strokeColor : 'rgba(220,220,220,1)', pointColor : 'rgba(220,220,220,1)', pointStrokeColor : '#fff', pointHighlightFill : '#fff', pointHighlightStroke : 'rgba(220,220,220,1)', 
    data : data } ] }
  return dataset
}

function makeAjaxRequest(url, callback) {
  $.ajax ({
    url: url,
    dataType: 'jsonp',
    success: callback
  });
}