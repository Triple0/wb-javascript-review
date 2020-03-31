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

/**
 * .concat()
 * Merges two arrays.
 */

const originalSeasons = [
  'summer',
  'autumn',
  'winter',
  'spring'
];

const allSeasons = seasons.concat( originalSeasons ); // Merges our two arrays.
console.log( allSeasons );

/**
 * Class (object blueprint)
 */

class Product { // We are defining the name of the class (TYPE of OBJECT.)
  // Constructor method runs IMMEDIATELY on instantiation.
  constructor ( name = 'Product', price = 0.00, category = 'uncategorized' )
  { // Here is where we set up our class/object properties.
    this.name = name;
    this.price = Number( price );
    this.category = category;
  }
  // A new method for the Product objects.
  output ( element = null )
  {
    // Make sure something was passed in.
    if ( element !== null )
    {
      // Populate the element.
      element.innerHTML += `
        <dl><!-- This is dynamic HTML! Wow! -->
          <dt>Name:</dt>
          <dd>${this.name}</dd><!-- Template literal: output JS variable value in a multi-line string (\`\`). -->
          <!-- Otherwise we need to do concatenation! -->
          <dt>Category:</dt>
          <dd>${this.category}</dd>
          <dt>Price:</dt>
          <dd>${this.price}</dd>
        </dl>
      `;
    }
  }
}

const myFirstProduct = new Product();
console.log( myFirstProduct );

const aPartialProduct = new Product( 'Named Product', 16.55 );
console.log( aPartialProduct );
