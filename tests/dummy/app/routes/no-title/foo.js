import Route from '@ember/routing/route';

export default class NoTitleFooRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }
}
