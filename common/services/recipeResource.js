/**
 * Created by jpeyatt on 11/7/2014.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("recipeResource",
        ["$resource", recipeResource]);

    function recipeResource($resource){
        return $resource("/api/recipes/:id")
    };

}());