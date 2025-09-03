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

function init() {
  getAllFestivalImages();
}

// Templates..dienen dazu den inhalt aus dem Array anzuzeigen

function getAllFestivalImages() {
    let html = "";
    for (let i = 0; i < festivalImages.length; i++) {
      html += `<div <button  onclick="openDialog()"></button>"><img src="${festivalImages[i]}" alt=""></div>`;
    }
    document.getElementById("content").innerHTML = html;
  }
  


  // Dialog

  const dialogRef = document.getElementById('dialog');

  function openDialog() {
    dialogRef.showModal();
    dialogRef.classList.add('opened')
  }
  
  function closeDialog(){
      dialogRef.close()
      dialogRef.classList.remove('opened')
  }
  
  function toggleOverlay(){
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.toggle('d_none')
  }