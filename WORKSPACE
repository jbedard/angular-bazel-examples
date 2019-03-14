workspace(name = "npmscope")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "5c86b055c57e15bf32d9009a15bcd6d8e190c41b1ff2fb18037b75e0012e4e7c",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.26.0/rules_nodejs-0.26.0.tar.gz"],
)

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "f42aac17f49b28a1bd12dec0fbc3254ccd7244f3ac9b378d340993bfff1f8301",
    strip_prefix = "rules_sass-1.16.1",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.16.1.tar.gz",
)

## ====================================================================================================
## TypeScript + Web

load("@io_bazel_rules_sass//:package.bzl", "rules_sass_dependencies")

rules_sass_dependencies()

## ====================================================================================================
## Node / Yarn + Bazel Version

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories", "yarn_install")

node_repositories(
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    node_version = "10.13.0",
    package_json = ["//:package.json"],
    yarn_repositories = {
        "1.12.1": ("yarn-v1.12.1.tar.gz", "yarn-v1.12.1", "09bea8f4ec41e9079fa03093d3b2db7ac5c5331852236d63815f8df42b3ba88d"),
    },
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    yarn_version = "1.12.1",
)

check_bazel_version("0.22.0")

yarn_install(
    name = "npm",
    data = [
        # Needed because this tsconfig file is used in the "postinstall" script.
        "//:angular-metadata.tsconfig.json",
    ],
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

## ====================================================================================================
## TypeScript + Web

# Install all bazel dependencies of our npm packages
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Load karma dependencies
load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

# Temporary work-around for https://github.com/angular/angular/issues/28681
# TODO(gregmagolan): go back to @io_bazel_rules_webtesting browser_repositories
load("@npm_bazel_karma//:browser_repositories.bzl", "browser_repositories")

browser_repositories()

# Setup the rules_typescript tooolchain
load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")

sass_repositories()
