package(default_visibility = ["//visibility:public"])

load("@npm//history-server:index.bzl", "history_server")
load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@npm_bazel_typescript//:index.bzl", "ts_devserver")
load("@npm_bazel_rollup//:index.bzl", "rollup_bundle")
load("@npm_bazel_terser//:index.bzl", "terser_minified")
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
        "@npm//:node_modules/rxjs/bundles/rxjs.umd.js",
        ":rxjs_shims.js",
    ],
)

ts_devserver(
    name = "devserver",
    port = 8080, # same as history_server
    data = RUNTIME_FILES,
    deps = [":main"],
    entry_module = "angularbazeltesting/main.dev",
    index_html = "index.html",
    serving_path = "/bundle.js",
    static_files = ["@npm//:node_modules/zone.js/dist/zone.js"] + RESOURCE_FILES,
    scripts = [
        "@npm//:node_modules/tslib/tslib.js",
        ":rxjs_umd_modules",
    ],
)

rollup_bundle(
    name = "bundle",
    entry_point = ":main.prod.ts",
    format = "iife",
    deps = [
        ":main",
        "@npm//rollup-plugin-commonjs",
        "@npm//rollup-plugin-node-resolve",
        "@npm//rollup-plugin-sourcemaps",
    ],
    sourcemap = "true",  # instead of inline
    config_file = "//:rollup.config.js",
)

terser_minified(
    name = "bundle.min",
    src = ":bundle",
)

web_package(
    name = "prodapp",
    assets = RESOURCE_FILES + [
        "@npm//:node_modules/zone.js/dist/zone.min.js",
        ":bundle.min",
    ],
    data = RUNTIME_FILES + [
        # Make all bundles/source-maps available
        ":bundle.min",
    ],
    index_html = "index.html",
)

history_server(
    name = "prodserver",
    data = [":prodapp"],
    templated_args = ["prodapp"],
)