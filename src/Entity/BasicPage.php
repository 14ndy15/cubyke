<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BasicPageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class BasicPage extends ImageField
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titleEs;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titleDe;

    /**
     * @ORM\Column(type="text")
     */
    private $contentEn;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentEs;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentDe;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $codeName;

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

    public function setTitleEs(?string $titleEs): self
    {
        $this->titleEs = $titleEs;

        return $this;
    }

    public function getTitleDe(): ?string
    {
        return $this->titleDe;
    }

    public function setTitleDe(?string $titleDe): self
    {
        $this->titleDe = $titleDe;

        return $this;
    }

    public function getContentEn(): ?string
    {
        return $this->contentEn;
    }

    public function setContentEn(string $contentEn): self
    {
        $this->contentEn = $contentEn;

        return $this;
    }

    public function getContentEs(): ?string
    {
        return $this->contentEs;
    }

    public function setContentEs(?string $contentEs): self
    {
        $this->contentEs = $contentEs;

        return $this;
    }

    public function getContentDe(): ?string
    {
        return $this->contentDe;
    }

    public function setContentDe(?string $contentDe): self
    {
        $this->contentDe = $contentDe;

        return $this;
    }

    function getUploadDir()
    {
        return 'heroBasicPage';
    }

    public function getCodeName(): ?string
    {
        return $this->codeName;
    }

    public function setCodeName(string $codeName): self
    {
        $this->codeName = $codeName;

        return $this;
    }
}
