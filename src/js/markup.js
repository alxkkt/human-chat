function markup(arr, userId) {
  return arr
    .map(
      ({ message, avatar, date, uid }) => `<div class="message ${userId === uid ? 'contact' : ''}">
          <img
          class="avatar"
            src="${avatar}"
            alt=""
            width="30"
            height="30"
          />
          <p class="message__content">
            ${message}
          </p>
          <div class="timestamp">${date}</div>
        </div>`,
    )
    .join('');
}

export { markup };
