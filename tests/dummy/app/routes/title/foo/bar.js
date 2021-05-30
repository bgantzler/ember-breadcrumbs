import Route from '@ember/routing/route';

export default class TitleFooBarRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {
        title: 'bar-title',
      },
    };
  }
}
