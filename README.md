# TVmaze Wrapper (TypeScript)

A wrapper to the [TVmaze API](https://api.tvmaze.com) written in TypeScript using Node.js.

## Why fork?

This repository is forked from [JohnDeved/node-tvnode-api-ts](https://github.com/JohnDeved/node-tvmaze-api-ts), which at the time of writing hasn't been updated in 5 years.

The reason I ([@kguzek](https://github.com/kguzek)) created it is because of an unpleasant developer experience while consuming the original library as well as a confusing project structure.

My approach rewrote the API from an object-oriented approach into a functional approach, since the classes didn't really make sense -- they were all used as singletons anyway.

### License change

As a sidenote, the original package was released under the ISC as per its `package.json`, but included no license notices or license file.
This project is released under the AGPL-3.0, and the license file is available at [/LICENSE](https://github.com/kguzek/tvmaze-wrapper-ts/blob/main/LICENSE).

## Usage

Install the package from NPM:

```sh
npm i tvmaze-wrapper-ts
```

And import it directly using modern ES6 syntax:

```ts
import { searchShow, findShowById } from "tvmaze-wrapper-ts";

const show = await searchShow("the rookie");
const details = await findShowById(show.id);

// Your code...
```

## Docs

The original README.md is preserved at [README.original.md](https://github.com/kguzek/tvmaze-wrapper-ts/blob/main/README.original.md).
It lists all available API functions and methods. This package has renamed all of these to be more logical and consistent, but the same functions are implemented.

The only exception is the [episode trailer scraper](https://github.com/JohnDeved/node-tvmaze-api-ts?tab=readme-ov-file#episode-trailer) which has been removed as it introduced an additional dependency and is not strictly related to the TVmaze API. This package therefore has absolutely **no dependencies**, since all requests are made using the native `fetch` API.

## Credits

Original package was written by [Johann Berger](https://github.com/JohnDeved).

Contributions to the original package by [Josh Thompson](https://github.com/joshthompson).

Improvements and rewrite by [Konrad Guzek](https://github.com/kguzek).

## Copyright

SPDX-License-Identifier: AGPL-3.0-only

TVmaze Wrapper (TypeScript)

Copyright © 2025 Konrad Guzek

This file is part of "TVmaze Wrapper (TypeScript)". It is an adaptation of [node-tvmaze-api-ts](https://github.com/JohnDeved/node-tvmaze-api-ts), released under the ISC license. This project, "TVmaze Wrapper (TypeScript)", is released under the [GNU Affero General Public License, Version 3](https://www.gnu.org/licenses/agpl-3.0.en.html).

### Usage of TVmaze API

(copied from [tvmaze.com](https://www.tvmaze.com/api#licensing))

Use of the TVmaze API is licensed by CC BY-SA. This means the data can freely be used for any purpose, as long as TVmaze is properly credited as source and your application complies with the ShareAlike provision. You can satisfy the attribution requirement by linking back to TVmaze from within your application or website, for example using the URLs available in the API.
