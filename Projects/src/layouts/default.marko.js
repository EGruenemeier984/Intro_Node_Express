// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projects$1.0.0/src/layouts/default.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_loadTag = marko_helpers.t,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_dynamicTag = marko_helpers.d,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  var root = '../public/assets';

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Home</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><link rel=\"stylesheet\"" +
    marko_attr("href", root + "/css/app.css") +
    ">");

  lasso_head_tag({}, out, __component, "6");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"jumbotron jumbotron-fluid\"><h1 class=\"display-4\">Top 5 Songs</h1><p class=\"lead\">This is web app demonstrating the use of node.js, express.js, and the deezer API.</p></div>");

  if ((typeof input.body) === "string") {
    out.w(marko_escapeXml(input.body));
  } else {
    marko_dynamicTag(out, input.body, null, null, null, null, __component, "11");
  }

  out.w("<form action=\"/query-search\" method=\"POST\"><div class=\"input-group flex-nowrap\"><div class=\"input-group-prepend\"><span class=\"input-group-text\" id=\"addon-wrapping\">Artist Name:</span></div><input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Ex. Drake\" aria-label=\"Username\" name=\"userInput\" aria-describedby=\"addon-wrapping\" required autofocus autocomplete=\"false\"><button type=\"submit\" value=\"OK\">Submit</button></div></form>");

  lasso_body_tag({}, out, __component, "18");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projects$1.0.0/src/layouts/default.marko",
    tags: [
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/core-tags/components/component-globals-tag",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
