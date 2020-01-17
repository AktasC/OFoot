<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/api/v1/user", name="api_v1_user")
     */
    public function index()
    {
        return $this->render('api/v1/user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }
}
