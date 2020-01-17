<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DashBoardController extends AbstractController
{
    /**
     * @Route("/api/v1/dash/board", name="api_v1_dash_board")
     */
    public function index()
    {
        return $this->render('api/v1/dash_board/index.html.twig', [
            'controller_name' => 'DashBoardController',
        ]);
    }
}
