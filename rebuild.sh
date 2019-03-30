#!/bin/bash
jupyter nbextension uninstall --py --sys-prefix navio_jupyter
rm -rf navio_jupyter/static
python setup.py build
python install -e .
pip install -e .
jupyter nbextension install --py --symlink --sys-prefix navio_jupyter
jupyter nbextension enable navio_jupyter --py --sys-prefix