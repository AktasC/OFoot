<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Serializer\SerializerInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login", name="app_login", methods={"GET|POST"})
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils, SerializerInterface $serializer, UserRepository $ur): Response
    {
        // On désérialise la requête pour obtenir les données en json
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\User', 'json');

        // On vérifie que le username renvoyé en json correspond bien à un email existant
        $user = $ur->findOneByEmail($data->getUsername());

        // Si l'user existe, on renvoit son ID. Autrement, on renvoit null
        return $this->json([
            'user' => $user ? $user->getId() : null, ]
        );
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
