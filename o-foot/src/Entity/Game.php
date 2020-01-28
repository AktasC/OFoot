<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("api_v1")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("api_v1")
     */
    private $address_game;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("api_v1")
     */
    private $assist_game;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("api_v1")
     */
    private $date_time_game;

    /**
     * @ORM\Column(type="string", length=128, nullable=true)
     * @Groups("api_v1")
     */
    private $domicile_exterieur;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("api_v1")
     */
    private $goal_conceded_game;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("api_v1")
     */
    private $goal_scored_game;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("api_v1")
     */
    private $opponent_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("api_v1")
     */
    private $presence_game;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("api_v1")
     */
    private $red_card_game;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_v1")
     */
    private $stadium_game;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups("api_v1")
     */
    private $yellow_card_game;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Player", mappedBy="games")
     * @Groups("api_v1")
     */
    private $players;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Team", inversedBy="games")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("api_v1")
     */
    private $team;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Compo", mappedBy="game_game", orphanRemoval=true)
     */
    private $compositions;

    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->compositions = new ArrayCollection();
        $this->created_at = new \DateTime();
        $this->teams = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddressGame(): ?string
    {
        return $this->address_game;
    }

    public function setAddressGame(?string $address_game): self
    {
        $this->address_game = $address_game;

        return $this;
    }

    public function getAssistGame(): ?int
    {
        return $this->assist_game;
    }

    public function setAssistGame(?int $assist_game): self
    {
        $this->assist_game = $assist_game;

        return $this;
    }

    public function getDateTimeGame(): ?\DateTimeInterface
    {
        return $this->date_time_game;
    }

    public function setDateTimeGame(?\DateTimeInterface $date_time_game): self
    {
        $this->date_time_game = $date_time_game;

        return $this;
    }

    public function getDomicileExterieur(): ?string
    {
        return $this->domicile_exterieur;
    }

    public function setDomicileExterieur(?string $domicile_exterieur): self
    {
        $this->domicile_exterieur = $domicile_exterieur;

        return $this;
    }

    public function getGoalConcededGame(): ?int
    {
        return $this->goal_conceded_game;
    }

    public function setGoalConcededGame(?int $goal_conceded_game): self
    {
        $this->goal_conceded_team = $goal_conceded_game;

        return $this;
    }

    public function getGoalScoredGame(): ?int
    {
        return $this->goal_scored_game;
    }

    public function setGoalScoredGame(?int $goal_scored_game): self
    {
        $this->goal_scored_game = $goal_scored_game;

        return $this;
    }

    public function getOpponentTeam(): ?string
    {
        return $this->opponent_team;
    }

    public function setOpponentTeam(?string $opponent_team): self
    {
        $this->opponent_team = $opponent_team;

        return $this;
    }

    public function getPresenceGame(): ?int
    {
        return $this->presence_game;
    }

    public function setPresenceGame(?int $presence_game): self
    {
        $this->presence_game = $presence_game;

        return $this;
    }

    public function getRedCardGame(): ?int
    {
        return $this->red_card_game;
    }

    public function setRedCardGame(?int $red_card_game): self
    {
        $this->red_card_game = $red_card_game;

        return $this;
    }

    public function getStadiumGame(): ?string
    {
        return $this->stadium_game;
    }

    public function setStadiumGame(string $stadium_game): self
    {
        $this->stadium_game = $stadium_game;

        return $this;
    }

    public function getYellowCardGame(): ?int
    {
        return $this->yellow_card_game;
    }

    public function setYellowCardGame(?int $yellow_card_game): self
    {
        $this->yellow_card_game = $yellow_card_game;

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
            $player->addGame($this);
        }

        return $this;
    }

    public function removePlayer(Player $player): self
    {
        if ($this->players->contains($player)) {
            $this->players->removeElement($player);
            $player->removeGame($this);
        }

        return $this;
    }

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): self
    {
        $this->team = $team;

        return $this;
    }

    /**
     * @return Collection|Compo[]
     */
    public function getCompositions(): Collection
    {
        return $this->compositions;
    }

    public function addComposition(Compo $composition): self
    {
        if (!$this->compositions->contains($composition)) {
            $this->compositions[] = $composition;
            $composition->setGameGame($this);
        }

        return $this;
    }

    public function removeComposition(Compo $composition): self
    {
        if ($this->compositions->contains($composition)) {
            $this->compositions->removeElement($composition);
            // set the owning side to null (unless already changed)
            if ($composition->getGameGame() === $this) {
                $composition->setGameGame(null);
            }
        }

        return $this;
    }
}
