<?php

namespace App\Repository;

use App\Entity\BasicPage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method BasicPage|null find($id, $lockMode = null, $lockVersion = null)
 * @method BasicPage|null findOneBy(array $criteria, array $orderBy = null)
 * @method BasicPage[]    findAll()
 * @method BasicPage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BasicPageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BasicPage::class);
    }

    /**
     * @return BasicPage Returns a BasicPage objects
     */
    public function findByCodeName($value): ?BasicPage
    {
        return $this->findOneBy(['codeName'=>$value]);
    }


    /*
    public function findOneBySomeField($value): ?BasicPage
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
