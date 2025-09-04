let festivalImages = [
  "assets/image/beerPapst.jpg",
  "assets/image/Bärtchen.jpg",
  "assets/image/FestivalPflanze.jpg",
  "assets/image/Gang01.jpg",
  "assets/image/Gang02.jpg",
  "assets/image/GangAss.jpg",
  "assets/image/GutenMorgen.jpg",
  "assets/image/Riesenrad.jpg",
  "assets/image/RIP.jpg",
  "assets/image/Southside.jpg",
];

let festivalImageDesc = [
  "Die treuen Gefolgen vom BEERPAPST",
  "Das Abbild eines Adones mit dem passenden Schnurbart..und ein komischer Kerl links",
  "NatuschutzGebiet",
  "V.I.P",
  "NinaChuba <3",
  "Festival Aufsicht",
  "Jenga Festival Edition",
  "Riesenrad, ich war da oben",
  "R.I.P. Rocco del Schlacko",
  "schönes Bild, hat geklappt",
];
let festivalImage = "";
let dialogRef = "";
let dialogImgRef = "";
let currentIndex = 0;

function init() {
  // Bilder anzeigen
  getAllFestivalImages();

  // Referenzen holen
  dialogRef = document.getElementById("dialog1");
  dialogImgRef = document.getElementById("dialog_image");
}

// Templates..dienen dazu den inhalt aus dem Array anzuzeigen

function getAllFestivalImages() {
  let festivalImage = "";
  for (let i = 0; i < festivalImages.length; i++) {
    festivalImage += `
    <div onclick="openDialog(${i})">
      <img src="${festivalImages[i]}" alt="">
    </div>`;
  }
  document.getElementById("content").innerHTML = festivalImage;
}

// Dialog

function openDialog(i) {
  currentIndex = i;           
  updateDialogImage();           
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}

function goForward() {
  currentIndex++;
  if (currentIndex >= festivalImages.length) currentIndex = 0;
  updateDialogImage();     
}

function goBack() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = festivalImages.length - 1;
  updateDialogImage();           
}


function updateDialogImage() {
  const path  = festivalImages[currentIndex];
  const title = path.split("/").pop().split(".")[0];
  dialogImgRef.src = path;
  document.getElementById("dialogTitle").textContent = title;
  document.getElementById("description").textContent = festivalImageDesc[currentIndex];
}

