"use strict";

function TodoController() {
    const vm = this;
    vm.tasks = [
        { task: "Play Xbox with buds", completed: false },
        { task: "Practice my code", completed: true },
        { task: "Checkout a new bar", completed: false },
        { task: "Go to yoga", completed: false }
    ];
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);