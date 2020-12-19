# Tombola!
### Una tombola, anche proiettabile, scritta in JavaScript per NodeJS!

![Logo Tombola!](/public/images/logo.png)

## Utilizzo
#### Stanze
E' possibile giocare diverse partite contemporaneamente: all'apertura verrà chiesto di inserire il nome di una stanza, ognuna è identificata unicamente dal nome inserito. Tramite questa web app si può sia giocare con le cartelle che col tabellone.
Per iniziare a giocare basta inserire il nome della stanza.

#### Le cartelle
Dopo aver inserito il nome della stanza, selezionando "scegli le cartelle" si può scegliere le cartelle da giocare, che vengono generate casuelmente e uniche per ogni stanza. Quando sono state selezionate le cartelle da giocare, cliccando su "gioca" si visualizzeranno le cartelle scelte e sarà possibile giocare cliccando sui numeri per coprirli o scoprirli in base ai numeri estratti.
Se tutti i giocatori sono sincronizzati sulla stessa stanza, saranno disponibili un totale di 30 cartelle tra cui ogni giocatore potrà scegliere quelle desiderate: come nel gioco classico una cartella non può essere presa da più di un giocatore!

#### Il tabellone
Dopo aver inserito il nome è possibile cliccare su "Vai al tabellone". In questa pagina è possibile visualizzare il tabellone con i numeri estratti e, cliccando su "estrai", estrarre un numero casualmente.
Selezionando la stessa stanza, è possibile aprire il tabellone su qualsiasi dispositivo e ogni istanza aperta si sincronizzerà in automatico con le altre: è utile per avere, per esempio, un'istanza su un proiettore o televisore e un'altra istanza su tablet, telefono o pc, per poter estrarre i numeri. Tramite il menu in basso, è possibile resettare il tabellone (e l'assegnazione delle cartelle) e disabilitare la sincronizzazione automatica (tasto "sincronizza", i numeri chiamati verranno comunque salvati su file e sincronizzati sulle altre istanze).
Attenzione: il tabellone è pensato per funzionare su smartphone e su schermi 1080p o MacBook, se dovesse risultare troppo piccolo o sforare i bordi dello schermo, è possibile usare la funzione zoom del browser tramite la combinazione `ctrl + <rotella mouse>` o dal menù impostazioni.

![Screenshot Tombola!](/public/images/screenshot.jpg)

## Installazione
Tombola! è stata scritta per node.js

Per avviare il programma è necessario clonare questo repository (`git clone https://github.com/azzlabs/tombola-ajax.git`), spostarsi nella cartella principale del progetto e avviarlo con `npm start`. Per avviarlo, sul sistema è necessario avere installato node.js e npm.

La web app è anche già configurata per pm2: lanciando `pm2 start` sarà possibile avviarla in background tramite pm2.
