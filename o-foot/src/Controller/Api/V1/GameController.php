<?php

namespace App\Controller\Api\V1;

use App\Entity\Game;
use App\Repository\GameRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api/v1/games", name="api_v1_games_")
 */
class GameController extends AbstractController
{
   /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list(GameRepository $gameRepository, SerializerInterface $serializer)
    {
        // On crée une variable $games
        // On va chercher la fonction findAll présente dans gameRepository afin d'afficher la liste des matchs
        $games = $gameRepository->findAll();

        // On crée une nouvelle variable $data, qui stocke la sérialisation de $games
        // On indique l'annotation a rajouté dans l'entité game en fonction du nom de l'api -> api_v1
        // Ceci permet d'indiquer quelles types de propriétés nous aimerions envoyer en JSON
        $data = $serializer->normalize($games, null, ['groups' => 'api_v1']);

        // On retourne $games au format JSON
        return $this->json($data);
    }

    /**
     * @Route("/{id}", name="show", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function show(Game $game, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de $game
        // On indique l'annotation a rajouté dans l'entité game en fonction du nom de l'api -> api_v1
        // Ceci permet d'indiquer quelles types de propriétés nous aimerions envoyer en JSON
        $data = $serializer->normalize($game, null, ['groups' => ['api_v1']]);
        
        // On retourne $game au format JSON
        return $this->json($data);
    }

    /**
     * @Route("/delete/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Game $game)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($game);
        $entityManager->flush();

        return $this->json('Match supprimé !');
    }
}
