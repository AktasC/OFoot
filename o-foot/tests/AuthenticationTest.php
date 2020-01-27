<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AuthenticationTest extends WebTestCase
{
    public function createNewUser()
    {
        $client = static::createClient();

        $register = [
            "registration_form[last_name]" => "Test",
            "registration_form[first_name]" => "Super",
            "registration_form[username]" => "test123@test.com",
            "registration_form[password]" => "testtest"
        ];

        $client->request(
            "POST",
            "/api/register",
            [],
            [],
            ["CONTENT_TYPE" => "application/x-www-form-urlencoded"],
            json_encode($register)
        );

        $this->assertResponseIsSuccessful();
    }

    protected function createAuthenticatedClient()
    {
        $client = static::createClient();

        $form = json_encode([
            "username" => "test@test.com",
            "password" => "testtest",
        ]);

        $client->request("POST", "https://localhost:8000/api/login_check", [], [], ["CONTENT_TYPE" => "application/json"], $form);

        $data = json_decode($client->getResponse()->getContent(), true);
        // On clone le WebClient et on lui ajoute le header Authorization avec Bearer $token
        $client2 = clone $client;
        $client2->setServerParameter("Authorization", sprintf("Bearer %s", $data["token"]));

        return $client2;
    }

    public function testAuthentication()
    {
        // Obtention de la clé JWT
        //$this->createNewUser();
        $client = $this->createAuthenticatedClient();

        // Appel API sur une route sécurisée
        $client->request("GET", "/api/v1/teams");

        // Tout est bon !
        $this->assertResponseIsSuccessful();
    }
}
