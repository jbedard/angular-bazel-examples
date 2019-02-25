package(default_visibility = ["//visibility:public"])

load("@angular//packages/bazel:index.bzl", "ng_module")

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
        "@angular//packages/common",
        "@angular//packages/core",
        "@angular_material//src/lib/button",
        "@angular_material//src/lib/icon",
    ],
)