import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
    window.botpressWebChat.init({
        "composerPlaceholder": "Ask any query?",
        "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
        "botId": "324b2855-be0d-4faf-ae28-5b82ea11696d",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "324b2855-be0d-4faf-ae28-5b82ea11696d",
        "lazySocket": true,
        "botName": "GVK",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/e4778d5a-f5f7-44af-949c-be8b18924b6a/v26315/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true
    });

    return () => {
    };
  }, []); 

  return (
    <div>
    </div>
  );
}

export default Chatbot;