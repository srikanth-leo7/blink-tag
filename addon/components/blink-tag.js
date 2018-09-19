import Component from '@ember/component';
import layout from '../templates/components/blink-tag';

export default Component.extend({
  layout,
  tagName: 'h1',
  show: true,
  handle: '',
  classNameBindings: ['show:invisible'],
  didInsertElement: function() {
    var self = this;
    this.set('handle', setInterval(function() {
      self.toggleProperty('show');
    }, 300));
  },
  willDestroy() {
    clearInterval(this.handle);
    this._super(...arguments);
  }
});
