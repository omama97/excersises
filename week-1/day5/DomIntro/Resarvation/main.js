const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function () {
  const name = document.getElementById("name").value;
  const lowerCaseName = name.toLowerCase();
  const editedName =
    lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
  if (reservations[editedName] && !reservations[editedName].claimed) {
    alert("Welcome in, " + editedName);
    reservations[editedName].claimed = true;
  } else if (reservations[editedName] && reservations[editedName].claimed) {
    alert("Hmm, someone already claimed this reservation");
  } else if (!reservations[editedName]) {
    alert("You have no reservation");
    reservations[editedName] = { claimed: true };
  }
};
