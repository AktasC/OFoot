<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    /**
     * @Route("/api/v1/event", name="api_v1_event")
     */
    public function index()
    {
        return $this->render('api/v1/event/index.html.twig', [
            'controller_name' => 'EventController',
        ]);
    }
}
