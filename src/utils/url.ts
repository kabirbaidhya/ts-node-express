import * as url from 'url';

/**
 * Returns url.
 *
 * @param req
 * @returns {string}
 */
export function getFullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.baseUrl + req.path
  });
}
