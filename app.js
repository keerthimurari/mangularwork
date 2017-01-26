var myApp = angular.module('myApp',['ui.router']);

myApp.controller('myCtrl', function($scope) {
    $scope.message = "Hi, Myself Keerthi Murari,Currently am working as a UI developer in Capitalone. am a passionate in building different pages. Initally, i was not at all into coidng, but gradually, my interest towards web development increased. I was fascinated by looking at really good web pages and decided to build them on my own.So, i stated by building my pages and gradullay developed my skills, in the frontend development, and now, am good at the Front end technologies HTML,CSS, Javascript, JQuery, Angular. "

    var x;
    var y=null;
    var z=5.0;
    console.log(typeof x);
    console.log(typeof y);
    console.log(typeof z);
});


myApp.config(function($stateProvider) {
    var myProjects = {
        name: 'index2',
        url: '/index2',
		templateUrl: './index2.html'
    }

    var aboutMe = {
        name: 'index3',
        url: '/index3',
        templateUrl: './index3.html'
    }

    $stateProvider.state(myProjects);
    $stateProvider.state(aboutMe);
});

