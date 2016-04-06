import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects');
  this.route('home', { path: '/' });
  this.route('messages');
  this.route('myprojects');
});

export default Router;
