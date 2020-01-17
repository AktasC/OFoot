<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PracticeController extends AbstractController
{
    /**
     * @Route("/api/v1/practice", name="api_v1_practice")
     */
    public function index()
    {
        return $this->render('api/v1/practice/index.html.twig', [
            'controller_name' => 'PracticeController',
        ]);
    }
}
