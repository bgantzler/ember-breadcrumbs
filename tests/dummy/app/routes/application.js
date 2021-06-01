import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  beforeModel() {
    this.store.pushPayload({
      records: [
        { id: 'f1', name: 'foo name' },
        { id: 'b1', name: 'bar name' },
      ],
    });
  }
}
