<?php

namespace App\Controller\Api\V1;

use App\Entity\Game;
use App\Entity\Team;
use App\Repository\GameRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

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
     * @Route("/{team_id}/edit-score/{game_id}", name="edit_score",requirements={"id": "\d+"}, methods={"POST"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("game", options={"mapping": {"game_id": "id"}})
     */
    public function editScore(Game $game, Request $request, SerializerInterface $serializer, Team $team)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Game en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Game', 'json');

        // On indique à $game quels champs nous aimerions créer grâce aux méthodes ->Set récupéré dans l'entité $game
        // On associe les méthodes get de chaque champs afin de récupérer le champs à créer
        // On récupére team_id en ajoutant en paramêtre de la fonction l'entité Team
        $game
             ->setTeam($team)
             ->setAssistGame($data->getAssistGame())
             ->setGoalConcededGame($data->getGoalConcededGame())
             ->setGoalScoredGame($data->getGoalScoredGame())
             ->setRedCardGame($data->getRedCardGame())
             ->setYellowCardGame($data->getYellowCardGame())
             ->setUpdatedAt(new \DateTime());

        // On récupére l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On persiste l'entité $game
        $entityManager->persist($game);

        // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
        $entityManager->flush();

        // On retourne $game au format JSON
        return $this->json('Score du match modifié');
    }

    /**
     * @Route("/{team_id}/edit-information/{game_id}", name="edit_information",requirements={"id": "\d+"}, methods={"POST"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("game", options={"mapping": {"game_id": "id"}})
     */
    public function editInformation(Game $game, Request $request, SerializerInterface $serializer, Team $team)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Game en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Game', 'json');

        $game
             ->setTeam($team)
             ->setAddressGame($data->getAddressGame())
             ->setDateTimeGame($data->getDateTimeGame())
             ->setDomicileExterieur($data->getDomicileExterieur())
             ->setOpponentTeam($data->getOpponentTeam())
             ->setStadiumGame($data->getStadiumGame())
             ->setUpdatedAt(new \DateTime());

        // On récupére l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On persiste l'entité $game
        $entityManager->persist($game);

        // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
        $entityManager->flush();

        // On retourne $game au format JSON
        return $this->json('Informations match bien modifiées');
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
