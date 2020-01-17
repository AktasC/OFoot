<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TactiqueRepository")
 */
class Tactique
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $schema_name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Compo", inversedBy="schema_tactique")
     * @ORM\JoinColumn(nullable=false)
     */
    private $compo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSchemaName(): ?string
    {
        return $this->schema_name;
    }

    public function setSchemaName(string $schema_name): self
    {
        $this->schema_name = $schema_name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getCompo(): ?Compo
    {
        return $this->compo;
    }

    public function setCompo(?Compo $compo): self
    {
        $this->compo = $compo;

        return $this;
    }
}
