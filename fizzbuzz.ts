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

//CHALLENGE 2.3
export function validateFizzBuzz(playerAnswer: PlayerAnswer): ValidatedAnswer {
  if (!playerAnswer) {
    throw new Error("Function Not Implemented");
  }
  const correctAnswer: IFizzBuzz = fizzBuzz(playerAnswer.counter).playerAnswer;

  if (playerAnswer.playerAnswer === correctAnswer) {
    return {
      counter: playerAnswer.counter,
      correct: true,
      playerAnswer: playerAnswer.playerAnswer,
      correctAnswer: correctAnswer
    };
  } else {
    return {
      counter: playerAnswer.counter,
      correct: false,
      playerAnswer: playerAnswer.playerAnswer,
      correctAnswer: correctAnswer
    };
  }
}

//TEST
// console.log(validateFizzBuzz({ counter: 1, playerAnswer: 1 }));  // { counter: 1, correct: true, playerAnswer: 1, correctAnswer: 1 }
// console.log(validateFizzBuzz({ counter: 3, playerAnswer: 'Fizz' }));  // { counter: 3, correct: true, playerAnswer: 'Fizz', correctAnswer: 'Fizz' }
// console.log(validateFizzBuzz({ counter: 5, playerAnswer: 'Buzz' }));  // { counter: 5, correct: true, playerAnswer: 'Buzz', correctAnswer: 'Buzz' }
// console.log(validateFizzBuzz({ counter: 15, playerAnswer: 'Fizz Buzz' }));  // { counter: 15, correct: true, playerAnswer: 'Fizz Buzz', correctAnswer: 'Fizz Buzz' }
// console.log(validateFizzBuzz({ counter: 3, playerAnswer: 'Buzz' }));  // { counter: 3, correct: false, playerAnswer: 'Buzz', correctAnswer: 'Fizz' }
// console.log(validateFizzBuzz({ counter: 5, playerAnswer: 'Fizz' }));  // { counter: 5, correct: false, playerAnswer: 'Fizz', correctAnswer: 'Buzz' }

////CHALLENGE 2.4
export function isValidAnswer(validatedAnswer: ValidatedAnswer): boolean {
  if (!validatedAnswer) {
    throw new Error("Function Not Implemented");
  }

  if (validatedAnswer.correct === true) {
    return true;
  } else {
    return false;
  }
}

////TEST
// const validatedAnswer1 = validateFizzBuzz({ counter: 3, playerAnswer: 'Fizz' });
// console.log(isValidAnswer(validatedAnswer1));  // true

// const validatedAnswer2 = validateFizzBuzz({ counter: 3, playerAnswer: 'Buzz' });
// console.log(isValidAnswer(validatedAnswer2));  // false

