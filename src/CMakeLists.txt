

   include_directories("../libjpeg-turbo" "../build/libjpeg-turbo")

   add_executable(libjpegturbojs jslib.cpp)

   target_link_libraries(libjpegturbojs PRIVATE turbojpeg)
   
   target_compile_features(libjpegturbojs PUBLIC cxx_std_11)
   
   if (CMAKE_BUILD_TYPE STREQUAL Debug)
     SET(linkFlags "-g4")
   else() # Either MinSizeRel, RelWithDebInfo or Release, all which run with optimizations enabled.
     SET(linkFlags "-O3")
   endif()
   
   set(CMAKE_CXX_FLAGS_RELEASE "-O3")
   
   set_target_properties(
    libjpegturbojs 
       PROPERTIES 
       LINK_FLAGS "\
         --bind \
         --allowJs \
         --emit-tsd interface.d.ts \
         -s MODULARIZE=1 \
         -s WASM=0 \
         -s DISABLE_EXCEPTION_CATCHING=1 \
         -s ASSERTIONS=0 \
         -s NO_EXIT_RUNTIME=1 \
         -s MALLOC=emmalloc \
         -s TOTAL_MEMORY=50mb \
         -s FILESYSTEM=0 \
         -s EXPORTED_FUNCTIONS=[] \
         -s EXPORT_NAME=TurboJPEGWasm \
         -s SINGLE_FILE=1 \
         -s EXTRA_EXPORTED_RUNTIME_METHODS=[ccall] \
      ")
