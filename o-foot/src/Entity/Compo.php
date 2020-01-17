<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompoRepository")
 */
class Compo
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
    private $composition_name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Player", mappedBy="composition")
     */
    private $players;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Match", inversedBy="compositions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $match_game;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Tactique", mappedBy="compo", orphanRemoval=true)
     */
    private $schema_tactique;

    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->schema_tactique = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompositionName(): ?string
    {
        return $this->composition_name;
    }

    public function setCompositionName(string $composition_name): self
    {
        $this->composition_name = $composition_name;

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

    /**
     * @return Collection|Player[]
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(Player $player): self
    {
        if (!$this->players->contains($player)) {
            $this->players[] = $player;
            $player->addComposition($this);
        }

        return $this;
    }

    public function removePlayer(Player $player): self
    {
        if ($this->players->contains($player)) {
            $this->players->removeElement($player);
            $player->removeComposition($this);
        }

        return $this;
    }

    public function getMatchGame(): ?Match
    {
        return $this->match_game;
    }

    public function setMatchGame(?Match $match_game): self
    {
        $this->match_game = $match_game;

        return $this;
    }

    /**
     * @return Collection|Tactique[]
     */
    public function getSchemaTactique(): Collection
    {
        return $this->schema_tactique;
    }

    public function addSchemaTactique(Tactique $schemaTactique): self
    {
        if (!$this->schema_tactique->contains($schemaTactique)) {
            $this->schema_tactique[] = $schemaTactique;
            $schemaTactique->setCompo($this);
        }

        return $this;
    }

    public function removeSchemaTactique(Tactique $schemaTactique): self
    {
        if ($this->schema_tactique->contains($schemaTactique)) {
            $this->schema_tactique->removeElement($schemaTactique);
            // set the owning side to null (unless already changed)
            if ($schemaTactique->getCompo() === $this) {
                $schemaTactique->setCompo(null);
            }
        }

        return $this;
    }
}
