import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';

Meteor.startup(() => {
  // code to run on server at startup
}); 


Meteor.publish('name', () => {
  return socialdb.find({},  {
  fields:{fname: 1 } 
  });
}); 

