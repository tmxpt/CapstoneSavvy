import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo(window.location.origin);

// function weather(st){};

router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    if (page === "Home") {
      console.log(process.env);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then((response) => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch((err) => console.log(err));
    }
  },
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
  `;

  router.updatePageLinks();
  // addEventListeners(st);
}

// function addEventListeners(st) {
//   axios
//     .get(
//       `https://api.openweathermap.org/data/2.5/weather?appid=e6d9c98ff5bbebc24a7fb32541d9cf33&q=st.%20louis`
//     )
//     // https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}%20louis
//     .then(response => {
//       console.log(`anything1`);
//       state.Home.weather.city = response.data.name;
//       state.Home.weather.temp = response.data.main.temp;
//       state.Home.weather.feelsLike = response.data.main.feels_like;
//       state.Home.weather.description = response.data.weather[0].main;
//       console.log(state.Home.weather);
//       console.log(state.Home);
//     })
//     .catch(err => console.log(err))
// }
