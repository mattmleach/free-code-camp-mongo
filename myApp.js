let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

var Person /* = <Your Model> */

var createAndSavePerson = function(done) {
  
  done(null /*, data*/);

};

var createManyPeople = function(arrayOfPeople, done) {
    
    done(null/*, data*/);
    
};

var findPeopleByName = function(personName, done) {
  
  done(null/*, data*/);

};

var findOneByFood = function(food, done) {

  done(null/*, data*/);
  
};

var findPersonById = function(personId, done) {
  
  done(null/*, data*/);
  
};

var findEditThenSave = function(personId, done) {
  var foodToAdd = 'hamburger';
  
  done(null/*, data*/);
};

var findAndUpdate = function(personName, done) {
  var ageToSet = 20;

  done(null/*, data*/);
};

var removeById = function(personId, done) {
  
  done(null/*, data*/);
    
};

var removeManyPeople = function(done) {
  var nameToRemove = "Mary";

  done(null/*, data*/);
};

var queryChain = function(done) {
  var foodToSearch = "burrito";
  
  done(null/*, data*/);
};

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
