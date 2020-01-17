<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class StatController extends AbstractController
{
    /**
     * @Route("/api/v1/stat", name="api_v1_stat")
     */
    public function index()
    {
        return $this->render('api/v1/stat/index.html.twig', [
            'controller_name' => 'StatController',
        ]);
    }
}
