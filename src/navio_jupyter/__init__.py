import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("navio_jupyter")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class navio(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"
    data = traitlets.List([]).tag(sync=True)
    selected = traitlets.List([]).tag(sync=True)
    height = traitlets.Int(300).tag(sync=True)
    opts = traitlets.Dict({}).tag(sync=True)

