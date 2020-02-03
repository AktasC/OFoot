<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // On crée le builder en renseignant les champs que nous souhaitons ajouté au formulaire
        // Champs renseignés dans le formulaire d'inscription : Nom, Prénom, Email, Mot de passe
        $builder
            ->add('last_name', null, [
                // Mise en place de contrainte : champs non vide
                'constraints' => new NotBlank(),
            ])
            ->add('first_name', null, [
                // Mise en place de contrainte : champs non vide
                'constraints' => new NotBlank(),
            ])
            ->add('email', EmailType::class, [
                // Mise en place de contraintes : champs non vide et nouveau mail obligatoire
                'constraints' => [
                    new Email(),
                    new NotBlank(),
                ],
            ])
            ->add('password', PasswordType::class, [
                'mapped' => false,
                // Mise en place de contraintes : champs mot de passe non vide et longueur minimum : 6 caractères
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'attr' => ['novalidate' => 'novalidate'],
        ]);
    }
}
