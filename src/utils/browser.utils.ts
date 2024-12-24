import _ from 'lodash';

export const isServerSide = () =>
  !(typeof window != 'undefined' && window.document);

/*******
 * scroll to DOM
 * @arg selector - css selector
 * @arg options.offset - offset relative to selector,
 *  default height -70
 *
 */
export const scrollToDom = (
  selector = 'body',
  options = {
    offset: -70,
  },
) => {
  const scrollDom = document.querySelector(selector);
  if (!scrollDom) return;

  const y =
    scrollDom.getBoundingClientRect().top + window.scrollY + options.offset;

  window.scrollTo({ top: y, behavior: 'smooth', ...options });
};
