// Объяви функцию-конструктор Car которая принимает три параметра:

//     brand - марка автомобиля.
//     model - модель автомобиля.
//     price - цена автомобиля.

// Функция Car должна создавать объект с одноимёнными свойствами brand, model и price,
// значениями которых должны быть переданные аргументы во время её вызова с оператором new.

function Car(brand, model, price) { 
this.brand = brand;
this.model = model;
this.price = price;
};


console.log(new Car('Audi', 'Q3', 36000)); // { brand: 'Audi', model: 'Q3', price: 36000 }.
console.log(new Car('BMW', 'X5', 58900)); // { brand: 'BMW', model: 'X5', price: 58900 }.
console.log(new Car('Nissan', 'Murano', 31700)); // { brand: 'Nissan', model: 'Murano', price: 31700 }.