<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117131342 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE practice ADD team_id INT NOT NULL');
        $this->addSql('ALTER TABLE practice ADD CONSTRAINT FK_7FEC344E296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('CREATE INDEX IDX_7FEC344E296CD8AE ON practice (team_id)');
        $this->addSql('ALTER TABLE `match` ADD team_id INT NOT NULL');
        $this->addSql('ALTER TABLE `match` ADD CONSTRAINT FK_7A5BC505296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('CREATE INDEX IDX_7A5BC505296CD8AE ON `match` (team_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE `match` DROP FOREIGN KEY FK_7A5BC505296CD8AE');
        $this->addSql('DROP INDEX IDX_7A5BC505296CD8AE ON `match`');
        $this->addSql('ALTER TABLE `match` DROP team_id');
        $this->addSql('ALTER TABLE practice DROP FOREIGN KEY FK_7FEC344E296CD8AE');
        $this->addSql('DROP INDEX IDX_7FEC344E296CD8AE ON practice');
        $this->addSql('ALTER TABLE practice DROP team_id');
    }
}
