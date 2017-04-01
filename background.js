chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://support.geeksquad.com/support/services/GeekSquadChat_with_an_Agent";
  chrome.tabs.create({ url: newURL });
});
