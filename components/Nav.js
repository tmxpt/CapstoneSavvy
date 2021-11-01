export default links => `
<nav>
<i class="fas fa-bars"></i>
<ul class="hidden--mobile nav-links">
  ${
    // constructing HTML list items from array
    //  - .map reformats the elements in the array into html and constructs a new array from the results
    //  - .join creates one long string from the array
    links
      .map(
        el => `
        <li><a href="/${el.title}" title="${el.title}"
        class="${el.title}-icon" data-navigo>
          ${el.text}
        </a></li>`
      )
      .join("")
  }


</ul>
</nav>`;
