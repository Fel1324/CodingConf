import { renderTicketContent } from "../ticket/render-ticket-content";
import { validateInputs } from "./validations";

export function formData(){
  const form = document.querySelector("#form");
  
  form.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);
  
      const avatar = formData.get("avatar");
      const name = formData.get("name");
      const email = formData.get("email");
      const username = formData.get("username");
      
      const error = validateInputs({ avatar, name, email, username });
      if(error) throw new Error(error);

      const avatarSrc = document.querySelector(".avatar").src;

      const date = new Date();
      const ticketDate = date.toLocaleDateString("en", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const ticketId = date.getTime().toString().slice(9, 13);

      renderTicketContent({
        avatarSrc,
        name,
        email,
        username,
        ticketDate,
        ticketId,
      });

    } catch (error) {
      console.error(error);
    }
  });
}
