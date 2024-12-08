# @abasb75/turbojpeg-decoder (only decoder)
JS/WebAssembly build of [libjpeg-turbo](https://github.com/libjpeg-turbo/libjpeg-turbo)

## Using generated Javascript File:
1. install From `npm`:

```bash
npm i --save @abasb75/turbojpeg-decoder
```

2. import `@abasb75/turbojpeg-decoder`:

```js
import TurboJPEGWasm from '@abasb75/turbojpeg-decoder'

...
let decoder,encoder;
TurboJPEGWasm().then(function(turboJpeg) {
    decoder = new turboJpeg.JPEGDecoder();
});
...

```

# Decode

```javascript

import {decode} from "@abasb75/turbojpeg-decoder";

const decoded = await decode(arrayBuffer); // ArrayBuffer
console.log('decoded',decoded);


```

For see example you can use <a href="https://github.com/abasb75/libjpeg-turbojs/blob/master/test/index.html">this link</a>