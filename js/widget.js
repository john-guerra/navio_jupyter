import "./widget.css";
import navio from "../node_modules/navio/dist/navio.esm.js";
import * as d3 from "d3";

function render({ model, el }) {
  console.log("rendering navio widget", model.get("data"), model.get("height"));
  const nv = navio(d3.select(el), model.get("height"));

  function setOpts() {
    const opts = model.get("opts");
    console.log("Navio changed opts", opts);
    for (const o in opts) {
      // if (opts.hasOwnProperty(o)) {
      nv[o] = opts[o];
      // }
    }

   nv.update();
  }

	setOpts();

  if (model.get("data").length > 0) {
    nv.data(model.get("data"), model.get("height"));
    nv.addAllAttribs();

    model.set("selected", model.get("data"));
    model.save_changes();
  }

  model.on("change:data", () => {
    console.log("data changing to ", model.get("data"));
    nv.data(model.get("data"));
    nv.addAllAttribs();
  });

  nv.updateCallback((selected) => {
    model.set("selected", selected);
    model.save_changes();
  });

	model.on("change:opts", setOpts);
}

export default { render };
