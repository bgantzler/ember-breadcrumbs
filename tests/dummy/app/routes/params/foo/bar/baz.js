import Route from '@ember/routing/route';

export default class ParamsFooBarBazRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }
}
