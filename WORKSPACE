workspace(name = "npmscope")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "039c6fe27b53e2336ca77209c51e7f8aa64b7baf9f4bd7a383a780dc270237b1",
    strip_prefix = "rules_nodejs-0.16.5",
    urls = ["https://github.com/bazelbuild/rules_nodejs/archive/0.16.5.zip"],
)

# Same as package.json version
http_archive(
    name = "build_bazel_rules_typescript",
    sha256 = "136ba6be39b4ff934cc0f41f043912305e98cb62254d9e6af467e247daafcd34",
    strip_prefix = "rules_typescript-0.22.0",
    url = "https://github.com/bazelbuild/rules_typescript/archive/0.22.0.zip",
)

# Angular for use of the @angular/bazel rules
# Version should be synchronized with runtime dependencies in package.json
http_archive(
    name = "angular",
    sha256 = "a5b4a24c7cee3a4ab10f2666c3cfd0213c622da0fc9da042ea07a6a012839ff9",
    strip_prefix = "angular-7.2.4",
    url = "https://github.com/angular/angular/archive/7.2.4.tar.gz",
)

# Angular material
http_archive(
    name = "angular_material",
    sha256 = "25e1696c746baad4ee58acb07cd2a2655c489462d358bdb6d6a8ccb6ebca1cff",
    strip_prefix = "material2-7.3.1",
    url = "https://github.com/angular/material2/archive/7.3.1.tar.gz",
)

# The @rxjs repo contains targets for building rxjs with bazel
http_archive(
    name = "rxjs",
    sha256 = "52b63515ad38287e9c437df80576ca6b7433358cd8c4095e1b1bece65596cb94",
    strip_prefix = "package/src",
    url = "https://registry.yarnpkg.com/rxjs/-/rxjs-6.4.0.tgz",
)

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "f42aac17f49b28a1bd12dec0fbc3254ccd7244f3ac9b378d340993bfff1f8301",
    strip_prefix = "rules_sass-1.16.1",
    url = "https://github.com/bazelbuild/rules_sass/archive/1.16.1.tar.gz",
)

## ====================================================================================================
## TypeScript + Web

load("@build_bazel_rules_typescript//:package.bzl", "rules_typescript_dependencies")

rules_typescript_dependencies()

load("@build_bazel_rules_nodejs//:package.bzl", "rules_nodejs_dependencies")

rules_nodejs_dependencies()

load("@angular//packages/bazel:package.bzl", "rules_angular_dependencies")

rules_angular_dependencies()

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
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

## ====================================================================================================
## TypeScript + Web

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()

browser_repositories(
    chromium = True,
    firefox = True,
)

load("@build_bazel_rules_typescript//:defs.bzl", "check_rules_typescript_version", "ts_setup_workspace")

check_rules_typescript_version("0.22.0")

ts_setup_workspace()

load("@io_bazel_rules_sass//:defs.bzl", "sass_repositories")

sass_repositories()

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()

load("@angular_material//:index.bzl", "angular_material_setup_workspace")

angular_material_setup_workspace()
