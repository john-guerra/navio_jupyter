#!/bin/bash
pip install -e ".[dev]"
npm install
npm run build
hatch build