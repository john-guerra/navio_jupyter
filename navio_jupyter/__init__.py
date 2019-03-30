from ._version import version_info, __version__

from .navio_jupyter import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'navio-jupyter',
        'require': 'navio-jupyter/extension'
    }]
