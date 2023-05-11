# anki-theme

Tools used to build out Anki card HTML and CSS.

## Design

Every card's HTML is in [`public/cards`](./public/cards/). There's a
[template](./public/cards/template.html) file to help make new cards.

To simplify CSS generation, we use Tailwind. The input CSS file is 
[`theme.css`](./public/css/theme.css).

## Resource syncing

There's a couple caveats with using imports in Anki cards.

* Anki only loads the media files at application start, so you need to reload
  the app if you make a change there.
* Anki only detects file additions and deletions when doing a media sync from
  local storage to cloud. So if you update a file (e.g. `_theme.css`) you need
  to add or remove a dummy file before syncing from desktop to cloud and then
  cloud to phone. See details [here](https://docs.ankiweb.net/syncing.html#media).

### Procedure for syncing media files

1. Close Anki
2. Copy over file updates to media folder
3. `touch` a new file in the media folder (or `rm` a previously-`touch`ed file)
4. Load desktop Anki and do a sync
5. Close phone Anki
6. Open phone Anki and do a sync