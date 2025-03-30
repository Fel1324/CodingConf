const appHeader = document.querySelector(".app__header");
const appBody = document.querySelector(".app__body");

export function renderTicketContent({ fullName, emailAddres}){
  appHeader.innerHTML = `
    <h1>Congrats, ${fullName}! Your ticket is ready.</h1>
    <p>We've emailed your ticket to ${emailAddres} and will send updates in the run up to the event.</p>
  `;

  appBody.innerHTML = ``;
}