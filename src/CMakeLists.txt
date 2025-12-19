# src/CMakeLists.txt
set(TURBOJPEG_INCLUDE_DIR "" CACHE PATH "Path to libjpeg-turbo source (with src/turbojpeg.h)")
set(TURBOJPEG_LIBRARY "" CACHE FILEPATH "Path to libturbojpeg.a")


add_library(turbojpeg_static STATIC IMPORTED)
set_target_properties(turbojpeg_static PROPERTIES
    IMPORTED_LOCATION "${TURBOJPEG_LIBRARY}"
    INTERFACE_INCLUDE_DIRECTORIES "${TURBOJPEG_INCLUDE_DIR}"
)

add_executable(libjpegturb_decoder jsdecoder.cpp)
target_link_libraries(libjpegturb_decoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_decoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_decoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=0 -s MODULARIZE=1 -s EXPORT_ES6=0 -s EXPORT_NAME='TurboJPEGDecoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()

add_executable(libjpegturb_es6_decoder jsdecoder.cpp)
target_link_libraries(libjpegturb_es6_decoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_es6_decoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_es6_decoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=0 -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXPORT_NAME='TurboJPEGDecoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()

add_executable(libjpegturb_inline_decoder jsdecoder.cpp)
target_link_libraries(libjpegturb_inline_decoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_inline_decoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_inline_decoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=1 -s MODULARIZE=1 -s EXPORT_ES6=0 -s EXPORT_NAME='TurboJPEGDecoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()

add_executable(libjpegturb_inline_es6_decoder jsdecoder.cpp)
target_link_libraries(libjpegturb_inline_es6_decoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_inline_es6_decoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_inline_es6_decoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=1 -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXPORT_NAME='TurboJPEGDecoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()


add_executable(libjpegturb_encoder jsencoder.cpp)
target_link_libraries(libjpegturb_encoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_encoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_encoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=0 -s MODULARIZE=1 -s EXPORT_ES6=0 -s EXPORT_NAME='TurboJPEGEncoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()


add_executable(libjpegturb_es6_encoder jsencoder.cpp)
target_link_libraries(libjpegturb_es6_encoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_es6_encoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_es6_encoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=0 -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXPORT_NAME='TurboJPEGEncoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()

add_executable(libjpegturb_inline_encoder jsencoder.cpp)
target_link_libraries(libjpegturb_inline_encoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_inline_encoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_inline_encoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=1 -s MODULARIZE=1 -s EXPORT_ES6=0 -s EXPORT_NAME='TurboJPEGEncoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()

add_executable(libjpegturb_inline_es6_encoder jsencoder.cpp)
target_link_libraries(libjpegturb_inline_es6_encoder PRIVATE turbojpeg_static)
target_compile_features(libjpegturb_inline_es6_encoder PUBLIC cxx_std_11)
if(EMSCRIPTEN)
    set_target_properties(libjpegturb_inline_es6_encoder PROPERTIES
        LINK_FLAGS "--bind -O3 -s WASM=1 -s SINGLE_FILE=1 -s MODULARIZE=1 -s EXPORT_ES6=1 -s EXPORT_NAME='TurboJPEGEncoder' -s MALLOC=emmalloc -s ALLOW_MEMORY_GROWTH=1 -s DISABLE_EXCEPTION_CATCHING=1 --emit-tsd interface.d.ts"
    )
endif()

