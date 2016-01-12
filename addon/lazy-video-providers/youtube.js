import Ember from 'ember';

export default {
  apiUrl: function(videoId) {
    return 'https://gdata.youtube.com/feeds/api/videos/' + videoId;
  },
  embedUrl: function(videoId) {
    return 'https://www.youtube.com/embed/' + videoId;
  },
  thumbnailUrl: function(videoId) {
    return Ember.RSVP.resolve('https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg');
  }
};
