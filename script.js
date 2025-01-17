// Player stats
const winningPlayers = [
  { name: "Loon", points: 1283 },
  { name: "Jing Xin", points: 836 },
  { name: "Wesley", points: 959 },
  { name: "Li Wen", points: 953 },
  { name: "Ji Yaoh", points: 228 },
  { name: "Fai", points: 6 }
];

const losingPlayers = [
  { name: "Jonathan", points: -1100 },
  { name: "Wing", points: -1027 },
  { name: "Jing An", points: -800 },
  { name: "Chung Shun", points: -620 },
  { name: "龙", points: -613 },
  { name: "Lap Fung", points: -490 },
  { name: "Jing An (adjusted)", points: -391 },
  { name: "Siong Kiat", points: -42 }
];

// Populate table rows dynamically
function populateTable(tableId, players) {
  const tableBody = document.getElementById(tableId);
  players.forEach(player => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${player.name}</td>
      <td>${player.points}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Populate tables on page load
document.addEventListener("DOMContentLoaded", () => {
  populateTable("winning-players", winningPlayers);
  populateTable("losing-players", losingPlayers);
});
