- To release a new version of navio_jupyter on PyPI:

Update version on pyproject.toml 

```
pip install -e ".[dev]"
npm install
npm run build
hatch build
hatch publish
```
