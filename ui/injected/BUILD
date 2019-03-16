package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")

ng_module(
    name = "injected",
    srcs = glob(["*.ts"]),
    module_name = "@npmscope/ui/injected",
    deps = [
        "//ui/banner",
        "@npm//@types",
        "@npm//@angular/core",
        "@npm//@angular/cdk",
        "@npm//@angular/material",  #required pre-ivy
        "@npm//@angular/platform-browser", #required pre-ivy
    ],
)