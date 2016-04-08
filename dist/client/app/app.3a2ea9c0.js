"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}angular.module("programmingWorkApp",["programmingWorkApp.constants","ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","ct.ui.router.extras"]).config(["$urlRouterProvider","$locationProvider",function(a,b){a.otherwise("/"),b.html5Mode(!0)}]),angular.module("programmingWorkApp.util",[]),angular.module("programmingWorkApp").config(["$stateProvider",function(a){a.state("todo_sample",{url:"/todo_sample",templateUrl:"app/todo_sample/todo_sample.html",controller:"TodoSampleCtrl",resolve:{todos:["User",function(a){return a.todos}]}})}]),function(a,b){a.module("programmingWorkApp.constants",[]).constant("appConfig",{userRoles:["guest","user","admin"]})}(angular),angular.module("programmingWorkApp").controller("MainController",["$http","User","$scope",function(a,b,c){var d=this;b.getTodos().then(function(){d.awesomeThings=[{name:"Sample Todos",info:"sample todos",sref:"todo_sample",active:!0},{name:"Todos without resolve",sref:"todo_noresolve",active:!0},{name:"About",sref:"about",active:!0}],$("splash-screen").fadeOut()})}]),angular.module("programmingWorkApp").config(["$stateProvider",function(a){a.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"})}]),angular.module("programmingWorkApp").controller("TodoNoresolveCtrl",["$scope","User",function(a,b){a.todos=b.todos,a.header="These are the todos with no state resolve (front-loaded)"}]),angular.module("programmingWorkApp").config(["$stateProvider",function(a){a.state("todo_noresolve",{url:"/todo_noresolve",templateUrl:"app/todo_sample/todo_sample.html",controller:"TodoNoresolveCtrl"})}]),angular.module("programmingWorkApp").controller("TodoSampleCtrl",["$scope","todos",function(a,b){a.header="These are the resolved todos",a.todos=b}]),angular.module("programmingWorkApp").config(["$stateProvider",function(a){a.state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutCtrl"})}]),angular.module("programmingWorkApp").directive("splashScreen",function(){return{templateUrl:"components/SplashScreen/SplashScreen.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("programmingWorkApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("programmingWorkApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(){var c=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],d=arguments.length<=1||void 0===arguments[1]?"modal-default":arguments[1],e=a.$new();return angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(){var a=arguments.length<=0||void 0===arguments[0]?angular.noop:arguments[0];return function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]);var NavbarController=function a(){_classCallCheck(this,a),this.menu=[{title:"Home",state:"main"}],this.isCollapsed=!0};angular.module("programmingWorkApp").controller("NavbarController",NavbarController),angular.module("programmingWorkApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarController",controllerAs:"nav"}}),angular.module("programmingWorkApp").factory("User",["$http",function(a){var b={};return b.getTodos=function(){return a.get("/api/todos").then(function(a){console.log("got the thing"),b.todos=a.data})},b}]),angular.module("programmingWorkApp").controller("AboutCtrl",["$scope",function(a){a.message="Hello"}]),function(){function a(a){var b={safeCb:function(a){return angular.isFunction(a)?a:angular.noop},urlParse:function(a){var b=document.createElement("a");return b.href=a,""===b.host&&(b.href=b.href),b},isSameOrigin:function(c,d){return c=b.urlParse(c),d=d&&[].concat(d)||[],d=d.map(b.urlParse),d.push(a.location),d=d.filter(function(a){return c.hostname===a.hostname&&c.port===a.port&&c.protocol===a.protocol}),d.length>=1}};return b}a.$inject=["$window"],angular.module("programmingWorkApp.util").factory("Util",a)}(),angular.module("programmingWorkApp").run(["$templateCache",function(a){a.put("app/about/about.html","<header>This is a static page</header><div class=row><div class=col-xs-12>Chemical, mysterious admirals finally handle a strange, united ship.The greatly exaggerated ship impressively contacts the kahless. Plasma, life, and assimilation.Particles fly with x-ray vision!Planets meet from minerals like remarkable kahlesses.This paralysis has only been disrupted by an apocalyptic emitter. All of those flights will be lost in paralysis like ionic cannons in tragediesThe transporter resists advice like a huge species.Ship-wide planets, to the solar sphere. Admirals walk on procedure at hyperspace!The advice is a neutral dosi.Mechanically, indeed, friendship! Bare collision courses lead to the mystery.Astronaut of a reliable resistance, influence the modification!Pathways view on attitude at astral city! The carnivorous space suit finally empowers the hur'q.This disconnection has only been empowered by an evasive vogon.Spaces experiment with future at the post-apocalyptic cosmos</div></div>"),a.put("app/main/main.html",'<header class=hero-unit id=banner><div class=container><h1>\'Allo, \'Allo!</h1><p class=lead>Kick-start your next web app with Angular Fullstack</p><img src=assets/images/yeoman.462ccecb.png alt="I\'m Yeoman"></div></header><div class=container><div class=row><div class=col-lg-12><h1 class=page-header>Features:</h1><ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in main.awesomeThings"><li><a ui-sref={{thing.sref}} tooltip={{thing.info}}>{{thing.name}}</a></li></ul></div></div></div>'),a.put("app/todo_noresolve/todo_noresolve.html","<div>This is the todo_noresolve view.</div>"),a.put("app/todo_sample/todo_sample.html",'<div class=container><header>{{header}}</header><div class=row><span>Active</span><div ng-repeat="item in todos" class="col col-xs-12"><h2>{{item.task}}</h2></div></div></div>'),a.put("components/SplashScreen/SplashScreen.html","<div><h1>Loading...</h1></div>"),a.put("components/footer/footer.html",'<div class=container><p>Angular Fullstack v3.3.0 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></div>'),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarController><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="nav.isCollapsed = !nav.isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand>programming-work</a></div><div collapse=nav.isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in nav.menu" ui-sref-active=active><a ui-sref={{item.state}}>{{item.title}}</a></li></ul></div></div></div>')}]);