let festivalImages = [
  "assets/image/Ahoi Brause.jpg",
  "assets/image/Beer Jesus.jpg",
  "assets/image/beerPapst.jpg",
  "assets/image/Bier Garten.jpg",
  "assets/image/Bärtchen.jpg",
  "assets/image/Cheealeader.jpg",
  "assets/image/Die Mannschaft.jpg",
  "assets/image/Edward40Hands.jpg",
  "assets/image/Festival Hund.jpg",
  "assets/image/FestivalEingang.jpg",
  "assets/image/heimfahrt.jpg",
  "assets/image/Herr Tittler.jpg",
  "assets/image/Mittagessen.jpg",
  "assets/image/No Shit.jpg",
  "assets/image/RIP.jpg",
  "assets/image/Schönes Bild.jpg",
  "assets/image/Sieht gut aus.jpg",
  "assets/image/was mache ich hier.jpg",
];

let festivalImageDesc = [
  "Ahoi Brause",
  "Jesus Beer Christ",
  "Die treuen Gefolgen vom BEERPAPST",
  "Tag 1",
  "Das Abbild eines Adones mit dem passenden Schnurbart..und ein komischer Kerl links",
  "Das GruppenBild war verdammt anstrengend",
  "Rocco 2024",
  "Eine Tradition das die Jungs Edward40Hands spielen müssen",
  "immer ist dieser Hund dabei...",
  "FestivalEingang vom SouthSide",
  "V.I.P",
  "Moritz ist endlich mal ruhig..",
  "Darf ich vorstellen Herr tittler",
  "Frühstück",
  "Ist nicht dein Ernst?!",
  "R.I.P. Rocco del Schlacko",
  "Riesenrad, ich war da oben",
  "Könnte auch Tag 1 sein",
  "Das war ein schwacher Moment..ich bin mir ziemlich sicher davor gab es Korn Eistee",
];

let festivalImage = "";
let dialogRef = "";
let dialogImgRef = "";
let currentIndex = 0;

function init() {
  // Bilder anzeigen
  getAllFestivalImages();

  // Referenzen holen, damit man weiß wo welches Bild ist
  dialogRef = document.getElementById("dialog1");
  dialogImgRef = document.getElementById("dialog_image");

  // Eventbubbeling. hier sogre ich dafür das der Listener nur außerhalb vom dialog zählt.
  dialogRef.addEventListener("click", (e) => {
    e.preventDefault(); // mit esc schließen
    // Prüfen: wurde auf das Dialog-Element selbst geklickt?
    if (e.target === dialogRef) {
      closeDialog();
    }
  });

  //tabindex im Dialog
  dialogRef.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const focusable = dialogRef.querySelectorAll("button");
      const first = focusable[0]; // Schließen
      const last = focusable[focusable.length - 1]; // Weiter

      if (e.shiftKey) {
        // Rückwärts mit Shift+Tab
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Vorwärts mit Tab
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}

// Funcion um die Bilder anzeigen zu lassen.
function getAllFestivalImages() {
  for (let i = 0; i < festivalImages.length; i++) {
    festivalImage += getFestivalImages(i);
  }
  document.getElementById("festivalGallery").innerHTML = festivalImage;
}
// Templates..dienen dazu den inhalt aus dem Array anzuzeigen

// Template: Gallery ansicht
function getFestivalImages(i) {
  return `<div tabindex="0" class="image-box"
              onclick="openDialog(${i})"
              onkeydown="handleKey(event, ${i})">
            <img src="${festivalImages[i]}" alt="">
          </div>`;
}

function handleKey(event, i) {
  if (event.key === "Enter" || event.key === " ") {
    openDialog(i);
    event.preventDefault(); // verhindert Scrollen bei Space
  }
}

// ------------------ DIALOG ------------------

// Template: Dialog Ansicht
function contentDialogImage() {
  // erstelle die Variable "PFAD" dient dazu den "currentIndex" zu definieren und um auf ihn zuzugreifen, wie in titel oder bild generierung.
  const path = festivalImages[currentIndex];
  // Zieht sich den aktuellen Titel
  const title = path.split("/").pop().split(".")[0];
  // Zieht sich das aktuelle Bild
  dialogImgRef.src = path;
  // Dialolg Titel wird gerendert.
  document.getElementById("dialogTitle").textContent = title;
  // Dialog Beschreibung wird gerendert.
  document.getElementById("description").textContent =
    festivalImageDesc[currentIndex];
  //DIalog Bild von Anzahl wird gerendert.
  document.getElementById("dialogImageNumber").innerHTML =
    currentIndex + 1 + " von " + festivalImages.length; // mit innerHTML verändern wir den HTML Bereich, (currentIndex + 1 +) zieht sich den aktuellen index und rechnet plus 1 wegen der 0 (+ festivalImages.length) gibt die anzahl der gesamten arrays wieder. durch das(von) in der Mitte wird die Rechnung unterbrochen.
}

// Dialog
// öffnet den Dialog
// das "i" in openDialog kommt vom index oben, von der for schleife zur generierung der Bilder! Also können wir so bestimmen auf welchem Bild wir uns befinden.
function openDialog(i) {
  // der currentIndex wird auf das ausgewählte image gesetzt
  currentIndex = i;
  contentDialogImage();
  // showModal öffnet das dialog fenster.
  dialogRef.showModal();
}
// schließt den Dialog, momentan nur auf Button
function closeDialog() {
  dialogRef.close();
}
// nächstes Bild, arbeitet über current Index
function goForward() {
  currentIndex++;
  if (currentIndex >= festivalImages.length) currentIndex = 0;
  contentDialogImage();
}
// vorheriges Bild, arbeitet über current Index
function goBack() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = festivalImages.length - 1;
  contentDialogImage();
}
