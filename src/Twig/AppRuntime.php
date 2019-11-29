<?php
// src/Twig/AppRuntime.php
namespace App\Twig;

use Twig\Extension\RuntimeExtensionInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AppRuntime implements RuntimeExtensionInterface
{
    private $imagineCacheManager;

    public function __construct(ContainerInterface $container = null)
    {
        $this->imagineCacheManager = $container->get('liip_imagine.cache.manager');
    }


    /**
     * @param string $imagesPath, the relative path to image, ex: static/uploads/image/pic.jpg
     * @param array $sizes, the sizes, depends on the filters 'min_width_XXX' defined on liip_image config file
     * @return string|FilterTag[]
     */
    public function filterSrcset($imagePath, $max_size = 800)
    {
        $sizes = [1920, 1200, 1000, 900, 800, 600];
    	$html = '';
    	$i = count($sizes) - 1;
    	while ( $i >= 0 and $max_size >= $sizes[$i]) {
            $value = $sizes[$i];
            $i--;
            //obtiene las rutas de las imagenes según el tamaño
            $resolvedPath = $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_'.$value);
            //completa la lista de "path tamaño" de las imagenes disponibles
    		$html .= ' '.$resolvedPath.' '.$value.'w, ';
    	}
    	$html = trim($html, ", ");

        return $html;
    }

    /**
     * @param string $imagesPath, the relative path to image, ex: static/uploads/image/pic.jpg
     * @param string $alt the Alternative text
     * @param string $sizes, for the html img tag
     * @param string $class, for the html img tag
     * @return string|FilterTag[]
     */
    public function imgTagContent($imagePath,
                                  $alt = null,
                                  $sizes = '100vw',
                                  $max_sizes = 800)
    {
//        $img_thumbnail = file_get_contents($this->imagineCacheManager->getBrowserPath($imagePath, 'extrasmall_thumbnail'));
        // Encode the image string data into base64
//        $img_thumbnail = base64_encode($img_thumbnail);
        $img_thumbnail = $this->imagineCacheManager->getBrowserPath($imagePath, 'extrasmall_thumbnail');

        $html ="<img class=\"lazyload blur-up\" sizes=\"$sizes\" ";

//        $html .= "src=\"data:image/jpeg;charset=utf-8;base64,$img_thumbnail\"";
        $html .= "src=\"$img_thumbnail\"";

        $html .= " data-srcset=\"".$this->filterSrcset($imagePath, $max_sizes)."\"
                         alt=\"$alt\">";
        return $html;
    }
    
}