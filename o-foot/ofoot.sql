-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 24 Janvier 2020 à 13:12
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.2.11-4+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ofoot`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `h1` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `h2` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `compo`
--

CREATE TABLE `compo` (
  `id` int(11) NOT NULL,
  `match_game_id` int(11) NOT NULL,
  `composition_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `match`
--

CREATE TABLE `match` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `address_match` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `assist_match` smallint(6) DEFAULT NULL,
  `date_time_match` datetime DEFAULT NULL,
  `domicile_exterieur` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `goal_conceded_match` smallint(6) DEFAULT NULL,
  `goal_scored_match` smallint(6) DEFAULT NULL,
  `opponent_team` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `presence_match` smallint(6) DEFAULT NULL,
  `red_card_match` smallint(6) DEFAULT NULL,
  `stadium_match` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `yellow_card_match` smallint(6) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20200124104827', '2020-01-24 10:53:40');

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

CREATE TABLE `player` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `position_id` int(11) DEFAULT NULL,
  `assist_player` smallint(6) DEFAULT NULL,
  `defeat_player` smallint(6) DEFAULT NULL,
  `draw_player` smallint(6) DEFAULT NULL,
  `goal_player` smallint(6) DEFAULT NULL,
  `match_player` smallint(6) DEFAULT NULL,
  `number_jersey_player` smallint(6) NOT NULL,
  `picture_player` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `player_name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position_player` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `red_card_player` smallint(6) DEFAULT NULL,
  `role_player` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `victory_player` smallint(6) DEFAULT NULL,
  `yellow_card_player` smallint(6) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `player`
--

