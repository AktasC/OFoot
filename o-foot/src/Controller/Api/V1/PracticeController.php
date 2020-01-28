<?php

namespace App\Controller\Api\V1;

use App\Entity\Team;
use App\Entity\Practice;
use App\Repository\PracticeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
     * @Route("/new", name="new",requirements={"id": "\d+"}, methods={"POST"})
     */
    public function new(Request $request, SerializerInterface $serializer, Team $team)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Practice', 'json');

        $practice = new Practice();

        $practice
            ->setTeam($team)
            ->setAddressPractice($data->getAddressPractice())
            ->setStadiumPractice($data->getStadiumPractice())
            ->setDateTimePractice($data->getDateTimePractice());

        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($practice);

        $entityManager->flush();

        return $this->json('Entrainement crée!');
    }

    /**
     * @Route("/{team_id}/edit/{practice_id}", name="edit",requirements={"id": "\d+"}, methods={"POST"})
     * @ParamConverter("team", options={"mapping": {"team_id": "id"}})
     * @ParamConverter("practice", options={"mapping": {"practice_id": "id"}})
     */
    public function edit(Practice $practice, Request $request, SerializerInterface $serializer, Team $team)
    {
        $data = $serializer->deserialize($request->getContent(), 'App\Entity\Practice', 'json');

        $practice
            ->setTeam($team)
            ->setAddressPractice($data->getAddressPractice())
            ->setStadiumPractice($data->getStadiumPractice())
            ->setDateTimePractice($data->getDateTimePractice())
            ->setUpdatedAt(new \DateTime());

        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->persist($practice);

        $entityManager->flush();

        return $this->json('Entrainement mis à jour!');
    }

    /**
     * @Route("/delete/{id}", name="delete",requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(Practice $practice, Team $team)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $entityManager->remove($practice);

        $entityManager->flush();

        return $this->json('Entrainement supprimé!');
    }
}
