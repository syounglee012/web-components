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
    line-height: 1;
}

h1 {
    font-size: 1.5rem;
}


.my-component img {
    width: 100%;
}

.my-component button {
    cursor: pointer;
    background: darkslateblue;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
}

.info {
    display: none;
    line-height: 1;
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
    <button id="toggle-info">Show Info</button>
  
</div>`;

class MyComponent extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }
  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector(".info");
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

    if (this.showInfo) {
      info.style.display = "none";
      toggleBtn.innerText = "Show Info";
    } else {
      info.style.display = "block";
      toggleBtn.innerText = "Hide Info";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define("my-component", MyComponent);
