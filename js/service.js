angular.module('app').service('mainService', function($http){
    //base Url and Api keys set to variables
    var special = 'weather'
    var googleMapsBaseUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
    var weatherBaseUrl = 'http://api.openweathermap.org/data/2.5/' + special + '?lat=';
    var googleMapsApiKey = 'AIzaSyCkC41MmHlVcU0o8Nx7_kpdebE4xbrhCaQ'
    var weatherApiKey = 'bb72eebad1cc851a1aacb694290588c1';
    //making lat and lon global i think...
    var lat = '';
    var lon = '';
    //first api call is to google maps geolocation api to determine current location of user
    this.getLocation = function(){
        return $http ({
            method: 'POST',
            url: googleMapsBaseUrl + googleMapsApiKey
        }).then(function(response){
            if(response.status === 200){
                lat = response.data.location.lat;
                lon = response.data.location.lng;
            //second api call is to open weather map to return current temperature based on the users current location
            }}).then(function(){
                return $http ({
                    method: 'GET',
                    url: weatherBaseUrl + lat + '&lon=' + lon + '&units=imperial&APPID=' + weatherApiKey
                }).then(function(response){
                    if(response.status === 200){
                        console.log(response.data)
                    return response.data;
                    } 
                })})
    }
    
    this.getNewTime = function (){
        var time = new Date();
        return ("0" + time.getHours()).slice(-2)   + ":" + ("0" + time.getMinutes()).slice(-2);
    }
})