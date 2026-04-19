document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const responseDiv = document.getElementById('response');
    if (userInput === 'hihi') {
        responseDiv.textContent = 'Hihi to you too! 😊';
    } else {
        responseDiv.textContent = 'Please type "hihi" to interact with the bot.';
    }
});