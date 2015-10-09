Meteor.publish('stratosphere/releaseTrack', function(track) {
  try{
    Stratosphere.utils.checkAccess();
    check(track,String);

    return [
      ReleaseTracks.find({name:track}),
      ReleaseVersions.find({track:track},{sort:{versionMagnitude:-1},limit:5,fields:{track:1,versionMagnitude:1,version:1,lastUpdated:1,publishedBy:1,recommended:1}})
    ];
  }catch(e){
    return [];
  }

});