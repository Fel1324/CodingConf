export function renderAvatar(){
  const inputFile = document.querySelector(".input-file");
  const avatar = document.querySelector("#avatar");
  const icon = document.querySelector(".icon");
  const span = document.querySelector(".input-file > span");

  const image = document.createElement("img");

  const buttonGroup = document.createElement("div");

  const removeImg = document.createElement("button");
  removeImg.textContent = "Remove image"
  removeImg.classList.add("removeImg");
  removeImg.type = "button";

  const changeImg = document.createElement("button");
  changeImg.textContent = "Change image";
  changeImg.type = "button";

  buttonGroup.append(removeImg, changeImg);

  avatar.onchange = (event) => {
    const file = event.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onload = (event) => {
        image.src = event.target.result;
        image.classList.add("avatar");
        image.style.display = "initial";
      }

      reader.readAsDataURL(file);
  
      icon.style.display = "none";
      span.style.display = "none";

      buttonGroup.style.display = "initial";
      inputFile.append(image, buttonGroup);
    }
  }

  changeImg.onclick = () => {
    avatar.click();
  }

  removeImg.onclick = () => {
    icon.style.display = "initial";
    span.style.display = "initial";
    
    image.style.display = "none"
    buttonGroup.style.display = "none";

    avatar.value = "";
  }
}
