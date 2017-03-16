'use strict'

app.factory(
        'blogService', [
            '$http',
            '$q',
            '$rootScope','$cookieStore',
            function($http, $q, $rootScope,$cookieStore) {
                console.log("blogService...")

                var BASE_URL = 'http://localhost:8081/ChatUZBackend';
                    return {
                	  
                    fetchAllblogLikes: function() {
                    	console.log("calling fetchAllblogLikes ")
                            return $http.get(BASE_URL+'/bloglikes')
                                    .then(
                                            function(response){
                                                return response.data;
                                            }, 
                                           null
                                    );
                    },
                
                                                

                }
            }
        ]);