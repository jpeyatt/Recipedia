/**
 * Created by jpeyatt on 11/6/2014.
 */
(function () {

    var app = angular.module("recipeApp", ["common.services","recipeResourceMock", "ui.router"]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");
                $stateProvider
                    .state("home", {
                        url: "/",
                        templateUrl: "app/homeView.html"
                    })
                    .state("recipeList", {
                        url: "/recipes",
                        templateUrl: "app/recipes/recipeListView.html",
                        controller: "RecipeListController as vm"
                    })
                    .state("recipeEdit", {
                        url: "/recipes/edit/:id",
                        templateUrl: "app/recipes/recipeEditView.html",
                        controller: "RecipeEditController as vm"
                    })
                    .state("recipeDetail", {
                        url: "/recipes/:id",
                        templateUrl: "app/recipes/recipeDetailView.html",
                        controller: "RecipeDetailController as vm",
                        resolve: {
                            recipeResource: "recipeResource",

                            recipe: function (recipeResource, $stateParams) {
                                var id = $stateParams.id;
                                return recipeResource.get({id: id}).$promise;
                            }
                        }
                    })
            }]
    );

}());