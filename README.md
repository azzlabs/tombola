# Tombola!
### Una tombola, anche proiettabile, scritta in JavaScript per NodeJS!

![Logo Tombola!](/public/images/logo.png)

## Utilizzo
E' possibile giocare diverse partite contemporaneamente: all'apertura verrà chiesto di inserire il nome di una stanza e ognuna è identificata unicamente dal nome inserito.
Tramite questa web app si può sia giocare con le cartelle che col tabellone. 

Dopo aver inserito il nome della stanza, selezionando "scegli le cartelle" si può scegliere le cartelle da giocare, che vengono generate unicamente per ogni stanza. Quando sono state selezionate le cartelle da giocare, cliccando su gioca si va alla modalità "giocata" dove è possibile giocare le cartelle selezionate cliccando sui numeri estratti per coprirli. Se tutti i giocatori sono sincronizzati sulla stessa stanza, saranno disponibili 30 cartelle da cui ogni giocatore potrà scegliere univocamente: come nel gioco classico una cartella non può essere presa da più di un giocatore!

Il tabellone: selezionando questa modalità è possibile giocare al tabellone, cliccando su "estrai" per estrarre un numero casualmente.
Selezionando la stessa stanza, è possibile aprire il tabellone su qualsiasi dispositivo e ogni istanza aperta si sincronizzerà in automatico con le altre: è utile per avere, per esempio, un'istanza su un proiettore o televisore e un'altra istanza su tablet, telefono o pc, per poter estrarre i numeri. Tramite il menu in basso, è possibile resettare il tabellone (e l'assegnazione delle cartelle) e disabilitare la sincronizzazione automatica (tasto "sincronizza", i numeri chiamati verranno comunque salvati su file e sincronizzati sulle atre istanze).
Attenzione: il tabellone è pensato per funzionare su smartphone e su schermi 1080p o MacBook, se dovesse risultare troppo piccolo o sforare i bordi dello schermo, è possibile usare la funzione zoom del browser tramite la combinazione `ctrl + <rotella mouse>` o dal menù impostazioni

![Screenshot Tombola!](/public/images/screenshot.jpg)

## Installazione
Tombola! è stata scritta per node.js

Per avviare il programma è necessario clonare questo repository (`git clone https://github.com/azzlabs/tombola-ajax.git`), spostarsi nella cartella principale del progetto e avviarlo con `npm start`. Per avviarlo, sul sistema è necessario avere installato node.js e npm.

La web app è anche già configurata per pm2: lanciando `pm2 start` sarà possibile avviarla in background tramite pm2.
