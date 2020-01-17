<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlayerRepository")
 */
class Player
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $assist_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $defeat_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $draw_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $goal_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $match_player;

    /**
     * @ORM\Column(type="smallint")
     */
    private $number_jersey_player;

    /**
     * @ORM\Column(type="string", length=128, nullable=true)
     */
    private $picture_player;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $player_name;

    /**
     * @ORM\Column(type="string", length=128, nullable=true)
     */
    private $position_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $red_card_player;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $role_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $victory_player;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $yellow_card_player;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="players")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Team", inversedBy="players")
     * @ORM\JoinColumn(nullable=false)
     */
    private $team;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Position", inversedBy="players")
     */
    private $position;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Compo", inversedBy="players")
     */
    private $composition;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Practice", inversedBy="players")
     */
    private $practices;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Match", inversedBy="players")
     */
    private $matchs;

    public function __construct()
    {
        $this->composition = new ArrayCollection();
        $this->practices = new ArrayCollection();
        $this->matchs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAssistPlayer(): ?int
    {
        return $this->assist_player;
    }

    public function setAssistPlayer(?int $assist_player): self
    {
        $this->assist_player = $assist_player;

        return $this;
    }

    public function getDefeatPlayer(): ?int
    {
        return $this->defeat_player;
    }

    public function setDefeatPlayer(?int $defeat_player): self
    {
        $this->defeat_player = $defeat_player;

        return $this;
    }

    public function getDrawPlayer(): ?int
    {
        return $this->draw_player;
    }

    public function setDrawPlayer(?int $draw_player): self
    {
        $this->draw_player = $draw_player;

        return $this;
    }

    public function getGoalPlayer(): ?int
    {
        return $this->goal_player;
    }

    public function setGoalPlayer(?int $goal_player): self
    {
        $this->goal_player = $goal_player;

        return $this;
    }

    public function getMatchPlayer(): ?int
    {
        return $this->match_player;
    }

    public function setMatchPlayer(?int $match_player): self
    {
        $this->match_player = $match_player;

        return $this;
    }

    public function getNumberJerseyPlayer(): ?int
    {
        return $this->number_jersey_player;
    }

    public function setNumberJerseyPlayer(int $number_jersey_player): self
    {
        $this->number_jersey_player = $number_jersey_player;

        return $this;
    }

    public function getPicturePlayer(): ?string
    {
        return $this->picture_player;
    }

    public function setPicturePlayer(?string $picture_player): self
    {
        $this->picture_player = $picture_player;

        return $this;
    }

    public function getPlayerName(): ?string
    {
        return $this->player_name;
    }

    public function setPlayerName(string $player_name): self
    {
        $this->player_name = $player_name;

        return $this;
    }

    public function getPositionPlayer(): ?string
    {
        return $this->position_player;
    }

    public function setPositionPlayer(?string $position_player): self
    {
        $this->position_player = $position_player;

        return $this;
    }

    public function getRedCardPlayer(): ?int
    {
        return $this->red_card_player;
    }

    public function setRedCardPlayer(?int $red_card_player): self
    {
        $this->red_card_player = $red_card_player;

        return $this;
    }

    public function getRolePlayer(): ?string
    {
        return $this->role_player;
    }

    public function setRolePlayer(string $role_player): self
    {
        $this->role_player = $role_player;

        return $this;
    }

    public function getVictoryPlayer(): ?int
    {
        return $this->victory_player;
    }

    public function setVictoryPlayer(?int $victory_player): self
    {
        $this->victory_player = $victory_player;

        return $this;
    }

    public function getYellowCardPlayer(): ?int
    {
        return $this->yellow_card_player;
    }

    public function setYellowCardPlayer(?int $yellow_card_player): self
    {
        $this->yellow_card_player = $yellow_card_player;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

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

    public function getPosition(): ?Position
    {
        return $this->position;
    }

    public function setPosition(?Position $position): self
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @return Collection|Compo[]
     */
    public function getComposition(): Collection
    {
        return $this->composition;
    }

    public function addComposition(Compo $composition): self
    {
        if (!$this->composition->contains($composition)) {
            $this->composition[] = $composition;
        }

        return $this;
    }

    public function removeComposition(Compo $composition): self
    {
        if ($this->composition->contains($composition)) {
            $this->composition->removeElement($composition);
        }

        return $this;
    }

    /**
     * @return Collection|Practice[]
     */
    public function getPractices(): Collection
    {
        return $this->practices;
    }

    public function addPractice(Practice $practice): self
    {
        if (!$this->practices->contains($practice)) {
            $this->practices[] = $practice;
        }

        return $this;
    }

    public function removePractice(Practice $practice): self
    {
        if ($this->practices->contains($practice)) {
            $this->practices->removeElement($practice);
        }

        return $this;
    }

    /**
     * @return Collection|Match[]
     */
    public function getMatchs(): Collection
    {
        return $this->matchs;
    }

    public function addMatch(Match $match): self
    {
        if (!$this->matchs->contains($match)) {
            $this->matchs[] = $match;
        }

        return $this;
    }

    public function removeMatch(Match $match): self
    {
        if ($this->matchs->contains($match)) {
            $this->matchs->removeElement($match);
        }

        return $this;
    }
}