const button = document.getElementById("button");
const container = document.getElementById("container");

let isInserted = false;

button.onclick = () => {
  if (isInserted) {
    return;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 10000; i++) {
    const father = document.createElement("li");
    const child = document.createElement("span");
    if (i === 0) {
      child.className = "first";
    }
    child.innerText = "test";
    father.appendChild(child);
    fragment.appendChild(father);
  }

  container.appendChild(fragment);

  isInserted = true;
};
