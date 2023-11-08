const redactButton = document.getElementById('redactButton');
const originalText = document.getElementById('originalText');
const wordsToRedact = document.getElementById('wordsToRedact');
const replacementText = document.getElementById('replacementText');
const redactedText = document.getElementById('redactedText');

redactButton.addEventListener('click', () => {
    const startTime = new Date().getTime();
    const original = originalText.value;
    const words = wordsToRedact.value.split(' ');
    const replacement = replacementText.value;

    let redacted = original;
    words.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const matches = redacted.match(regex);
        if (matches) {
           
            redacted = redacted.replace(regex, replacement);
          
        }
    });
    const endTime = new Date().getTime();
    const elapsedSeconds = (endTime - startTime) / 1000;
    redactedText.textContent = redacted;
    timeTaken.textContent = elapsedSeconds.toFixed(2);
});
