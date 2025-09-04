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
let festivalImage = "";
let dialogRef = "";
let dialogImgRef = "";

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

// function openDialog(i) {
//   document.getElementById('dialogTitle').textContent = ($[i])

//   dialogImgRef.src = festivalImages[i]; // Bildquelle übertragen 
//   dialogRef.showModal();
//   dialogRef.classList.add("opened");
// }

// KI GENERIERT amfang 
function openDialog(i) {
  const path = festivalImages[i];
  const filename = path.split("/").pop().split(".")[0]; // "beerPapst" // ki generiert verstehe noch nicht wieso 


  document.getElementById('dialogTitle').textContent = filename;
  dialogImgRef.src = path;
  dialogRef.showModal();
  dialogRef.classList.add("opened");
}

//KI Generiert ende

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}

function goForward() {

  
}

function goBack() {}
