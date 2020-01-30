<?php

namespace App\Controller\Api\V1;

use App\Entity\Player;
use App\Repository\PlayerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/players", name="api_v1_players_")
 */
class PlayerController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list(PlayerRepository $playerRepository, SerializerInterface $serializer)
    {
        // On crée une variable $players
        // On va chercher la fonction findAll présente dans playerRepository afin d'afficher la liste des joueurs et leurs stats
        $players = $playerRepository->findAll();

        // On crée une nouvelle variable $data, qui stocke la sérialisation de $games
        // On indique l'annotation a rajouté dans l'entité game en fonction du nom de l'api -> api_v1
        // Ceci permet d'indiquer quelles types de propriétés nous aimerions envoyer en JSON
        $data = $serializer->normalize($players, null, ['groups' => 'api_v1']);

        // On retourne $games au format JSON
        return $this->json($data);
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
     * @Route("/edit/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST})
     */
    public function edit(Player $player, Request $request, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Player en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Player', 'json');

        // On indique à $player quels champs nous aimerions modifier grâce aux méthodes ->Set récupéré dans l'entité $player
        // On associe les méthodes get de chaque champs afin de récupérer le champs à modifier
        $player
            ->setFirstNamePlayer($data->getFirstNamePlayer())
            ->setLastNamePlayer($data->getLastNamePlayer())
            ->setNumberJerseyPlayer($data->getNumberJerseyPlayer())
            ->setPositionPlayer($data->getPositionPlayer())
            ->setUpdatedAt(new \DateTime());

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
     * @Route("/delete/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Player $player)
    {
        // Pour supprimer le player , il nous faut l'entity manager
        // On récupére donc l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On supprime l'entinté $player avec la fonction remove
        $entityManager->remove($player);

        // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
        $entityManager->flush();

        // On retourne $user au format JSON
        return $this->json('Player bien supprimé');
    }
}
