<?php
/**
 * Created by PhpStorm.
 * User: jo
 * Date: 11/14/2019
 * Time: 11:06 PM
 */

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerArgumentsEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class ControllerSubscriber implements  EventSubscriberInterface{

    public static function getSubscribedEvents()
    {
        // return the subscribed events, their methods and priorities
        return [
            KernelEvents::CONTROLLER_ARGUMENTS => [
                ['setLanguageRequestAsGlobal', 0],
            ],
        ];
    }

    public function setLanguageRequestAsGlobal(ControllerArgumentsEvent $event)
    {
        $parameters = $event->getRequest()->attributes->all();

        if(isset($parameters['_locale']))
            $_SESSION['_locale'] = $parameters['_locale'];
    }

}