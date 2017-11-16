import Ember from 'ember';

const Scrolling = Ember.Mixin.create({
  bindScrolling: function(opts) {
    let onScroll, _this = this;

    onScroll = function() {
      return _this.scrolled();
    };

    console.log('test');

    // $(document).bind('touchmove', onScroll);
    // $(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    // $(window).unbind('scroll');
    // $(document).unbind('touchmove');
  }
});

export default Ember.Controller.extend(Scrolling, {
  classNameBindings: ['isActivated'],
  isActivated: true,

  actions: {

  }
});
