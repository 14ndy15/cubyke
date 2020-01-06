<?php
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

                $ext = pathinfo($workingFolder.$file, PATHINFO_EXTENSION);
                if ($ext == 'jpeg' || $ext == 'jpg' || $ext == 'png') {

                    $command = $script . ' ' . $workingFolder . $file . ' -quality 85 ' . $workingFolder . $file . '.webp';
//                    $command = $script.' -q 85 '.$workingFolder.$file.' -o '.$workingFolder.$file.'.webp';
                    echo $command . '<br>';
                    exit();
                    exec($command);
                }

            }
        closedir($workingFolder);
    }

    print_r($files);
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
        closedir($workingFolder);
    }

    exit();
}

deleteWebP();