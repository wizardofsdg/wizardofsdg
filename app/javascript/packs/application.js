import './public-path';
import main from "mastodon/main"

import { start } from '../mastodon/common';
import { loadLocale } from '../mastodon/locales';
import { loadPolyfills } from '../mastodon/polyfills';

import "../custom_audio_player";
start();

loadPolyfills()
  .then(loadLocale)
  .then(main)
  .catch(e => {
    console.error(e);
  });
