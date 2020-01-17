<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PositionController extends AbstractController
{
    /**
     * @Route("/api/v1/position", name="api_v1_position")
     */
    public function index()
    {
        return $this->render('api/v1/position/index.html.twig', [
            'controller_name' => 'PositionController',
        ]);
    }
}
