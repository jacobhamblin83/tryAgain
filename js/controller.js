angular.module('app').controller('controller', function($scope, mainService) {
    //assignments made like this prevent putting location on locate until it gets the data back i think
    mainService.getLocation().then(function(location){
        $scope.locate = location;
        console.log(location.weather[0].description)
        $scope.temp = location.main.temp

        $scope.timeStamp = mainService.getNewTime()    
        window.setInterval(function(){
            $scope.timeStamp = mainService.getNewTime() 
            $scope.$digest()
        }, 10000);
    })
})