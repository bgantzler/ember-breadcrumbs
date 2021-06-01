import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ParamsFooRoute extends Route {
  @service store;
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }

  model(params) {
    console.log('foo model', params);
    return this.store.peekRecord('record', params.foo_id);
  }
}
