<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117130442 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE player_practice (player_id INT NOT NULL, practice_id INT NOT NULL, INDEX IDX_793B75AE99E6F5DF (player_id), INDEX IDX_793B75AEED33821 (practice_id), PRIMARY KEY(player_id, practice_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player_match (player_id INT NOT NULL, match_id INT NOT NULL, INDEX IDX_C529BE4399E6F5DF (player_id), INDEX IDX_C529BE432ABEACD6 (match_id), PRIMARY KEY(player_id, match_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE player_practice ADD CONSTRAINT FK_793B75AE99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_practice ADD CONSTRAINT FK_793B75AEED33821 FOREIGN KEY (practice_id) REFERENCES practice (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_match ADD CONSTRAINT FK_C529BE4399E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_match ADD CONSTRAINT FK_C529BE432ABEACD6 FOREIGN KEY (match_id) REFERENCES `match` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE player_practice');
        $this->addSql('DROP TABLE player_match');
    }
}
