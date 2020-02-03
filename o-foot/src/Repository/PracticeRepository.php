<?php

namespace App\Repository;

use App\Entity\Practice;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Practice|null find($id, $lockMode = null, $lockVersion = null)
 * @method Practice|null findOneBy(array $criteria, array $orderBy = null)
 * @method Practice[]    findAll()
 * @method Practice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PracticeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Practice::class);
    }

    public function findPracticesByTeam($id)
    {
        return $this->createQueryBuilder('p')
            ->select('p,t')
            ->leftJoin('p.team', 't')
            ->where('p.team = :id')
            ->setParameter('id', $id)
            ->orderBy('p.date_time_practice', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
}
