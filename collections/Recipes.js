Recipes = new Mongo.Collection ('recipes'); //must be low caps "recipes"

Recipes.allow ({
  insert(userId, doc) {
    return !!userId;
  }
});
Ingredient = new SimpleSchema ({
  name: {
    type: String,
    label: "Name"
  },
  amount: {
    type: String
  }
});

RecipeSchema = new SimpleSchema ({
    name: {
      type: String,
      label: "Name"
    },
    description: {
      type: String,
      label: "Description"
    },
    ingredients: {
      type: [Ingredient] //adds multiple
    },
    inMenu: {
      type: Boolean,
      defaultValue: false,
      optional: true,
      autoform: {
        type: "hidden"
      }
    },
    author: {
      type: String,
      label: "Author",
      autoValue(event) {
        return this.userId // adds user to recipe, restricts others to access
      },
      autoform: {
        type: "hidden"
      }
    },
    createdAt: {
      type: Date,
      label: "Created At",
      autoValue(event) {
        return new Date()
      },
      autoform: {
        type: "hidden"
      }
    }
});


Recipes.attachSchema(RecipeSchema);
