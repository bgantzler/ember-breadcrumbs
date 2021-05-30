import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { create } from 'ember-cli-page-object';

let page = create({
  home: { scope: '[data-test-home]' },
  foo: { scope: '[data-test-foo]' },
  bar: { scope: '[data-test-bar]' },
  baz: { scope: '[data-test-baz]' },
});

module('Acceptance | breadcrumbs', function (hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:EmberBreadcrumbs@breadcrumbs');
  });

  module('Breadcrumbs properties', function () {
    test('visiting', async function (assert) {
      await visit('/title/foo/bar/baz');
      let crumbs = this.service.crumbs;
      assert.equal(crumbs[0].title, 'foo-title', 'title for foo');
      assert.equal(crumbs[1].title, 'bar-title', 'title for bar');
      assert.equal(crumbs[2].title, 'baz-title', 'title for baz');

      assert.equal(crumbs[1].routeName, 'title.foo.bar', 'routeName');
      assert.equal(crumbs[1].routeLocalName, 'bar', 'routeLocalName');
      assert.equal(
        Object.keys(crumbs[1].routeParams).length,
        0,
        'route Params'
      );
      assert.equal(
        Object.keys(crumbs[1].routeQueryParams).length,
        0,
        'routeQueryParams'
      );
    });
  });

  module('No Title, assumes route name', function () {
    test('visiting', async function (assert) {
      await visit('/no-title');
      let crumbs = this.service.crumbs;
      assert.equal(crumbs.length, 0, 'No title length');

      await visit('/no-title/foo');
      crumbs = this.service.crumbs;
      assert.equal(crumbs.length, 1, 'foo length');
      assert.equal(crumbs[0].title, 'foo', 'title for foo');

      await visit('/no-title/foo/bar');
      crumbs = this.service.crumbs;
      assert.equal(crumbs.length, 2, 'bar length');
      assert.equal(crumbs[1].title, 'bar', 'title for bar');

      await visit('/no-title/foo/bar/baz');
      crumbs = this.service.crumbs;
      assert.equal(crumbs.length, 3, 'baz length');
      assert.equal(crumbs[2].title, 'baz', 'title for baz');
    });
  });

  module('Params route and query', function () {
    test('visiting', async function (assert) {
      await visit('/params/f1/b2/baz');
      let crumbs = this.service.crumbs;
      assert.equal(crumbs.length, 3, 'baz length');
      assert.equal(crumbs[2].title, 'baz', 'title for baz');
    });

    test('linking with models', async function (assert) {
      await visit('/params');
      await page.baz.click();
      let crumbs = this.service.crumbs;
      debugger;
      assert.equal(crumbs.length, 3, 'baz length');
      assert.equal(crumbs[2].title, 'baz', 'title for baz');
    });
  });
});
