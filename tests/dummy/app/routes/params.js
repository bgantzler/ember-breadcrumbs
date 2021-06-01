import Route from '@ember/routing/route';

export default class ParamsRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }
}
