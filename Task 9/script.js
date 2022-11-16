/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(titleIn, directorIn, budgetIn) {
    this.title = titleIn;
    this.director = directorIn;
    this.budget = budgetIn;
    this.wasExpensive = this.wasExpensive();
  }
  wasExpensive() {
    return this.budget > 100e6;
  }
}
let Inception = new Movie("Inception", "Christopher Nolan", 160e6);
let RandomMovie = new Movie("RandomMovie", "Peter Stevenson", 10e6);

console.log("Inception ===", Inception);
console.log("RandomMovie ===", RandomMovie);
