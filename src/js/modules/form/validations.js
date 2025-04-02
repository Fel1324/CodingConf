export function validateInputs({ avatar, name, email, username }){
  const errorAvatar = document.querySelector("#error-avatar");
  const errorName = document.querySelector("#error-name");
  const errorEmail = document.querySelector("#error-email");
  const errorUsername = document.querySelector("#error-username");

  errorAvatar.innerHTML = `
  <img src="./src/assets/icons/icon-info.svg" alt="">
    Upload your photo (JPG or PNG, max size: 500KB).
  `;
  errorAvatar.style.color = "#8784A4";

  errorName.innerHTML = "";
  errorName.style.color = "#8784A4";
  errorName.previousElementSibling.style.borderColor = "#8784A4";

  errorEmail.innerHTML = "";
  errorEmail.style.color = "#8784A4";
  errorEmail.previousElementSibling.style.borderColor = "#8784A4";
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regexEmail.test(email);

  errorUsername.innerHTML = "";
  errorUsername.style.color = "#8784A4";
  errorUsername.previousElementSibling.style.borderColor = "#8784A4";
  const regexUsername = /^@[a-zA-Z0-9._-]{3,}$/
  const validateUsername = regexUsername.test(username);

  if(avatar.size > 512000){
    errorAvatar.innerHTML = `
      <img src="./src/assets/icons/icon-info-error.svg" alt="">
      File too large! Please upload a photo under 500KB!
    `;
    errorAvatar.style.color = "#FF0000";

    return "File too large! Please upload a photo under 500KB!";
  }

  if(avatar.type !== "image/png" && avatar.type !== "image/jpeg"){
    errorAvatar.innerHTML = `
      <img src="./src/assets/icons/icon-info-error.svg" alt="">
      File not supported! please upload png or jpg/jpeg photos!
    `;
    errorAvatar.style.color = "#FF0000";

    return "File not supported! please upload png or jpg/jpeg photos!";
  }

  if(name.length < 3 || name.length > 100){
    errorName.innerHTML = `
      <img src="./src/assets/icons/icon-info-error.svg" alt="">
      The full name must be greater than 3 and less than 100!
    `;
    errorName.style.color = "#FF0000";
    errorName.previousElementSibling.style.borderColor = "#FF0000";

    return "The full name must be greater than 3 and less than 100!";
  }

  if(!validateEmail){
    errorEmail.innerHTML = `
      <img src="./src/assets/icons/icon-info-error.svg" alt="">
      Please enter a valid email address!
    `;
    errorEmail.style.color = "#FF0000";
    errorEmail.previousElementSibling.style.borderColor = "#FF0000";

    return "Please enter a valid email address!";
  }

  if(!validateUsername){
    errorUsername.innerHTML = `
      <img src="./src/assets/icons/icon-info-error.svg" alt="">
      Please enter a valid username! (min: 3 caracteres after @)
    `;
    errorUsername.style.color = "#FF0000";
    errorUsername.previousElementSibling.style.borderColor = "#FF0000";

    return "Please enter a valid username! (min: 3 caracteres after @)";
  }
}
