import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "div",
  classNames: [],
  storage: service(),
  intl: service(),
  locale: "es-ar",
  locales: [
    { name: "Español", value: "es-ar" },
    { name: "English", value: "en-us" },
  ],

  didRender() {
    this.set("locale", this.storage.getLocale());
  },

  actions: {
    selectLocale(locale) {
      this.storage.saveLocale(locale);
      console.log("setting locale:", locale);
      this.intl.setLocale([locale]);
    },
  },
});
