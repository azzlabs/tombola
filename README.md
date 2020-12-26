# Tombola!
### Una semplice tombola proiettabile, scritta in JavaScript per NodeJS!

![Logo Tombola!](/public/images/logo.png)

## Utilizzo
#### Stanze
E' possibile giocare diverse partite contemporaneamente: all'apertura verrà chiesto di inserire il nome di una stanza, ognuna è identificata unicamente dal nome inserito. Tramite questa web app si può sia giocare con le cartelle che col tabellone.
Per iniziare a giocare basta inserire il nome della stanza.

#### Le cartelle
Dopo aver inserito il nome della stanza, selezionando "scegli le cartelle" si può scegliere le cartelle da giocare, che vengono generate casualmente e uniche per ogni stanza. Quando sono state selezionate le cartelle da giocare, cliccando su "gioca" si visualizzeranno le cartelle scelte e sarà possibile giocare cliccando sui numeri per coprirli o scoprirli in base ai numeri estratti.
Se tutti i giocatori sono sincronizzati sulla stessa stanza, saranno disponibili un totale di 30 cartelle tra cui ogni giocatore potrà scegliere quelle desiderate: come nel gioco classico una cartella non può essere presa da più di un giocatore!

#### Il tabellone
Dopo aver inserito il nome è possibile cliccare su "Vai al tabellone". In questa pagina è possibile visualizzare il tabellone con i numeri estratti e, cliccando su "estrai", estrarre un numero casualmente.
Selezionando la stessa stanza, è possibile aprire il tabellone su qualsiasi dispositivo e **ogni istanza aperta si sincronizzerà in automatico** con le altre: è utile per avere, per esempio, un'istanza su un proiettore o televisore e un'altra istanza su tablet, telefono o pc, per poter estrarre i numeri. Tramite il menu in basso, è possibile resettare il tabellone (e l'assegnazione delle cartelle) e disabilitare la sincronizzazione automatica (tasto "sincronizza", i numeri chiamati verranno comunque salvati su file e sincronizzati sulle altre istanze).
Attenzione: il tabellone è pensato per funzionare su smartphone e su schermi 1080p o MacBook, se dovesse risultare troppo piccolo o sforare i bordi dello schermo, è possibile usare la funzione zoom del browser tramite la combinazione `ctrl + <rotella mouse>` o dal menù impostazioni.

È disponibile un'istanza del gioco al sito [tombola.azzlabs.eu](https://tombola.azzlabs.eu)

![Screenshot Tombola!](/public/images/screenshot.jpg)

## Installazione
Tombola! è stata scritta per node.js

Per avviare il programma è necessario clonare questo repository (`git clone https://github.com/azzlabs/tombola.git`) spostarsi nella cartella principale del progetto, installare le dipendenze con `npm install` e avviarlo con `npm start`. 
Per avviarlo, sul sistema è necessario avere installato node.js e npm.
La web app è anche già configurata per pm2: lanciando `pm2 start` sarà possibile avviarla in background tramite pm2.

Una volta avviata, Tombola! si aprirà sull'indirizzo di default `localhost:3000`

Se si vuole modificare la configurazione, come ad esempio la porta di ascolto del server, è sufficiente copiare il file `config.json.example` in `config.json` e impostare la configurazione desiderata.
Data la semplicità dell'app, Tombola! non utilizza un DBMS per la permanenza dai dati ma si appoggia ad alcuni file .json.
Se doveste riscontrare problemi nell'esecuzione, è necessario controllare che la cartella `src/shared/db-rooms` sia scrivibile dal server node.

### Docker

Grazie alla PR di [@denysvitali](https://github.com/denysvitali) è stato aggiunto anche il supporto a Docker. Per avviare basta dare `docker build -t tombola .` e `docker run -p <porta dest>:3000/tcp -d tombola` come superuser, specificando la porta sulla quale pubblicare la web app.
Se si vuole usare docker-compose, è sufficiente copiare il file `docker-compose.yml.example` in `docker-compose.yml`, impostare la porta desiderata e avviare con `docker-compose up -d`, sempre in superuser.

Danke a [@fratorgano](https://github.com/fratorgano) per il testing. Se qualcosa non va, prendetevala con lui. Obv scherzo. Forse.
