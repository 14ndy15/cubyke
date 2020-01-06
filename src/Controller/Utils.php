<?php

namespace App\Controller;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
CONST APIKEY = 'fd53b512f50bc79d6a8443d3c110c7b0289d00e2f563cb0a3247964f';

trait Utils
{
    function isUS(){
        $userIp = $_SERVER['REMOTE_ADDR'];
        
        $client = HttpClient::create();
        try {
            $response = $client->request('GET', 'https://api.ipdata.co/' . $userIp . '?api-key=' . APIKEY);
            $statusCode = $response->getStatusCode();

            if ($statusCode == 200) {
                $content = $response->toArray();
                // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
                return $content['country_code']=='US';
            }
            return false;
        } catch (TransportExceptionInterface $e) {
            return false;
        }
    }

    function makeWebP(){
        $script = 'convert';
        $folders = ['media/'];
        $files = [];
        for($i = 0; $i < sizeof($folders); $i++) {
            $workingFolder= $folders[$i];
            if ($dir = opendir($workingFolder))
                while (false !== ($file = readdir($dir))) {

                    if ($file === '.' || $file === '..')
                        continue;

                    if (is_dir($workingFolder.$file)) {
                        array_push($folders, $workingFolder . $file . '/');
                        continue;
                    }

                    $command = $script.' '.$workingFolder.$file.' -quality 50 -define webp:lossless=true '.$workingFolder.$file.'.webp';
//                    $command = $script.' -q 85 '.$workingFolder.$file.' -o '.$workingFolder.$file.'.webp';
                    echo $command.'<br>';
                    exec($command);
                }
        }
        closedir($dir);

        print_r($files);
        exit();
    }
}