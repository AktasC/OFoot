<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TeamController extends AbstractController
{
    /**
     * @Route("/api/v1/team", name="api_v1_team")
     */
    public function index()
    {
        return $this->render('api/v1/team/index.html.twig', [
            'controller_name' => 'TeamController',
        ]);
    }
}
