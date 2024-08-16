function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 20,
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
