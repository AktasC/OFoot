<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class RegistrationController extends AbstractController
{
    /**
     * @Route("/api/register", name="app_register", methods={"POST"})
     * 
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, SerializerInterface $serializer): Response
    {
        // Création d'un objet vide ($user) lié à notre formulaire
        $user = new User();
 
        // On crée un nouveau formulaire en se basant sur les informations renseignées dans le RegistrationFormType
        $form = $this->createForm(RegistrationFormType::class, $user, ['csrf_protection' => false]);

        // La méthode handleRequest() analyse la requête et associe toutes les données reçues en POST à notre formulaire
        // Parce que le formulaire et l'objet $user sont liés, les propriétés de $user sont également mises à jour
        // Si on a bien reçu un formulaire en POST, on a donc un objet User rempli et un formulaire dont les champs sont préremplis
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            // On teste si le formulaire est envoyé et validé
            // valide : le token CSRF et les contraintes de validation
            $user->setPassword(
                // Encodage du mot de passe
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            // On récupére l'EntityManager
            $entityManager = $this->getDoctrine()->getManager();

            // On persiste l'entité $user
            $entityManager->persist($user);

            // On flushe tout ce qui a été persisté avant pour être sûr que cela soit enregistré en base de données
            $entityManager->flush();

            // On sérialise les propriétés de l'entité $user
            // Annotations ajouté au niveau des propriétés présentes dans le formulaire
            $data = $serializer->normalize($user, null, ['groups' => 'api_v1']);

            // Une fois le formulaire envoyé et validé, on reçoit les données au format Json
            return $this->json($data);
        }

        // Sinon, on envoie une erreur pour chaque champs du formulaire mal renseigné
        return $this->json($form->getErrors(true, false), 400);
    }
}
