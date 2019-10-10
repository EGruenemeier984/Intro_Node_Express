// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-foundation$1.0.0/src/components/site-meta/template.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_str = marko_helpers.s,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<meta charset=\"utf-8\"><meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>" +
    marko_str(input.title) +
    "</title><meta name=\"description\"" +
    marko_attr("content", "" + input.description) +
    "><meta name=\"keywords\"" +
    marko_attr("content", "" + input.keywords) +
    "><meta name=\"author\"" +
    marko_attr("content", "" + input.author) +
    ">");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-foundation$1.0.0/src/components/site-meta/template.marko"
  };
