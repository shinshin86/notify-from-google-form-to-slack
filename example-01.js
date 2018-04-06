function parseFormValues(e) {
  var data = ''
  var username = 'slack username'
  var icon = 'slack icon emoji';

  // If nothing is set, it will be sent to the channel you selected when setup of incoming webhook.
  var channelName = 'slack channel name';
  
  var formResponse = e.response;
  var itemResponse = formResponse.getItemResponses();
   for (var i = 0; i < itemResponse.length; i++){    
     var formData = itemResponse[i];
     var title = formData.getItem().getTitle();
     var response = formData.getResponse();
    
     data += '*'
     data += title
     data += ':'
     data += response
     data += '\n'
     
  }

  var jsonData = {
    'username': username,
    'channel': channelName,
    'icon_emoji': icon,
    'text': data
  }
  
  return jsonData;
}

function sendToSlack(data, url) {
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  UrlFetchApp.fetch(url, options);
}

function onFormSubmit(e){
  var POST_URL = "Slack incoming webhook url";

  sendToSlack(parseFormValues(e), POST_URL);
}
