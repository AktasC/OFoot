<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200117132051 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE tactique ADD compo_id INT NOT NULL');
        $this->addSql('ALTER TABLE tactique ADD CONSTRAINT FK_9E469E23F1454301 FOREIGN KEY (compo_id) REFERENCES compo (id)');
        $this->addSql('CREATE INDEX IDX_9E469E23F1454301 ON tactique (compo_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE tactique DROP FOREIGN KEY FK_9E469E23F1454301');
        $this->addSql('DROP INDEX IDX_9E469E23F1454301 ON tactique');
        $this->addSql('ALTER TABLE tactique DROP compo_id');
    }
}
