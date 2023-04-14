function countWords() {
    // Get the user input
    const text = document.getElementById("text").value;

    // Count the number of letters, words, and sentences
    let numLetters = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[a-z]/i)) {
        numLetters++;
      }
    }
    const numWords = text.trim().split(/\s+/).length;
    let numSentences = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "." || text[i] === "!" || text[i] === "?") {
        numSentences++;
      }
    }

    // Display the results
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
      <p>Number of letters: ${numLetters}</p>
      <p>Number of words: ${numWords}</p>
      <p>Number of sentences: ${numSentences}</p>
    `;
  }