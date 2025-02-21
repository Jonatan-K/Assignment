document.addEventListener('DOMContentLoaded', () => {     //katsotaan että sivu ladattu ennen scriptiä
    const startButton = document.getElementById('StartButton');
    const cardTotal = document.getElementById('CardTotal');
    const gameText = document.getElementById('GameText');
    const correctOutput = document.getElementById('correctCount');
    const wrongOutput = document.getElementById('wrongCount');
  
    let correctCount = 0;
    let wrongCount = 0;
    //ajetaan jos nappia painetaan
    startButton.addEventListener('click', () => {
        // Arvotaan kortin arvo väliltä 1–13
        const randomCardValue = Math.floor(Math.random() * 13) + 1;
        // Luetaan ja muunnetaan käyttäjän syöte numeroksi
        const guess = parseInt(cardTotal.value, 10);
        
        // Jos syöte ei ole kelvollinen luku, näytetään ohje ja lopetetaan funktio
        if (isNaN(guess)) {
          gameText.textContent = "Syötä numero!";
          return;
        }
        
        // Verrataan syötettä arvottuun arvoon ja päivitetään tulokset
        if (guess === randomCardValue) {
          gameText.textContent = "Oikein!";
          correctCount++;
        } else {
          gameText.textContent = `Väärin! Oikea arvo oli ${randomCardValue}.`;
          wrongCount++;
        }
        
        // Päivitetään oikein- ja väärin-arvausten kentät
        correctOutput.textContent = correctCount;
        wrongOutput.textContent = wrongCount;
        
        // Tyhjennys seuraavaa arvausta varten
        cardTotal.value = "";
      });
});      