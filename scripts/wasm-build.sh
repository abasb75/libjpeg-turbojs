#!/bin/bash
set -e

PROJECT_ROOT="/libjpeg-turbo"
TURBOJPEG_SRC="$PROJECT_ROOT/libjpeg-turbo"
TURBOJPEG_BUILD="$PROJECT_ROOT/libjpeg-turbo-wasm"
DIST="$PROJECT_ROOT/dist"

if [ ! -f "$TURBOJPEG_BUILD/libturbojpeg.a" ]; then
    rm -rf "$TURBOJPEG_BUILD"
    mkdir -p "$TURBOJPEG_BUILD"

    emcmake cmake -S "$TURBOJPEG_SRC" -B "$TURBOJPEG_BUILD" \
        -DCMAKE_BUILD_TYPE=Release \
        -DENABLE_SHARED=OFF \
        -DWITH_SIMD=OFF \
        -DWITH_TURBOJPEG=ON

    emmake make -C "$TURBOJPEG_BUILD" -j$(nproc) turbojpeg-static
fi

rm -rf "$PROJECT_ROOT/build" "$DIST"
mkdir -p "$PROJECT_ROOT/build" "$DIST"

emcmake cmake -S "$PROJECT_ROOT" -B "$PROJECT_ROOT/build" \
    -DCMAKE_BUILD_TYPE=Release \
    -DTURBOJPEG_INCLUDE_DIR="$TURBOJPEG_SRC/src" \
    -DTURBOJPEG_LIBRARY="$TURBOJPEG_BUILD/libturbojpeg.a"

emmake make -C "$PROJECT_ROOT/build" -j$(nproc)

cp ./build/src/*.js" ./dist/
cp ./build/src/*.wasm" ./dist/
cp ./build/src/*.d.ts" ./dist/