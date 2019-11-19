<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BlogEntryRepository")
 * @ORM\HasLifecycleCallbacks
 */
class BlogEntry extends ImageField
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $textAtBeginningEn;


    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textAtEndingEn;


    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textAtBeginningDe;


    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textAtEndingDe;


    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textAtBeginningEs;


    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textAtEndingEs;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\ImageFile")
     */
    private $imagesGallery;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $datetime;

    public function __construct()
    {
        $this->imagesGallery = new ArrayCollection();
        $this->datetime = new \DateTime();
    }

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

    public function getTextAtBeginningDe(): ?string
    {
        return $this->textAtBeginningDe;
    }

    public function setTextAtBeginningDe(string $textAtBeginningDe): self
    {
        $this->textAtBeginningDe = $textAtBeginningDe;

        return $this;
    }

    public function getTextAtEndingDe(): ?string
    {
        return $this->textAtEndingDe;
    }

    public function setTextAtEndingDe(?string $textAtEndingDe): self
    {
        $this->textAtEndingDe = $textAtEndingDe;

        return $this;
    }

    public function getTextAtBeginningEs(): ?string
    {
        return $this->textAtBeginningEs;
    }

    public function setTextAtBeginningEs(string $textAtBeginningEs): self
    {
        $this->textAtBeginningEs = $textAtBeginningEs;

        return $this;
    }

    public function getTextAtEndingEs(): ?string
    {
        return $this->textAtEndingEs;
    }

    public function setTextAtEndingEs(?string $textAtEndingEs): self
    {
        $this->textAtEndingEs = $textAtEndingEs;

        return $this;
    }

    public function getTextAtBeginningEn(): ?string
    {
        return $this->textAtBeginningEn;
    }

    public function setTextAtBeginningEn(string $textAtBeginningEn): self
    {
        $this->textAtBeginningEn = $textAtBeginningEn;

        return $this;
    }

    public function getTextAtEndingEn(): ?string
    {
        return $this->textAtEndingEn;
    }

    public function setTextAtEndingEn(?string $textAtEndingEn): self
    {
        $this->textAtEndingEn = $textAtEndingEn;

        return $this;
    }
    /**
     * @return Collection|ImageFile[]
     */
    public function getImagesGallery(): Collection
    {
        return $this->imagesGallery;
    }

    public function addImagesGallery(ImageFile $imagesGallery): self
    {
        if (!$this->imagesGallery->contains($imagesGallery)) {
            $this->imagesGallery[] = $imagesGallery;
        }

        return $this;
    }

    public function removeImagesGallery(ImageFile $imagesGallery): self
    {
        if ($this->imagesGallery->contains($imagesGallery)) {
            $this->imagesGallery->removeElement($imagesGallery);
        }

        return $this;
    }


    function getUploadDir()
    {
        return 'blog';
    }

    public function getDateTime(): ?\DateTimeInterface
    {
        return $this->datetime;
    }

    public function setDateTime(\DateTimeInterface $datetime): self
    {
        $this->datetime = $datetime;

        return $this;
    }
}
