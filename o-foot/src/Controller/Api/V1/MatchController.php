<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MatchController extends AbstractController
{
    /**
     * @Route("/api/v1/match", name="api_v1_match")
     */
    public function index()
    {
        return $this->render('api/v1/match/index.html.twig', [
            'controller_name' => 'MatchController',
        ]);
    }
}
