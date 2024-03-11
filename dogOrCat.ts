//DOG OR CAT CHALLENGE

//CONSTANTS
const CatBreeds = ["Persian", "British Shorthair", "Abyssinian", "Sphynx"];

type Cats = typeof CatBreeds[number];

const DogBreeds = ["Golden Retriever", "Poodle", "Bulldog", "Beagle"];

type Dogs = typeof DogBreeds[number];

class Animal {
  private breed: Cats | Dogs;
  constructor(breed: Cats | Dogs) {
    this.breed = breed;
  }
}

class Cat extends Animal {
  constructor(breed: Cats) {
    super(breed);
  }
  meow(): "Meow" {
    return `Meow`;
  }
}

class Dog extends Animal {
  constructor(breed: Dogs) {
    super(breed);
  }
  bark(): "Bark" {
    return `Bark`;
  }
}
//////

//CHALLENGE 1.1
type IDogOrCat = Cat | Dog; 

//CHALLENGE 1.2
//returns IDogOrCat based on Breed (ie. includes)
  export function dogOrCat(breed: Cats | Dogs): IDogOrCat {
    if (CatBreeds.includes(breed)) {
      return new Cat(breed);
    } else if (DogBreeds.includes(breed)) {
      return new Dog(breed);
    } else {
      throw new Error("Breed not recognized");
    }
  }

// TEST
// const animal = dogOrCat('Abyssinian');
// console.log("this animal is", animal);
//////

//CHALLENGE 1.3
//does it bark or meow?
export function barkOrMeow(dogOrCat: IDogOrCat): "Bark" | "Meow" {
    if ((dogOrCat as Dog).bark) {
        return (dogOrCat as Dog).bark();
    } 
    else if ((dogOrCat as Cat).meow) {
        return (dogOrCat as Cat).meow();
    } 
    else {
        throw new Error("Function Not Implemented - Animal type not recognized");
    }
}

// TEST
// const animal = dogOrCat('Sphynx');// Call the barkOrMeow function with the animal
// console.log("this animal is", animal);
// const sound = barkOrMeow(animal);
// console.log("it makes a", sound);
//////

//CHALLENGE 1.4
export function dogOrCatMatch<T>(
    dogOrCat: IDogOrCat,
    match: {
      cat: (cat: Cat) => T;
      dog: (dog: Dog) => T;
    }
  ): T {
    if ((dogOrCat as Dog).bark) {
      return match.dog(dogOrCat as Dog);
    } 
    else if ((dogOrCat as Cat).meow) {
      return match.cat(dogOrCat as Cat);
    } 
    else {
      throw new Error("Function Not Implemented - Animal type not recognized");
    }
  }

//TEST

// Define the match functions
/*
const match = {
    dog: (dog: Dog) => 'dog function called',
    cat: (cat: Cat) => 'cat function called',
  };
const animal = dogOrCat('Persian');// Call the dogOrCat function with a breed of a dog or a cat
const result = dogOrCatMatch(animal, match);// Then call the dogOrCatMatch function with the animal and the match functions
console.log(result);
*/
//////

//CHALLENGE 1.5
export function DogOrCatMatchBarkOrMeow(dogOrCat: IDogOrCat): "Bark" | "Meow" {
    return dogOrCatMatch(dogOrCat, {
      dog: (dog) => "Bark",
      cat: (cat) => "Meow",
    });
  }
  
  function main() {
    const animal = dogOrCat('Abyssinian');
    console.log(DogOrCatMatchBarkOrMeow(animal));
  }
  
  main();