import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('no-title', function () {
    this.route('foo', function () {
      this.route('bar', function () {
        this.route('baz');
      });
    });
  });
  this.route('title', function () {
    this.route('foo', function () {
      this.route('bar', function () {
        this.route('baz');
      });
    });
  });
  this.route('params', function () {
    this.route('foo', { path: 'foo/:foo_id' }, function () {
      this.route('bar', { path: 'bar/:bar_id' }, function () {
        this.route('baz');
      });
    });
  });
});
