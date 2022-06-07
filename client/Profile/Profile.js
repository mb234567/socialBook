Meteor.subscribe("name");

Template.profile.helpers({
    profiles(){
        return socialdb.find();
    }
});