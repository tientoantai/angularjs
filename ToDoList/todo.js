var app = angular.module('todoList', []);
app.controller('todoListController', function($scope) {
	$scope.list = [
		{taskName: "buy Macbook", done: false}, 
		{taskName: "buy Motobike", done: false}
	];
	$scope.errorMessage = "";

	$scope.clearMessage = function(){
		$scope.errorMessage = "";
	};

	$scope.addTodo = function(){
		angular.forEach($scope.list, function(todo){
			if ( $scope.isExisted(todo) ){
				$scope.errorMessage = "This task has allready added!";
			}
		});
		if ( $scope.canAdd(todo) ){
			$scope.list.push({taskName: $scope.newTask, done: false});
			$scope.newTask = '';	
		}
	};

	$scope.canAdd = function (todo){
		return ! $scope.errorMessage;
	};

	$scope.isExisted = function(todo){
		return todo.taskName == $scope.newTask && ! $scope.errorMessage;
	};

	$scope.checkDone = function(todo){
		//todo is in view 
		if (todo.done){
			alert ("task \"" + todo.taskName + "\" is done!")
		}else{
			alert ("task \"" + todo.taskName + "\" is NOT done!")
		}
	};

	$scope.totalTask = function(){
		return $scope.list.length;
	};

	$scope.totalDoneTask = function(){
		var countDoneTask = 0;
		angular.forEach($scope.list, function(task){
			countDoneTask += (task.done) ? 1 : 0 ;
		});
		return countDoneTask;
	};

	$scope.donePercent = function(){
		if ($scope.totalTask() == 0) return 0;
		return window.Math.round($scope.totalDoneTask() * 100 / $scope.totalTask());
	};

	$scope.removeDoneTask = function(){
		var notDoneList = [];
		angular.forEach($scope.list, function(todo){
			if ( ! todo.done){
				notDoneList.push(todo);
			}
		});
		$scope.list = notDoneList;	
	};
});
