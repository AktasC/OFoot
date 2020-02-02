<?php

namespace App\Service;

use App\Entity\User;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class MailerRegister
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function emailRegister(User $user)
    {
        $email = (new TemplatedEmail())
            ->from(new Address('teamOfoot@gmail.com', 'O\'Foot'))
            ->to(new Address($user->getUsername(), $user->getFirstName()))
            ->subject('Bienvenue sur O\'foot !')
            ->htmlTemplate('email/welcome.html.twig')
            ->context([
                // 'user' => $user
            ]);

        return $email;
    }
}
