package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")

ng_module(
    name = "banner",
    srcs = glob(["*.ts"]),
    assets = [
        ":banner.html",
        ":banner.css",
    ],
    module_name = "@npmscope/ui/banner",
    deps = [
        "@npm//@types",
        "@npm//@angular/common",
        "@npm//@angular/core",
        "@npm//@angular/material",
        "@npm//@angular/platform-browser",
    ],
)
