import Model, { attr } from '@ember-data/model';

export default class RecordModel extends Model {
  @attr() name;
}
