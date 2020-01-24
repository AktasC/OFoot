<?php

namespace App\Controller\Api\V1;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/v1/games", name="api_v1_games_")
 */
class GameController extends AbstractController
{
   /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list()
    {
        return;
    }

    /**
     * @Route("/{id}", name="show", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function show()
    {
        return;
    }

    /**
     * @Route("/", name="new", methods={"POST"})
     */
    public function new()
    {
        return;
    }

    /**
     * @Route("/{id}", name="info_edit", requirements={"id": "\d+"}, methods={"PUT"})
     */
    public function editInfos()
    {
        return;
    }

    /**
     * @Route("/{id}", name="stats_edit", requirements={"id": "\d+"}, methods={"PUT"})
     */
    public function editStats()
    {
        return;
    }


    /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
        return;
    }
}
