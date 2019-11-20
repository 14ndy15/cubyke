<?php

namespace App\Repository;

use App\Entity\KeyValues;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method KeyValues|null find($id, $lockMode = null, $lockVersion = null)
 * @method KeyValues|null findOneBy(array $criteria, array $orderBy = null)
 * @method KeyValues[]    findAll()
 * @method KeyValues[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KeyValuesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KeyValues::class);
    }

    // /**
    //  * @return KeyValues[] Returns an array of KeyValues objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('k.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */


    public function findByKey($value): ?KeyValues
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.name = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

}
