import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ParamsFooBarRoute extends Route {
  @service store;
  buildRouteInfoMetadata() {
    return {
      breadcrumb: {},
    };
  }

  model(params) {
    console.log('bar model', params);
    return this.store.peekRecord('record', params.bar_id);
  }
}
