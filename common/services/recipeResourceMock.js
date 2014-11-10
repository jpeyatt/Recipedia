/**
 * Created by jpeyatt on 11/7/2014.
 */
(function () {
    "use strict";

    var app = angular
                .module("recipeResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {

        var recipes = [
            {
                id: 1,
                name: "Greens with Cannellini Beans and Pancetta",
                servings: 2,
                prepTime: 25,
                cookTime: 20,
                rating: 4.5,
                image: "http://images.media-allrecipes.com/userphotos/250x250/00/24/66/246601.jpg",
                ingredients: [
                    "2 slices pancetta or bacon, chopped",
                    "1 1/2 tablespoons olive oil",
                    "1 small red onion, chopped",
                    "3 cloves garlic, crushed",
                    "1 bunch kale, roughly chopped",
                    "1 bunch beet greens, roughly chopped",
                    "salt to taste",
                    "1 (15 ounce) can cannellini beans, drained"
                ],
                directions: [
                    "Microwave the chopped pancetta or bacon on high for 3 minutes. Drain the drippings, and set the crispy pancetta aside.",
                    "In a large frying pan, heat the olive oil over medium heat. Cook onion in oil until soft. Add the crushed garlic cloves, and cook a minute more. Stir in chopped greens, and season with salt to taste (be conservative at this point - you can always add more!). Partially cover the pan, and cook until the greens begin to wilt. Stir in crispy pancetta and cannellini beans. Cook partially covered for 5 more minutes, until the flavors have combined and the greens are tender."
                ],
                tags: [
                    "healthy",
                    "beans",
                    "greens"
                ],
                reviews: [
                    {
                        user: "JeffandMer",
                        date: "07/11/2009",
                        rating: 4.4,
                        body: "This is a great and easy way to use up the greens from your fresh beets. I did make a couple of changes: 1. I rendered the bacon in a pan and used some of the leftiver fat to cook the onions in. 2. At the end, I added a splash of balsamic vinegar, which really seemed to brighten up all the flavors. 3. I served with a sprinkling of freshly grated parm over each bowl."
                    },
                    {
                        user: "jellis",
                        date: "7/24/2012",
                        rating: 4.6,
                        body: "We really liked this dish. I used bacon instead of pancetta and I cooked it a little longer than in the recipe. I also didn't have any beet greens so I just used a large bunch of kale. Overall I loved it and will definitely be making this again."
                    }
                ]

            },
            {
                id: 2,
                name: "Spicy Chicken Breasts",
                servings: 4,
                prepTime: 15,
                cookTime: 25,
                rating: 4.5,
                image: "http://images.media-allrecipes.com/userphotos/250x250/01/08/89/1088999.jpg",
                ingredients: [
                    "2 1/2 tablespoons paprika",
                    "2 tablespoons garlic powder",
                    "1 tablespoon salt",
                    "1 tablespoon onion powder",
                    "1 tablespoon dried thyme",
                    "1 tablespoon ground cayenne pepper",
                    "1 tablespoon ground black pepper",
                    "4 skinless, boneless chicken breast halves"
                ],
                directions: [
                    "In a medium bowl, mix together the paprika, garlic powder, salt, onion powder, thyme, cayenne pepper, and ground black pepper. Set aside about 3 tablespoons of this seasoning mixture for the chicken; store the remainder in an airtight container for later use (for seasoning fish, meats, or vegetables).",
                    "Preheat grill for medium-high heat. Rub some of the reserved 3 tablespoons of seasoning onto both sides of the chicken breasts..",
                    "Lightly oil the grill grate. Place chicken on the grill, and cook for 6 to 8 minutes on each side, until juices run clear."
                ],
                tags: [
                    "healthy",
                    "chicken",
                    "spicy"
                ],
                reviews: [
                    {
                        user: "mjmct3",
                        date: "07/18/2008",
                        rating: 4.4,
                        body: "This was amazing. Instead of using it as a rub, I put the spices and chicken into a gallon sized zip-lock bag with olive oil as a marinade. If you like it spicy, this is the recipe to use."
                    },
                    {
                        user: "nic",
                        date: "12/11/2003",
                        rating: 4.6,
                        body: "Wowza! I was sneezing throughout the entire mixing process. Take heed: this recipe makes a lot. Rub was good, but I feel the thyme overpowered the blend. (I’m not a big fan of the herb.) Next time I will decrease to ½ Tbs. and keep the rest of the ingredients the same. I love the fiery/hot taste mix gave my poultry. It was even good in my salad the next day."
                    }
                ]

            },
            {
                id: 3,
                name: "Turkey and Quinoa Meatloaf",
                servings: 5,
                prepTime: 30,
                cookTime: 50,
                rating: 4.5,
                image: "http://images.media-allrecipes.com/userphotos/250x250/00/49/18/491815.jpg",
                ingredients: [
                    "1/4 cup quinoa",
                    "1/2 cup water",
                    "1 teaspoon olive oil",
                    "1 small onion, chopped",
                    "1 large clove garlic, chopped",
                    "1 (20 ounce) package ground turkey",
                    "1 tablespoon tomato paste",
                    "1 tablespoon hot pepper sauce",
                    "2 tablespoons Worcestershire sauce",
                    "1 egg",
                    "1 1/2 teaspoons salt",
                    "1 teaspoon ground black pepper",
                    "2 tablespoons brown sugar",
                    "2 teaspoons Worcestershire sauce",
                    "1 teaspoon water"
                ],
                directions: [
                    "Bring the quinoa and water to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until the quinoa is tender, and the water has been absorbed, about 15 to 20 minutes. Set aside to cool.",
                    "Preheat an oven to 350 degrees F (175 degrees C).",
                    "Heat the olive oil in a skillet over medium heat. Stir in the onion; cook and stir until the onion has softened and turned translucent, about 5 minutes. Add the garlic and cook for another minute; remove from heat to cool.",
                    "Stir the turkey, cooked quinoa, onions, tomato paste, hot sauce, 2 tablespoons Worcestershire, egg, salt, and pepper in a large bowl until well combined. The mixture will be very moist. Shape into a loaf on a foil lined baking sheet. Combine the brown sugar, 2 teaspoons Worcestershire, and 1 teaspoon water in a small bowl. Rub the paste over the top of the meatloaf.",
                    "Bake in the preheated oven until no longer pink in the center, about 50 minutes. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C). Let the meatloaf cool for 10 minutes before slicing and serving."
                ],
                tags: [
                    "healthy",
                    "turkey",
                    "quinoa"
                ],
                reviews: [
                    {
                        user: "goofy_hobbit",
                        date: "02/25/2010",
                        rating: 4.5,
                        body: "I doubled the recipe and took it to a potluck and it went over very well! Cooked Quinoa in chicken broth and added tomato paste to top. It was very good. Making it again tonight and will add an additional egg to the recipe. Thanks for sharing! this is a fantastic recipe!"
                    }
                ]

            },
            {
                id: 4,
                name: "Herbed Citrus Salmon",
                servings: 2,
                prepTime: 30,
                cookTime: 20,
                rating: 4,
                image: "http://images.media-allrecipes.com/userphotos/250x250/01/38/10/1381047.jpg",
                ingredients: [
                    "1/2 cup freshly squeezed orange juice",
                    "1 sprig fresh thyme, bruised",
                    "1/4 teaspoon Diamond Crystal® Coarse Sea Salt",
                    "2 (6 ounce) salmon fillets",
                    "3 tablespoons unsalted butter, softened",
                    "1 teaspoon freshly grated orange zest",
                    "1 teaspoon fresh thyme leaves",
                    "1 teaspoon chopped fresh rosemary leaves",
                    "1 tablespoon coarsely chopped Italian parsley leaves",
                    "1 teaspoon freshly squeezed orange juice"
                ],
                directions: [
                    "Stir together orange juice, thyme and Diamond Crystal® Coarse Sea Salt in a shallow dish until salt is dissolved. Place salmon into the marinade and coat on each side. Arrange pieces skin side up in the dish, cover with plastic wrap, and refrigerate 30 minutes.",
                    "Citrus Herbed Butter: Combine butter, Diamond Crystal® Coarse Sea Salt, orange zest, thyme, rosemary, parsley, and orange juice in a bowl. Mix well to form a spreadable paste. Cover and refrigerate.",
                    "Remove salmon from marinade and pat dry with paper towels. Arrange fillets skin side down on baking dish. Drizzle with olive oil to coat.",
                    "Set oven rack about 6 inches from the heat source and preheat the oven's broiler.",
                    "Broil fish until the fish flakes easily with a fork, about 5 minutes.",
                    "Place fillets on serving plates. Top fish with 1 teaspoon of Citrus Herbed Butter and a generous pinch of Diamond Crystal® Coarse Sea Salt. Serve immediately."
                ],
                tags: [
                    "salmon"
                ],
                reviews: [
                    {
                        user: "Aja",
                        date: "11/05/2014",
                        rating: 4,
                        body: "I enjoyed this dish! The orange-herbed butter was pretty light and a refreshing compliment to the salmon. After marinating, I broiled it the 5 mins time and it was very moist! However, I couldn't escape the albumin that formed on the side of the salmon. I basted the cooked salmon afterwards with some of the butter I melted down with the juice and then I also topped it off with a dollop of the remaining butter mixture that I had set side and didn't melt down. What can I say - I love butter! I would definitely make this again, but will most likely play around with making the salmon skin extra crispy for more texture to this recipe."
                    }
                ]

            }
        ];

        // Url that is being intercepted
        var recipeUrl = "/api/recipes";

        // When there is a GET request on the recipeUrl(defined above, and in recipeResource) respond with the entire array of recipes (hard-coded above)
        $httpBackend.whenGET(recipeUrl).respond(recipes);

        var editingRegex = new RegExp(recipeUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var recipe = {"id": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0){
                for (var i = 0; i < recipes.length; i++){
                    if(recipes[i].id == id){
                        recipe = recipes[i];
                        break;
                    }
                };
            };
            return [200, recipe, {}];
        })

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

    });
}());