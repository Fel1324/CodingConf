import { renderTicketContent } from "../ticket/render-ticket-content";

export function formData(){
  const form = document.querySelector("#form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const fullName = formData.get("name");
    const emailAddres = formData.get("email");
    const githubUsername = formData.get("username");

    console.log(fullName, emailAddres);

    renderTicketContent({
      fullName,
      emailAddres,
    });
  });
}