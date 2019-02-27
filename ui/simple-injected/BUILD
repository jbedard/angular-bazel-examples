package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")

ng_module(
    name = "simple-injected",
    srcs = glob(["*.ts"]),
    module_name = "@npmscope/ui/simple-injected",
    deps = [
        "@npm//@types",
        "@npm//@angular/common",
        "@npm//@angular/core",
    ],
)