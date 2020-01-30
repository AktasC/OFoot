<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class WebsiteOnlineTest extends WebTestCase
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
}
