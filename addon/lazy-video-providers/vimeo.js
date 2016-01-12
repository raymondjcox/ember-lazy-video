import Ember from 'ember';

export default {
  apiUrl: function(videoId) {
    return 'https://vimeo.com/api/oembed.json?url=http%3A//vimeo.com/' + videoId;
  },
  embedUrl: function(videoId) {
    return 'https://player.vimeo.com/video/' + videoId;
  },
  thumbnailUrl: function(videoId) {
    var apiUrl = this.apiUrl(videoId);
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.getJSON(apiUrl).then(function(res) {
        resolve(res.thumbnail_url);
      });
    });
  }
};
