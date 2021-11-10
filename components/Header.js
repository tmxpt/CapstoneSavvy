export default st => `
<header id="topHeader">
<h1>${st.header}</h1>

<form>
<div id="input-form">
  <label for="twitter-username-input" id="input-form-at-sign">@</label>
  <input type="text" id="twitter-username-input" name="twitter-username-input">
  <input type="submit" value="Submit">
</div>
</form>

</header>`;
