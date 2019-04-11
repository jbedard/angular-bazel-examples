package(default_visibility = ["//visibility:public"])

load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@npm_bazel_typescript//:defs.bzl", "ts_devserver")
load("@build_bazel_rules_nodejs//:defs.bzl", "history_server")
load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")
load("@build_bazel_rules_nodejs//internal/web_package:web_package.bzl", "web_package")

RESOURCE_FILES = []
RUNTIME_FILES = []

ng_module(
    name = "main",
    srcs = glob(["*.ts"]),
    deps = [
        "@npm//@angular/core",
        "@npm//@angular/platform-browser",
        "//app",
    ],
)

filegroup(
    name = "rxjs_umd_modules",
    srcs = [
        # do not sort
        "@npm//node_modules/rxjs:bundles/rxjs.umd.js",
        ":rxjs_shims.js",
    ],
)

ts_devserver(
    name = "devserver",
    data = RUNTIME_FILES,
    deps = [":main"],
    entry_module = "npmscope/main.dev",
    index_html = "index.html",
    serving_path = "/bundle.js",
    static_files = ["@npm//node_modules/zone.js:dist/zone.js"] + RESOURCE_FILES,
    scripts = [
        "@npm//node_modules/tslib:tslib.js",
        ":rxjs_umd_modules",
    ],
)

rollup_bundle(
    name = "bundle",
    entry_point = "main.prod",
    deps = [
        ":main",
    ],
)

web_package(
    name = "prodapp",
    assets = RESOURCE_FILES + [
        "@npm//node_modules/zone.js:dist/zone.min.js",
        ":bundle.es2015.js",
    ],
    data = RUNTIME_FILES + [
        # Make all bundles/source-maps available
        ":bundle",
    ],
    index_html = "index.html",
)

history_server(
    name = "prodserver",
    data = [":prodapp"],
    templated_args = ["prodapp"],
)