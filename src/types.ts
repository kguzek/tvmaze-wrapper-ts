/* SPDX-License-Identifier: AGPL-3.0-only */
/*      TVmaze Wrapper (TypeScript)       */
/*     Copyright © 2025 Konrad Guzek      */

export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number | null;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string | null;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Link {
  href: string;
}

export interface PreviousEpisodeLink extends Link {}

export interface ShowLink extends Link {}

export interface CharacterLink extends Link {}

export interface Links {
  self?: Link;
  previousepisode?: PreviousEpisodeLink;
  show?: ShowLink;
  character?: CharacterLink;
}

/** @since 2.0.0 */
export interface HasLinks {
  _links: Links;
}

export interface Embedded {
  show?: Show;
  seasons?: Season[];
  episodes?: Episode[];
  cast?: Cast[];
  castcredits?: CastCredits[];
  crew?: Crew[];
  crewcredits?: CrewCredits[];
  akas?: Aka[];
}

/** @since 2.0.0 */
export interface HasEmbedded {
  _embedded: Embedded;
}

export interface Aka {
  name: string;
  country: Country;
}

export interface CrewCredits extends HasLinks {
  type: string;
}

export interface CastCredits extends HasLinks {}

export interface Episode extends HasLinks {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  /** @since 2.0.0 */
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  /** @since 2.0.0 */
  rating: Rating;
  image: Image;
  summary: string | null;
}

export interface Season extends HasLinks {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network | null;
  webChannel: string | null;
  image: Image;
  summary: string;
}

export interface Updates {
  [key: number]: number;
}

export interface Person extends HasLinks {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday: string | null;
  image: Image;
}

export interface Character extends HasLinks {
  id: number;
  url: string;
  name: string;
  image: Image;
}

export interface Cast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Crew {
  type: string;
  person: Person;
}

interface EndedShow {
  status: "Ended";
  ended: string;
}

interface RunningShow {
  status: string;
  ended: null;
}

interface BaseShow extends HasLinks, HasEmbedded {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string | null;
  genres: string[];
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: string | null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string | null;
  updated: number;
}

export type Show = BaseShow & (EndedShow | RunningShow);

export interface ShowSearchResult {
  score: number;
  show: Show;
}

export interface PersonSearchResult {
  score: number;
  person: Person;
}

export type Numeric = number | `${number}`;

export type ImdbId = { imdb: string };
export type TheTvDbId = { thetvdb: string };
