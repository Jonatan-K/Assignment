document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('rollButton');
    const outcomeField = document.getElementById('diceOutcome');
    const diceText = document.getElementById('diceText'); // Esim. "Heitä!"-teksti
    const historyList = document.getElementById('historyList');
    
    // Taulukko tallentamaan viimeiset 5 heittoa
    let rollHistory = [];
    
    rollButton.addEventListener('click', () => {
      // Haetaan valittu nopan arvo
      const diceRadios = document.querySelectorAll('input[name="dice"]');
      let diceSides = 6; // oletuksena D6
      diceRadios.forEach(radio => {
        if (radio.checked) {
          diceSides = parseInt(radio.value, 10);
        }
      });
    
      // Heitetään noppaa: arvotaan luku 1 - diceSides väliltä
      const result = Math.floor(Math.random() * diceSides) + 1;
      outcomeField.value = result;
    
      // Jos tulos on nopan maksimi, muuta tekstin väri punaiseksi
      if (result === diceSides) {
        diceText.style.color = "red";
      } else {
        diceText.style.color = ""; // palautetaan oletustyyliin
      }
    
      // Lisätään heitto rollHistory-taulukkoon
      const rollEntry = { die: diceSides, result: result };
      rollHistory.push(rollEntry);
    
      // Säilytetään vain viimeiset 5 heittoa
      if (rollHistory.length > 5) {
        rollHistory.shift();
      }
    
      // Päivitetään historia-lista HTML:ssä
      historyList.innerHTML = ""; // tyhjennetään lista
      rollHistory.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = "D" + entry.die + ": " + entry.result;
        historyList.appendChild(li);
      });
    });
});
  