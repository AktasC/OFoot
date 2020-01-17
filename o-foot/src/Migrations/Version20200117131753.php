<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117131753 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE compo ADD match_game_id INT NOT NULL');
        $this->addSql('ALTER TABLE compo ADD CONSTRAINT FK_C9C840999329866A FOREIGN KEY (match_game_id) REFERENCES `match` (id)');
        $this->addSql('CREATE INDEX IDX_C9C840999329866A ON compo (match_game_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE compo DROP FOREIGN KEY FK_C9C840999329866A');
        $this->addSql('DROP INDEX IDX_C9C840999329866A ON compo');
        $this->addSql('ALTER TABLE compo DROP match_game_id');
    }
}
