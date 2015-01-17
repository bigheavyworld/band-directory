
Meteor.publish('bands', function() {
  return Bands.find();
});

