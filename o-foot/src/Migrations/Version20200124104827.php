<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200124104827 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, content LONGTEXT NOT NULL, h1 VARCHAR(128) NOT NULL, h2 VARCHAR(128) NOT NULL, image VARCHAR(128) DEFAULT NULL, name VARCHAR(255) NOT NULL, short_description LONGTEXT NOT NULL, title VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE team (id INT AUTO_INCREMENT NOT NULL, address_team VARCHAR(255) NOT NULL, assist_team SMALLINT DEFAULT NULL, championship_team VARCHAR(128) DEFAULT NULL, city_team VARCHAR(255) NOT NULL, defeat_team SMALLINT DEFAULT NULL, draw_team SMALLINT DEFAULT NULL, goal_team SMALLINT DEFAULT NULL, logo_team VARCHAR(128) DEFAULT NULL, manager_team SMALLINT NOT NULL, game_team SMALLINT DEFAULT NULL, presence_team SMALLINT DEFAULT NULL, red_card_team SMALLINT DEFAULT NULL, stadium_team VARCHAR(255) NOT NULL, team_name VARCHAR(255) NOT NULL, practice_team SMALLINT DEFAULT NULL, victory_team SMALLINT DEFAULT NULL, yellow_card_team SMALLINT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, team_id INT NOT NULL, position_id INT DEFAULT NULL, assist_player SMALLINT DEFAULT NULL, defeat_player SMALLINT DEFAULT NULL, draw_player SMALLINT DEFAULT NULL, goal_player SMALLINT DEFAULT NULL, game_player SMALLINT DEFAULT NULL, number_jersey_player SMALLINT NOT NULL, picture_player VARCHAR(128) DEFAULT NULL, player_name VARCHAR(128) NOT NULL, position_player VARCHAR(128) DEFAULT NULL, red_card_player SMALLINT DEFAULT NULL, role_player VARCHAR(30) NOT NULL, victory_player SMALLINT DEFAULT NULL, yellow_card_player SMALLINT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_98197A65A76ED395 (user_id), INDEX IDX_98197A65296CD8AE (team_id), INDEX IDX_98197A65DD842E46 (position_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player_compo (player_id INT NOT NULL, compo_id INT NOT NULL, INDEX IDX_76BA3BDF99E6F5DF (player_id), INDEX IDX_76BA3BDFF1454301 (compo_id), PRIMARY KEY(player_id, compo_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player_practice (player_id INT NOT NULL, practice_id INT NOT NULL, INDEX IDX_793B75AE99E6F5DF (player_id), INDEX IDX_793B75AEED33821 (practice_id), PRIMARY KEY(player_id, practice_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player_match (player_id INT NOT NULL, game_id INT NOT NULL, INDEX IDX_C529BE4399E6F5DF (player_id), INDEX IDX_C529BE432ABEACD6 (game_id), PRIMARY KEY(player_id, game_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, team_id INT NOT NULL, address_match VARCHAR(255) DEFAULT NULL, assist_match SMALLINT DEFAULT NULL, date_time_match DATETIME DEFAULT NULL, domicile_exterieur VARCHAR(128) DEFAULT NULL, goal_conceded_match SMALLINT DEFAULT NULL, goal_scored_match SMALLINT DEFAULT NULL, opponent_team VARCHAR(255) DEFAULT NULL, presence_match SMALLINT DEFAULT NULL, red_card_match SMALLINT DEFAULT NULL, stadium_match VARCHAR(255) NOT NULL, yellow_card_match SMALLINT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_7A5BC505296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, birthdate DATETIME DEFAULT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, picture_user VARCHAR(128) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_team (user_id INT NOT NULL, team_id INT NOT NULL, INDEX IDX_BE61EAD6A76ED395 (user_id), INDEX IDX_BE61EAD6296CD8AE (team_id), PRIMARY KEY(user_id, team_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE practice (id INT AUTO_INCREMENT NOT NULL, team_id INT NOT NULL, address_practice VARCHAR(255) DEFAULT NULL, date_time_practice DATETIME DEFAULT NULL, presence_practice SMALLINT DEFAULT NULL, stadium_practice VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_7FEC344E296CD8AE (team_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tactique (id INT AUTO_INCREMENT NOT NULL, compo_id INT NOT NULL, schema_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_9E469E23F1454301 (compo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE compo (id INT AUTO_INCREMENT NOT NULL, game_game_id INT NOT NULL, composition_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_C9C840999329866A (game_game_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE position (id INT AUTO_INCREMENT NOT NULL, position_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65DD842E46 FOREIGN KEY (position_id) REFERENCES position (id)');
        $this->addSql('ALTER TABLE player_compo ADD CONSTRAINT FK_76BA3BDF99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_compo ADD CONSTRAINT FK_76BA3BDFF1454301 FOREIGN KEY (compo_id) REFERENCES compo (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_practice ADD CONSTRAINT FK_793B75AE99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_practice ADD CONSTRAINT FK_793B75AEED33821 FOREIGN KEY (practice_id) REFERENCES practice (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_match ADD CONSTRAINT FK_C529BE4399E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE player_match ADD CONSTRAINT FK_C529BE432ABEACD6 FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE game ADD CONSTRAINT FK_7A5BC505296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE user_team ADD CONSTRAINT FK_BE61EAD6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_team ADD CONSTRAINT FK_BE61EAD6296CD8AE FOREIGN KEY (team_id) REFERENCES team (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE practice ADD CONSTRAINT FK_7FEC344E296CD8AE FOREIGN KEY (team_id) REFERENCES team (id)');
        $this->addSql('ALTER TABLE tactique ADD CONSTRAINT FK_9E469E23F1454301 FOREIGN KEY (compo_id) REFERENCES compo (id)');
        $this->addSql('ALTER TABLE compo ADD CONSTRAINT FK_C9C840999329866A FOREIGN KEY (game_game_id) REFERENCES game (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65296CD8AE');
        $this->addSql('ALTER TABLE game DROP FOREIGN KEY FK_7A5BC505296CD8AE');
        $this->addSql('ALTER TABLE user_team DROP FOREIGN KEY FK_BE61EAD6296CD8AE');
        $this->addSql('ALTER TABLE practice DROP FOREIGN KEY FK_7FEC344E296CD8AE');
        $this->addSql('ALTER TABLE player_compo DROP FOREIGN KEY FK_76BA3BDF99E6F5DF');
        $this->addSql('ALTER TABLE player_practice DROP FOREIGN KEY FK_793B75AE99E6F5DF');
        $this->addSql('ALTER TABLE player_match DROP FOREIGN KEY FK_C529BE4399E6F5DF');
        $this->addSql('ALTER TABLE player_match DROP FOREIGN KEY FK_C529BE432ABEACD6');
        $this->addSql('ALTER TABLE compo DROP FOREIGN KEY FK_C9C840999329866A');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65A76ED395');
        $this->addSql('ALTER TABLE user_team DROP FOREIGN KEY FK_BE61EAD6A76ED395');
        $this->addSql('ALTER TABLE player_practice DROP FOREIGN KEY FK_793B75AEED33821');
        $this->addSql('ALTER TABLE player_compo DROP FOREIGN KEY FK_76BA3BDFF1454301');
        $this->addSql('ALTER TABLE tactique DROP FOREIGN KEY FK_9E469E23F1454301');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65DD842E46');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE team');
        $this->addSql('DROP TABLE player');
        $this->addSql('DROP TABLE player_compo');
        $this->addSql('DROP TABLE player_practice');
        $this->addSql('DROP TABLE player_match');
        $this->addSql('DROP TABLE game');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_team');
        $this->addSql('DROP TABLE practice');
        $this->addSql('DROP TABLE tactique');
        $this->addSql('DROP TABLE compo');
        $this->addSql('DROP TABLE position');
    }
}
