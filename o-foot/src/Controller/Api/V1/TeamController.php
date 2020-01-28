<?php

namespace App\Controller\Api\V1;

use App\Entity\Game;
use App\Entity\Practice;
use App\Entity\Team;
use App\Repository\PlayerRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/teams", name="api_v1_teams_")
 */
class TeamController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list()
    {
        return;
    }

    /**
     * @Route("/{id}/players", name="players", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function playersByTeam(SerializerInterface $serializer, Team $team, PlayerRepository $playerRepository)
    {
        $players = $playerRepository->findPlayersByTeam($team);

        $data = $serializer->normalize($players, null, ['groups' => 'api_v1']);

        return $this->json($data);
    }

    /**
     * @Route("/{id}", name="show", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function show(SerializerInterface $serializer, Team $team)
    {
        /**
         * On récupère dans la variable $data l'objet de la sérialisation des atttributs de team que l'on récupère
         * via les attributs 'groups' => 'api_vi'.
         */
        $data = $serializer->normalize($team, null, ['groups' => 'api_v1']);

        // on retourne $data au format json
        return $this->json($data);
    }

    /**
     * @Route("/new", name="new", methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Team en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Team', 'json');

        // Création d'un objet vide de la classe Team stockée dans la variable $team
        $team = new Team();

        // On indique à $team quels champs nous aimerions modifier grâce aux méthodes ->Set récupéré dans l'entité $team
        // On associe les méthodes get de chaque champs afin de récupérer le champs à modifier
        $team
            ->setaddressTeam($data->getaddressTeam())
            ->setCityTeam($data->getCityTeam())
            ->setManagerTeam($data->getManagerTeam())
            ->setStadiumTeam($data->getStadiumTeam())
            ->setTeamName($data->getTeamName())
            ->setUpdatedAt(new \DateTime());

        // On récupére l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On persiste l'entité $team
        $entityManager->persist($team);

        // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
        $entityManager->flush();

        // On retourne $team au format JSON
        return $this->json('Equipe bien créée');
    }

    /**
     * @Route("/{id}/practice", name="new_practice",requirements={"id": "\d+"}, methods={"POST"})
     */
    public function newPractice(Request $request, SerializerInterface $serializer, Team $team)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Practice', 'json');

        $practice = new Practice();

        $practice
            ->setTeam($team)
            ->setAddressPractice($data->getAddressPractice())
            ->setStadiumPractice($data->getStadiumPractice())
            ->setDateTimePractice($data->getDateTimePractice());

        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($practice);

        $entityManager->flush();

        return $this->json('Entrainement crée!');
    }

    /**
     * @Route("/{team_id}/practice/{practice_id}/edit", name="edit_practice",requirements={"id": "\d+"}, methods={"POST"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("practice", options={"mapping": {"practice_id": "id"}})
     */
    public function editPractice(Practice $practice, Request $request, SerializerInterface $serializer, Team $team)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Practice', 'json');

        $practice
            ->setTeam($team)
            ->setAddressPractice($data->getAddressPractice())
            ->setStadiumPractice($data->getStadiumPractice())
            ->setDateTimePractice($data->getDateTimePractice())
            ->setUpdatedAt(new \DateTime());

        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($practice);

        $entityManager->flush();

        return $this->json('Entrainement mis à jour!');
    }

    /**
     * @Route("/edit/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST"})
     */
    public function edit(Request $request, Team $team, SerializerInterface $serializer)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Team', 'json');

        $team
        ->setaddressTeam($data->getaddressTeam())
        ->setChampionshipTeam($data->getChampionshipTeam())
        ->setCityTeam($data->getCityTeam())
        ->setStadiumTeam($data->getStadiumTeam())
        ->setLogoTeam($data->getLogoTeam())
        ->setTeamName($data->getTeamName())
        ->setUpdatedAt(new \DateTime());

        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($team);

        $entityManager->flush();

        return $this->json('Équipe mise à jour!');
    }

    /**
     * @Route("/delete/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Team $team)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($team);
        $entityManager->flush();

        return $this->json('Equipe supprimée!');
    }

    /**
     * @Route("/{id}/game", name="new_game", methods={"POST"})
     */
    public function newGame(Request $request, SerializerInterface $serializer, Team $team)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Game en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Game', 'json');

        // Création d'un objet vide de la classe Game stockée dans la variable $game
        $game = new Game();

        // On indique à $game quels champs nous aimerions créer grâce aux méthodes ->Set récupéré dans l'entité $game
        // On associe les méthodes get de chaque champs afin de récupérer le champs à créer
        // On récupére team_id en ajoutant en paramêtre de la fonction l'entité Team

        $game
            ->setTeam($team)
            ->setaddressGame($data->getaddressGame())
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
        return $this->json('Match bien créé');
    }

    /**
     * @Route("/{team_id}/game/{game_id}/edit-score", name="edit_score_game", methods={"POST"}), requirements={"id": "\d+"}, methods{"POST"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("game", options={"mapping": {"game_id": "id"}})
     */
    public function editScoreGame(Game $game, Request $request, SerializerInterface $serializer, Team $team)
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
        return $this->json('Score du match modifié ');
    }

    /**
     * @Route("/{team_id}/game/{game_id}/edit-information", name="edit_information_game", methods={"POST"}), requirements={"id": "\d+"}, methods{"POST"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("game", options={"mapping": {"game_id": "id"}})
     */
    public function editInformationGame(Game $game, Request $request, SerializerInterface $serializer, Team $team)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Game en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Game', 'json');

        $game
            ->setTeam($team)
            ->setaddressGame($data->getaddressGame())
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
}
