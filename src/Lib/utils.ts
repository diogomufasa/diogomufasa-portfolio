import { startCase, toLower } from 'lodash';
import { FormData } from '../types';

export const getTitleCase = (word: string): string => {
  if (!word || !word?.length) return '';
  return startCase(toLower(word));
};

export function isValidLink(link: string) {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  // return !!urlPattern.test(link);
  return true;
}

export function isValidEmail(email: string) {
  const emailPattern = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  return !!emailPattern.test(email);
}

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}

export function redirectTo(url: string) {
  window.location
    ? (window
        .location as any)
        .assign(url)
    : (window.location as any).replace(url);
      

}