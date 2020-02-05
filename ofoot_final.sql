-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 04 Février 2020 à 17:30
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
  `game_game_id` int(11) NOT NULL,
  `composition_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `compo`
--

INSERT INTO `compo` (`id`, `game_game_id`, `composition_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Heloise Littel III', '1974-08-27 02:06:33', '1989-07-09 07:13:03'),
(2, 2, 'Dr. Rosalyn Schmeler', '2015-11-10 09:54:15', '2017-12-10 07:51:12'),
(3, 3, 'Christina Vandervort I', '2017-11-28 07:04:49', '2019-06-08 01:05:50'),
(4, 4, 'Dr. Alayna Treutel DVM', '2007-09-12 10:30:40', '2018-07-01 05:15:35'),
(5, 5, 'Miss Kira Walter DDS', '1978-03-01 04:28:18', '1993-11-14 03:35:49'),
(6, 6, 'Zelma Fay', '1988-12-12 11:52:27', '2014-07-22 09:13:25'),
(7, 7, 'Ms. Myrtie Price MD', '1988-03-28 01:04:28', '2014-09-14 20:41:47'),
(8, 8, 'Tremaine Schuster', '1971-06-24 22:28:47', '2008-06-25 10:36:41'),
(9, 9, 'Jeramie Deckow', '1985-07-08 01:36:25', '2017-08-17 03:14:11'),
(10, 10, 'Zachery Champlin Jr.', '2018-12-26 14:38:34', '2019-08-11 08:08:39'),
(11, 11, 'Holly Mayert', '1987-01-15 15:31:45', '1992-12-20 04:38:49'),
(12, 12, 'Prof. Judah Rosenbaum PhD', '2019-02-12 16:44:43', '2019-11-29 19:16:47'),
(13, 13, 'Oren Eichmann', '2009-03-31 10:40:21', '2012-02-25 22:33:02'),
(14, 14, 'Yasmine Heller', '1975-02-21 15:57:25', '1997-07-09 16:53:15'),
(15, 15, 'Kyra Hickle', '1983-08-26 13:27:11', '2002-03-11 16:54:49'),
(16, 16, 'Ms. Theodora Nienow', '1985-07-15 11:23:16', '1987-10-14 03:15:39'),
(17, 17, 'Pearl Kertzmann Sr.', '1976-04-07 15:40:53', '1999-04-06 21:37:25'),
(18, 18, 'Keira Beatty', '2011-10-18 16:42:32', '2016-10-14 03:05:09'),
(19, 19, 'Vanessa Reynolds', '1977-04-20 05:50:07', '2004-09-20 20:24:15'),
(20, 20, 'Amie Zulauf', '2004-11-29 20:44:51', '2016-03-06 04:28:42'),
(21, 21, 'Soledad Bernhard', '2006-03-05 15:43:13', '2018-06-07 17:20:33'),
(22, 22, 'Wilhelmine Jast', '1986-04-13 02:38:03', '1997-03-22 06:25:19'),
(23, 23, 'Aurore Wintheiser', '1975-04-15 08:33:52', '1995-05-14 17:03:35'),
(24, 24, 'Ashton Bayer', '1980-10-23 07:57:47', '1997-12-18 01:50:00'),
(25, 25, 'Armand Carter', '2007-08-01 13:57:09', '2008-02-12 20:40:00');

-- --------------------------------------------------------

--
-- Structure de la table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `address_game` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_time_game` datetime DEFAULT NULL,
  `domicile_exterieur` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `opponent_team` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stadium_game` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `assist_game` smallint(6) DEFAULT NULL,
  `goal_conceded_game` smallint(6) DEFAULT NULL,
  `goal_scored_game` smallint(6) DEFAULT NULL,
  `presence_game` smallint(6) DEFAULT NULL,
  `red_card_game` smallint(6) DEFAULT NULL,
  `yellow_card_game` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `game`
--

