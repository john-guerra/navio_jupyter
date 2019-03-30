import ipywidgets as widgets
from traitlets import Unicode, default, List, Integer, Dict

@widgets.register
class navio(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('NavioView').tag(sync=True)
    _model_name = Unicode('NavioModel').tag(sync=True)
    _view_module = Unicode('navio-jupyter').tag(sync=True)
    _model_module = Unicode('navio-jupyter').tag(sync=True)
    _view_module_version = Unicode('^0.0.1').tag(sync=True)
    _model_module_version = Unicode('^0.0.1').tag(sync=True)

    _view_height = Integer(600).tag(sync=True)
    _view_opts = Dict([]).tag(sync=True)
    _model_data = List([]).tag(sync=True)
    _model_selected = List([]).tag(sync=True)

    @default('layout')
    def _default_layout(self):
      return widgets.Layout(height=str(self._view_height)+'px', align_self='stretch')

    def set_data(self, js_data):
      self._model_data = js_data

    def set_opts(self, js_opts):
      self._view_opts = js_opts

    def set_height(self, js_height):
      self._view_height = js_height

    def get_selected(self):
      return self._model_selected
