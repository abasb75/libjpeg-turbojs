import { FrameInfo } from "./interface";
interface DecodeOptions {
    iterations?: number;
}
declare function decode(imageBuffer: ArrayBuffer, options?: DecodeOptions): Promise<{
    decodedBuffer: any;
    frameInfo: FrameInfo;
}>;
export default decode;
