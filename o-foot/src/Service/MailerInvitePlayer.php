<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class MailerInvitePlayer
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function dataEmail($userData, $team)
    {
        foreach ($userData as $user) {
            $this->emailInvitePlayer($user, $team);
        }
    }

    public function emailInvitePlayer($user, $team)
    {
        $email = (new TemplatedEmail())
            ->from(new Address('teamofoot75@gmail.com', 'O\'Foot'))
            ->to(new Address($user['email'], $user['first_name']))
            ->subject('Invitation à rejoindre l\'équipe!')
            ->htmlTemplate('email/joinTeam.html.twig')
            ->context([
                'user' => $user,
                'team' => $team,
            ]);

        $this->mailer->send($email);
    }
}
