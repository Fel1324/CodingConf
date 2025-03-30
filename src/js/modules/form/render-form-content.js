import { formData } from "./form-data.js";

const appHeader = document.querySelector(".app__header");
const appBody = document.querySelector(".app__body");

export function renderFormContent(){
  appHeader.innerHTML = `
    <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
    <p>Secure your spot at next year's biggest coding conference.</p>
  `;

  appBody.innerHTML = `
    <form id="form">
      <div class="input-group">
        <label for="avatar">Upload Avatar</label>

        <div class="input-file">
          <input type="file" name="avatar" id="avatar">
          <img class="icon" src="./src/assets/icons/icon-upload.svg" alt="">
          <span>Drag and drop or click to upload</span>
        </div>

        <small>
          <img src="./src/assets/icons/icon-info.svg" alt="">
          Upload your photo (JPG or PNG, max size: 500KB).
        </small>
      </div>

      <div class="input-group">
        <label for="name">Full Name</label>
        <input class="input" type="text" name="name" id="name" required placeholder="full name" minlength="3" maxlength="100">
      </div>

      <div class="input-group">
        <label for="email">Email Addres</label>
        <input class="input" type="email" name="email" id="email" required placeholder="example@email.com">
      </div>

      <div class="input-group">
        <label for="username">Github Username</label>
        <input class="input" type="username" name="username" id="username" required placeholder="@yourusername" maxlength="100">
      </div>

      <button class="submit" type="submit">Generate My Ticket</button>
    </form>
  `;

  formData();
}