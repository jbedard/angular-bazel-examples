workspace(name = "angularbazeltesting")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

## Node + Typescript + web/sass

# Same as package.json versions
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "9901bc17138a79135048fb0c107ee7a56e91815ec6594c08cb9a17b80276d62b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.40.0/rules_nodejs-0.40.0.tar.gz"],
)

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = "9bb461d5ef08e850025480bab185fd269242d4e533bca75bfb748001ceb343c3",
    urls = ["https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.3/rules_webtesting.tar.gz"],
)

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "82865467f5fa8b9d222fea5933414009f86cb5ae18f4ac8641796f758cac8fc1",
    strip_prefix = "rules_sass-1.23.1",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.23.1.tar.gz",
)

## ====================================================================================================
## Node / Yarn + Bazel Version

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories", "yarn_install")

node_repositories(
    node_repositories = {
        "10.16.1-darwin_amd64": ("node-v10.16.1-darwin-x64.tar.gz", "node-v10.16.1-darwin-x64", "328e61fdacfe2f6f1a049d57e248b3eafc0345747831323a14fe1edf98d9b3bb"),
        "10.16.1-linux_amd64": ("node-v10.16.1-linux-x64.tar.gz", "node-v10.16.1-linux-x64", "32db9700d2ba926e774c17e7cd8952499e64e241b095d22e05d3d62ebe4cb6d4"),
    },
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    node_version = "10.16.1",
    package_json = ["//:package.json"],
    yarn_repositories = {
        "1.17.3": ("yarn-v1.17.3.tar.gz", "yarn-v1.17.3", "e3835194409f1b3afa1c62ca82f561f1c29d26580c9e220c36866317e043c6f3"),
    },
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    yarn_version = "1.17.3",
)

check_bazel_version("0.24.0")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

## ====================================================================================================
## TypeScript + Web

# Install all bazel dependencies of our npm packages
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Load karma dependencies
load("@npm_bazel_karma//:package.bzl", "npm_bazel_karma_dependencies")

npm_bazel_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@io_bazel_rules_webtesting//web/versioned:browsers-0.3.2.bzl", "browser_repositories")

browser_repositories(chromium = True)

# Setup the rules_typescript tooolchain
load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

# Setup the rules_sass toolchain
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()
