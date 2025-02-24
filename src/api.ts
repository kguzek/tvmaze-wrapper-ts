const API_BASE = "https://api.tvmaze.com";

type SearchParamKey = string;
type SearchParamValue = string | number;
type SearchParams =
  | { [k: SearchParamKey]: SearchParamValue }
  | [SearchParamKey, SearchParamValue][];

function getSearchParams(search?: SearchParams) {
  if (!search) return "";
  const entries = Array.isArray(search) ? search : Object.entries(search);
  const mapped = entries.map(([key, value]) => [key, value.toString()]);
  const params = new URLSearchParams(mapped).toString();
  if (!params) return "";
  return `?${params}`;
}

/**
 * Fetches the JSON response from the TVMaze API.
 * For the options object (second argument), if both `embedded` and `search` are provided,
 * `embedded` will be used instead of `search` (overriding its value).
 * @param {string} path the relative path to the TVMaze API endpoint
 * @param {object} options
 * @param {object} [options.search] (if object) sets the query to `?key1=search[key1]&key2=search[key2]&...`
 * @param {object} [options.search] (if array of arrays) sets the query to `?search[0][0]=search[0][1]&search[1][0]=search[1][1]&...`
 * @param {string} [options.embedded] (if string) sets the query to `?embed=:embedded`
 * @param {string[]} [options.embedded] (if array of strings) sets the query to `?embed[]=:embedded[0]&embed[]=:embedded[1]&...`
 */
export async function fetchFromTvMaze<T>(
  path: string,
  {
    search,
    embedded,
  }:
    | { search?: SearchParams; embedded?: never }
    | { search?: never; embedded?: string | string[] } = {},
) {
  if (embedded) {
    search = Array.isArray(embedded)
      ? embedded.map((embed) => ["embed[]", embed] satisfies [string, string])
      : embedded
        ? { embed: embedded }
        : [];
  }
  const url = `${API_BASE}${path}${getSearchParams(search)}`;
  const res = await fetch(url);
  const json = await res.json();
  return json as T;
}
