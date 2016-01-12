import Ember from 'ember';

export default {
  embedUrl: function(videoId) {
    return 'https://instagram.com/p/' + videoId + '/embed';
  },
  thumbnailUrl: function(videoId) {
    return Ember.RSVP.resolve('https://instagram.com/p/' + videoId + '/media/?size=l');
  }
};
