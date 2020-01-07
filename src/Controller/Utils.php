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
        $is_server = $_SERVER['HTTP_HOST'] == 'www.cubyke.com' || $_SERVER['HTTP_HOST'] == 'cubyke.com';

        $script = 'webp\bin\cwebp.exe';
        $options = ' -q 80 -resize ';
        if ($is_server) {
            $script = 'convert';
            $options = ' -quality 80  -resize ';
        }
        $folders = ['uploads/', 'images/'];
        $outputFolder = 'media/cache/';
        $resolutions = [1920, 1200, 1000, 900, 800, 600];

        for($i = 0; $i < sizeof($folders); $i++) {
            $workingFolder= $folders[$i];
            if ($dir = opendir($workingFolder))
                while (false !== ($file = readdir($dir))) {

                    if ($file === '.' || $file === '..')
                        continue;

                    $filename = $workingFolder.$file;

                    if (is_dir($filename)) {
                        array_push($folders, $filename . '/');
                        continue;
                    }

                    $ext = pathinfo($filename, PATHINFO_EXTENSION);
                    if ($ext == 'jpeg' || $ext == 'jpg' || $ext == 'png') {

                        $size = getimagesize($filename);

                        foreach ($resolutions as $resolution) {

                            if ($size[0] < $resolution)
                                continue;

                            $outputFile = __DIR__ . '/' . $outputFolder . 'min_width_' .$resolution.'/'.$filename.'.webp';
                            $command = $script . $options . $resolution . ' 0 ' . __DIR__. '/' . $filename . ' -o ' . $outputFile;
                            $command = str_replace('/', '\\', $command);
                            if($is_server)
                                $command = $script . ' ' . __DIR__. '/' . $filename . $options . $resolution . ' ' . $outputFile;

                            echo $command . '<br><br>';
                            exec($command);
                            exit();
                        }
                    }

                }
        }
        exit();
    }

    function deleteWebP(){

        $folders = ['media/'];
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

                    $ext = pathinfo($workingFolder.$file, PATHINFO_EXTENSION);
                    if ($ext == 'webp') {
                        unlink($workingFolder . $file);
                        echo 'erase '.$workingFolder . $file.'<br><br>';
                    }
                }
        }
        exit();
    }

}