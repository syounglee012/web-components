const template = document.createElement("template");
template.innerHTML = `
<style>
.my-component {
    font-family: 'Arial', sans-serif;
    background: #f4f4f4;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
}

.my-component img {
    width: 100%;
}

.my-component button {
    cursor: pointer;
    background: darkorchid;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
}
</style>
<div class="my-component">
<img />

    <div>
    <h1></h1>
    <div class="info">
    <p><slot  name="email"/></p>
    <p><slot name="phone"/></p>
    </div>
    <button id="toggle-info">Hide Info</button>
  
</div>`;

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
}

window.customElements.define("my-component", MyComponent);
