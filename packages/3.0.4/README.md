# @abasb75/turbo-jpeg (decoder and encoder)
JS/WebAssembly build of [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo)

## Using generated Javascript File:
1. install From `npm`:

```bash
npm i --save @abasb75/turbojpeg-codec
```

2. import `@abasb75/turbojpeg-codec`:

```js
import TurboJPEGWasm from '@abasb75/turbojpeg-codec'

...
let decoder,encoder;
TurboJPEGWasm().then(function(turboJpeg) {
    decoder = new turboJpeg.JPEGDecoder();
    encoder = new turboJpeg.JPEGEncoder();
});
...

```

# Decode

```javascript

import {decode} from "@abasb75/turbo-jpeg";

const decoded = await decode(arrayBuffer); // ArrayBuffer
console.log('decoded',decoded);


```

## Only decoder versions:
<a href="https://www.npmjs.com/package/@abasb75/turbojpeg/v/3.0.4-decoder">3.0.4-decoder</a>

For see example you can use <a href="https://github.com/abasb75/libjpeg-turbojs/blob/master/test/index.html">this link</a>