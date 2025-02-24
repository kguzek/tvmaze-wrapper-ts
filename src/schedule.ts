import { fetchFromTvMaze } from "./api";
import type { Episode, HasEmbedded } from "./types";

/** Fetches https://api.tvmaze.com/schedule?country=:country&date=:date
 * @see {@link https://www.tvmaze.com/api#schedule} for more information
 */
export const getSchedule = (search: { country?: string; date?: string }) =>
  fetchFromTvMaze<Episode[]>("/schedule", { search });

/** Fetches https://api.tvmaze.com/schedule/full
 * @see {@link https://www.tvmaze.com/api#full-schedule} for more information
 */
export const getFullSchedule = () =>
  fetchFromTvMaze<(Episode & HasEmbedded)[]>("/schedule/full");
