const fs = require('fs');
const { URL } = require('url');

const axios = require('axios');
const cheerio = require('cheerio');
const argv = require('yargs');

const withinComments = new RegExp(/(\s*<!--\s*)([\s\S]*?)(\s*-->\s*)/gm);

function extractDatablocks(markup) {
  const $ = cheerio.load(markup);
  const datablocks = $('script[type^="application/ld+json"]');
  if (datablocks.length > 0) {
    datablocks.each((idx, script_el) => {
      //console.log(el.attribs.type);
      $(script_el).contents().each((idx, el) => {
        console.log(el.data.replace(withinComments, '$2'), "\n");
      });
    });
  } else {
    console.info('No datablocks found.');
  }
}

argv
  .usage('Usage: $0 <url|path>')
  .command('$0 <url|path>', 'extract datablock(s) from URL or file path',
    () => {},
    (argv) => {
      try {
        const url = new URL(argv.url);
        axios
          .get(argv.url)
          .then((res) => {
            // TODO: confirm 200, etc
            extractDatablocks(res.data);
          })
          .catch(console.error);
      } catch (err) {
        if (err.type === URL.ERR_INVALID_URL) {
          // we probably have a file path...let's check
          const file = fs.readFileSync(argv.path);
          extractDatablocks(file.toString());
        }
      }
    }
  )
  .help()
  .argv;

/**
 * TODO: avoid these mime types at all costs
 * https://www.w3.org/TR/html5/semantics-scripting.html#javascript-mime-type
 **/
