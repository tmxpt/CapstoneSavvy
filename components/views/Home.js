const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => `
<main>
<div class="text-content">
<div class="text-flex">
  <div>
    <h1>Welcome to the ${st.header} of my website.</h1>
    <p>Hi, I’m Tomoki Poth. For the last few years, I have been working in entry level positions. I hope to soon change that and use my technical knowledge and skills to enter a career in the tech industry.<br><br>
    I was first introduced to some graphic design and editing softwares during this time. In college, I took the next step, learning some programming. These eventually have led to an interest in a career in web development.<br><br>
    I have attended the SavvyCoders Full Stack Web Development Course, and there learned more about Web Development, and learned a lot about . For my capstone, I created a tool that can aggregate a content creator’s posts from multiple websites on one page. We learned a lot about development, but also learned about the development process.
    </p><br><br>
  </div>

    </div>
</div>
    <br>
    <h3>
    Weather in ${st.weather.city}
    ${kelvinToFahrenheit(st.weather.temp)}F, feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h3>

</main>
`;
