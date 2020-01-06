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

                $command = $script.' '.$workingFolder.$file.' -quality 85 '.$workingFolder.$file.'.webp';
//                    $command = $script.' -q 85 '.$workingFolder.$file.' -o '.$workingFolder.$file.'.webp';
                echo $command.'<br>';
                exec($command);
            }
    }
    closedir($dir);

    print_r($files);
    exit();
}

makeWebP();