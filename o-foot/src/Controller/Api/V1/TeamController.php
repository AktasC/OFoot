<?php

namespace App\Controller\Api\V1;

use App\Entity\Team;
use App\Repository\TeamRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
     * @Route("/{id}", name="show", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function show(SerializerInterface $serializer,Team $team)
    {

        /**
         * On récupère dans la variable $data l'objet de la sérialisation des atttributs de team que l'on récupère
         * via les attributs 'groups' => 'api_vi'
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
            ->setUpdatedAt(new \DateTime);

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
