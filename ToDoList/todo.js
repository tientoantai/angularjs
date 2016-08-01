var app = angular.module('todoList', []);
app.controller('todoListController', function($scope) {
	$scope.list = [{taskName: "buy Macbook", done: false}, {taskName: "buy Motobike", done: false}];
	$scope.addTodo = function(){
		$scope.list.push({taskName: $scope.newTask, done: false});
		$scope.newTask = '';
	};

	$scope.checkDone = function(){
		//todo is in view 
		if (this.todo.done){
			alert (this.todo.taskName + " is done!")
		}else{
			alert (this.todo.taskName + " is NOT done!")
		}
	}
});
