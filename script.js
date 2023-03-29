'use strict';

class Car {
  constructor(model, owner, cost, town) {
  this.model = model;
  this.owner = owner;
  this.cost = cost;
  this.town = town;
  }
  }
   
  const volvo = new Car('Volvo sx 300', 'Magnus Stein', 18000, 'Stockholm');
  const mercedez = new Car('Mercedez Benz', 'Ludwig Klauph', 12000, 'Berlin');
  const fiat = new Car('Fiat Tipo', 'Antonio Mazorelli', 8000, 'Rome');
  const seat= new Car('Seat Arona', 'Sebastian Anrea', 9000, 'Madrid');
   
  const cars = [volvo, mercedez, fiat, seat];
   
  document.querySelector('.container').innerHTML = `<table class='table'></table>`
   
  for(let i = 0; i < cars.length; i++) {
  let row = document.createElement('tr');
  row.innerHTML = `<td>${cars[i].model}</td><td>${cars[i].owner}</td><td>${cars[i].cost}</td><td>${cars[i].town}</td>`;
  document.querySelector('.table').appendChild(row);
  }
 
  
  