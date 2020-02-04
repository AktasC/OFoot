<?php

namespace App\Repository;

use App\Entity\Game;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Game::class);
    }

    public function findGamesByTeam($id)
    {
        return $this->createQueryBuilder('g')
            ->select('g,t')
            ->leftJoin('g.team', 't')
            ->where('g.team = :id')
            ->setParameter('id', $id)
            ->orderBy('g.date_time_game', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
}
