console.log("Script loaded!")

chrome.runtime.sendMessage({ text: "This is a spoiler-free text.", spoiler_words: ["spoiler"] }, function (response) {
    console.log(response);
});
