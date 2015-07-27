app.service("loginService", function(){
  var messages = [];

  var addMessage = function(newMessage){
    messages.push(newMessage);
  }

  var getMessage = function(){
    return messages;
  }

  return {
    addMessage: addMessage,
    getMessage: getMessage
  };
})
