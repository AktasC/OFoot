<?php

namespace App\Controller\Api\V1;

use App\Entity\Player;
use App\Entity\Team;
use App\Entity\User;
use App\Repository\PlayerRepository;
use App\Repository\TeamRepository;
use App\Repository\UserRepository;
use App\Service\MailerInvitePlayer;
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
    public function list(SerializerInterface $serializer, TeamRepository $tr)
    {
        $teams = $tr->findAll();
        $data = $serializer->normalize($teams, null, ['groups' => 'api_v1']);

        return $this->json($data);
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
         * via les attributs 'groups' => 'api_v1'.
         */
        $data = $serializer->normalize($team, null, ['groups' => 'api_v1']);

        // on retourne $data au format json
        return $this->json($data);
    }

    /**
     * @Route("/{id}/manager", name="get_manager", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function getManager(SerializerInterface $serializer, Team $team)
    {
        /* Si l'user est également le manager, return true, sinon return false */
        $data = $this->getUser() == $team->getManager();

        return $this->json($data);
    }

    /**
     * @Route("/stats/{id}", name="show_stats", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function showStats(SerializerInterface $serializer, Team $team)
    {
        // On récupère dans la variable $data l'objet de la sérialisation des atttributs de team que l'on récupère
        // via les attributs 'groups' => 'api_vi'.
        $data = $serializer->normalize($team, null, ['groups' => 'api_v1']);

        // on retourne $data au format json
        return $this->json($data);
    }

    /**
     * @Route("/user/{user_id}/new", name="new", methods={"POST"})
     * @ParamConverter("user", options={"mapping": {"user_id": "id"}})
     */
    public function new(Request $request, SerializerInterface $serializer, User $user)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité Team en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Team', 'json');

        // Création d'un objet vide de la classe Team stockée dans la variable $team
        $team = new Team();

        // On indique à $team quels champs nous aimerions modifier grâce aux méthodes ->Set récupéré dans l'entité $team
        // On associe les méthodes get de chaque champs afin de récupérer le champs à modifier
        $team
        ->setAddressTeam($data->getAddressTeam())
        ->setCityTeam($data->getCityTeam())
        ->setManager($user)
        ->setStadiumTeam($data->getStadiumTeam())
        ->setTeamName($data->getTeamName())
        ->setUpdatedAt(new \DateTime());

        // On récupére la fonction addTeam via la relation entre user et team
        // La table pivot user_team est maintenant renseigné dans la BDD (user_id ; team_id)
        $user->addTeam($team);

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
     * @Route("/edit/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST"})
     */
    public function edit(Request $request, Team $team, SerializerInterface $serializer)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Team', 'json');

        $team
        ->setAddressTeam($data->getAddressTeam())
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
     * @Route("/{team_id}/remove/{user_id}", name="remove_user_team",requirements={"id": "\d+"}, methods={"DELETE"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("user", options={"mapping": {"user_id": "id"}})
     */
    public function removeUserFromTeam(Team $team, User $user)
    {
        // On stocke dans la variable $user la fonction removeTeam (collection teams) présente dans l'entité User.
        // Suppression de team_id de la table pivot user_team
        $user->removeTeam($team);

        // On stocke dans la variable $team la fonction removeUser (collection users) présente dans l'entité Team.
        // Suppression de user_id de la table pivot user_team
        $team->removeUser($user);

        // On récupére l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On persiste l'entité $user
        $entityManager->persist($user);

        // On persiste l'entité $user
        $entityManager->flush();

        return $this->json('Tu as bien quitté l\'équipe');
    }

    /**
     * @Route("/{id}/invite", name="invite_player",requirements={"id": "\d+"}, methods={"POST"})
     */
    public function invitePlayer(MailerInvitePlayer $MailerInvitePlayer, Request $request, SerializerInterface $serializer, Team $team, UserRepository $ur)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\User', 'json');

        $userData = $ur->findRecipients($data->getUsername());

        $MailerInvitePlayer->dataEmail($userData, $team);

        return $this->json('Invitation envoyée');
    }

    /**
     *@Route("/join/{user_id}/{team_id}", name="join",requirements={"id": "\d+"}, methods={"POST"})
     *@ParamConverter("team", options={"mapping": {"team_id": "id"}})
     *@ParamConverter("user", options={"mapping": {"user_id": "id"}})
     */
    public function addPlayerInTeamByEmail(User $user, Team $team)
    {
        $player = new Player();

        $player
            ->setTeam($team)
            ->setUser($user)
            ->setFirstNamePlayer($user->getFirstName())
            ->setLastNamePlayer($user->getLastName);

        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($player);

        $entityManager->flush();

        return $this->json('Tu fais partie de cette équipe!');
    }
}
