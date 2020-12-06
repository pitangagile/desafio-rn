/**
 * Gets the js object from dynamic query string of the url. Source: https://stackoverflow.com/a/63672162
 */
export function parseQueryString(
  url: string | undefined = '',
): {
  [key: string]: string | string[];
} | null {
  const queryString = url.replace(/.*\?/, '');

  if (queryString === url || !queryString) {
    return null;
  }

  const urlParams = new URLSearchParams(queryString);
  const result: { [key: string]: string | string[] } = {};

  urlParams.forEach((val, key) => {
    if (result[key]) {
      result[key] = [...result[key], val];
    } else {
      result[key] = val;
    }
  });

  return result;
}
