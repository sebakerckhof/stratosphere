Meteor.publish('nbPackages', function() {
    Stratosphere.utils.checkAccess();
    Counts.publish(this, 'nbPackages', Packages.find({/*hidden:false,*/private:true}));
});