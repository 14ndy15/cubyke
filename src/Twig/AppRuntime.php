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
    public function filterSrcset($imagePath, $max_size = 800, $webp = false)
    {

        $sizes = [1920, 1200, 1000, 900, 800, 600];
        $webp_ext = '';
        if ($webp)
            $webp_ext = '.webp';

    	$html = '';
    	$i = count($sizes) - 1;
    	while ( $i >= 0 and $max_size >= $sizes[$i]) {
            $value = $sizes[$i];
            $i--;
            //obtiene las rutas de las imagenes según el tamaño
            $resolvedPath = $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_'.$value);
            //completa la lista de "path tamaño" de las imagenes disponibles

    		$html .= ' '.$resolvedPath.$webp_ext.' '.$value.'w, ';
    	}
    	$html = trim($html, ", ");

        return $html;
    }

    /**
     * @param string $imagesPath, the relative path to image, ex: static/uploads/image/pic.jpg
     * @param string $alt the Alternative text
     * @param string $sizes, for the html img tag
     * @param string $max_sizes, for the html img tag
     * @param string $figcaption, for the html img tag
     * @return string|FilterTag[]
     */
    public function imgTagContent($imagePath, $alt = null,$sizes = '100vw',
                                  $max_sizes = 800,$webP = true,$figcaption = false)
    {
        $html = '';

        if ($figcaption)
            $html .= '<figure>';

        if ($webP){
            $html .= '<picture>';

            $srcSetWebP = $this->filterSrcset($imagePath, $max_sizes, $webP=true);
            $html .= '<source 
                    data-srcset="' . $srcSetWebP . '"
                    sizes="'.$sizes.'"  
                    alt="'.$alt.'" 
                    type="image/webp">';
        }

        $imgThumbnail = $this->imagineCacheManager->getBrowserPath($imagePath, 'extrasmall_thumbnail');
        $srcSet = $this->filterSrcset($imagePath, $max_sizes);
        $html .= '<img class="lazyload blur-up" 
                    sizes="'.$sizes.'" 
                    data-srcset="'.$srcSet.'" 
                    src="'.$imgThumbnail.'" 
                    alt="'.$alt.'">';



        if ($webP)
            $html .= '</picture>';
        if ($figcaption)
            $html .= '<figcaption>'.$alt.'</figcaption></figure>';

        return $html;
    }

    public function pictureImgTagContent($imagePortraidPath,$imageWidePath,$media,
                                         $sizes,$alt = null,$max_sizes = 800,
                                         $webP = true,$figcaption = false){
        $html = '';

        if ($figcaption)
            $html .= '<figure>';

        if ($webP){
            $html .= '<picture>';


            $srcSetWebPWide = $this->filterSrcset($imageWidePath, $max_sizes, $webP=true);
            $html .= '<source 
                    data-srcset="' . $srcSetWebPWide . '"
                    sizes="'.$sizes.'"
                    media="'.$media.'"
                    type="image/webp">';


            $srcSetWebPPortraid = $this->filterSrcset($imagePortraidPath, $max_sizes, $webP=true);
            $html .= '<source 
                    data-srcset="' . $srcSetWebPPortraid . '"
                    sizes="'.$sizes.'" 
                    type="image/webp">';
        }

        $srcSetWide = $this->filterSrcset($imageWidePath, $max_sizes, $webP=true);
        $html .= '<source 
                    data-srcset="' . $srcSetWide . '"
                    sizes="'.$sizes.'"
                    media="'.$media.'"
                    type="image/jpeg">';

        $imgThumbnailPortraid = $this->imagineCacheManager->getBrowserPath($imagePortraidPath, 'extrasmall_thumbnail');
        $srcSet = $this->filterSrcset($imagePortraidPath, $max_sizes);
        $html .= '<img class="lazyload blur-up" 
                    sizes="'.$sizes.'" 
                    data-srcset="'.$srcSet.'" 
                    src="'. $imgThumbnailPortraid .'" 
                    alt="'.$alt.'">';

        if ($webP)
            $html .= '</picture>';
        if ($figcaption)
            $html .= '<figcaption>'.$alt.'</figcaption></figure>';

        return $html;
    }
    
}