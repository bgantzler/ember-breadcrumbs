import Route from '@ember/routing/route';

export default class NoTitleFooBarRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }
}
