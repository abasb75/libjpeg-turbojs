#!/bin/sh

mkdir -p build
mkdir -p dist

(cd build && emcmake cmake -G"Unix Makefiles" -DCMAKE_BUILD_TYPE=Release  ..) &&
(cd build && emmake make VERBOSE=1 -j 16) &&
(cp ./build/src/libjpegturbojs.js ./dist) && 
(cp ./build/src/interface.d.ts ./dist)

