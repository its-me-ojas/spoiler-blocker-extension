console.log("Background script loaded!");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // Log the received message from content.js
    console.log("Message received in background script:", request);

    // Make a request to your Flask app
    fetch('http://127.0.0.1:5001/detect_spoiler', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: request.text, spoiler_words: request.spoiler_words }),
    })
        .then(response => response.json())
        .then(data => {
            // Log the response from the Flask app
            console.log("Response from Flask app:", data);

            // Send the response back to content.js
            sendResponse(data);
        })
        .catch(error => {
            // Log and handle errors
            console.error('Error:', error);
            sendResponse({ error: 'Error occurred during the request.' });
        });

    // Uncomment the return true if you want to keep the messaging channel open until the fetch is complete
    return true;
});