INSERT INTO `player` (`id`, `user_id`, `team_id`, `position_id`, `assist_player`, `defeat_player`, `draw_player`, `goal_player`, `match_player`, `number_jersey_player`, `picture_player`, `player_name`, `position_player`, `red_card_player`, `role_player`, `victory_player`, `yellow_card_player`, `created_at`, `updated_at`) VALUES
(1, 2, 1, NULL, NULL, NULL, NULL, NULL, NULL, 7, NULL, 'Kylian Mbappé', 'Attaquant', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:03:57', NULL),
(2, 6, 1, NULL, NULL, NULL, NULL, NULL, NULL, 4, NULL, 'Marco Verratti', 'Milieu', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:05:45', NULL),
(3, 7, 2, NULL, NULL, NULL, NULL, NULL, NULL, 6, NULL, 'Dimitri Payet', 'Attaquant', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:07:11', NULL),
(4, 8, 2, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 'Steve Mandanda', 'Gardien ', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:08:21', NULL),
(5, 9, 2, NULL, NULL, NULL, NULL, NULL, NULL, 3, NULL, 'Kevin Strootman', 'Milieu de terrain', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:09:20', NULL),
(6, 10, 2, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 'Boubacar Kamara', 'Défenseur', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:10:12', NULL),
(7, 11, 1, NULL, NULL, NULL, NULL, NULL, NULL, 6, NULL, 'Florian Thauvin', 'Milieu de terrain', NULL, 'Joueur', NULL, NULL, '2020-01-24 13:11:13', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `player_compo`
--

CREATE TABLE `player_compo` (
  `player_id` int(11) NOT NULL,
  `compo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `player_match`
--

CREATE TABLE `player_match` (
  `player_id` int(11) NOT NULL,
  `match_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `player_practice`
--

CREATE TABLE `player_practice` (
  `player_id` int(11) NOT NULL,
  `practice_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `position`
--

CREATE TABLE `position` (
  `id` int(11) NOT NULL,
  `position_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `practice`
--

CREATE TABLE `practice` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `address_practice` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_time_practice` datetime DEFAULT NULL,
  `presence_practice` smallint(6) DEFAULT NULL,
  `stadium_practice` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tactique`
--

CREATE TABLE `tactique` (
  `id` int(11) NOT NULL,
  `compo_id` int(11) NOT NULL,
  `schema_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `address_team` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `assist_team` smallint(6) DEFAULT NULL,
  `championship_team` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_team` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `defeat_team` smallint(6) DEFAULT NULL,
  `draw_team` smallint(6) DEFAULT NULL,
  `goal_team` smallint(6) DEFAULT NULL,
  `logo_team` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manager_team` smallint(6) NOT NULL,
  `match_team` smallint(6) DEFAULT NULL,
  `presence_team` smallint(6) DEFAULT NULL,
  `red_card_team` smallint(6) DEFAULT NULL,
  `stadium_team` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `team_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `practice_team` smallint(6) DEFAULT NULL,
  `victory_team` smallint(6) DEFAULT NULL,
  `yellow_card_team` smallint(6) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `team`
--

INSERT INTO `team` (`id`, `address_team`, `assist_team`, `championship_team`, `city_team`, `defeat_team`, `draw_team`, `goal_team`, `logo_team`, `manager_team`, `match_team`, `presence_team`, `red_card_team`, `stadium_team`, `team_name`, `practice_team`, `victory_team`, `yellow_card_team`, `created_at`, `updated_at`) VALUES
(1, '24 Rue du Commandant Guilbaud', NULL, 'Ligue', '75016 Paris', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'Le Parc des Princes', 'PSG', NULL, NULL, NULL, '2020-01-24 13:00:11', NULL),
(2, '3 Boulevard Michelet', NULL, 'Ligue 1', '13008 Marseille', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, 'Orange Vélodrome', 'OM', NULL, NULL, NULL, '2020-01-24 13:01:43', NULL),
(3, '5 boulevard de la Beaujoire ', NULL, 'Ligue 1', '44300 Nantes\r\n', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, 'Stade de la Beaujoire', 'NANTES', NULL, NULL, NULL, '2020-01-24 13:02:49', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` datetime DEFAULT NULL,
  `first_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `picture_user` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `birthdate`, `first_name`, `last_name`, `picture_user`, `created_at`, `updated_at`) VALUES
(2, 'berenger@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$L51H6sqUEjAUvhRuIHwYIg$yAmxzjWtS/ABdzwC4nrTdpu2ZGofE8eTyYaDwDmcz7s', NULL, 'Berenger', 'Benoit', NULL, '2020-01-24 12:57:44', NULL),
(3, 'pedro@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$NWGjvzZVpgLQMR2J0rE9iQ$WGvxvN5EehH+pRyC0wR6bmY6xGEX/W6hMmPAYcxyS+s', NULL, 'Pedro', 'Cascao', NULL, '2020-01-24 12:57:58', NULL),
(4, 'cebrail@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$jNilvbzIXSCwHp4waqhQew$MFE1vueZPUY2jJjIs+p8R6KPMYZemfnHX37Mt8ZSDgg', NULL, 'Cebrail', 'Aktas', NULL, '2020-01-24 12:58:28', NULL),
(5, 'marine@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$mPIwQNus5rgTJNPItOUyfA$6AOn3bClZkAJT+nsF4Gb4akY9cmYkwhq/nJfqnTCFFY', NULL, 'Marine', 'Berthier', NULL, '2020-01-24 12:58:59', NULL),
(6, 'mickael@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$rQ4AlYjmbKjNdHYzYenJEQ$RVQktJFg7MaQ6g3iYzhjE/z9Ivv/uChoqpHaqCuwdq4', NULL, 'Mickael', 'Rassicot', NULL, '2020-01-24 12:59:15', NULL),
(7, 'marco@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$eTjHYWLYR7QLrl+MdfaYlg$QrvxscWwIWZv4g2HS14YvgMxB6xnVAHojePuA5HQi3M', NULL, 'Marco', 'Verratti', NULL, '2020-01-24 13:05:02', NULL),
(8, 'dimitri@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$OqWtx5ILwt4TbSK8BZ+bxQ$tX9LXYuTFWSslMQ745EZNn1m7zp3n4FkkImYueY1btE', NULL, 'Dimitri', 'Payet', NULL, '2020-01-24 13:06:15', NULL),
(9, 'steve@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$daaxhEyOeMT8maYf5gfwhg$mxhW4+BJY3TkBNrTDDd5o7Og5DYfhR9s1fQXeQeWYPo', NULL, 'Steve', 'Mandanda', NULL, '2020-01-24 13:07:44', NULL),
(10, 'kevin@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$H21sh3wsJRdlJ05liEowfg$DFvW1uAuBft0lKp2DNxwFNE34QfyOHRdYfyD6Um7QRE', NULL, 'Kevin', 'Strootman', NULL, '2020-01-24 13:08:50', NULL),
(11, 'boubacar@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$LOUIqXBX7RLLF41YFE6ELg$rojs/g2Rz4VbdQFe0j9hlCmmIi93CE2Z9VnSPmQq1Os', NULL, 'Boubacar', 'Kamara', NULL, '2020-01-24 13:09:47', NULL),
(12, 'florian@gmail.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$cbHS5qM+xuXAlEI+gVlElg$RdP1LkVTZ8HD4meWM7xGUhobVlRH+j0yWhaobj86lNs', NULL, 'Florian', 'Thauvin', NULL, '2020-01-24 13:10:51', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_team`
--

CREATE TABLE `user_team` (
  `user_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `compo`
--
ALTER TABLE `compo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C9C840999329866A` (`match_game_id`);

--
-- Index pour la table `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7A5BC505296CD8AE` (`team_id`);

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_98197A65A76ED395` (`user_id`),
  ADD KEY `IDX_98197A65296CD8AE` (`team_id`),
  ADD KEY `IDX_98197A65DD842E46` (`position_id`);

--
-- Index pour la table `player_compo`
--
ALTER TABLE `player_compo`
  ADD PRIMARY KEY (`player_id`,`compo_id`),
  ADD KEY `IDX_76BA3BDF99E6F5DF` (`player_id`),
  ADD KEY `IDX_76BA3BDFF1454301` (`compo_id`);

--
-- Index pour la table `player_match`
--
ALTER TABLE `player_match`
  ADD PRIMARY KEY (`player_id`,`match_id`),
  ADD KEY `IDX_C529BE4399E6F5DF` (`player_id`),
  ADD KEY `IDX_C529BE432ABEACD6` (`match_id`);

--
-- Index pour la table `player_practice`
--
ALTER TABLE `player_practice`
  ADD PRIMARY KEY (`player_id`,`practice_id`),
  ADD KEY `IDX_793B75AE99E6F5DF` (`player_id`),
  ADD KEY `IDX_793B75AEED33821` (`practice_id`);

--
-- Index pour la table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `practice`
--
ALTER TABLE `practice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7FEC344E296CD8AE` (`team_id`);

--
-- Index pour la table `tactique`
--
ALTER TABLE `tactique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_9E469E23F1454301` (`compo_id`);

--
-- Index pour la table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- Index pour la table `user_team`
--
ALTER TABLE `user_team`
  ADD PRIMARY KEY (`user_id`,`team_id`),
  ADD KEY `IDX_BE61EAD6A76ED395` (`user_id`),
  ADD KEY `IDX_BE61EAD6296CD8AE` (`team_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `compo`
--
ALTER TABLE `compo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `match`
--
ALTER TABLE `match`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `position`
--
ALTER TABLE `position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `practice`
--
ALTER TABLE `practice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `tactique`
--
ALTER TABLE `tactique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `compo`
--
ALTER TABLE `compo`
  ADD CONSTRAINT `FK_C9C840999329866A` FOREIGN KEY (`match_game_id`) REFERENCES `match` (`id`);

--
-- Contraintes pour la table `match`
--
ALTER TABLE `match`
  ADD CONSTRAINT `FK_7A5BC505296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);

--
-- Contraintes pour la table `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `FK_98197A65296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`),
  ADD CONSTRAINT `FK_98197A65A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_98197A65DD842E46` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`);

--
-- Contraintes pour la table `player_compo`
--
ALTER TABLE `player_compo`
  ADD CONSTRAINT `FK_76BA3BDF99E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_76BA3BDFF1454301` FOREIGN KEY (`compo_id`) REFERENCES `compo` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `player_match`
--
ALTER TABLE `player_match`
  ADD CONSTRAINT `FK_C529BE432ABEACD6` FOREIGN KEY (`match_id`) REFERENCES `match` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_C529BE4399E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `player_practice`
--
ALTER TABLE `player_practice`
  ADD CONSTRAINT `FK_793B75AE99E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_793B75AEED33821` FOREIGN KEY (`practice_id`) REFERENCES `practice` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `practice`
--
ALTER TABLE `practice`
  ADD CONSTRAINT `FK_7FEC344E296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`);

--
-- Contraintes pour la table `tactique`
--
ALTER TABLE `tactique`
  ADD CONSTRAINT `FK_9E469E23F1454301` FOREIGN KEY (`compo_id`) REFERENCES `compo` (`id`);

--
-- Contraintes pour la table `user_team`
--
ALTER TABLE `user_team`
  ADD CONSTRAINT `FK_BE61EAD6296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_BE61EAD6A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
