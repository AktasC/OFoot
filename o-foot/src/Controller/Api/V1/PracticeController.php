<?php

namespace App\Controller\Api\V1;

use App\Entity\Practice;
use App\Repository\PracticeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/practices", name="api_v1_practices_")
 */
class PracticeController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list(PracticeRepository $practiceRepository, SerializerInterface $serializer)
    {
        $practices = $practiceRepository->findAll();

        $data = $serializer->normalize($practices, null, ['groups' => ['api_v1']]);

        // On retourne $user au format JSON
        return $this->json($data);
    }

    /**
     * @Route("/{id}", name="show", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function show(SerializerInterface $serializer, Practice $practice)
    {
        $data = $serializer->normalize($practice, null, ['groups' => ['api_v1']]);

        return $this->json($data);
    }

    /**
     * @Route("/", name="new", methods={"POST"})
     */
    public function new()
    {
        return;
    }

    /**
     * @Route("/{id}", name="edit", requirements={"id": "\d+"}, methods={"PUT"})
     */
    public function edit()
    {
        return;
    }

    /**
     * @Route("/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
        return;
    }
}
