<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TourRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Tour extends ImageField
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
    private $titleEn;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titleEs;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titleDe;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $descriptionEn;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $descriptionEs;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $descriptionDe;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $position;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $urlEn;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $urlEs;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $urlDe;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitleEn(): ?string
    {
        return $this->titleEn;
    }

    public function setTitleEn(string $titleEn): self
    {
        $this->titleEn = $titleEn;

        return $this;
    }

    public function getTitleEs(): ?string
    {
        return $this->titleEs;
    }

    public function setTitleEs(string $titleEs): self
    {
        $this->titleEs = $titleEs;

        return $this;
    }

    public function getTitleDe(): ?string
    {
        return $this->titleDe;
    }

    public function setTitleDe(string $titleDe): self
    {
        $this->titleDe = $titleDe;

        return $this;
    }

    public function getDescriptionEn(): ?string
    {
        return $this->descriptionEn;
    }

    public function setDescriptionEn(string $descriptionEn): self
    {
        $this->descriptionEn = $descriptionEn;

        return $this;
    }

    public function getDescriptionEs(): ?string
    {
        return $this->descriptionEs;
    }

    public function setDescriptionEs(string $descriptionEs): self
    {
        $this->descriptionEs = $descriptionEs;

        return $this;
    }

    public function getDescriptionDe(): ?string
    {
        return $this->descriptionDe;
    }

    public function setDescriptionDe(string $descriptionDe): self
    {
        $this->descriptionDe = $descriptionDe;

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
        return 'tour';
    }

    public function getUrlEn(): ?string
    {
        return $this->urlEn;
    }

    public function setUrlEn(?string $urlEn): self
    {
        $this->urlEn = $urlEn;

        return $this;
    }

    public function getUrlEs(): ?string
    {
        return $this->urlEs;
    }

    public function setUrlEs(?string $urlEs): self
    {
        $this->urlEs = $urlEs;

        return $this;
    }

    public function getUrlDe(): ?string
    {
        return $this->urlDe;
    }

    public function setUrlDe(?string $urlDe): self
    {
        $this->urlDe = $urlDe;

        return $this;
    }
}
