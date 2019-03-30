var widgets = require("@jupyter-widgets/base");
var _ = require("lodash");
var navio = require("navio");


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var NavioModel = widgets.DOMWidgetModel.extend({
  defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
    _model_name : "NavioModel",
    _view_name : "NavioView",
    _model_module : "navio-jupyter",
    _view_module : "navio-jupyter",
    _model_module_version : "0.0.1",
    _view_module_version : "0.0.1",
    _model_data : [],
    _view_opts : {},
    _view_height : 600,
    _model_selected : [],
  })
});


// Custom View. Renders the widget model.
var NavioView = widgets.DOMWidgetView.extend({
  render: function() {
    var height = this.model.get("_view_height");
    this.nv = new navio(this.el, height);
    var data = this.model.get("_model_data");
    this.nv.data(data);
    // Initially all is selected
    this.model.set("_model_selected", data);
    this.nv.addAllAttribs();


    this.nv.updateCallback(this.updateSelected.bind(this));

    this.opts_changed();
    this.data_changed();
    this.model.on("change:data", this.data_changed, this);
    this.model.on("change:opts", this.opts_changed, this);
  },

  data_changed: function() {
    var data = this.model.get("_model_data");
    console.log("Navio changed data", data);
    this.nv.data(data);

    this.nv.update();
  },

  opts_changed: function() {
    var opts = this.model.get("_view_opts");
    console.log("Navio changed opts", opts);
    for(var o in opts) {
      if (opts.hasOwnProperty(o)) {
        this.nv[o] = opts[o];
      }
    }

    this.nv.update();
  },

  updateSelected: function(selected) {
    this.model.set("_model_selected", selected);
    this.model.save_changes();
  }
});


module.exports = {
  NavioModel : NavioModel,
  NavioView : NavioView
};
