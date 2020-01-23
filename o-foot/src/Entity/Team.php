<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TeamRepository")
 */
class Team
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_v1")
     */
    private $adress_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $assist_team;

    /**
     * @ORM\Column(type="string", length=128, nullable=true)
     * @Groups("api_v1")
     */
    private $championship_team;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_v1")
     */
    private $city_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $defeat_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $draw_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $goal_team;

    /**
     * @ORM\Column(type="string", length=128, nullable=true)
     * @Groups("api_v1")
     */
    private $logo_team;

    /**
     * @ORM\Column(type="smallint")
     * @Groups("api_v1")
     */
    private $manager_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $match_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $presence_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $red_card_team;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_v1")
     */
    private $stadium_team;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("api_v1")
     */
    private $team_name;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $practice_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $victory_team;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $yellow_card_team;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="teams")
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Player", mappedBy="team", orphanRemoval=true)
     */
    private $players;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Match", mappedBy="team", orphanRemoval=true)
     */
    private $matchs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Practice", mappedBy="team", orphanRemoval=true)
     */
    private $practices;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->players = new ArrayCollection();
        $this->matchs = new ArrayCollection();
        $this->practices = new ArrayCollection();
        $this->created_at = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdressTeam(): ?string
    {
        return $this->adress_team;
    }

    public function setAdressTeam(string $adress_team): self
    {
        $this->adress_team = $adress_team;

        return $this;
    }

    public function getAssistTeam(): ?int
    {
        return $this->assist_team;
    }

    public function setAssistTeam(?int $assist_team): self
    {
        $this->assist_team = $assist_team;

        return $this;
    }

    public function getChampionshipTeam(): ?string
    {
        return $this->championship_team;
    }

    public function setChampionshipTeam(?string $championship_team): self
    {
        $this->championship_team = $championship_team;

        return $this;
    }

    public function getCityTeam(): ?string
    {
        return $this->city_team;
    }

    public function setCityTeam(string $city_team): self
    {
        $this->city_team = $city_team;

        return $this;
    }

    public function getDefeatTeam(): ?int
    {
        return $this->defeat_team;
    }

    public function setDefeatTeam(?int $defeat_team): self
    {
        $this->defeat_team = $defeat_team;

        return $this;
    }

    public function getDrawTeam(): ?int
    {
        return $this->draw_team;
    }

    public function setDrawTeam(?int $draw_team): self
    {
        $this->draw_team = $draw_team;

        return $this;
    }

    public function getGoalTeam(): ?int
    {
        return $this->goal_team;
    }

    public function setGoalTeam(?int $goal_team): self
    {
        $this->goal_team = $goal_team;

        return $this;
    }

    public function getLogoTeam(): ?string
    {
        return $this->logo_team;
    }

    public function setLogoTeam(?string $logo_team): self
    {
        $this->logo_team = $logo_team;

        return $this;
    }

    public function getManagerTeam(): ?int
    {
        return $this->manager_team;
    }

    public function setManagerTeam(int $manager_team): self
    {
        $this->manager_team = $manager_team;

        return $this;
    }

    public function getMatchTeam(): ?int
    {
        return $this->match_team;
    }

    public function setMatchTeam(?int $match_team): self
    {
        $this->match_team = $match_team;

        return $this;
    }

    public function getPresenceTeam(): ?int
    {
        return $this->presence_team;
    }

    public function setPresenceTeam(?int $presence_team): self
    {
        $this->presence_team = $presence_team;

        return $this;
    }

    public function getRedCardTeam(): ?int
    {
        return $this->red_card_team;
    }

    public function setRedCardTeam(?int $red_card_team): self
    {
        $this->red_card_team = $red_card_team;

        return $this;
    }

    public function getStadiumTeam(): ?string
    {
        return $this->stadium_team;
    }

    public function setStadiumTeam(string $stadium_team): self
    {
        $this->stadium_team = $stadium_team;

        return $this;
    }

    public function getTeamName(): ?string
    {
        return $this->team_name;
    }

    public function setTeamName(string $team_name): self
    {
        $this->team_name = $team_name;

        return $this;
    }

    public function getPracticeTeam(): ?int
    {
        return $this->practice_team;
    }

    public function setPracticeTeam(?int $practice_team): self
    {
        $this->practice_team = $practice_team;

        return $this;
    }

    public function getVictoryTeam(): ?int
    {
        return $this->victory_team;
    }

    public function setVictoryTeam(?int $victory_team): self
    {
        $this->victory_team = $victory_team;

        return $this;
    }

    public function getYellowCardTeam(): ?int
    {
        return $this->yellow_card_team;
    }

    public function setYellowCardTeam(?int $yellow_card_team): self
    {
        $this->yellow_card_team = $yellow_card_team;

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
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addTeam($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            $user->removeTeam($this);
        }

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
            $player->setTeam($this);
        }

        return $this;
    }

    public function removePlayer(Player $player): self
    {
        if ($this->players->contains($player)) {
            $this->players->removeElement($player);
            // set the owning side to null (unless already changed)
            if ($player->getTeam() === $this) {
                $player->setTeam(null);
            }
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
            $match->setTeam($this);
        }

        return $this;
    }

    public function removeMatch(Match $match): self
    {
        if ($this->matchs->contains($match)) {
            $this->matchs->removeElement($match);
            // set the owning side to null (unless already changed)
            if ($match->getTeam() === $this) {
                $match->setTeam(null);
            }
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
            $practice->setTeam($this);
        }

        return $this;
    }

    public function removePractice(Practice $practice): self
    {
        if ($this->practices->contains($practice)) {
            $this->practices->removeElement($practice);
            // set the owning side to null (unless already changed)
            if ($practice->getTeam() === $this) {
                $practice->setTeam(null);
            }
        }

        return $this;
    }
}
