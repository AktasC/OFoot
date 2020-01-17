<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PracticeRepository")
 */
class Practice
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address_practice;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $date_time_practice;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     */
    private $presence_practice;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $stadium_practice;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddressPractice(): ?string
    {
        return $this->address_practice;
    }

    public function setAddressPractice(?string $address_practice): self
    {
        $this->address_practice = $address_practice;

        return $this;
    }

    public function getDateTimePractice(): ?\DateTimeInterface
    {
        return $this->date_time_practice;
    }

    public function setDateTimePractice(?\DateTimeInterface $date_time_practice): self
    {
        $this->date_time_practice = $date_time_practice;

        return $this;
    }

    public function getPresencePractice(): ?int
    {
        return $this->presence_practice;
    }

    public function setPresencePractice(?int $presence_practice): self
    {
        $this->presence_practice = $presence_practice;

        return $this;
    }

    public function getStadiumPractice(): ?string
    {
        return $this->stadium_practice;
    }

    public function setStadiumPractice(string $stadium_practice): self
    {
        $this->stadium_practice = $stadium_practice;

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
}
