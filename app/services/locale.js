import Service, { inject as service } from '@ember/service'
import Evented from '@ember/object/evented';


export default Service.extend(Evented, {
  intl: service(),
  storage: service(),

  init() {
    this._super(...arguments);
  },

  getLocale() {
    return this.storage.getLocale();
  },

  setLocale(locale) {
    this.storage.saveLocale(locale);
    this.intl.setLocale([locale]);
    console.log(locale);
    this.trigger('localeChanged', locale);
  }
});
