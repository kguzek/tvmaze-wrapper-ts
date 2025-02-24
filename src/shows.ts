import { fetchFromTvMaze } from "./api";
import type {
  Aka,
  Cast,
  Crew,
  Episode,
  Season,
  Show,
  Updates,
  Numeric,
  ImdbId,
  TheTvDbId,
  ShowSearchResult,
} from "./types";

/** Fetches https://api.tvmaze.com/shows/:id
 * @param {string} [embedded] (if string) sets the query to `?embed=:embedded`
 * @param {string[]} [embedded] (if array of strings) sets the query to `?embed[]=:embedded[0]&embed[]=:embedded[1]&...`
 * @see {@link https://www.tvmaze.com/api#show-main-information} for more information
 */
export const findShowById = (id: Numeric, embedded?: string | string[]) =>
  fetchFromTvMaze<Show>(`/shows/${id}`, { embedded });

/** Fetches https://api.tvmaze.com/lookup/shows?{imdb|thetvdb}=:id.{imdb|thetvdb}
 * @see {@link https://www.tvmaze.com/api#show-lookup} for more information
 */
export const findShowByExternalId = (id: ImdbId | TheTvDbId) =>
  fetchFromTvMaze<Show>("/lookup/shows", { search: id });

/** Fetches https://api.tvmaze.com/singlesearch/shows?q=:query
 * @see {@link https://www.tvmaze.com/api#show-single-search} for more information
 */
export const searchShow = (query: string) =>
  fetchFromTvMaze<Show>("/singlesearch/shows", { search: { q: query } });

/** Fetches https://api.tvmaze.com/search/shows?q=:query
 * @see {@link https://www.tvmaze.com/api#show-search} for more information
 */
export const searchShows = (query: string) =>
  fetchFromTvMaze<ShowSearchResult[]>("/search/shows", {
    search: { q: query },
  });

/** Fetches https://api.tvmaze.com/shows/:id/episodes
 * @see {@link https://www.tvmaze.com/api#show-episode-list} for more information
 */
export const getShowEpisodes = (id: Numeric, specials?: boolean) =>
  fetchFromTvMaze<Episode[]>(`/shows/${id}/episodes`, {
    search: specials ? { specials: "1" } : [],
  });

/** Fetches
 * https://api.tvmaze.com/shows/:id/episodebynumber?season=:season&number=:episode
 * @see {@link https://www.tvmaze.com/api#episode-by-number} for more information
 */
export const getShowEpisode = (
  id: Numeric,
  season: Numeric,
  episode: Numeric,
) =>
  fetchFromTvMaze<Episode>(`/shows/${id}/episodebynumber`, {
    search: { season, number: episode },
  });

/** Fetches https://api.tvmaze.com/shows/:id/episodesbydate?date=:date
 * @see {@link https://www.tvmaze.com/api#episodes-by-date} for more information
 */
export const getShowEpisodesByDate = (id: Numeric, date: string) =>
  fetchFromTvMaze<Episode>(`/shows/${id}/episodesbydate`, {
    search: { date },
  });

/** Fetches https://api.tvmaze.com/shows/:id/seasons
 * @see {@link https://www.tvmaze.com/api#show-seasons} for more information
 */
export const getShowSeasons = (id: Numeric) =>
  fetchFromTvMaze<Season[]>(`/shows/${id}/seasons`);

/** Fetches https://api.tvmaze.com/seasons/:id/episodes
 * @see {@link https://www.tvmaze.com/api#season-episodes} for more information
 */
export const getSeasonEpisodes = (seasonId: Numeric) =>
  fetchFromTvMaze<Episode[]>(`/seasons/${seasonId}/episodes`);

/** Fetches https://api.tvmaze.com/shows/:id/cast
 * @see {@link https://www.tvmaze.com/api#show-cast} for more information
 */
export const getShowCast = (id: Numeric) =>
  fetchFromTvMaze<Cast[]>(`/shows/${id}/cast`);

/** Fetches https://api.tvmaze.com/shows/:id/crew
 * @see {@link https://www.tvmaze.com/api#show-crew} for more information
 */
export const getShowCrew = (id: Numeric) =>
  fetchFromTvMaze<Crew[]>(`/shows/${id}/crew`);

/** Fetches https://api.tvmaze.com/shows/:id/akas
 * @see {@link https://www.tvmaze.com/api#show-aka} for more information
 */
export const getShowAkas = (id: Numeric) =>
  fetchFromTvMaze<Aka[]>(`/shows/${id}/akas`);

/** Fetches https://api.tvmaze.com/shows?page=:page */
export const getAllShows = (page?: Numeric) =>
  fetchFromTvMaze<Show[]>("shows", { search: page ? { page } : [] });

/** Fetches https://api.tvmaze.com/updates/shows
 * @see {@link https://www.tvmaze.com/api#show-updates} for more information
 */
export const getShowUpdates = () => fetchFromTvMaze<Updates>("/updates/shows");
