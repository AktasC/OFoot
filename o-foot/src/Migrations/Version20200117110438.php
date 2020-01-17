<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117110438 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE team (id INT AUTO_INCREMENT NOT NULL, address_team VARCHAR(255) NOT NULL, assist_team SMALLINT DEFAULT NULL, championship_team VARCHAR(128) DEFAULT NULL, city_team VARCHAR(255) NOT NULL, defeat_team SMALLINT DEFAULT NULL, draw_team SMALLINT DEFAULT NULL, goal_team SMALLINT DEFAULT NULL, logo_team VARCHAR(128) DEFAULT NULL, manager_team SMALLINT NOT NULL, match_team SMALLINT DEFAULT NULL, presence_team SMALLINT DEFAULT NULL, red_card_team SMALLINT DEFAULT NULL, stadium_team VARCHAR(255) NOT NULL, team_name VARCHAR(255) NOT NULL, practice_team SMALLINT DEFAULT NULL, victory_team SMALLINT DEFAULT NULL, yellow_card_team SMALLINT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE team');
    }
}
