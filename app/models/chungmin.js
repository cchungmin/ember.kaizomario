import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  posiiton: DS.attr('string'),
  user: DS.attr('string')
});
