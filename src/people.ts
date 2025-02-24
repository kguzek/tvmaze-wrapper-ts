import { fetchFromTvMaze } from "./api";
import type {
  CastCredits,
  CrewCredits,
  Person,
  Numeric,
  PersonSearchResult,
} from "./types";

/** Fetches https://api.tvmaze.com/search/people?q=:query
 * @see {@link https://www.tvmaze.com/api#people-search} for more information
 */
export const searchPeople = (query: string) =>
  fetchFromTvMaze<PersonSearchResult[]>("/search/people", {
    search: { q: query },
  });

/** Fetches https://api.tvmaze.com/people/:id
 * @see {@link https://www.tvmaze.com/api#person-main-information} for more information
 */
export const findPersonById = (
  personId: Numeric,
  embedded?: string | string[],
) => fetchFromTvMaze<Person>(`/people/${personId}`, { embedded });

/** Fetches https://api.tvmaze.com/people/:id/castcredits
 * @see {@link https://www.tvmaze.com/api#person-cast-credits} for more information
 */
export const getPersonCastCredits = (
  personId: Numeric,
  embedded?: string | string[],
) =>
  fetchFromTvMaze<CastCredits[]>(`/people/${personId}/castcredits`, {
    embedded,
  });

/** Fetches https://api.tvmaze.com/people/:id/crewcredits
 * @see {@link https://www.tvmaze.com/api#person-crew-credits} for more information
 * @param {string} [embedded] (if string) sets the query to `?embed=:embedded`
 * @param {string[]} [embedded] (if array of strings) sets the query to `?embed[]=:embedded[0]&embed[]=:embedded[1]&...`
 */
export const getPersonCrewCredits = (
  personId: Numeric,
  embedded?: string | string[],
) =>
  fetchFromTvMaze<CrewCredits[]>(`/people/${personId}/crewcredits`, {
    embedded,
  });
