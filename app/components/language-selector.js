import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  tagName: "div",
  classNames: [],
  locale: service(),
  defaultLocale: "es-ar",
  locales: [
    { name: "Español", value: "es-ar" },
    { name: "English", value: "en-us" },
  ],

  didRender() {
    this.set("defaultLocale", this.locale.getLocale());
  },

  actions: {
    selectLocale(locale) {
      this.locale.setLocale(locale);
    },
  },
});
