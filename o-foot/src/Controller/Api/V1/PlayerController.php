<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PlayerController extends AbstractController
{
    /**
     * @Route("/api/v1/player", name="api_v1_player")
     */
    public function index()
    {
        return $this->render('api/v1/player/index.html.twig', [
            'controller_name' => 'PlayerController',
        ]);
    }
}
