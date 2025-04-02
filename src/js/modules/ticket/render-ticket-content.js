const appHeader = document.querySelector(".app__header");
const appBody = document.querySelector(".app__body");

export function renderTicketContent({ avatarSrc, name, email, username, ticketDate, ticketId }) {
  appHeader.innerHTML = `
    <h1>Congrats, <span>${name}</span>! Your ticket is ready.</h1>
    <p>We've emailed your ticket to <span>${email}</span> and will send updates in the run up to the event.</p>
  `;

  appBody.innerHTML = `
    <div class="ticket-wrapper">
      <div class="ticket">
        <div class="ticket-infos">
          <div>
            <img src="./src/assets/logo-full.svg" alt="logo Coding Conf">
            <span class="datetime">${ticketDate} / Austin, TX</span>
          </div>
          <div>
            <img src="${avatarSrc}" alt="${name}">
            <div>
              <span class="ticket-name">${name}</span>
              <small class="ticket-username">
                <img src="./src/assets/icons/icon-github.svg" alt="">
                ${username}
              </small>
            </div>
          </div>
        </div>
        <div class="ticket-id">
          <span>#0${ticketId}</span>
        </div>
      </div>
    </div>
  `;
}