package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")

ng_module(
    name = "app",
    srcs = glob(["*.ts"]),
    assets = [],
    deps = [
        "//ui",
        "@npm//@types",
        "@npm//@angular/core",
        "@npm//@angular/material", #required pre-ivy
        "@npm//@angular/platform-browser",
        "@npm//rxjs",
    ],
)

rollup_bundle(
    name = "bundle",
    entry_point = "app/main.factory.js",
    deps = [
        ":app",
        "@npm//@angular/material", #required pre-ivy
        "@npm//rxjs",   #required pre-ivy
    ],
)

load("@build_bazel_rules_nodejs//internal/web_package:web_package.bzl", "web_package")
web_package(
   name = "devapp",
   index_html = "index.html",
   assets = [
       ":bundle.js",
   ],
   data = [
       ":bundle", # Make all bundles/source-maps available
   ],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "history_server")
history_server(
   name = "devserver",
   data = [":devapp"],
   templated_args = ["app/devapp"],
)