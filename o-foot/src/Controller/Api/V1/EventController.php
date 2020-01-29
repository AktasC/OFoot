<?php

namespace App\Controller\Api\V1;

use App\Repository\GameRepository;
use App\Repository\PracticeRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
* @Route("/api/v1/events", name="api_v1_events_")
*/
class EventController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list(GameRepository $gameRepository, PracticeRepository $practiceRepository, SerializerInterface $serializer)
    {
        // On crée $games qui va chercher la fonction findAllGames présente dans gameRepository
        // Cette fonction permet de récupérer l'ensemble des matchs triés par date_time_game
        $games = $gameRepository->findAllGames();

        // Je créé la variable $games qui va chercher la fonction findAllPractices présente dans gameRepository
        // Cette fonction permet de récupérer l'ensemble des matchs triés par date_time_practice
        $practices = $practiceRepository->findAllPractices();


        // On crée un tableau avec $games et $practices
        $events = array($games, $practices);

        // On crée une nouvelle variable $data, qui stocke la sérialisation de $events
        // On indique l'annotation a rajouté dans l'entité game en fonction du nom de l'api -> api_v2
        // Ceci permet d'indiquer quelles types de propriétés nous aimerions envoyer en JSON
        $data = $serializer->normalize($events, null, ['groups' => 'api_v2']);

        // On retourne $data au format JSON
        return $this->json($data);
    }
}
