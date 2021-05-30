import Route from '@ember/routing/route';

export default class NoTitleFooBarBazRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }
}
