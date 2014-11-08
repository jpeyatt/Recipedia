/**
 * Created by jpeyatt on 11/6/2014.
 */
(function () {
    "use strict";
    angular
        .module("recipeApp")
        .controller("RecipeListController", ["recipeResource", RecipeListController]);

            // Static Temporary Data
            function RecipeListController(recipeResource){
                var vm = this;

                recipeResource.query(function (data) {
                    vm.recipes = data;
                });


            };
}());