<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;

class MailerRegister 
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function emailRegister(User $user)
    {
        $email = (new Email())
            ->from('teamOfoot@gmail.com')
            ->to($user->getUsername())
            ->subject('Bienvenue sur O\'foot !')
            ->text("Bienvenue parmis nous !{$user->getFirstName()}, il ne te reste plus qu'a rejoindre une équipe ou bien d'en créer une.
            ");

    return $email;
    }
}