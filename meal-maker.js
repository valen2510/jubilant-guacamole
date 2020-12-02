// Randomly create a three-course meal based on what is available on a menu.
// menu object.
const menu = {

    // _courses property that cointains the dishes available by parts.
    _courses: {
      // properties of _courses object are the meal parts: appetizers, mains and desserts.
      appetizers: [],
      mains: [],
      desserts: []
    },
    // getters and setters for the meal parts:
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizer) {
      this._courses.appetizers.push(appetizer);
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(main) {
      this._courses.mains.push(main);
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessert) {
      this._courses.desserts.push(dessert);
    },
    //getter for the _courses property
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    // addDishToCourse method to add dishes at the specified course or meal part.
    addDishToCourse(courseName, dishName, dishPrice) {
      // Declaring a new object to store dish name and price, that will be set at the specified meal part property (appetizer or mains or dessert).
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this[courseName] = dish; 
    },
    // getRandomDishFromCourse method to retrieve a dish from a course on the menu object.
    getRandomDishFromCourse(courseName) {
      //  dishes variable to get array of the dishes at the given meal part (appetizer or mains or dessert).
      const dishes = this._courses[courseName];
    // Returning a random dish of the array by a random index.
      return dishes[Math.floor(Math.random() * dishes.length)];
    },
    // generateRandomMeal method to generate a three-course meal with the price. 
    generateRandomMeal() {
      // Use getRandomDishFromCourse methos to get a dish of every meal part (appetizer, mains and dessert)
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      // Calculate the total price of every dish
      const totalPrice = appetizer.price + main.price + dessert.price;
      // Retrieve complete meal with price.
      return `The meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total cost of this meal is $${totalPrice}`;
    
    }
  };
  
  // Adding 3 dishes to each course or meal part ((appetizer, mains and dessert)).
  menu.addDishToCourse('appetizers', 'Spinach and artichoke dip', 3.50);
  menu.addDishToCourse('appetizers', 'Nachos and Guacamole', 2.25);
  menu.addDishToCourse('appetizers', 'Baked brie bites', 3.00);
  menu.addDishToCourse('mains', 'Mondongo', 4.50);
  menu.addDishToCourse('mains', 'Cardamom Maple Salmon', 6.25);
  menu.addDishToCourse('mains', 'Vietnamise Porkchops', 4.75);
  menu.addDishToCourse('desserts', 'Cheesecake with cranberry glaze', 2.75);
  menu.addDishToCourse('desserts', 'Refreshing peach cups', 2.50);
  menu.addDishToCourse('desserts', 'Tiramisu chocolate mousse', 3.25);

  //Visualizing the courses at the menu.
  //console.log(menu.courses);
  
  // generate random meal and log it.
  const meal = menu.generateRandomMeal();
  console.log(meal);
  