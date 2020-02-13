<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
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
     * @Route("/edit/{id}", name="edit_user_profile", requirements={"id": "\d+"}, methods={"POST"})
     */
    public function edit(User $user, Request $request, SerializerInterface $serializer)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité User en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\User', 'json');

        // On indique à $user quels champs nous aimerions modifier grâce aux méthodes ->Set récupéré dans l'entité $user
        // On associe les méthodes get de chaque champs afin de récupérer le champs à modifier
        if ($data->getFirstName()) {
            $user->setFirstName($data->getFirstname());
        }

        if ($data->getLastName()) {
            $user->setLastName($data->getLastname());
        }

        if ($data->getEmail()) {
            $user->setEmail($data->getEmail());
        }

        if ($data->getBirthDate()) {
            $user->setBirthdate($data->getBirthDate());
        }

        if ($data->getPictureUser()) {
            $user->setPictureUser($data->getPictureUser());
        }

        $user->setUpdatedAt(new \DateTime());

        // On récupére l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On persiste l'entité $user
        $entityManager->persist($user);

        // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
        $entityManager->flush();

        // On retourne $user au format JSON
        return $this->json('User profile edited successfully.');
    }

    /**
     * @Route("/edit/password/{id}", name="edit_password", requirements={"id": "\d+"}, methods={"POST"})
     */
    public function editPassword(User $user, Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $encoder)
    {
        // On crée une nouvelle variable $data, qui stocke la sérialisation de l'entité User en Json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\User', 'json');

        $user->setPassword($encoder->encodePassword($user, $data->getPassword()));

        // On récupére l'EntityManager
        $entityManager = $this->getDoctrine()->getManager();

        // On persiste l'entité $user
        $entityManager->persist($user);

        // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
        $entityManager->flush();

        // On retourne $user au format JSON
        return $this->json('Mot de passe mis à jour');
    }

    /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
        return;
    }
}
