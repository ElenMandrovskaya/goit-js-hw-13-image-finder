import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
import { info, alert } from '@pnotify/core';

defaults.styling = 'brighttheme';
defaults.icons = 'brighttheme';

function infoMsg() {
  info ({
    title: 'This happened',
    text: `You have already seen all of the results for this request`,
    delay: 3000,
  });
}
function alertMsg() {
  alert ({
    title: `Oh, no!`,
    text: `We didn't find a single picture for your request`,
    delay: 3000,
  });
}

export { infoMsg, alertMsg };