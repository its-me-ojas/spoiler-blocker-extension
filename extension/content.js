chrome.runtime.sendMessage({ text: "This is a spoiler-free text.", spoiler_words: ["spoiler"] }, function (response) {
  console.log("Response received in the content script: ", response);

  if (response.spoiler_detected) {
    document.body.innerHTML = "<h1>Warning: Spoiler Content Detected!</h1>";
  }


});

console.log("Spoiler Blocker");
