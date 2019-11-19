<?php


namespace App\EventListener;

use Symfony\Component\HttpKernel\Event\RequestEvent;

class SetLanguageOnRequestListener
{

    public function onKernelResponse(LifecycleEventArgs $args)
    {
        dump($args->getObject());
    }


}
