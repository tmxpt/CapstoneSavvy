import html from "html-literal";
import * as state from "../store";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
/*
let city = state.Home.weather.name;
let temp = kelvinToFahrenheit(parseInt(state.Home.weather.temp));
let feelLike = kelvinToFahrenheit(parseInt(state.Home.weather.feelsLike));
*/
export default st => html`
  <footer>
    <div id="footer-sections">
      <div>
        <p>&copy; 2020 <a href="https://savvycoders.com/">Savvy Coders</a></p>
        <p></p>

        <p>Fonts: Google Fonts</p>
      </div>
      <div id="icon-credits">
        <ul>
          <li>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
              >Pixel perfect</a
            >
            from
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
          </li>
          <li>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/md-tanvirul-haque"
              title="Md Tanvirul Haque"
              >Md Tanvirul Haque</a
            >
            from
            <a href="https://www.flaticon.com/" title="Flaticon"
              >www.flaticon.com</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h3>
        Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F,
        feels like ${kelvinToFahrenheit(st.weather.feelsLike)}F
      </h3>
    </div>
  </footer>
`;