INSERT INTO `game` (`id`, `team_id`, `address_game`, `date_time_game`, `domicile_exterieur`, `opponent_team`, `stadium_game`, `created_at`, `updated_at`, `assist_game`, `goal_conceded_game`, `goal_scored_game`, `presence_game`, `red_card_game`, `yellow_card_game`) VALUES
(1, 19, '893 Mohammed Vista Apt. 682', '2004-09-02 22:12:48', 'Exterieur', 'Reta VonRueden Sr.', 'Ziemann and Sons', '2010-01-01 10:06:56', '2011-07-04 23:17:08', 1, NULL, 18, 55, 3, 5),
(2, 20, '1631 Stamm Fort', '2004-12-29 13:16:38', 'Domicile', 'Prof. Arianna Crona DDS', 'Fritsch LLC', '1977-11-23 12:40:06', '1991-10-06 06:37:01', 16, NULL, 7, 13, 2, 0),
(3, 21, '1584 Jones Plains Suite 956', '2006-11-05 18:44:09', 'Domicile', 'Helen Wiegand', 'Watsica-Schulist', '1981-05-02 01:55:33', '1989-06-13 14:14:07', 12, NULL, 18, 62, 1, 5),
(4, 22, '210 Deion Locks', '1978-01-15 11:53:54', 'Exterieur', 'Bertrand McGlynn', 'Bogisich-Ankunding', '1980-02-25 17:33:22', '1983-08-02 05:21:42', 0, NULL, 16, 55, 2, 3),
(5, 23, '4607 Reyes Port Suite 078', '1985-08-18 07:43:54', 'Domicile', 'Alize Willms', 'Trantow, Osinski and Kutch', '2017-05-18 11:17:03', '2019-03-19 23:09:44', 2, NULL, 20, 99, 2, 4),
(6, 24, '66759 Sigrid Glens', '1993-07-27 23:04:13', 'Domicile', 'Prof. Murray Blanda PhD', 'Williamson-Johnston', '2011-09-19 21:32:11', '2019-07-29 13:56:20', 13, NULL, 13, 59, 2, 5),
(7, 25, '922 Kathleen Club', '1984-09-14 19:42:17', 'Domicile', 'Joan Aufderhar', 'Moen-Shields', '1971-06-02 09:18:22', '1983-08-11 19:50:56', 18, NULL, 2, 58, 1, 4),
(8, 26, '17427 Predovic Mountain Suite 230', '1995-06-15 20:33:59', 'Domicile', 'Milton Krajcik', 'Ebert, Koch and Wehner', '1972-09-24 07:17:59', '1998-02-04 13:11:49', 5, NULL, 19, 97, 1, 3),
(9, 27, '55688 Adrien Turnpike Apt. 859', '1994-05-22 02:14:25', 'Exterieur', 'Erna Koelpin DDS', 'Hilpert Ltd', '1984-10-01 04:40:06', '2001-12-02 17:50:32', 13, NULL, 15, 77, 2, 2),
(10, 28, '1254 Hudson Dam Suite 209', '1990-11-26 17:36:16', 'Exterieur', 'Dr. Elliot Rohan', 'Price Inc', '1980-02-19 11:32:17', '1987-07-13 09:51:52', 12, NULL, 5, 4, 3, 6),
(11, 29, '603 Bernice Expressway Apt. 751', '1981-02-14 03:38:14', 'Exterieur', 'Ms. Naomie Lebsack', 'Erdman Ltd', '1997-05-19 16:20:43', '1997-11-22 14:22:44', 9, NULL, 0, 28, 3, 0),
(12, 30, '590 Corkery Gardens Suite 901', '2015-01-24 11:45:06', 'Exterieur', 'Cecilia Kihn', 'Streich-Torphy', '2015-01-14 01:22:31', '2016-04-15 19:42:14', 20, NULL, 12, 96, 2, 2),
(13, 31, '1580 Koepp Skyway', '2018-09-15 19:20:36', 'Exterieur', 'Prof. Melvina Cassin', 'Botsford, Beer and Johnston', '2016-01-24 17:46:45', '2019-02-03 23:16:46', 18, NULL, 6, 39, 2, 5),
(14, 32, '7727 Stephanie Tunnel Suite 028', '2009-12-17 13:59:29', 'Exterieur', 'Tyree Hane PhD', 'Schmitt-Armstrong', '1987-07-11 07:31:13', '2015-07-05 00:14:10', 9, NULL, 17, 44, 0, 2),
(15, 33, '78006 Casandra Plain Apt. 426', '1982-04-24 09:02:48', 'Domicile', 'Beryl Nader', 'Johnson, McCullough and Bruen', '1986-07-24 16:36:37', '1998-07-21 17:38:00', 18, NULL, 11, 5, 3, 4),
(16, 34, '6244 Strosin Trail', '2001-03-27 04:25:36', 'Exterieur', 'Mr. Dorthy Hermann', 'Ortiz-Auer', '2018-01-23 12:55:31', '2019-09-27 22:40:04', 6, NULL, 13, 16, 1, 3),
(17, 35, '940 Frida Road', '1997-04-05 08:50:56', 'Domicile', 'Ari Sanford', 'Hand LLC', '1988-10-20 00:17:50', '1994-01-15 07:15:36', 11, NULL, 12, 40, 1, 0),
(18, 36, '6957 Langworth Square Apt. 973', '1975-07-31 09:17:01', 'Domicile', 'Mr. Brandt Dibbert V', 'Armstrong-Ziemann', '2004-09-22 04:03:15', '2010-11-05 04:15:47', 12, NULL, 18, 83, 2, 2),
(19, 37, '9715 Giuseppe Crescent Suite 366', '1980-01-13 10:15:17', 'Domicile', 'Mr. Lyric Cormier', 'Rowe Inc', '1999-10-11 12:53:56', '2010-11-14 12:51:37', 18, NULL, 13, 85, 1, 0),
(20, 38, '124 Vandervort Cove Suite 094', '2003-06-03 04:20:40', 'Domicile', 'Ms. Mollie Padberg', 'Wehner, Bednar and Marquardt', '1978-10-22 07:33:41', '2017-05-28 09:43:02', 0, NULL, 5, 51, 1, 1),
(21, 39, '14730 Feeney Plaza', '1981-04-27 19:46:14', 'Exterieur', 'Sydnie Baumbach', 'Schneider Inc', '2008-01-07 20:08:41', '2017-08-27 20:28:34', 11, NULL, 12, 91, 1, 0),
(22, 40, '6384 Skiles Heights', '1976-05-31 08:26:17', 'Domicile', 'Elvera Baumbach', 'Gorczany Ltd', '1994-04-09 20:56:41', '1995-10-05 10:08:39', 3, NULL, 12, 92, 3, 5),
(23, 41, '4498 Pete Cape', '1992-07-13 19:06:22', 'Domicile', 'Geoffrey Rosenbaum DDS', 'Casper, Stiedemann and Crona', '2015-06-06 22:33:06', '2015-07-31 19:04:27', 1, NULL, 1, 37, 1, 6),
(24, 42, '321 Ratke Bypass Suite 347', '1976-07-01 18:20:39', 'Domicile', 'Kamron Goldner I', 'Okuneva, Shields and Denesik', '2002-11-24 12:36:24', '2018-02-24 11:59:58', 20, NULL, 0, 37, 2, 1),
(25, 43, '641 Letha Lodge Suite 310', '2004-02-07 17:36:21', 'Domicile', 'Guy Wolff', 'Zboncak Group', '1992-07-25 21:09:41', '2019-12-07 07:41:18', 6, NULL, 4, 69, 0, 3),
(26, 44, 'Rue du Parc des Princes', '2020-02-13 20:00:00', 'domicile', 'Marseille', 'Parc des Princes', '2020-02-04 11:54:43', '2020-02-04 11:54:43', NULL, NULL, NULL, NULL, NULL, NULL);

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
('20200124104827', '2020-01-30 13:53:33'),
('20200126162607', '2020-01-30 13:53:33'),
('20200127143120', '2020-01-30 13:53:33'),
('20200129134528', '2020-01-30 13:53:33'),
('20200130132458', '2020-01-30 13:53:33');

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
  `game_player` smallint(6) DEFAULT NULL,
  `number_jersey_player` smallint(6) NOT NULL,
  `picture_player` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `player_name` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `red_card_player` smallint(6) DEFAULT NULL,
  `role_player` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `victory_player` smallint(6) DEFAULT NULL,
  `yellow_card_player` smallint(6) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `first_name_player` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name_player` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `player`
--

INSERT INTO `player` (`id`, `user_id`, `team_id`, `position_id`, `assist_player`, `defeat_player`, `draw_player`, `goal_player`, `game_player`, `number_jersey_player`, `picture_player`, `player_name`, `red_card_player`, `role_player`, `victory_player`, `yellow_card_player`, `created_at`, `updated_at`, `first_name_player`, `last_name_player`) VALUES
(1, 2, 19, 1, 6, 13, 13, 15, 16, 26, NULL, 'Pamela Huel', 10, 'When the.', 17, 13, '1970-05-08 15:54:31', '1993-04-02 12:41:40', 'Josiah', 'Murazik'),
(2, 3, 20, 2, 15, 16, 16, 5, 3, 74, NULL, 'Bettye Davis', 17, '.', 14, 0, '2014-12-11 18:10:47', '2019-06-28 14:19:27', 'Leatha', 'Heathcote'),
(3, 4, 21, 3, 6, 12, 9, 10, 15, 47, NULL, 'Jennyfer Metz', 4, 'Dormouse.', 6, 12, '2016-07-30 22:37:44', '2019-09-29 04:51:59', 'Jarret', 'Kovacek'),
(4, 5, 22, 4, 3, 6, 5, 17, 15, 40, NULL, 'Prof. Kiana Abernathy', 10, 'This.', 6, 11, '2016-01-30 01:54:12', '2018-09-06 23:58:20', 'Dakota', 'Leffler'),
(5, 6, 23, 5, 8, 14, 8, 19, 17, 39, NULL, 'Laisha Hickle', 5, 'ONE.', 20, 5, '2000-05-20 03:05:26', '2012-11-24 06:56:20', 'Celestine', 'Kassulke'),
(6, 7, 24, 6, 12, 11, 13, 3, 11, 77, NULL, 'Dianna Greenholt', 6, 'Mind.', 15, 3, '1983-02-20 03:45:03', '2015-02-08 22:55:01', 'Bailey', 'Champlin'),
(7, 8, 25, 7, 13, 17, 6, 13, 1, 60, NULL, 'Zaria McClure', 11, 'Yet you.', 3, 6, '1980-09-13 21:28:46', '2012-09-26 11:14:24', 'Liliane', 'Stamm'),
(8, 9, 26, 8, 11, 18, 16, 16, 4, 80, NULL, 'Tyrese Bechtelar', 12, 'I must.', 16, 10, '1986-04-01 09:17:34', '2003-08-22 09:04:22', 'Fiona', 'Greenholt'),
(9, 10, 27, 9, 19, 20, 10, 1, 14, 96, '/img/player_card/ozil.jpg', 'Magdalen Muller', 7, 'Alice.', 18, 7, '1983-09-19 14:24:08', '1985-03-12 01:55:40', 'Tessie', 'Mueller'),
(10, 11, 44, 10, 1, 1, 9, 17, 7, 36, NULL, 'Dr. Lora Purdy Jr.', 16, 'I\'ve had.', 6, 14, '2019-11-27 04:08:32', '2019-12-12 07:34:23', 'Harry', 'Hand'),
(11, 12, 29, 11, 15, 2, 15, 7, 10, 57, NULL, 'Jennings Block', 5, 'When she.', 20, 0, '1982-07-07 15:42:54', '1993-05-24 08:48:01', 'Juana', 'Funk'),
(12, 13, 30, 12, 12, 9, 7, 3, 5, 20, NULL, 'Heather Tillman DDS', 0, 'WOULD.', 15, 15, '1999-07-11 07:48:57', '2005-05-26 03:18:29', 'Emilio', 'Jenkins'),
(13, 14, 31, 13, 14, 0, 9, 2, 18, 86, NULL, 'Kaia Feeney', 7, 'Alice.', 1, 18, '2004-03-31 06:54:26', '2013-03-11 09:17:33', 'Karli', 'Orn'),
(14, 15, 44, 14, 3, 11, 19, 20, 3, 9, NULL, 'Aliya Waters', 3, '.', 16, 0, '2012-08-04 18:32:07', '2016-07-23 09:00:13', 'Marlee', 'Ratke'),
(15, 16, 33, 15, 20, 12, 9, 0, 19, 94, NULL, 'Marcelino Cummings', 6, 'I should.', 15, 17, '2009-12-24 08:53:38', '2012-12-20 15:39:53', 'Lottie', 'Buckridge'),
(16, 17, 27, 16, 11, 2, 15, 3, 20, 17, '/img/player_card/mbappe.jpg', 'Aubrey Lueilwitz', 16, 'Gryphon.', 5, 6, '1970-06-08 16:22:54', '2002-06-16 09:28:29', 'Lisandro', 'O\'Conner'),
(17, 18, 44, 17, 9, 9, 19, 12, 20, 83, NULL, 'Dr. Cayla Gerlach DDS', 10, 'Gryphon.', 7, 13, '2015-07-11 08:06:22', '2015-10-13 01:07:10', 'Antonette', 'Hettinger'),
(18, 19, 36, 18, 10, 5, 5, 12, 8, 71, NULL, 'Prof. Gianni Hauck V', 4, 'Alice.', 10, 11, '2004-07-23 12:45:32', '2018-01-10 20:17:25', 'Elbert', 'Hoeger'),
(19, 20, 27, 19, 13, 16, 9, 17, 0, 4, NULL, 'Darryl Zulauf', 11, 'Digging.', 4, 8, '2015-12-10 17:51:28', '2018-05-31 18:29:13', 'Flavio', 'Balistreri'),
(20, 21, 38, 20, 5, 9, 4, 11, 13, 15, NULL, 'Ceasar Douglas', 12, 'Alice.', 2, 13, '1983-10-02 21:59:02', '2004-09-22 19:53:23', 'Mayra', 'Stanton'),
(21, 22, 44, 21, 12, 11, 0, 10, 4, 7, NULL, 'Ms. Alana Prohaska', 15, 'March.', 8, 14, '1997-03-28 16:26:22', '1998-08-08 10:27:06', 'Paris', 'Kling'),
(22, 23, 44, 22, 2, 11, 10, 11, 4, 89, NULL, 'Herman Beatty', 1, 'Like a.', 19, 11, '1983-02-01 23:14:31', '1992-11-08 08:15:30', 'Casper', 'Lemke'),
(23, 24, 27, 23, 15, 12, 0, 10, 9, 97, NULL, 'Emil Homenick', 13, 'So she.', 0, 2, '2008-07-09 02:38:46', '2009-01-24 17:48:55', 'Silas', 'Marquardt'),
(24, 25, 44, 24, 3, 6, 1, 0, 4, 13, NULL, 'Lindsay Gibson V', 8, 'Alice.', 16, 5, '1986-10-11 19:47:29', '2014-08-29 13:11:07', 'Sherman', 'Champlin'),
(25, 26, 43, 25, 5, 15, 6, 6, 0, 87, NULL, 'Tristian Carroll', 10, 'Alice!\'.', 16, 7, '1989-01-02 01:49:16', '2012-01-31 10:45:31', 'Daisha', 'Gutmann'),
(26, 31, 44, 7, NULL, NULL, NULL, NULL, NULL, 10, NULL, NULL, NULL, '', NULL, NULL, '2020-02-02 00:00:00', NULL, 'Simple', 'Utilisateur'),
(27, 38, 64, 1, 1, 2, 5, 0, 50, 1, '/img/pres/edf/lloris.jpg', 'Hugo Lloris', 0, 'Gardien', 35, 12, '2020-02-03 08:00:00', NULL, 'Hugo', 'Lloris'),
(28, 39, 64, 1, 3, 4, 9, 4, 47, 4, '/img/pres/edf/varane.jpg', 'Raphael Varane', 3, 'Défenseur', 41, 3, '2020-02-03 07:00:00', NULL, 'Raphael', 'Varane'),
(29, 40, 64, 1, 17, 4, 10, 20, 70, 6, '/img/pres/edf/pogba.jpg', 'Paul Pogba', 5, 'Milieu Off.', 50, 3, '2020-02-04 08:00:00', NULL, 'Paul', 'Pogba'),
(30, 41, 64, 1, 30, 15, 10, 40, 50, 7, '/img/pres/edf/griezmann.jpg', 'Antoine Griezmann', 3, 'Attaquant', 40, 2, '2020-02-04 06:00:00', NULL, 'Antoine', 'Griezmann'),
(31, 42, 64, 1, 20, 7, 5, 30, 40, 10, '/img/pres/edf/mbappe.jpg', 'Kylian M\'Bappe', 0, 'Attaquant', 35, 2, '2020-02-04 04:00:00', NULL, 'Kylian', 'M\'Bappé'),
(32, 42, 65, 1, 10, 10, 2, 50, 30, 29, '/img/pres/edf/mbappe.jpg', 'Kylian M\'Bappe', 0, 'Attaquant', 50, 1, '2020-02-04 07:00:00', NULL, 'Kylian', 'M\'Bappé'),
(33, 43, 65, 1, 57, 30, 15, 120, 100, 12, '/img/pres/monaco/henry.jpg', 'Thierry Henry', 2, 'Attaquant', 80, 5, '2020-02-03 07:00:00', NULL, 'Thierry', 'Henry'),
(34, 44, 65, 1, 42, 20, 5, 42, 90, 8, '/img/pres/monaco/giuly.jpg', 'Ludovic Giuly', 0, 'Attaquant', 68, 1, '2020-02-04 11:00:00', NULL, 'Ludovic', 'Giuly'),
(35, 45, 65, 1, 4, 58, 15, 67, 90, 1, '/img/pres/monaco/barthez.jpg', 'Fabien Barthez', 1, 'Gardien', 60, 2, '2020-02-04 04:00:00', NULL, 'Fabien', 'Barthez');

-- --------------------------------------------------------

--
-- Structure de la table `player_compo`
--

CREATE TABLE `player_compo` (
  `player_id` int(11) NOT NULL,
  `compo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `player_compo`
