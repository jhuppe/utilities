/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    var sliced = array.slice(0, n);
    if(n === undefined){
      return array[0];
    }
    else {
     return(sliced);
    }
  }

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    var negative = (n * (-1));
    var newArray = array.slice(negative);
    if (n === undefined){
      return array.slice(-1)[0];
    }
    else if (n === 0){
      return [];
    }
    else {
      return newArray;
    }
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {

    if(Array.isArray(collection)){
      for(var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }
    else {
      for(var key in collection) {
        iterator(collection[key], key, collection)
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
     for(var i = 0; i < array.length; i++){
       if (array[i] === target){
         return i;
       }

    }
    return -1;
  };

  // Return all elements of an array that pass a truth test ('iterator' function argument)
  _.filter = function(collection, iterator) {
    var newArray = [];
    for(var i = 0; i < collection.length; i++) {
      if (iterator(collection[i])) {
        newArray.push(collection[i]);
      }
    }
    return newArray;
  };

  // Return all elements of an array that don't pass a truth test (the 'iterator' function argument)
  _.reject = function(collection, iterator) {
    var newArray = [];
    for(var i = 0; i < collection.length; i++) {
      if (!iterator(collection[i])) {
        newArray.push(collection[i]);
      }
    }
    return newArray;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
      if(newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
      } else {
        console.log('This is a duplicate.')
      }
    }
    return newArray;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    var newArray = [];
     for(var i = 0; i < array.length; i++){
      var newValue = iterator(array[i])
        newArray.push(newValue);
     }
     return newArray;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
      newArray.push(array[i][propertyName]);
    }
    return newArray;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
    var newArray = [];
    for (var i = 0; i < list.length; i++){
      if (typeof(methodName) === 'string') {
        newArray.push(list[i][methodName]())
      } else {
        newArray.push(methodName.call(list[i]))
      }
    }
    return newArray;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    var reduced = 0;
    for (var i = 0; i < collection.length - 1; ++i) {
      reduced = iterator(reduced, collection[i])
    }
    return reduced;

  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    if(collection.indexOf(target)!== -1){
      return true;
    }
    else {
      return false;
    }
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
