
# libjpegturbo

JS/WebAssembly build of [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo)


## Try It Out!

Try it in your browser [here](https://chafey.github.io/openjpegjs/test/browser/index.html)

## Building

This project uses git submodules to pull in OpenJPEG.  If developing, initialize the git submodules first:

```bash
git clone https://github.com/libjpeg-turbo/libjpeg-turbo
```

This project uses Docker to provide a consistent developer environment.

Find and remove this lines in libjpeg-turb/CMakeLists.txt:
```bash
if(NOT CMAKE_SOURCE_DIR STREQUAL CMAKE_CURRENT_SOURCE_DIR)
  message(FATAL_ERROR "The libjpeg-turbo build system cannot be integrated into another build system using add_subdirectory().  Use ExternalProject_Add() instead.")
endif()

```

Create docker container 'libjpeg-turbo'

```bash
scripts/docker-build.sh
```

Create shell inside libjpeg-turno container:

```bash
scripts/docker-sh.sh
```

Install typescript (inside docker shell):
```bash
npm i typescript -g
```

To build WASM (inside docker shell):
```bash
scripts/wasm-build.sh
```

exit from docker shell and remove libjpeg-turbo from your repository
```bash
rm -r libjpeg-turbo
```

## npm
you can get already builded from <a href="https://www.npmjs.com/package/@abasb75/turbojpeg">npm package manager</a>

## TODOS

1) Fix this <a href="https://github.com/libjpeg-turbo/libjpeg-turbo/issues/797">issue</a>