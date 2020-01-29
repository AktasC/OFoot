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
        $games = $gameRepository->findAll();
        $practices = $practiceRepository->findAll();

        $events = array($games, $practices);

        $data = $serializer->normalize($events, null, ['groups' => 'api_v2']);

        return $this->json($data);
    }
}
