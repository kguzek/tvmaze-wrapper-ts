import {
  findShowByExternalId,
  getFullSchedule,
  findPersonById,
  getSchedule,
  searchPeople,
  searchShow,
  searchShows,
  findShowById,
} from "../src";

searchShows("girls").then((result) => {
  if (result[0].show) {
    console.log("👍 API::search::shows");
  } else {
    console.log("👎 API::search::shows");
    debugger;
  }
});

searchPeople("lauren").then((result) => {
  if (result[0].person) {
    console.log("👍 API::search::people");
  } else {
    console.log("👎 API::search::people");
    debugger;
  }
});

searchShow("girls").then((result) => {
  if (result.id) {
    console.log("👍 API::singleSearch::shows");
  } else {
    console.log("👎 API::singleSearch::shows");
    debugger;
  }
});

findShowByExternalId({ imdb: "tt0944947" }).then((result) => {
  if (result.id) {
    console.log("👍 API::lookup::shows");
  } else {
    console.log("👎 API::lookup::shows");
    debugger;
  }
});

getFullSchedule().then((result) => {
  if (result[0].id) {
    console.log("👍 API::fullSchedule");
  } else {
    console.log("👎 API::fullSchedule");
    debugger;
  }
});

getSchedule({ country: "US", date: "2014-12-01" }).then((result) => {
  if (result[0].id) {
    console.log("👍 API::schedule");
  } else {
    console.log("👎 API::schedule");
    debugger;
  }
});

findPersonById("1").then((result) => {
  if (result.id) {
    console.log("👍 API::people");
  } else {
    console.log("👎 API::people");
    debugger;
  }
});

findShowById("1").then((result) => {
  if (result.id) {
    console.log("👍 API::shows");
  } else {
    console.log("👎 API::shows");
    debugger;
  }
});
