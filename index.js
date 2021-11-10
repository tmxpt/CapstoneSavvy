import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = new Navigo(window.location.origin);

axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?appid=e6d9c98ff5bbebc24a7fb32541d9cf33&q=st.%20louis`
  )
  .then(response => {
    state.Footer.weather = {};
    state.Footer.weather.city = response.data.name;
    console.log(state.Footer.weather.city);
    state.Footer.weather.temp = response.data.main.temp;
    state.Footer.weather.feelsLike = response.data.main.feels_like;
    state.Footer.weather.description = response.data.weather[0].main;
    done();
  })
  .catch(err => console.log(err));

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
  ${Footer(st)}
  `;

  router.updatePageLinks();

  addEventListeners(st);
}

// add menu toggle to bars icon in nav bar
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  /*
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
    */

  if (st.page === "Order") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      const toppings = [];
      for (let input of inputList.toppings) {
        if (input.checked) {
          toppings.push(input.value);
        }
      }

      const requestData = {
        crust: inputList.crust.value,
        cheese: inputList.cheese.value,
        sauce: inputList.sauce.value,
        toppings: toppings
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.PIZZA_PLACE_API_URL}`, requestData)
        .then(response => {
          state.Pizza.pizzas.push(response.data);
          router.navigate("/Pizza");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}
