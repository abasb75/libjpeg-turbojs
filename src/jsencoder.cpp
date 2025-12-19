#include "JPEGDecoder.hpp"
#include "JPEGEncoder.hpp"

#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(FrameInfo) {
  value_object<FrameInfo>("FrameInfo")
    .field("width", &FrameInfo::width)
    .field("height", &FrameInfo::height)
    .field("bitsPerSample", &FrameInfo::bitsPerSample)
    .field("componentCount", &FrameInfo::componentCount)
    .field("isSigned", &FrameInfo::isSigned)
       ;
}


EMSCRIPTEN_BINDINGS(JPEGEncoder) {
  class_<JPEGEncoder>("JPEGEncoder")
    .constructor<>()
    .function("getDecodedBuffer", &JPEGEncoder::getDecodedBuffer)
    .function("getEncodedBuffer", &JPEGEncoder::getEncodedBuffer)
    .function("encode", &JPEGEncoder::encode)
    .function("setProgressive", &JPEGEncoder::setProgressive)
    .function("setQuality", &JPEGEncoder::setQuality)
    .function("setSubSampling", &JPEGEncoder::setSubSampling)
   ;
}
