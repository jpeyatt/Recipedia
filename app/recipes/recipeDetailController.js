/**
 * Created by jpeyatt on 11/7/2014.
 */
(function () {
    "use strict";

    angular
        .module("recipeApp")
        .controller("RecipeDetailController", ["recipe", RecipeDetailController]);

    function RecipeDetailController(recipe){
        var vm = this;

        vm.recipe = recipe;

        vm.title = vm.recipe.name;

        if (vm.recipe.tags){
            vm.recipe.tagList = vm.recipe.tags.toString();
        }

    };

}());