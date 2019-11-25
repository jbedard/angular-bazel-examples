package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")

ng_module(
    name = "app",
    srcs = glob(["*.ts"]),
    deps = [
        "@npm//@angular/core",
        "@npm//@angular/material",
        "@npm//@angular/platform-browser",
        "@npm//@ngrx/store",
        "@npm//@ngrx/store-devtools",
        "//ui/banner",
    ],
    assets = [":app-sassy"],
)

sass_binary(
    name = "app-sassy",
    src = "app.component.scss",
)