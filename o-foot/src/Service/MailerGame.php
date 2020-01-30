<?php

namespace App\Service;


use App\Entity\Game;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;


class MailerGame
{
    private $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendAll($emailList,$game)
    {
        foreach ($emailList as $emailUser) {
            $this->emailGame($emailUser, $game);
        }
    }
    
    public function emailGame($emailUser,$game)
    {
      
        $email = implode($emailUser);
        
        $email = (new TemplatedEmail())
            ->from(new Address('teamOfoot@gmail.com', 'O\'Foot'))
            ->to($email)
            ->subject('Invitation au match!')
            ->htmlTemplate('email/game.html.twig')
            ->context([
               
            ]);
    
        $this->mailer->send($email);
    }
}