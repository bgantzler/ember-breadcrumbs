import Controller from '@ember/controller';

export default class ParamsController extends Controller {
  get foo() {
    return {
      id: 'f1',
      name: 'foo name',
    };
  }

  get bar() {
    return {
      id: 'b1',
      name: 'bar name',
    };
  }
}
