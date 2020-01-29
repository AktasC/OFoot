<?php

namespace App\Controller\Api\V1;

use App\Entity\Team;
use App\Entity\User;
use App\Repository\PlayerRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * @Route("/api/v1/teams", name="api_v1_teams_")
 */
class TeamController extends AbstractController
{
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
         // On récupère dans la variable $data l'objet de la sérialisation des atttributs de team que l'on récupère
         // via les attributs 'groups' => 'api_vi'.
        $data = $serializer->normalize($team, null, ['groups' => 'api_v1']);

        // on retourne $data au format json
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
            ->setAddressTeam($data->getAddressTeam())
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
     * @Route("/edit/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST"})
     */
    public function edit(Request $request, Team $team, SerializerInterface $serializer)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Team', 'json');

        $team
        ->setAddressTeam($data->getaddressTeam())
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
}
