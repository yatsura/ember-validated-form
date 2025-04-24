"use strict";

module.exports = {
  name: require("./package").name,

  included(...args) {
    this._super.included.apply(this, ...args);

    const app = this._findHost(this);

    const {
      theme = null,
      scrollErrorIntoView = false,
      defaults = {},
    } = app.options["ember-validated-form"] ?? {};

    // Theming options
    this.options["@embroider/macros"].setOwnConfig.isDefault = ![
      "uikit",
      "bootstrap",
    ].includes(theme);
    this.options["@embroider/macros"].setOwnConfig.isUikit = theme === "uikit";
    this.options["@embroider/macros"].setOwnConfig.isBootstrap =
      theme === "bootstrap";

    // Features
    this.options["@embroider/macros"].setOwnConfig.scrollErrorIntoView =
      scrollErrorIntoView;

    // Component defaults
    this.options["@embroider/macros"].setOwnConfig.error =
      defaults.error ?? "validated-input/error";
    this.options["@embroider/macros"].setOwnConfig.hint =
      defaults.hint ?? "validated-input/hint";
    this.options["@embroider/macros"].setOwnConfig.label =
      defaults.label ?? "validated-input/label";
    this.options["@embroider/macros"].setOwnConfig.render =
      defaults.render ?? "validated-input/render";
    this.options["@embroider/macros"].setOwnConfig.button =
      defaults.button ?? "validated-button/button";
    this.options["@embroider/macros"].setOwnConfig["types/checkbox-group"] =
      defaults["types/checkbox-group"] ??
      "validated-input/types/checkbox-group";
    this.options["@embroider/macros"].setOwnConfig["types/checkbox"] =
      defaults["types/checkbox"] ?? "validated-input/types/checkbox";
    this.options["@embroider/macros"].setOwnConfig["types/input"] =
      defaults["types/input"] ?? "validated-input/types/input";
    this.options["@embroider/macros"].setOwnConfig["types/radio-group"] =
      defaults["types/radio-group"] ?? "validated-input/types/radio-group";
    this.options["@embroider/macros"].setOwnConfig["types/select"] =
      defaults["types/select"] ?? "validated-input/types/select";
    this.options["@embroider/macros"].setOwnConfig["types/textarea"] =
      defaults["types/textarea"] ?? "validated-input/types/textarea";
    this.options["@embroider/macros"].setOwnConfig["types/date"] =
      defaults["types/date"] ?? "validated-input/types/date";
  },

  options: {
    "@embroider/macros": {
      setOwnConfig: {},
    },
  },
};
