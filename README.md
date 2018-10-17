# HTML5 data block extractor

Did you know you can embed "raw" data into an HTML `<script>` tag? The HTML5
spec calls them [data blocks](https://www.w3.org/TR/html5/semantics-scripting.html#data-block).

They look like this...
```html
<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "type": "SoftwareApplication",
  "name": "data block extractor",
  "alternateName": "data-block-extractor"
}
</script>
```

This little command-line script takes a URL or a file, and extracts the content
from any data blocks found in that file.

Currently, it just dumps them to standard out and only looks for
`application/ld+json`, but it's a start anyway!

## Install

For now, you have to `npm i -g` from inside a clone of this repository. At
somepoint, we'll get this up on NPM for easier re-use.

However, once you've done that, you can run `data-block-extractor` anywhere to
use this awesomeness!

## License

MIT
