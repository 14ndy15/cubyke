<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TeamMemberRepository")
 * @ORM\HasLifecycleCallbacks
 */
class TeamMember extends ImageField
{
    use LanguageSessionTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descriptionEn;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descriptionEs;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descriptionDe;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $orderPos;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $positionEn;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $positionEs;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $positionDe;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }


    public function getDescriptionEn(): ?string
    {
        return $this->descriptionEn;
    }

    public function setDescriptionEn(?string $descriptionEn): self
    {
        $this->descriptionEn = $descriptionEn;

        return $this;
    }


    public function getDescriptionEs(): ?string
    {
        return $this->descriptionEs;
    }

    public function setDescriptionEs(?string $descriptionEs): self
    {
        $this->descriptionEs = $descriptionEs;

        return $this;
    }

    public function getDescriptionDe(): ?string
    {
        return $this->descriptionDe;
    }

    public function setDescriptionDe(?string $descriptionDe): self
    {
        $this->descriptionDe = $descriptionDe;

        return $this;
    }

    function getUploadDir()
    {
        return 'team';
    }

    public function getOrderPos(): ?int
    {
        return $this->orderPos;
    }

    public function setOrderPos(?int $orderPos): self
    {
        $this->orderPos = $orderPos;

        return $this;
    }

    public function getPositionEn(): ?string
    {
        return $this->positionEn;
    }

    public function setPositionEn(?string $positionEn): self
    {
        $this->positionEn = $positionEn;

        return $this;
    }

    public function getPositionEs(): ?string
    {
        return $this->positionEs;
    }

    public function setPositionEs(?string $positionEs): self
    {
        $this->positionEs = $positionEs;

        return $this;
    }

    public function getPositionDe(): ?string
    {
        return $this->positionDe;
    }

    public function setPositionDe(string $positionDe): self
    {
        $this->positionDe = $positionDe;

        return $this;
    }
}
