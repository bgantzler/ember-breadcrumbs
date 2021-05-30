import Route from '@ember/routing/route';

export default class TitleFooRoute extends Route {
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {
        title: 'foo-title',
      },
    };
  }
}
