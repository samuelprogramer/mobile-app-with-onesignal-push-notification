# Projeto React Native com OneSignal para Notificações

Este projeto é uma aplicação React Native que utiliza o OneSignal para permitir o envio e recebimento de notificações push no dispositivo móvel. Ele consiste em duas partes: o backend e o frontend. O backend é responsável por enviar notificações para dispositivos móveis, enquanto o frontend é a aplicação móvel que recebe e lida com as notificações.

## Backend

O código do backend demonstra como enviar notificações push usando a biblioteca `onesignal-node`. Abaixo, descrevemos os principais pontos do código:

1. Importe a biblioteca `onesignal-node`:

```javascript
const OneSignal = require('onesignal-node');
```

2. Inicialize o cliente do OneSignal com seu ID do aplicativo e chave da API:

```javascript
const client = new OneSignal.Client('SEU_APP_ID', 'SUA_API_KEY');
```

3. Crie um objeto de notificação com o conteúdo da mensagem e o público-alvo. No exemplo, a mensagem é definida em inglês ('en') e é enviada para todos os segmentos:

```javascript
const notification = {
    contents: {
      'en': 'Sua mensagem de notificação aqui',
    },
    included_segments: ['All']
};
```

4. Use o cliente para criar e enviar a notificação:

```javascript
try {
    const response = await client.createNotification(notification);
    console.log(response.body.id);
} catch (e) {
    console.log(e.statusCode);
    console.log(e.body);
}
```

## Frontend

O código do frontend é uma aplicação React Native que se integra ao OneSignal para receber notificações push. Aqui estão os principais pontos do código:

1. Importe a biblioteca do OneSignal e configure o nível de log (para fins de depuração):

```javascript
import { LogLevel, OneSignal } from 'react-native-onesignal';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
```

2. Inicialize o OneSignal com o ID do aplicativo:

```javascript
OneSignal.initialize("SEU_APP_ID");
```

3. Solicite permissão para exibir notificações ao usuário:

```javascript
OneSignal.Notifications.requestPermission(true);
```

4. Configure um ouvinte para lidar com cliques nas notificações:

```javascript
OneSignal.Notifications.addEventListener('click', (event) => {
  console.log('OneSignal: notification clicked:', event);
});
```

Isso permite que sua aplicação reaja a notificações push quando o usuário clica nelas.

No geral, este projeto permite que você envie notificações push do backend para dispositivos móveis que tenham o aplicativo React Native instalado. O frontend, neste caso, demonstra como configurar o OneSignal para receber e lidar com essas notificações. Certifique-se de substituir 'SEU_APP_ID' e 'SUA_API_KEY' pelos valores reais do OneSignal para seu aplicativo.