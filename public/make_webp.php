<?php
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
                        echo 'erase '.$workingFolder . $file.'<br>';
                    }
                }
        }

        exit();
    }

    makeWebP();
    //deleteWebP();