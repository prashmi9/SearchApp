var searchApp = angular.module('myapp', []);

searchApp.controller('searchAnswers', [function(){
	var self = this;
     

     
}]);
searchApp.controller('getResults', ['$scope', '$http', function($scope, $http){
	var self = this;
     
        $http.get('data/questions.json').then(function(res){
            
            self.jsonData = res.data.questionData;   
            self.jsonAns = [];
            var getAns = self.jsonData ;
            
            angular.forEach(getAns, function(value, i) {
			  self.jsonAns.push( value.answers);
			});
            
        });
     
}]);
searchApp.filter('searchFor', [function(){

        return function(arr, searchString){

          if(!searchString){
            return arr;
          }

          var result = [];

          searchString = searchString.toLowerCase();
          

          // Using the forEach helper method to loop through the array
          angular.forEach(arr, function(item){

            if(item.questions.toLowerCase().indexOf(searchString) !== -1){
              result.push(item); 
            }

          });

          return result;
        };

      
}]);