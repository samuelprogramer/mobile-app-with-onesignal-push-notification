const OneSignal = require('onesignal-node');

async function sendNotification(){
    const client = new OneSignal.Client('appId', 'apiKey');
    const notification = {
        contents: {
          'en': 'Sua mensagem de notificação aqui',
        },
        included_segments: ['All']
      };
      try {
        const response = await client.createNotification(notification);
        console.log(response.body.id);
      } catch (e) {
          console.log(e.statusCode);
          console.log(e.body);
      }
      
}

sendNotification();