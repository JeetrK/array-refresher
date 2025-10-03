
let artists = [
  `Jane`, 
  `WillfromtheD`, 
  `Che`, 
  `Glaive`, 
  `bladee`, 
  `Underscores`, 
  `Quadeca`, 
  `Mobo`, 
  `Sematary`, 
  `LucyB`
];

artists.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

function displayArtists(array) {
  const list = document.getElementById("artistList");
  list.innerHTML = "";

  array.forEach((artist, index) => {
    console.log(artist); 

    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${artist}`;
    list.appendChild(listItem);
  });
}

displayArtists(artists);

document.getElementById("filterInput").addEventListener("input", function () {
  const filter = this.value.trim().toLowerCase();
  if (filter === "") {
    displayArtists(artists);
  } else {
    const filtered = artists.filter(artist => artist.toLowerCase().startsWith(filter));
    displayArtists(filtered);
  }
});
