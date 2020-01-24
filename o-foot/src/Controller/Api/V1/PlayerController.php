<?php

namespace App\Controller\Api\V1;

use App\Entity\Player;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api/v1/players", name="api_v1_players_")
 */
class PlayerController extends AbstractController
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
    public function show(Player $player, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de $player
        // On indique l'annotation a rajouté dans l'entité player en fonction du nom de l'api -> api_v1
        // Ceci permet d'indiquer quelles types de propriétés nous aimerions envoyer en JSON
        $data = $serializer->normalize($player, null, ['groups' => ['api_v1']]);
        
        // On retourne $player au format JSON
        return $this->json($data);
    }

    /**
     * @Route("/", name="new", methods={"POST"})
     */
    public function new()
    {
        return;
    }

    /**
     * @Route("/{id}", name="edit", requirements={"id": "\d+"}, methods={"PUT"})
     */
    public function edit()
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
