import { getCookie } from './utils/getCookie'

(function get_clicks() {
  const clicks = []; // storing click to this variable

  window.clicks = clicks;

  const gclid = getCookie('_ga');
  const url = window.location.origin;

  /**
   * collect and mixup needed data
   * @param evt
   */
  const captureClick = (evt) => {
    const timestamp = new Date().getTime(); // in milliseconds
    const e = transformEventObject(evt);
    clicks.push( combine(e, { gclid }, { url }, { timestamp }) );
  }

  /**
   * Maps JS event object to new scheme
   * @param evt
   * @returns {{x: *, y: *, element: {classes: *[], id: (*|null), type: string}}}
   */
  const transformEventObject = (evt) => {
    const {
      pageX,
      pageY,
      target,
    } = evt;

    return {
      x: pageX,
      y: pageY,
      element: {
        id: target.id || null,
        classes: [...target.classList],
        type: target.tagName.toLowerCase()
      }
    };
  }

  const combine = (...args) => Object.assign({}, ...args);

  window.addEventListener('click', captureClick);
})();
