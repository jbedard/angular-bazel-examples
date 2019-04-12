package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary", "sass_library")

ng_module(
    name = "banner",
    srcs = glob(["*.ts"]),
    assets = [
        ":banner.html",
        ":banner-sass",
    ],
    module_name = "@npmscope/ui/banner",
    deps = [
        "@npm//@types",
        "@npm//tslib",
        "@npm//@angular/common",
        "@npm//@angular/core",
        "@npm//@angular/material",
    ],
)

sass_binary(
    name = "banner-sass",
    src = "banner.scss",
)