<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AuthenticationTest extends WebTestCase
{
    public function testHomepage()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');
        $this->assertEquals($crawler->text(), "O'Foot");
        $this->assertResponseIsSuccessful();
        fwrite(STDERR, print_r("Homepage tested.\n", true));
    }

    public function testRegisterPage()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/register');
        $this->assertResponseIsSuccessful();
        fwrite(STDERR, print_r("Register page tested.\n", true));
    }

    public function testLoginPage()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/login');

        $this->assertResponseIsSuccessful();
        fwrite(STDERR, print_r("Login page tested.\n", true));
    }

    public function testRegister()
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/register', [], [], [
            'Content-Type' => 'application/x-www-form-urlencoded',
        ]);

        /*
         * TODO
         *
         * dd($crawler->filter('#registerForm > form'));
         * $buttonCrawlerNode = $crawler->selectButton('submit');
         * $form = $buttonCrawlerNode->form();
         * $crawler = $client->submitForm(getName(), [
         * 'registration_form[first_name]' => 'Fabio',
         * 'registration_form[last_name]' => 'Benji',
         * 'registration_form[email]' => 'KykyLeKillerDu75@gmail.com',
         * 'registration_form[password]' => 'MotDePasseSuperSecure',
         * ]);
         */

        $this->assertResponseIsSuccessful();
        fwrite(STDERR, print_r("Registering tested.\n", true));
    }
}
