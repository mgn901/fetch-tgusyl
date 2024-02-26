import { action, tabs } from 'webextension-polyfill';

(async () => {
  await chrome.offscreen.createDocument({
    reasons: [chrome.offscreen.Reason.DOM_PARSER],
    justification: 'Use DOMParser',
    url: 'offscreen.html',
  });
})();

const openPage = () => {
  tabs.create({
    url: './page.html',
  });
};

action.onClicked.addListener(openPage);
