<?php
    $nome_file = 'db.json';
    
    $info_tavola = json_decode(file_get_contents($nome_file));
    if (!isset($info_tavola->remaining_numbers)) { 
        $info_tavola = new stdClass();
        $info_tavola->remaining_numbers = [];
        $info_tavola->called_list = [];
        $info_tavola->last_called = -1;
    }

    if (isset($_GET['action'])) {
        switch ($_GET['action']) {
            case 'estrai': 
                if (count($info_tavola->remaining_numbers) > 0) {
                    shuffle($info_tavola->remaining_numbers);
                    $info_tavola->last_called = array_pop($info_tavola->remaining_numbers);
                    $info_tavola->called_list[] = $info_tavola->last_called;
                    saveFile($info_tavola);
                    returnLog('Estrai OK', 0, $info_tavola);
                } else {
                    returnLog('Estrai: tavola piena', 2, $info_tavola);
                }
                break;
            case 'getinfo':
                returnLog('Estrai OK', 0, $info_tavola);
                break;
            case 'reset':
                for ($i = 0; $i < 90; $i++) 
                    $info_tavola->remaining_numbers[$i] = $i + 1;
                $info_tavola->last_called = -1;
                $info_tavola->called_list = [];
                saveFile($info_tavola);
                returnLog('Reset OK', 0, $info_tavola);
                break;
            default: returnLog('Wrong action selected', 1);
        }
    } else {
        returnLog('No action supplied', 1);
    }

    function returnLog($string, $ok = 0, $data = []) { echo json_encode(['msg' => $string, 'ok' => $ok, 'data' => $data]); }
    function saveFile($data) { 
        global $nome_file;
        $fp = fopen($nome_file, 'w') or returnLog('Unable to open file', 1, $data);
        fwrite($fp, json_encode($data));
        fclose($fp);
    }
?>