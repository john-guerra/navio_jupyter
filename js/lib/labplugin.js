var navio_jupyter = require("./index");
var base = require("@jupyter-widgets/base");

module.exports = {
  id: "navio-jupyter",
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
    widgets.registerWidget({
      name: "navio-jupyter",
      version: navio_jupyter.version,
      exports: navio_jupyter
    });
  },
  autoStart: true
};

