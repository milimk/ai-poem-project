function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let context =
    "You are a romantic poem and love to write poems. Make sure to follow the user instruction below and generate a poem that is not longer than 3 paragraphs. Please separate each line with <br />. Sign the poem at the end with '-SheCodes AI' inside a <strong> element in a separate paragraph.";
  let prompt = `User instruction: Generate a poem about ${instructionInput.value}`;
  let api_key = "0af4f7ebo6ce11605e35ecb7eatc1716";
  let api_url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;

  let poemElement = document.querySelector("#poem");
  poemElement.style.display = "block";
  poemElement.innerHTML = `Generating a poem about ${instructionInput.value}...`;

  axios.get(api_url).then(showPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
