package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")

ng_module(
    name = "injected",
    srcs = glob(["*.ts"]),
    module_name = "@npmscope/ui/injected",
    deps = [
        "@npm//@types",
        "@npm//@angular/cdk",
        "@npm//@angular/core",
    ],
)