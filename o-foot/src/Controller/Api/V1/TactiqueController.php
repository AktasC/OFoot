<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TactiqueController extends AbstractController
{
    /**
     * @Route("/api/v1/tactique", name="api_v1_tactique")
     */
    public function index()
    {
        return $this->render('api/v1/tactique/index.html.twig', [
            'controller_name' => 'TactiqueController',
        ]);
    }
}
