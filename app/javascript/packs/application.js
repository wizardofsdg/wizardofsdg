// app/javascript/packs/application.js
import './public-path';
import main from "mastodon/main"

import { start } from '../mastodon/common';
import { loadLocale } from '../mastodon/locales';
import { loadPolyfills } from '../mastodon/polyfills';

import "../custom_audio_player";  // 다시 원래대로 import

start();

loadPolyfills()
  .then(loadLocale)
  .then(main)
  .catch(e => {
    console.error(e);
  });
