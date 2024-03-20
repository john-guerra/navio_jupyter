# navio_jupyter

A jupyter lab anywidget for navio.dev, the widget for visualizing and exploring large multi-dimensional data.

## Installation

```sh
pip install navio_jupyter
```

## Development installation

Create a virtual environment and and install navio_jupyter in *editable* mode with the
optional development dependencies:

```sh
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

You then need to install the JavaScript dependencies and run the development server.

```sh
npm install
npm run dev
```

All is set to open `example.ipynb` in JupyterLab, VS Code, or your favorite editor
to start developing. Any change made in the `js` folder will be directly reflected
in the notebook.
