interface FrameInfo {
    bitsPerSample:number;
    componentCount:number;
    height:number;
    isSigned:boolean;
    width:number;
}

interface OpenJPEGOffset {
    x:number;
    y:number;
}

interface DecodedTurboJPEG {
    frameInfo:FrameInfo;
    decodedBuffer:ArrayBufferLike;
}

export type {
    DecodedTurboJPEG,
    OpenJPEGOffset,
    FrameInfo,
}
  
