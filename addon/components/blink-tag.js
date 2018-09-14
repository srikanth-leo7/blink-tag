import Component from '@ember/component';
import layout from '../templates/components/blink-tag';

export default Component.extend({
  layout,
  tagName: 'h1',
  show: true,
  classNameBindings: ['show:invisible'],
  didInsertElement: function() {
    var self = this;
    setInterval(function() {
      self.toggleProperty('show');
    }, 300);
  }
});
