<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CompositionController extends AbstractController
{
    /**
     * @Route("/api/v1/composition", name="api_v1_composition")
     */
    public function index()
    {
        return $this->render('api/v1/composition/index.html.twig', [
            'controller_name' => 'CompositionController',
        ]);
    }
}
