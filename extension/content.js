chrome.runtime.sendMessage({ text: "This is a free text.", spoiler_words: ["spoiler"] }, function (response) {
  console.log(response);
});

console.log("Spoiler Blocker");
