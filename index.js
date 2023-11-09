let data = await fetch("./data.json")
  .then((res) => res.json())
  .then((res) => res);

const containerCharacters = document.getElementById("container__character");
const buttonSearch = document.getElementById("search__button");
const input = document.getElementById("search__character");
const clearSearch = document.getElementById("clear__search");

const mountCharacterCard = (character) => {
  const characterLi = document.createElement("li");
  characterLi.classList.add("card__character");

  const img = document.createElement("img");
  img.src = character.image;
  img.classList.add("img__character");
  img.alt = "personagem fictício";

  characterLi.append(img);
  const mainCard = document.createElement("div");

  const nameCharacter = document.createElement("h1");
  nameCharacter.classList.add("name__character");
  nameCharacter.innerText = character.name;

  const moves = document.createElement("h1");
  moves.innerText = "Habilidades";
  moves.classList.add("separation__text");

  mainCard.append(nameCharacter, moves);

  character.moveList.forEach((elem) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = elem.name;
    p.innerText = elem.combination;

    div.append(h1, p);
    mainCard.append(div);
  });

  const combos = document.createElement("h1");
  combos.innerText = "combos";
  combos.classList.add("separation__text");

  mainCard.append(combos);

  character.combos.forEach((elem) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = elem.name;
    p.innerText = elem.combination;

    div.append(h1, p);
    mainCard.append(div);
  });
  const finalRoundSpecial = document.createElement("h1");
  finalRoundSpecial.innerText = "Golpes Fatais";
  finalRoundSpecial.classList.add("separation__text");
  mainCard.append(finalRoundSpecial);

  character.finalRoundSpecial.forEach((elem) => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = elem.name;
    p.innerText = `${elem.combination} ` + (elem.distance && ` (${elem.distance})`);

    
    div.append(h1, p);
    mainCard.append(div);
  });

  if (character.transformations) {
    const transformations = document.createElement("h1");
    transformations.innerText = "Transformações";
    transformations.classList.add("separation__text");
    mainCard.append(transformations);

    character.transformations.forEach((elem) => {
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      h1.innerText = elem.name;
      p.innerText = elem.combination

      div.append(h1, p);
      mainCard.append(div);
    });
  }
  characterLi.append(mainCard);

  return characterLi;
};

const startApplication = () => {
  data.forEach((character) => {
    const characterCreated = mountCharacterCard(character);
    containerCharacters?.append(characterCreated);
  });
};

startApplication();

input.addEventListener("change", (e) => {
  if (e.target.value.length > 0) return filterCharacters(e.target.value);
});
buttonSearch.addEventListener("click", (e) => {
  if (input.value.length > 0) return filterCharacters(input.value);
});
clearSearch.addEventListener("click", (e) => {
  input.value = ""
  containerCharacters.innerHTML = "";
  startApplication();
});

const filterCharacters = (name) => {
  const characterFounded = data.filter((character) =>{

    return character.name.replace('-', '').toLowerCase().includes(name.toLowerCase())
  });
  console.log(characterFounded)
  if (characterFounded.length > 0) {
    containerCharacters.innerHTML = "";
    return characterFounded.forEach((character) => {
      const characterCreated = mountCharacterCard(character);
      containerCharacters?.appendChild(characterCreated);
    });
  } else {
    containerCharacters.innerHTML = "";
    startApplication();
  }
};

