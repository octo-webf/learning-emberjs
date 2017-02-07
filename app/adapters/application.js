import DS from 'ember-data';

export default DS.Adapter.extend({
  host: 'http://titi.com',
  namespace: '/api'
});
