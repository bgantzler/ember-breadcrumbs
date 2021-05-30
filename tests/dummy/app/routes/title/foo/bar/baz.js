import Route from '@ember/routing/route';

export default class TitleFooBarBazRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {
        title: 'baz-title',
      },
    };
  }
}
