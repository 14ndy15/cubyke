<?php


namespace App\Controller;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
CONST APIKEY = 'fd53b512f50bc79d6a8443d3c110c7b0289d00e2f563cb0a3247964f';

trait GeoIp
{
    function isUS(){
        $userIp = $_SERVER['REMOTE_ADDR'];
        
        $client = HttpClient::create();
        try {
            $response = $client->request('GET', 'https://api.ipdata.co/' . $userIp . '?api-key=' . APIKEY);
            $statusCode = $response->getStatusCode();

            if ($statusCode == 200) {
                // $statusCode = 200
                $contentType = $response->getHeaders()['content-type'][0];
                // $contentType = 'application/json'
                $content = $response->getContent();
                // $content = '{"id":521583, "name":"symfony-docs", ...}'
                $content = $response->toArray();
                // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
                return $content['country_code']=='US';
            }
            return false;
        } catch (TransportExceptionInterface $e) {
            return false;
        }
    }
}