const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => `
<main>
<div class="page-content">
<div class="self-content">
  <div class="text-content">
    <h1>Welcome to the ${st.header} of my website.</h1>
    <p>Hi, I’m Tomoki Poth. For the last few years, I have been working in entry level positions. I hope to soon change that and use my technical knowledge and skills to enter a career in the tech industry.<br><br>
    I was first introduced to some graphic design and editing softwares during this time. In college, I took the next step, learning some programming. These eventually have led to an interest in a career in web development.<br><br>
    I have attended the SavvyCoders Full Stack Web Development Course, and there learned more about Web Development, and learned a lot about . For my capstone, I created a tool that can aggregate a content creator’s posts from multiple websites on one page. We learned a lot about development, but also learned about the development process.
    </p><br><br>
  </div>

  <div>
    <a href="https://docs.google.com">
    <div class="image-wireframes"></div>
    </a>
  </div>

  </div>
</div>
    <div class="page-content">
    <h3>
    Weather in ${st.weather.city}
    ${kelvinToFahrenheit(st.weather.temp)}F, feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F
    </h3>
  </div>
  <div class="page-content">
    <iframe class="ig-iframe" src="https://www.instagram.com/p/CV3P7OjBJp8/embed" frameborder="0"   scrolling="no" allowtransparency="true">
    </iframe>
    <iframe class="ig-iframe" src="https://www.instagram.com/p/CVnM-VTgk1x/embed" frameborder="0"   scrolling="no" allowtransparency="true">
    </iframe>
    <iframe class="ig-iframe" src="https://www.instagram.com/p/CViWJ3mDHRz/embed" frameborder="0"   scrolling="no" allowtransparency="true">
    </iframe>
  </div>

  <div class="page-content">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yYXnxnix10A" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yYXnxnix10A" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yYXnxnix10A" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  </div>

  <div class="page-content">

    <iframe class="tw-iframe" border=0 frameborder=0 scrolling="no"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fmozilla%2Fstatus%2F1458814027254149125">
    </iframe>
    <iframe class="tw-iframe" border=0 frameborder=0 scrolling="no"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fmozilla%2Fstatus%2F1458123725350576131">
    </iframe>
    <iframe class="tw-iframe" border=0 frameborder=0 scrolling="no"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fmozilla%2Fstatus%2F1457741634561523721">
    </iframe>
    <iframe class="tw-iframe" border=0 frameborder=0 scrolling="no"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fmozilla%2Fstatus%2F1457732646251925507">
    </iframe>
    <iframe class="tw-iframe" border=0 frameborder=0 scrolling="no"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fmozilla%2Fstatus%2F1457390390865285122">
    </iframe>
    <iframe class="tw-iframe" border=0 frameborder=0 scrolling="no"
    src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fmozilla%2Fstatus%2F1456704370830151680">
    </iframe>

  </div>

</main>
`;
