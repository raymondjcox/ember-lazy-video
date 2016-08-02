import Ember from 'ember';

const { Component, computed, run, get, set } = Ember;

export default Component.extend({
  isDisplayed: false,
  videoTitle: null,
  url: null,
  classNames: ['lazyLoad-container'],
  attributeBindings: ['style'],
  videoThumbnail: null,
  poster: null,

  didInsertElement() {
    run.scheduleOnce('afterRender', this.updateThumbnail.bind(this));
  },

  click() {
    set(this, 'isDisplayed', true);
  },

  updateThumbnail() {
    let {
      providers,
      url,
      poster
    } = this.getProperties('providers', 'url', 'poster');

    if (poster) {
      set(this, 'videoThumbnail', poster);
    } else {
      providers.getThumbnailUrl(url).then((res) => {
        set(this, 'videoThumbnail', res);
      });
    }
  },

  videoSrc: computed('url', function() {
    let providers = get(this, 'providers');
    let url = get(this, 'url');
    return providers.getUrl(url, 'embedUrl', { autoplay: 1 });
  }),

  style: computed('videoThumbnail', function() {
    let url = get(this, 'videoThumbnail');
    return new Ember.String.htmlSafe(`background-image: url(${url})`);
  })
});
