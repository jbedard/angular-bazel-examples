package(default_visibility = ["//visibility:public"])

load("@angular//packages/bazel:index.bzl", "ng_module")

ng_module(
    name = "injected",
    srcs = glob(["*.ts"]),
    module_name = "@npmscope/ui/injected",
    deps = [
        "@npm//@types",
        "@angular//packages/core",
        "@angular_material//src/cdk/overlay",
    ],
)