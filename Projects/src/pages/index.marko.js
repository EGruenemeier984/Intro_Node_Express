// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projects$1.0.0/src/pages/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Default = require("../layouts/default.marko"),
    app_header_template = require("../components/app-header/template.marko"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_header_tag = marko_loadTag(app_header_template),
    app_hello_tag = marko_loadTag(require("../components/app-hello/renderer")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_styleAttr = marko_helpers.sa,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  {
	var title = "Welcome";
    var colors = [
        'red',
        'blue',
        'green'
    ]
};

  marko_dynamicTag(out, Default, function() {
    return {
        body: {
            renderBody: function(out) {
              out.w("<div class=\"row\"><div class=\"large-12 columns\">");

              app_header_tag({
                  title: title
                }, out, __component, "4");

              out.w("</div></div> <div class=\"row\"><div class=\"large-12 columns\"><div class=\"callout\"><h3>We&rsquo;re stoked you want to try MarkoJS! </h3><p>");

              app_hello_tag({
                  name: data.name
                }, out, __component, "10");

              out.w(" You have " +
                marko_escapeXml(data.count) +
                " new messages!</p>");

              if (colors && colors.length) {
                out.w("<ul>");

                var $for$0 = 0;

                marko_forEach(colors, function(color) {
                  var $keyScope$0 = "[" + (($for$0++) + "]");

                  out.w("<li" +
                    marko_styleAttr("color: " + color) +
                    ">" +
                    marko_escapeXml(color) +
                    "</li>");
                });

                out.w("</ul>");
              } else {
                out.w("<div> No colors!</div>");
              }

              out.w("</div></div></div>");
            }
          }
      };
  }, null, null, null, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/projects$1.0.0/src/pages/index.marko",
    tags: [
      "../layouts/default.marko",
      "../components/app-header/template.marko",
      "../components/app-hello/renderer"
    ]
  };
