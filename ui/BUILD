package(default_visibility = ["//visibility:public"])

# Packaging modeled after @angular/cdk+material style
# https://github.com/angular/material2/blob/7.3.3/src/cdk/BUILD.bazel

load("@angular//packages/bazel:index.bzl", "ng_module", "ng_package")

UI_COMPONENTS = [
    "banner",
]

UI_COMPONENT_PACKAGES = ["//ui/%s" % p for p in UI_COMPONENTS]

ng_module(
    name = "ui",
    srcs = glob(["*.ts"]),
    module_name = "@npmscope/ui",
    deps = ["@npm//@types", "@npm//@angular/core"] + UI_COMPONENT_PACKAGES,
)

# BROKEN!!
ng_package(
   name = "npm",
   srcs = ["package.json"],
   entry_point = "ui/index.js",
   deps = [":ui"] + UI_COMPONENT_PACKAGES,
   globals = {
       '@angular/material/button': 'ng.material.button',
       '@angular/material/icon': 'ng.material.icon',
   }
)