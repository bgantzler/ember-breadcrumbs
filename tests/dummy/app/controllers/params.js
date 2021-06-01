import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ParamsController extends Controller {
  @service store;

  get foo() {
    return this.store.peekRecord('record', 'f1');
  }

  get bar() {
    return this.store.peekRecord('record', 'b1');
  }
}
