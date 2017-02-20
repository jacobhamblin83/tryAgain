angular.module('app')
.directive('mainDirective', function() {
    return {
        scope: {
            weather: '=',
    },
    restrict: 'AE',
    }
})