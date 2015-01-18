Meteor.subscribe('bands');

Template.add.events({
  "submit .new-band": function (event) {
    event.preventDefault();
    var form = event.target;
    var band_name = form.band_name.value; 
      
    if (band_name !== "") {
      Bands.insert({
        band_name: band_name,
        city: event.target.city.value,
        state: event.target.state.value
      });
    }

    form.reset();
  },
  "click .cancel": function(event) {
    Session.set("add", false);
  }
});

Template.home.events({
  'click .add-band': function() {
    Session.set("add", true);
  },
  'click .delete': function() {
    Bands.remove(this._id);
  },
});

Template.home.helpers({
  bands: function () {
    return Bands.find({}, {sort: {band_name: 1}});
  },
  addform: function() {
    return Session.get("add");
  }
});

