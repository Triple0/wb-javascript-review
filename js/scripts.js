/**
 * Declaring variables.
 * 
 * VAR (THINK THIRD: Can I use var!?)
 *  - Function-Scoped
 * 
 * LET (THINK SECOND: Can I use let!?)
 *  - Block-Scoped
 * 
 * CONST (THINK FIRST: Can I use const!?)
 *  - Block-Scoped
 *  - Cannot be re-assigned
 *  - Note: that for arrays or objects,
 *    properties and elements can be
 *    added, removed, or changed
 * 
 */

// const myVar = 3 * 38; // Evaluation assignment is okay!
                         // Just remember we can't re-assign the variable.

/**
 * Arrays.
 * 
 * In JavaScript, even arrays are treated as an object.
 * Array has a property called .length
 */

const seasons = [ 'summer', 'autumn', 'winter', 'spring' ];
// seasons = ['newseasons']; // TypeError: invalid assignment to const `seasons'
                             // CANNOT REASSIGN CONST VARIABLES!

/**
 * .push()
 * Adds an element to the end of your array.
 */
seasons.push( 'construction' );

console.log( seasons );

/**
 * .pop()
 * Remove the last element in an array (and return the value.)
 */
const myLastSeasonValue = seasons.pop();

console.log( 'Last item: ' + myLastSeasonValue + '.' );
console.log( seasons );

/**
 * .splice( index, numberOfElementsToReplace, newElement )
 * index: The position you are inserting to.
 * numberofElementsToReplace: How many elements should "disappear"
 *                            to make room.
 * newElement: The new element that needs to be added to the array.
 */

seasons.splice( 0, 1, 'construction' ); // Remove summer; add construction.

console.log( seasons );

seasons.splice( 1, 1 ); // Remove autumn. // Returns what was removed.

console.log( seasons );

seasons.pop(); // Remove spring. // Only removes last item in array.

console.log( seasons );

// Other replacement is the ol' fashioned:
seasons[1] = 'construction'; // Replace "winter" with "construction."

console.log( seasons );


