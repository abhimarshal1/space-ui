import Component from '@ember/component';
import layout from '../templates/components/s-modal';
import {
  computed
} from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['s-modal'],
  isVisible: true,
  showFooter: computed('onCancel', 'onOK', function(){
    if (this.get('onCancel') || this.get('onOK')) {
      return true;
    }
    return false;
  }),
  actions: {
    onCancelAction() {
      this.set('isVisible', false);
      if (this.get('onCancel')) {
        this.get('onCancel')();
      }
    }
  }

});
