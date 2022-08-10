/**
const person = {
  name: "John",
  age: 25,
};
console.log(person);
*/

/**
const personTwo = new Object({
  name: "Jane",
  age: 26,
});
console.log(personTwo);
*/

/**
    Object.create()
    Object.assign()
    Object.defineProperties()
    Object.defineProperty()
    Object.entries()
    Object.freeze()
    Object.getPrototypeOf()
    Object.hasOwn()
    Object.is()
    Object.isFrozen()
    Object.isSealed()
    Object.keys()
    Object.seal()
    Object.values()
 */

/**
    The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
}

const child = Object.create(parent)
// child.name = 'Ryan'
// child.age = 7

// console.log(child.name) // Ryan
// console.log(child.age) // 7
// console.log(child.heritage) // Irish

 */

/**
Object.hasOwn(parent, 'name')
 */

/**
Object.defineProperty(child, 'gender', {value: 'Male'})
 */

/**
const obj1 = {a: 1, b: 2};
const obj2 = {c: 4}

Object.assign(obj1, obj2);
 */

/**
Object.keys(obj1)

Object.values(obj1)

Object.entries(obj1)
 */

/**
Object.freeze(obj1)
obj.a = 5

Object.isFrozen(obj1)

Object.isExtensible(obj1)
 */