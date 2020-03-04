<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ReviewRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Review extends ImageField
{
    use LanguageSessionTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $reviewEn;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $reviewEs;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $reviewDe;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $position;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReviewEn(): ?string
    {
        return $this->reviewEn;
    }

    public function setReviewEn(?string $reviewEn): self
    {
        $this->reviewEn = $reviewEn;

        return $this;
    }

    public function getReviewEs(): ?string
    {
        return $this->reviewEs;
    }

    public function setReviewEs(?string $reviewEs): self
    {
        $this->reviewEs = $reviewEs;

        return $this;
    }

    public function getReviewDe(): ?string
    {
        return $this->reviewDe;
    }

    public function setReviewDe(?string $reviewDe): self
    {
        $this->reviewDe = $reviewDe;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }

    function getUploadDir()
    {
        return 'review';
    }
}
