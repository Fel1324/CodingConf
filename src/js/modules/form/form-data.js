import { renderTicketContent } from "../ticket/render-ticket-content";

export function formData(){
  const form = document.querySelector("#form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData.get("email"));

    renderTicketContent();
  });
}