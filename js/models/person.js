var Person = DS.Model.extend({

  name: DS.attr('string'),

  age: DS.attr('number'),

  street: DS.attr('string'),

  city: DS.attr('string'),

  state: DS.attr('string'),

  zipcode: DS.attr('number')

});

module.exports = Person;

