<?php

namespace App\Controller\Api\V1;

use App\Entity\Player;
use Symfony\Component\HttpFoundation\Request;
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
     * @Route("/edit/{id}", name="edit", requirements={"id": "\d+"})
     */
    public function edit(Player $player, Request $request, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Player en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Player', 'json');
        
        // On indique à $player quels champs nous aimerions modifier grâce aux méthodes ->Set récupéré dans l'entité $player
        // On associe les méthodes get de chaque champs afin de récupérer le champs à modifier
        $player
            ->setNumberJerseyPlayer($data->getNumberJerseyPlayer())
            ->setPositionPlayer($data->getPositionPlayer())
            ->setUpdatedAt(new \DateTime);

            // On récupére l'EntityManager
            $entityManager = $this->getDoctrine()->getManager();

            // On persiste l'entité $player
            $entityManager->persist($player);

            // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
            $entityManager->flush();

        // On retourne $user au format JSON
        return $this->json('Joueur mis à jour avec succés');
    }

    /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
        return;
    }

}
