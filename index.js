/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
const man = {
  species: 'human',
  gender: 'male',
  name: 'John',
  age: 28,
  hands: 2,
  legs: 2,
  hobby: 'fishing',
  speack: () => {
    console.log('Hello, people!');
  }
};

const woman = {
  species: 'human',
  gender: 'female',
  name: 'Anny',
  age: 23,
  hands: 2,
  legs: 2,
  hobby: 'cycling',
  speack: () => {
    console.log('Hello, everybody!');
  }
};

const dog = {
  species: 'dog',
  gender: 'male',
  name: 'Rex',
  age: 3,
  hands: 0,
  legs: 4,
  hobby: 'dig in bones',
  speack: () => {
    console.log('Wohw!');
  }
};

const cat = {
  species: 'cat',
  gender: 'female',
  name: 'Sida',
  age: 1.5,
  hands: 0,
  legs: 4,
  hobby: 'sleap',
  speack: () => {
    console.log('Meow!');
  }
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
