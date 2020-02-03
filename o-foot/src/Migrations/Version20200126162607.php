<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200126162607 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE player_game (player_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_813161BF99E6F5DF (player_id), INDEX IDX_813161BFE48FD905 (game_id), PRIMARY KEY(player_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE player_game ADD CONSTRAINT FK_813161BF99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_game ADD CONSTRAINT FK_813161BFE48FD905 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE player_match');
        $this->addSql('ALTER TABLE compo RENAME INDEX idx_c9c840999329866a TO IDX_C9C84099714DA62A');
        $this->addSql('ALTER TABLE game ADD assist_game SMALLINT DEFAULT NULL, ADD goal_conceded_game SMALLINT DEFAULT NULL, ADD goal_scored_game SMALLINT DEFAULT NULL, ADD presence_game SMALLINT DEFAULT NULL, ADD red_card_game SMALLINT DEFAULT NULL, ADD yellow_card_game SMALLINT DEFAULT NULL, DROP assist_match, DROP goal_conceded_match, DROP goal_scored_match, DROP presence_match, DROP red_card_match, DROP yellow_card_match, CHANGE address_match address_game VARCHAR(255) DEFAULT NULL, CHANGE date_time_match date_time_game DATETIME DEFAULT NULL, CHANGE stadium_match stadium_game VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE game RENAME INDEX idx_7a5bc505296cd8ae TO IDX_232B318C296CD8AE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE player_match (player_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_C529BE4399E6F5DF (player_id), INDEX IDX_C529BE432ABEACD6 (game_id), PRIMARY KEY(player_id, game_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE player_match ADD CONSTRAINT FK_C529BE432ABEACD6 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_match ADD CONSTRAINT FK_C529BE4399E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE player_game');
        $this->addSql('ALTER TABLE compo RENAME INDEX idx_c9c84099714da62a TO IDX_C9C840999329866A');
        $this->addSql('ALTER TABLE game ADD assist_match SMALLINT DEFAULT NULL, ADD goal_conceded_match SMALLINT DEFAULT NULL, ADD goal_scored_match SMALLINT DEFAULT NULL, ADD presence_match SMALLINT DEFAULT NULL, ADD red_card_match SMALLINT DEFAULT NULL, ADD yellow_card_match SMALLINT DEFAULT NULL, DROP assist_game, DROP goal_conceded_game, DROP goal_scored_game, DROP presence_game, DROP red_card_game, DROP yellow_card_game, CHANGE address_game address_match VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE date_time_game date_time_match DATETIME DEFAULT NULL, CHANGE stadium_game stadium_match VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE game RENAME INDEX idx_232b318c296cd8ae TO IDX_7A5BC505296CD8AE');
    }
}
