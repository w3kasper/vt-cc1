//FIZZBUZZ
//CONSTANTS
 type IFizzBuzz = number | "Fizz" | "Buzz" | "Fizz Buzz";
 
 export type PlayerAnswer = {
   counter: number;
   playerAnswer: IFizzBuzz;
 };
 
 type ValidAnswer = {
   counter: number;
   correct: true;
   playerAnswer: IFizzBuzz;
   correctAnswer: IFizzBuzz;
 };
 
 type InvalidAnswer = {
   counter: number;
   correct: false;
   playerAnswer: IFizzBuzz;
   correctAnswer: IFizzBuzz;
 };
 
 export type ValidatedAnswer = ValidAnswer | InvalidAnswer;
 
 type ValidatedFizzBuzzGame = {
   losingTurn?: InvalidAnswer;
   turns: Array<ValidatedAnswer>;
   playedCorrectly: boolean;
 };
 
 export type FizzBuzzGame = Array<PlayerAnswer>;
 
 const base1 = 3;
 const base2 = 5;
 
//CHALLENGE 2.1
export function fizzBuzz(input: number): PlayerAnswer {
    let playerAnswer: IFizzBuzz;

    if (input < 0) {
        throw new Error("Function Not Implemented");
      }

    if (input % base1 === 0 && input % base2 === 0) {
        playerAnswer = "Fizz Buzz";
    } else if (input % base1 === 0) {
        playerAnswer = "Fizz";
    } else if (input % base2 === 0) {
        playerAnswer = "Buzz";
    } else {
        playerAnswer = input;
    }

    return {
        counter: input,
        playerAnswer: playerAnswer
    };
}

  //TEST
//   console.log(fizzBuzz(1));
//   console.log(fizzBuzz(3));
//   console.log(fizzBuzz(5));
//   console.log(fizzBuzz(12));
//   console.log(fizzBuzz(15));
//   console.log(fizzBuzz(20));
//   console.log(fizzBuzz(22));

//CHALLENGE 2.2
//checks to see if both the counter and playerAnswer properties of answer1 and answer 2 are equal
//counter is from player answer
export function equal(answer1: PlayerAnswer, answer2: PlayerAnswer): boolean {
    if (!answer1 || !answer2) {
        throw new Error("Function Not Implemented");
      }

    return answer1.counter === answer2.counter && answer1.playerAnswer === answer2.playerAnswer;
  }

// console.log(equal({ counter: 1, playerAnswer: 1 }, { counter: 1, playerAnswer: 1 })); //true
// console.log(equal({ counter: 3, playerAnswer: 'Fizz' }, { counter: 3, playerAnswer: 'Fizz' }));  // true
// console.log(equal({ counter: 5, playerAnswer: 'Buzz' }, { counter: 5, playerAnswer: 'Buzz' }));  // true
// console.log(equal({ counter: 15, playerAnswer: 'Fizz Buzz' }, { counter: 15, playerAnswer: 'Fizz Buzz' }));  // true
// console.log(equal({ counter: 1, playerAnswer: 1 }, { counter: 2, playerAnswer: 2 }));  // false
// console.log(equal({ counter: 3, playerAnswer: 'Fizz' }, { counter: 3, playerAnswer: 'Buzz' }));  // false