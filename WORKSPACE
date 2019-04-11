workspace(name = "npmscope")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

## Node + Typescript + web/sass

# Same as package.json versions
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "25dbb063a8a1a2b279d55ba158992ad61eb5266c416c77eb82a7d33b4eac533d",
    strip_prefix = "rules_nodejs-0.27.12",
    urls = ["https://github.com/bazelbuild/rules_nodejs/archive/0.27.12.tar.gz"],
)

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = "1c0900547bdbe33d22aa258637dc560ce6042230e41e9ea9dad5d7d2fca8bc42",
    urls = ["https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.0/rules_webtesting.tar.gz"],
)

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "cc1055cb3d13ca3dc0a4c49347e1db8b33326d18b9ffb8f733971da00da50965",
    strip_prefix = "rules_sass-1.17.3",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.17.3.tar.gz",
)

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

check_bazel_version("0.24.0")

yarn_install(
    name = "npm",
    data = ["//:angular.tsconfig.json"],
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

load("@npm_bazel_karma//:browser_repositories.bzl", "browser_repositories")

browser_repositories()

# Setup the rules_typescript tooolchain
load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

# Setup the rules_sass toolchain
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()
