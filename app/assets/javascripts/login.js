app.service("loginService", function(){
  var messages = [];

  var addMessage = function(newMessage){
    messages.push(newMessage);
  }

  var getMessage = function(){
    return messages;
  }

  var emptyMessage = function(){
    messages = [];
    return messages;
  }

  return {
    addMessage: addMessage,
    getMessage: getMessage,
    emptyMessage: emptyMessage
  };
})
