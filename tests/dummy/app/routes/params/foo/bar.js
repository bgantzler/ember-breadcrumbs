import Route from '@ember/routing/route';

export default class ParamsFooBarRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }

  model(params) {
    return { id: params.id, name: `${params.id} name from hook`};
  }

}
