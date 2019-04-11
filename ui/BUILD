package(default_visibility = ["//visibility:public"])

# Packaging modeled after @angular/cdk+material style
# https://github.com/angular/material2/blob/7.3.3/src/cdk/BUILD.bazel

load("@npm_angular_bazel//:index.bzl", "ng_module", "ng_package")

UI_COMPONENTS = [
    "banner",
    "injected",
]

UI_COMPONENT_PACKAGES = ["//ui/%s" % p for p in UI_COMPONENTS]

ng_module(
    name = "ui",
    srcs = glob(["*.ts"]),
    module_name = "@npmscope/ui",
    deps = UI_COMPONENT_PACKAGES + [
        "@npm//@types",
        "@npm//@angular/cdk",
        "@npm//@angular/common",
        "@npm//@angular/core",
        "@npm//@angular/material",
        "@npm//tslib",
    ],
)

# BROKEN!!
ng_package(
   name = "npm",
   srcs = ["package.json"],
   entry_point = "ui/index.js",
   deps = [":ui"] + UI_COMPONENT_PACKAGES + [
        "@npm//tslib",
    ],
   globals = {
       '@angular/material/button': 'ng.material.button',
       '@angular/material/icon': 'ng.material.icon',

       '@angular/cdk/overlay': 'ng.cdk.overlay',
       '@angular/cdk/scrolling': 'ng.cdk.scrolling',    #<-- indirect dep of @angular/cdk/overlay, containing ngfactory which is missing
   }
)