// magánhangzók megszámlálása >>> alapStringben való előfordulást vizsgálom

// ÚJ String metódus
String.prototype.vowelsHunString = "öÖüÜóÓeEuUiIoOőŐúÚaAéÉáÁűŰíÍ";

String.prototype.vowelCount = function() {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (this.vowelsHunString.indexOf(this.charAt(i)) > -1) {
      counter++;
    }
  }
  return counter;
}

var userString = prompt("Írj be egy szöveget! Megszámolom a benne lévő magánhangzókat! ");
alert(userString.vowelCount());
