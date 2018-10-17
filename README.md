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

## Usage

```sh
$ data-block-extract http://bestbuy.com/
```

Three results are (currently) found at [BestBuy](http://bestbuy.com/), which
looks like this in the output:
```
{"@context" : "http://schema.org","@type" : "WebSite","name" : "Best Buy","url" : "http://www.bestbuy.com/"}

{"@context": "http://schema.org","@type": "Organization","name": "Best Buy","url": "http://www.bestbuy.com/","sameAs": ["http://www.facebook.com/bestbuy","https://twitter.com/BestBuy","https://plus.google.com/+BestBuy","https://www.instagram.com/bestbuy/","https://www.youtube.com/user/bestbuy","https://www.linkedin.com/company/best-buy","https://pinterest.com/BestBuy"],"contactPoint": [{"@type": "ContactPoint","telephone": "+1-888-237-8289","contactType": "customer service","contactOption": "TollFree","availableLanguage": ["English","Spanish"]}, {"@type": "ContactPoint","telephone": "+1-888-574-1301","contactType": "credit card support","contactOption": "TollFree","availableLanguage": ["English","Spanish"]}]}

{"@context":"http://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://www-ssl.bestbuy.com/","name":"Best Buy"}}]}
```

At the moment there is no additional parsing, but that's coming!

## License

MIT
