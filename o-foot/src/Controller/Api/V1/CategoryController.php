<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    /**
     * @Route("/api/v1/category", name="api_v1_category")
     */
    public function index()
    {
        return $this->render('api/v1/category/index.html.twig', [
            'controller_name' => 'CategoryController',
        ]);
    }
}