--

INSERT INTO `player_compo` (`player_id`, `compo_id`) VALUES
(1, 1),
(2, 2),
(2, 4),
(2, 18),
(3, 3),
(4, 1),
(4, 4),
(5, 5),
(5, 6),
(5, 9),
(5, 12),
(5, 15),
(5, 21),
(6, 6),
(7, 7),
(8, 1),
(8, 8),
(8, 23),
(9, 9),
(10, 5),
(10, 9),
(10, 10),
(10, 20),
(11, 4),
(11, 11),
(11, 15),
(11, 19),
(12, 12),
(13, 13),
(14, 14),
(14, 24),
(14, 25),
(15, 15),
(15, 16),
(16, 7),
(16, 16),
(17, 17),
(18, 7),
(18, 18),
(19, 18),
(19, 19),
(20, 20),
(20, 23),
(21, 21),
(21, 22),
(22, 2),
(22, 22),
(22, 24),
(23, 23),
(23, 25),
(24, 6),
(24, 24),
(25, 25);

-- --------------------------------------------------------

--
-- Structure de la table `player_game`
--

CREATE TABLE `player_game` (
  `player_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `player_game`
--

INSERT INTO `player_game` (`player_id`, `game_id`) VALUES
(1, 1),
(2, 2),
(2, 4),
(2, 24),
(3, 3),
(3, 7),
(4, 4),
(4, 8),
(5, 5),
(5, 6),
(6, 6),
(6, 16),
(6, 23),
(7, 7),
(7, 25),
(8, 6),
(8, 8),
(9, 2),
(9, 7),
(9, 9),
(10, 10),
(10, 14),
(10, 15),
(10, 19),
(11, 3),
(11, 11),
(11, 13),
(12, 8),
(12, 12),
(12, 22),
(13, 12),
(13, 13),
(14, 13),
(14, 14),
(15, 4),
(15, 15),
(16, 16),
(16, 17),
(16, 18),
(17, 17),
(18, 3),
(18, 18),
(19, 19),
(19, 21),
(20, 20),
(21, 1),
(21, 17),
(21, 21),
(22, 22),
(23, 16),
(23, 23),
(24, 15),
(24, 18),
(24, 24),
(25, 1),
(25, 25);

-- --------------------------------------------------------

--
-- Structure de la table `player_practice`
--

CREATE TABLE `player_practice` (
  `player_id` int(11) NOT NULL,
  `practice_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `player_practice`
--

INSERT INTO `player_practice` (`player_id`, `practice_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(4, 7),
(5, 5),
(5, 16),
(5, 20),
(6, 6),
(7, 7),
(8, 8),
(8, 17),
(8, 23),
(9, 9),
(9, 18),
(10, 4),
(10, 8),
(10, 10),
(10, 24),
(11, 11),
(12, 12),
(13, 3),
(13, 11),
(13, 13),
(13, 18),
(13, 25),
(14, 1),
(14, 14),
(14, 23),
(14, 25),
(15, 1),
(15, 15),
(16, 16),
(17, 16),
(17, 17),
(18, 18),
(19, 5),
(19, 19),
(20, 2),
(20, 4),
(20, 20),
(21, 12),
(21, 15),
(21, 21),
(22, 6),
(22, 20),
(22, 22),
(23, 23),
(24, 17),
(24, 24),
(25, 25);

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

--
-- Contenu de la table `position`
--

INSERT INTO `position` (`id`, `position_name`, `created_at`, `updated_at`) VALUES
(1, 'Fire-Prevention Engineer', '1989-01-25 06:54:47', '1989-05-18 06:38:47'),
(2, 'Geoscientists', '1970-03-14 13:24:12', '2016-02-27 22:58:19'),
(3, 'Architectural Drafter', '2011-12-28 14:08:44', '2016-07-27 22:04:13'),
(4, 'Biological Science Teacher', '2002-01-08 17:46:57', '2013-05-02 15:38:28'),
(5, 'Business Manager', '1983-09-06 08:14:50', '2003-12-04 05:59:28'),
(6, 'Middle School Teacher', '1999-02-19 20:17:47', '2019-09-11 04:28:34'),
(7, 'Government', '1978-11-09 01:04:52', '2012-05-10 23:06:42'),
(8, 'Numerical Tool Programmer OR Process Control Programmer', '1999-01-11 20:56:54', '2002-03-12 00:54:32'),
(9, 'Timing Device Assemblers', '1971-02-06 17:13:28', '1985-01-15 14:27:04'),
(10, 'Psychiatric Aide', '2019-03-22 13:23:00', '2019-04-05 13:26:36'),
(11, 'Audiologist', '2003-04-07 19:50:37', '2019-01-25 07:03:07'),
(12, 'Community Service Manager', '1981-03-26 12:40:50', '1998-08-08 04:21:12'),
(13, 'Pile-Driver Operator', '1998-12-11 23:08:16', '2007-03-27 00:31:02'),
(14, 'Production Worker', '2012-01-04 21:56:54', '2012-08-22 21:58:24'),
(15, 'Animal Control Worker', '2003-07-30 17:38:51', '2015-11-21 20:05:34'),
(16, 'Audio and Video Equipment Technician', '2002-08-07 23:52:59', '2003-12-28 22:44:33'),
(17, 'Fast Food Cook', '2016-04-09 13:42:14', '2017-03-22 18:26:52'),
(18, 'Welding Machine Operator', '1991-11-05 08:13:31', '1996-08-12 12:56:09'),
(19, 'Construction Laborer', '2019-01-11 05:01:40', '2019-11-30 18:35:16'),
(20, 'Dental Assistant', '2015-09-02 16:07:51', '2018-12-12 00:50:08'),
(21, 'Coroner', '1981-03-01 22:38:53', '1985-04-09 19:38:52'),
(22, 'Healthcare', '1974-06-27 20:32:18', '2005-12-19 13:04:30'),
(23, 'Bartender Helper', '2005-06-21 04:39:33', '2019-02-06 09:32:25'),
(24, 'Life Science Technician', '1988-07-08 21:59:40', '1991-06-05 11:46:29'),
(25, 'Interviewer', '1975-02-02 08:46:24', '2006-11-26 20:15:45');

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

--
-- Contenu de la table `practice`
--

INSERT INTO `practice` (`id`, `team_id`, `address_practice`, `date_time_practice`, `presence_practice`, `stadium_practice`, `created_at`, `updated_at`) VALUES
(1, 19, '94869 Eldora Isle', '2010-07-16 15:32:16', 82, 'Runte Ltd', '2004-06-15 19:47:58', '2011-02-06 15:13:49'),
(2, 20, '207 Watsica Passage Apt. 886', '1980-05-16 05:20:04', 80, 'Bruen and Sons', '2002-04-24 19:04:18', '2005-07-09 11:41:05'),
(3, 21, '36115 Oda Ridges Apt. 531', '1985-06-11 05:06:51', 100, 'Will, Walsh and Funk', '2010-04-18 00:17:15', '2014-04-07 14:09:48'),
(4, 22, '930 Jayda Drive', '1981-05-25 11:18:47', 74, 'Abshire, Langosh and Quigley', '1992-05-01 20:40:42', '1995-02-23 09:40:25'),
(5, 23, '76367 Parisian Glens Apt. 135', '1971-06-06 15:06:17', 63, 'Rolfson LLC', '1979-02-22 21:08:29', '2018-09-16 16:34:02'),
(6, 24, '9523 Walter Pass Suite 079', '2015-02-11 19:47:01', 58, 'Christiansen PLC', '2006-07-20 23:18:59', '2014-07-16 05:34:43'),
(7, 25, '695 Turcotte Vista', '1984-10-20 12:48:06', 65, 'Feest-Price', '2000-10-04 10:06:29', '2015-01-30 19:44:36'),
(8, 26, '85987 Boyer Meadow', '2000-03-12 03:11:31', 1, 'Heathcote, Bashirian and Koepp', '2011-08-20 18:49:25', '2016-10-12 12:14:00'),
(9, 27, '78416 Fernando Ville', '1970-07-28 20:37:50', 8, 'Orn PLC', '2003-10-05 12:16:25', '2004-03-31 01:33:45'),
(10, 28, '28118 Walker Rapids', '1987-02-21 01:23:34', 44, 'Kohler-Bradtke', '1987-04-15 21:49:06', '2004-08-10 00:28:14'),
(11, 29, '13610 Rempel Garden', '2000-06-03 18:35:51', 62, 'Little-Hand', '1973-07-07 01:59:43', '1981-12-23 12:09:39'),
(12, 30, '6080 Libby Street', '1985-03-20 06:26:06', 14, 'Greenfelder-Heaney', '1982-11-19 03:13:35', '1990-10-30 15:39:03'),
(13, 31, '264 Metz Manor Suite 291', '1971-08-02 13:36:23', 28, 'Pfannerstill, Abernathy and Eichmann', '2003-10-08 19:08:17', '2013-01-11 01:57:30'),
(14, 32, '14276 Hills Center', '2011-01-29 10:24:07', 41, 'Considine, Sipes and Cole', '2007-07-05 23:55:01', '2012-06-16 03:45:11'),
(15, 33, '6837 Adams Manors', '2000-03-07 01:24:46', 12, 'Armstrong LLC', '1985-06-20 05:54:29', '1990-11-26 10:40:21'),
(16, 34, '253 Shemar Village', '1972-02-13 10:48:54', 99, 'Feeney, Rice and Bode', '1975-04-23 23:33:36', '1986-08-19 09:08:38'),
(17, 35, '47138 Leuschke Harbors', '2000-05-21 21:49:30', 62, 'Hettinger and Sons', '1984-01-09 01:03:16', '2010-08-04 18:14:45'),
(18, 36, '3821 Klein Alley', '2016-12-12 17:42:52', 42, 'Yost Inc', '1993-03-11 02:32:02', '2002-08-18 19:31:16'),
(19, 37, '5782 Lulu Brook', '2012-08-31 06:44:25', 28, 'Cummerata-Upton', '1999-08-25 22:23:51', '2010-07-24 09:17:19'),
(20, 38, '638 Dakota Run', '2017-08-21 12:35:13', 1, 'Collier, Hansen and Kertzmann', '2002-02-14 04:55:10', '2012-09-06 08:23:59'),
(21, 39, '181 O\'Kon Glen Suite 439', '1973-05-04 22:16:39', 74, 'Raynor PLC', '2015-07-09 23:28:09', '2017-07-20 08:10:21'),
(22, 40, '94573 Bradtke Pass Suite 619', '1971-12-27 15:58:32', 3, 'Lemke, Baumbach and Ondricka', '1988-06-20 13:35:17', '2013-05-23 23:42:30'),
(23, 41, '5033 Kuhic Village Apt. 140', '1993-09-21 13:25:44', 29, 'Schiller, Mitchell and Pfannerstill', '2005-08-11 18:56:52', '2010-09-22 08:02:14'),
(24, 42, '442 Manuel Glen Apt. 819', '1999-07-11 13:40:05', 43, 'Ernser PLC', '1977-03-29 10:36:36', '1979-08-29 06:09:52'),
(25, 43, '253 McLaughlin Lock Apt. 078', '2011-07-28 12:35:10', 19, 'Emmerich-Streich', '1989-07-20 03:33:26', '1997-05-22 23:51:01'),
(26, 44, 'Rue du Parc des Princes', '2020-02-07 12:00:00', NULL, 'Parc des Princes', '2020-02-04 11:54:17', NULL),
(27, 64, 'Clairefontaine-en-Yvelines', '2020-02-09 16:00:00', NULL, 'Domaine de Montjoye', '2020-02-04 16:13:26', NULL);

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

--
-- Contenu de la table `tactique`
--

INSERT INTO `tactique` (`id`, `compo_id`, `schema_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'Nayeli Friesen', '2017-03-09 07:40:15', '2017-10-20 08:22:30'),
(2, 2, 'Audrey Langworth', '1976-06-15 22:30:06', '2012-04-20 12:04:05'),
(3, 3, 'Dr. Orval Skiles Jr.', '1972-06-10 04:14:13', '1998-08-21 03:06:56'),
(4, 4, 'Raina Lynch', '1990-09-05 11:29:37', '2014-12-15 20:24:50'),
(5, 5, 'Jamar Pollich', '2008-08-15 22:03:50', '2008-08-16 15:30:08'),
(6, 6, 'Lauretta Lowe', '2016-09-25 18:11:06', '2017-01-10 05:06:42'),
(7, 7, 'Miss Gabriella Medhurst', '1980-11-29 09:42:33', '1983-11-24 17:22:25'),
(8, 8, 'Dr. Toby O\'Keefe DVM', '1973-11-21 05:39:49', '2010-02-08 06:55:46'),
(9, 9, 'Prof. Esmeralda Hermiston MD', '1992-11-30 18:22:46', '1996-08-16 16:12:17'),
(10, 10, 'Vidal Larson', '1997-12-25 16:24:20', '2015-01-07 15:02:22'),
(11, 11, 'Gerald Reilly', '1991-06-23 01:05:33', '1993-05-05 21:40:25'),
(12, 12, 'Zoey Hammes', '1974-01-23 20:44:59', '1991-10-27 10:29:59'),
(13, 13, 'Cecile Jenkins', '2015-02-19 19:48:26', '2017-06-19 05:56:30'),
(14, 14, 'Quinten Abbott', '1997-09-04 21:22:29', '2017-02-13 08:33:27'),
(15, 15, 'Jacques Herzog', '1995-01-21 23:57:37', '2003-05-12 02:37:47'),
(16, 16, 'Prof. Diamond Kris PhD', '1999-04-14 05:39:38', '2001-01-03 18:54:03'),
(17, 17, 'Dr. Rosendo Sanford IV', '1979-06-24 04:36:29', '2017-07-07 21:11:46'),
(18, 18, 'Olga Lowe', '1987-06-22 03:53:48', '2007-07-30 14:27:58'),
(19, 19, 'Jarrod Gerlach III', '1996-04-04 01:04:43', '2018-10-01 13:01:31'),
(20, 20, 'Zoila Ziemann', '1974-03-12 08:53:07', '1981-09-10 20:16:15'),
(21, 21, 'Julianne Dicki', '2007-03-09 06:17:55', '2007-08-03 16:43:34'),
(22, 22, 'Mr. Wyman Goodwin I', '1994-09-27 05:08:07', '2017-05-24 16:13:21'),
(23, 23, 'Dr. Kasey Ruecker', '2010-11-24 09:42:56', '2012-06-14 19:49:48'),
(24, 24, 'Jamey Lang I', '1994-08-03 01:43:35', '1997-11-15 01:52:48'),
(25, 25, 'Prof. Meaghan Mohr DVM', '1991-03-01 23:05:21', '2017-09-06 00:18:01');

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
  `game_team` smallint(6) DEFAULT NULL,
  `presence_team` smallint(6) DEFAULT NULL,
  `red_card_team` smallint(6) DEFAULT NULL,
  `stadium_team` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `team_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `practice_team` smallint(6) DEFAULT NULL,
  `victory_team` smallint(6) DEFAULT NULL,
  `yellow_card_team` smallint(6) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `manager_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `team`
--

INSERT INTO `team` (`id`, `address_team`, `assist_team`, `championship_team`, `city_team`, `defeat_team`, `draw_team`, `goal_team`, `logo_team`, `game_team`, `presence_team`, `red_card_team`, `stadium_team`, `team_name`, `practice_team`, `victory_team`, `yellow_card_team`, `created_at`, `updated_at`, `manager_id`) VALUES
(19, '25604 Bogan Cliff Apt. 397', NULL, NULL, 'Port Antone', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Mateo Knoll', 'Bernard Dietrich V', NULL, NULL, NULL, '1997-03-29 10:41:21', '2020-02-01 15:35:40', 2),
(20, '877 Schaden Trafficway Apt. 393', NULL, NULL, 'Port Haleighberg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rippin Road', 'Taurean Pollich', NULL, NULL, NULL, '1994-01-10 22:53:10', '2018-01-08 02:09:36', 3),
(21, '17794 Hilda Fords', NULL, NULL, 'South Cade', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sipes Path', 'Olaf Johnston', NULL, NULL, NULL, '1994-10-18 04:19:38', '1996-07-09 09:58:50', 4),
(22, '886 Howell Rapid Suite 996', NULL, NULL, 'West Marysebury', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Goyette Bypass', 'Prof. Julius Rempel DVM', NULL, NULL, NULL, '2014-02-05 10:30:08', '2017-05-13 06:43:05', 5),
(23, '580 Trisha Port', NULL, NULL, 'Port Neva', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Denesik Extension', 'Miss Litzy White', NULL, NULL, NULL, '2017-08-10 10:42:48', '2020-01-11 13:25:24', 6),
(24, '83959 Dandre Dam', NULL, NULL, 'New Earnestineland', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Florian Park', 'Blanca Jaskolski DDS', NULL, NULL, NULL, '1973-10-14 13:23:54', '1991-08-26 01:38:59', 7),
(25, '71857 Josue Motorway', NULL, NULL, 'West Brownshire', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Hilpert Inlet', 'Mrs. Helena Gulgowski IV', NULL, NULL, NULL, '1997-01-27 17:17:57', '2004-06-19 02:56:52', 8),
(26, '32050 Felicita Keys', NULL, NULL, 'Tyrabury', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ena Cliff', 'Aaliyah Bradtke', NULL, NULL, NULL, '2000-08-22 03:11:33', '2011-03-20 18:23:35', 9),
(27, '22427 Hermann Forks', NULL, NULL, 'Schneiderhaven', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Walsh Lights', 'Ben Yast', NULL, NULL, NULL, '1987-09-27 06:48:29', '2020-02-04 11:02:41', 10),
(28, '767 Konopelski Oval Suite 382', NULL, NULL, 'West Gwenview', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Destiney Wall', 'Elena Steuber', NULL, NULL, NULL, '1997-01-29 18:53:46', '2009-03-21 03:48:11', 11),
(29, '59417 Oberbrunner Mission Suite 550', NULL, NULL, 'North Kristin', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Stark Plains', 'Anya DuBuque', NULL, NULL, NULL, '1996-11-26 16:27:27', '2005-04-03 18:30:52', 12),
(30, '16146 Melissa Fords', NULL, NULL, 'Litteltown', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Hermann Track', 'Prof. Bridget Davis MD', NULL, NULL, NULL, '1975-09-03 11:19:41', '2018-06-08 04:36:52', 13),
(31, '9868 Lorenzo Parks', NULL, NULL, 'Wizaborough', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Littel Point', 'Ila Goodwin', NULL, NULL, NULL, '2014-04-02 11:00:44', '2014-05-05 15:21:04', 14),
(32, '7577 Michele Curve', NULL, NULL, 'Seanhaven', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Roob Terrace', 'Domenico Stehr', NULL, NULL, NULL, '2006-07-19 16:21:49', '2007-02-02 15:02:06', 15),
(33, '41122 Tromp Dam Apt. 431', NULL, NULL, 'Vinceport', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Haag Station', 'Laura Leuschke DVM', NULL, NULL, NULL, '1988-07-04 12:24:26', '1996-01-15 04:25:36', 16),
(34, '4255 Fahey Harbors Suite 380', NULL, NULL, 'East Vernice', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Emmett Square', 'Dr. Theodora Price', NULL, NULL, NULL, '1979-06-22 07:49:32', '2010-11-17 02:33:59', 17),
(35, '3853 June Island Apt. 633', NULL, NULL, 'Eduardochester', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Abel Grove', 'Mr. Greyson Bins II', NULL, NULL, NULL, '2012-03-28 20:52:07', '2013-09-27 00:12:07', 18),
(36, '6470 Estelle Avenue Suite 975', NULL, NULL, 'Port Evemouth', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Trevor Lights', 'Vito Casper', NULL, NULL, NULL, '2015-05-28 03:04:28', '2017-11-07 18:32:11', 19),
(37, '33416 Gulgowski Highway', NULL, NULL, 'East Elisa', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Howe Mountains', 'Xander Little', NULL, NULL, NULL, '1999-09-05 22:35:49', '2015-03-16 06:18:55', 20),
(38, '7499 Art Forest Suite 159', NULL, NULL, 'Harberchester', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Orie Creek', 'Adrienne Trantow', NULL, NULL, NULL, '1994-06-21 07:06:28', '1996-08-17 02:09:20', 21),
(39, '7489 Myah Groves Suite 421', NULL, NULL, 'Verlashire', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Stokes Villages', 'Mrs. Elinor White', NULL, NULL, NULL, '2005-10-11 14:40:39', '2018-09-02 17:38:15', 22),
(40, '1180 Else Lights Apt. 059', NULL, NULL, 'Adonisview', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Mariela Fork', 'Ara Bernier I', NULL, NULL, NULL, '1986-08-03 18:58:40', '1997-01-15 22:37:47', 23),
(41, '97537 Candida Rapid Suite 771', NULL, NULL, 'Mariontown', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Corrine Path', 'Ms. Breana Stamm IV', NULL, NULL, NULL, '2010-03-03 17:33:52', '2017-06-04 03:01:06', 24),
(42, '8369 Gaylord Crossroad Suite 877', NULL, NULL, 'Ahmadside', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'O\'Kon Lodge', 'Prof. Branson Bergstrom Sr.', NULL, NULL, NULL, '1972-09-21 08:42:56', '1986-01-03 00:51:06', 25),
(43, '6893 Jaleel Forks Apt. 128', NULL, NULL, 'Batzfort', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Hartmann Fort', 'Dr. Marvin Zboncak', NULL, NULL, NULL, '1985-07-03 16:27:47', '1986-12-19 02:36:56', 26),
(44, 'Sir Matt Busby Way, Stretford', NULL, NULL, 'Manchester', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Old Trafford', 'Manchester U', NULL, NULL, NULL, '2020-01-31 08:57:11', '2020-02-03 13:48:42', 27),
(45, 'test', NULL, NULL, 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'test', 'testcoucouuuuu', NULL, NULL, NULL, '2020-01-31 09:00:13', '2020-02-01 11:44:00', 27),
(46, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-01-31 09:20:41', '2020-01-31 09:20:41', 28),
(47, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-01-31 09:20:58', '2020-01-31 09:20:58', 28),
(48, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-01-31 09:21:20', '2020-01-31 09:21:20', 28),
(49, '36 boulevard de Bellechasseiyi', NULL, NULL, 'Villemombleuiyi', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Starkyuiy', 'Rob Starkyui', NULL, NULL, NULL, '2020-01-31 09:21:33', '2020-01-31 09:21:33', 28),
(50, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-01-31 09:22:31', '2020-01-31 09:22:31', 28),
(51, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-01-31 09:23:11', '2020-01-31 09:23:11', 28),
(52, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-01-31 09:44:18', '2020-01-31 09:44:18', 29),
(53, 'Senfou', NULL, NULL, 'Totalement', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'LesPigeons', 'Dijon', NULL, NULL, NULL, '2020-01-31 18:08:05', '2020-02-01 15:36:27', 27),
(54, 'Lacrimée', NULL, NULL, 'Delacrème', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Lacropole', 'Lacrapule', NULL, NULL, NULL, '2020-01-31 18:10:40', '2020-01-31 18:10:40', 27),
(55, 'Impasse des pigeons', NULL, NULL, 'Shlag City', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Petit Prince', 'Fc Choucroute Passion', NULL, NULL, NULL, '2020-01-31 18:19:15', '2020-01-31 18:20:06', 27),
(56, 'Partout en France', NULL, NULL, 'Idem', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'PE', 'Team RSA', NULL, NULL, NULL, '2020-01-31 18:19:52', '2020-01-31 18:19:52', 27),
(57, 'etetst', NULL, NULL, 'testts', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'test', 'test', NULL, NULL, NULL, '2020-01-31 18:21:56', '2020-01-31 18:21:56', 27),
(58, 'T\'es ouuuf', NULL, NULL, 'toiiii', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Au maaax', 'Coolax', NULL, NULL, NULL, '2020-01-31 18:30:24', '2020-01-31 18:30:24', 27),
(59, 'hjkh', NULL, NULL, 'hjkhhjk', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hjkh', 'hjkh', NULL, NULL, NULL, '2020-01-31 18:33:52', '2020-01-31 18:33:52', 27),
(60, 'He', NULL, NULL, 'ho', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ce tu m\'entends', 'Est', NULL, NULL, NULL, '2020-01-31 18:39:50', '2020-01-31 18:39:50', 27),
(61, 'broooo', NULL, NULL, 'bah je sais plus', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'mercii', 'Ok', NULL, NULL, NULL, '2020-01-31 18:41:10', '2020-01-31 18:41:10', 27),
(62, 'verdict', NULL, NULL, 'finaaaaaaloooooo', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'man', 'Yeaaah', NULL, NULL, NULL, '2020-01-31 18:41:45', '2020-01-31 18:43:07', 27),
(63, '36 boulevard de Bellechasse', NULL, NULL, 'Villemomble', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rob Stark', 'Rob Stark', NULL, NULL, NULL, '2020-02-03 13:48:31', '2020-02-03 13:48:31', 27),
(64, 'SDF - 93200', NULL, NULL, 'Saint Denis', NULL, NULL, NULL, '/img/pres/edf.png', NULL, NULL, NULL, 'Stade de France', 'Équipe de France', NULL, NULL, NULL, '2020-02-04 13:17:40', '2020-02-04 13:17:40', 33),
(65, 'Pas besoin, personne se déplace', NULL, NULL, 'Monaco', NULL, NULL, NULL, '/img/pres/monaco.png', NULL, NULL, NULL, 'Stade Louis II', 'AS Monaco', NULL, NULL, NULL, '2020-02-04 13:31:54', '2020-02-04 13:46:17', 33);

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
(2, 'marian00@oberbrunner.com', '["ROLE_USER"]', 'j0(j[+0w+i', NULL, 'Josiah', 'Murazik', NULL, '1970-03-16 13:34:20', '2005-05-31 05:24:45'),
(3, 'celia.brakus@ruecker.info', '["ROLE_USER"]', 'RkuuRPh9', NULL, 'Leatha', 'Heathcote', NULL, '1976-03-03 06:15:31', '2006-01-02 11:57:37'),
(4, 'jones.keon@hotmail.com', '["ROLE_USER"]', 'LG3pkS8v?', NULL, 'Jarret', 'Kovacek', NULL, '2018-07-16 17:03:08', '2019-09-08 22:40:54'),
(5, 'kiley.batz@wyman.biz', '["ROLE_USER"]', 't<=P^W', NULL, 'Dakota', 'Leffler', NULL, '1993-02-14 04:08:54', '2009-02-26 01:15:29'),
(6, 'ullrich.izaiah@keebler.com', '["ROLE_USER"]', ',OzYa~%G5V8lr>ht', NULL, 'Celestine', 'Kassulke', NULL, '1979-01-18 00:51:08', '2002-10-04 21:38:50'),
(7, 'shaniya35@stokes.net', '["ROLE_USER"]', ':R`(cmrtD[d6$)', NULL, 'Bailey', 'Champlin', NULL, '1997-07-01 12:02:31', '2019-06-09 09:09:38'),
(8, 'bonita56@gmail.com', '["ROLE_USER"]', 'Ib.auTII,;}^JVYx:', NULL, 'Liliane', 'Stamm', NULL, '1983-09-14 01:38:27', '2000-10-16 07:20:21'),
(9, 'karolann83@mcclure.biz', '["ROLE_USER"]', '=n12bUR0H)(U', NULL, 'Fiona', 'Greenholt', NULL, '1972-04-18 00:42:28', '1972-07-23 09:21:05'),
(10, 'onikolaus@yahoo.com', '["ROLE_USER"]', '`xe9R6f)0&>"Ii9Eh', NULL, 'Tessie', 'Mueller', NULL, '1972-06-04 17:59:17', '1991-05-17 15:48:17'),
(11, 'lhoeger@keebler.com', '["ROLE_USER"]', 'l:W}A5k{,x', NULL, 'Harry', 'Hand', NULL, '1975-01-29 22:47:38', '1984-09-06 11:23:17'),
(12, 'schiller.ernesto@turner.com', '["ROLE_USER"]', '#\\S5{NLg{>ysSDS>if!U', NULL, 'Juana', 'Funk', NULL, '1998-05-28 07:03:51', '2015-11-18 11:22:28'),
(13, 'sarai25@hotmail.com', '["ROLE_USER"]', '`k{Y,o8nFw', NULL, 'Emilio', 'Jenkins', NULL, '1973-06-22 06:23:50', '1984-04-24 04:14:04'),
(14, 'elvie89@hickle.com', '["ROLE_USER"]', '"Z8|=h', NULL, 'Karli', 'Orn', NULL, '2011-01-21 07:36:33', '2015-04-15 05:08:09'),
(15, 'stevie22@cartwright.org', '["ROLE_USER"]', 'M~%z#v}`ruwaU#9<p', NULL, 'Marlee', 'Ratke', NULL, '2008-09-30 02:37:28', '2019-07-31 08:11:26'),
(16, 'upaucek@hotmail.com', '["ROLE_USER"]', '`HZ/"s', NULL, 'Lottie', 'Buckridge', NULL, '1981-06-17 08:46:35', '1982-09-26 14:42:08'),
(17, 'maurine24@lockman.info', '["ROLE_USER"]', '\\"_;+N##Q`kj:o', NULL, 'Lisandro', 'O\'Conner', NULL, '1996-04-11 08:51:01', '2005-10-01 04:23:09'),
(18, 'jtillman@yahoo.com', '["ROLE_USER"]', '#{4bCQ{|2>-<', NULL, 'Antonette', 'Hettinger', NULL, '2004-05-11 11:34:08', '2017-05-13 10:17:11'),
(19, 'caitlyn78@yahoo.com', '["ROLE_USER"]', '9#(Ete^\'t&&_wH', NULL, 'Elbert', 'Hoeger', NULL, '1987-05-06 01:34:05', '1988-01-02 18:01:54'),
(20, 'gkunde@gmail.com', '["ROLE_USER"]', '9|)=b7|{{.\\)b2', NULL, 'Flavio', 'Balistreri', NULL, '1990-08-08 12:07:14', '2019-05-03 22:11:55'),
(21, 'thad.schamberger@klein.com', '["ROLE_USER"]', 'pbzV\\!jk', NULL, 'Mayra', 'Stanton', NULL, '2019-10-31 01:34:23', '2019-12-02 03:52:56'),
(22, 'mraz.isabell@gmail.com', '["ROLE_USER"]', '1;0h1.I4"dS', NULL, 'Paris', 'Kling', NULL, '1970-06-22 04:45:23', '1980-09-02 23:26:15'),
(23, 'fmuller@yahoo.com', '["ROLE_USER"]', 'r;P3_nW}i', NULL, 'Casper', 'Lemke', NULL, '1992-06-16 02:38:28', '2004-03-29 19:29:11'),
(24, 'shana01@gmail.com', '["ROLE_USER"]', 'xaP!B!.$7ttKdl\'J', NULL, 'Silas', 'Marquardt', NULL, '1970-02-21 14:07:30', '1996-10-30 07:24:10'),
(25, 'chance38@yahoo.com', '["ROLE_USER"]', 'OFjtnNwx', NULL, 'Sherman', 'Champlin', NULL, '1994-07-30 16:18:36', '1997-09-26 07:26:54'),
(26, 'jamison30@welch.com', '["ROLE_USER"]', 'wqqz?u3]w`7go', NULL, 'Daisha', 'Gutmann', NULL, '1975-11-13 02:47:46', '2017-06-12 20:31:24'),
(27, 'alex@united.fr', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$0UDjjQIbA887G3O+RH+x3A$j5LmzbFVb0VLdhojEDyjYbPKhq5Fj7btZq74rhakS+w', NULL, 'Ferguson', 'Alexander', NULL, '2020-01-31 08:55:39', '2020-02-03 14:54:17'),
(28, 'testos@test.com', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$wbn4rOwl61jrRFp4pByf6Q$qJWbTOm+4DV7aGrLGRJlKxIjFu6sW/6AhFkW1H1gPls', NULL, 'testooos', 'testooos', NULL, '2020-01-31 09:20:21', NULL),
(29, 'hey@hey.fr', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$3KDcmnGMkLbpCEN2b85wsg$83aztfGRrcPTxmiSbOWQ2q9aAPNyvJXG4JkIyxRZCvE', NULL, 'hey', 'hey', NULL, '2020-01-31 09:33:33', NULL),
(30, 'pedrocascao@test.io', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$PAkz/y2W37Tn4S4g0dTg6g$52Msffaq3WPY3MUvUKutCmqyuI57qUtE3XtiPpe+fwU', NULL, 'pedro', 'cascao', NULL, '2020-02-01 12:47:52', NULL),
(31, 'simple@utilisateur.fr', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$9f4Brt2jmIcyWytS4fVmvw$0D6UdL4ZT1RdgTYvoZ/VN6pBwO8HUcY0zti8uU48oxA', NULL, 'utilisateur', 'simple', NULL, '2020-02-02 17:18:49', NULL),
(32, 'hey@hoooo.fr', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$qdQrQNUw5/xgBF0sn/WyUw$MbttO7NbicDSfWOCQ6eeRa+bkaZIqikFhoty/UtmDeY', NULL, 'Rob', 'Stark', NULL, '2020-02-04 11:25:06', NULL),
(33, 'dede@deschamps.fr', '["ROLE_USER"]', '$argon2id$v=19$m=65536,t=4,p=1$u428Ql+38oi3JBed7ShuBw$Shgb5tfTO1QsstHEqJbXXK/Mq+S68fWA7QHnTviPm+I', NULL, 'Didier', 'Deschamps', '/img/pres/deschamps.jpg', '2020-02-04 13:15:48', NULL),
(38, 'hugo@lloris.fr', '["ROLE_USER"]', '123456', NULL, 'Hugo', 'Lloris', '/img/pres/edf/lloris.jpg', '2020-02-03 10:00:00', NULL),
(39, 'raphael@varane.fr', '["ROLE_USER"]', '123456', NULL, 'Raphael', 'Varane', '/img/pres/edf/varane.jpg', '2020-02-03 12:00:00', NULL),
(40, 'paul@pogba.fr', '["ROLE_USER"]', '123456', NULL, 'Paul', 'Pogba', '/img/pres/edf/pogba.jpg', '2020-02-03 10:00:00', NULL),
(41, 'antoine@griezmann.fr', '["ROLE_USER"]', '123456', NULL, 'Antoine', 'Griezmann', '/img/pres/edf/griezmann.jpg', '2020-02-04 07:00:00', NULL),
(42, 'kylian@mbappe.fr', '["ROLE_USER"]', '123456', NULL, 'Kylian', 'M\'Bappé', '/img/pres/edf/mbappe.jpg', '2020-02-03 05:00:00', NULL),
(43, 'thierry@henry.fr', '["ROLE_USER"]', '123456', NULL, 'Thierry', 'Henry', '/img/pres/monaco/henry.jpg', '2020-02-03 09:00:00', NULL),
(44, 'ludovic@giuly.fr', '["ROLE_USER"]', '123456', NULL, 'Ludovic', 'Giuly', '/img/pres/monaco/giuly.jpg', '2020-02-03 06:00:00', NULL),
(45, 'fabien@barthez.fr', '["ROLE_USER"]', '123456', NULL, 'Fabien', 'Barthez', '/img/pres/monaco/barthez.jpg', '2020-02-03 05:00:00', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_team`
--

CREATE TABLE `user_team` (
  `user_id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `user_team`
--

INSERT INTO `user_team` (`user_id`, `team_id`) VALUES
(2, 19),
(2, 55),
(2, 57),
(4, 56),
(5, 55),
(6, 55),
(7, 55),
(8, 58),
(9, 55),
(9, 60),
(11, 55),
(11, 59),
(14, 61),
(15, 62),
(19, 53),
(23, 54),
(27, 27),
(27, 44),
(27, 63),
(28, 46),
(28, 47),
(28, 48),
(28, 49),
(28, 50),
(28, 51),
(29, 52),
(31, 44),
(33, 64),
(33, 65);

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
  ADD KEY `IDX_C9C84099714DA62A` (`game_game_id`);

--
-- Index pour la table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_232B318C296CD8AE` (`team_id`);

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
-- Index pour la table `player_game`
--
ALTER TABLE `player_game`
  ADD PRIMARY KEY (`player_id`,`game_id`),
  ADD KEY `IDX_813161BF99E6F5DF` (`player_id`),
  ADD KEY `IDX_813161BFE48FD905` (`game_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C4E0A61F783E3463` (`manager_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT pour la table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT pour la table `player`
--
ALTER TABLE `player`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT pour la table `position`
--
ALTER TABLE `position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT pour la table `practice`
--
ALTER TABLE `practice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT pour la table `tactique`
--
ALTER TABLE `tactique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT pour la table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `compo`
--
ALTER TABLE `compo`
  ADD CONSTRAINT `FK_C9C840999329866A` FOREIGN KEY (`game_game_id`) REFERENCES `game` (`id`);

--
-- Contraintes pour la table `game`
--
ALTER TABLE `game`
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
-- Contraintes pour la table `player_game`
--
ALTER TABLE `player_game`
  ADD CONSTRAINT `FK_813161BF99E6F5DF` FOREIGN KEY (`player_id`) REFERENCES `player` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_813161BFE48FD905` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`) ON DELETE CASCADE;

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
-- Contraintes pour la table `team`
--
ALTER TABLE `team`
  ADD CONSTRAINT `FK_C4E0A61F783E3463` FOREIGN KEY (`manager_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user_team`
--
ALTER TABLE `user_team`
  ADD CONSTRAINT `FK_BE61EAD6296CD8AE` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_BE61EAD6A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
