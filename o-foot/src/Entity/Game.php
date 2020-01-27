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
    private $address_match;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $assist_match;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("api_v1")
     */
    private $date_time_match;

    /**
     * @ORM\Column(type="string", length=128, nullable=true)
     * @Groups("api_v1")
     */
    private $domicile_exterieur;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $goal_conceded_match;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $goal_scored_match;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("api_v1")
     */
    private $opponent_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $presence_match;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $red_card_match;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_v1")
     */
    private $stadium_match;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $yellow_card_match;

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
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getaddressMatch(): ?string
    {
        return $this->address_match;
    }

    public function setaddressMatch(?string $address_match): self
    {
        $this->address_match = $address_match;

        return $this;
    }

    public function getAssistMatch(): ?int
    {
        return $this->assist_match;
    }

    public function setAssistMatch(?int $assist_match): self
    {
        $this->assist_match = $assist_match;

        return $this;
    }

    public function getDateTimeMatch(): ?\DateTimeInterface
    {
        return $this->date_time_match;
    }

    public function setDateTimeMatch(?\DateTimeInterface $date_time_match): self
    {
        $this->date_time_match = $date_time_match;

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

    public function getGoalConcededTeam(): ?int
    {
        return $this->goal_conceded_team;
    }

    public function setGoalConcededTeam(?int $goal_conceded_team): self
    {
        $this->goal_conceded_team = $goal_conceded_team;

        return $this;
    }

    public function getGoalScoredTeam(): ?int
    {
        return $this->goal_scored_team;
    }

    public function setGoalScoredTeam(?int $goal_scored_team): self
    {
        $this->goal_scored_team = $goal_scored_team;

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

    public function getPresenceMatch(): ?int
    {
        return $this->presence_match;
    }

    public function setPresenceMatch(?int $presence_match): self
    {
        $this->presence_match = $presence_match;

        return $this;
    }

    public function getRedCardMatch(): ?int
    {
        return $this->red_card_match;
    }

    public function setRedCardMatch(?int $red_card_match): self
    {
        $this->red_card_match = $red_card_match;

        return $this;
    }

    public function getStadiumMatch(): ?string
    {
        return $this->stadium_match;
    }

    public function setStadiumMatch(string $stadium_match): self
    {
        $this->stadium_match = $stadium_match;

        return $this;
    }

    public function getYellowCardMatch(): ?int
    {
        return $this->yellow_card_match;
    }

    public function setYellowCardMatch(?int $yellow_card_match): self
    {
        $this->yellow_card_match = $yellow_card_match;

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
