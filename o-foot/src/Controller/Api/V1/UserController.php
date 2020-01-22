<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
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
    public function show(User $user, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de $user
        // On indique l'annotation a rajouté dans l'entité user en fonction du nom de l'api -> api_v1
        // Ceci permet d'indiquer quelles types de propriétés nous aimerions envoyer en JSON
        $data = $serializer->normalize($user, null, ['groups' => ['api_v1']]);
        
        // On retourne $user au format JSON
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