var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import TurboJPEGWasm from "./index";
// import { DecodeOptions, DecodedOpenJPEG } from "./types";
let turboJpeg;
function decode(imageBuffer_1) {
    return __awaiter(this, arguments, void 0, function* (imageBuffer, options = {}) {
        if (!turboJpeg) {
            turboJpeg = yield TurboJPEGWasm();
        }
        const iterations = options.iterations || 1;
        const decoder = new turboJpeg.JPEGDecoder();
        const encodedBitStream = new Uint8Array(imageBuffer);
        const encodedBuffer = decoder.getEncodedBuffer(encodedBitStream.length);
        encodedBuffer.set(encodedBitStream);
        for (let i = 0; i < iterations; i++) {
            decoder.decode();
        }
        const frameInfo = decoder.getFrameInfo();
        var decodedBuffer = decoder.getDecodedBuffer();
        return {
            decodedBuffer,
            frameInfo,
        };
    });
}
export default decode;
