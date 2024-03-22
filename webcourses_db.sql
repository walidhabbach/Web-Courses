-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 22 mars 2024 à 17:11
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `webcourses_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `courses`
--

CREATE TABLE `courses` (
  `IDCOURSE` int(11) NOT NULL,
  `IMG` longblob DEFAULT NULL,
  `TITLE` varchar(50) NOT NULL,
  `PRICE` float(8,2) NOT NULL,
  `IMG_URL` varchar(255) DEFAULT NULL,
  `CATEGORY` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `courses`
--

INSERT INTO `courses` (`IDCOURSE`, `IMG`, `TITLE`, `PRICE`, `IMG_URL`, `CATEGORY`) VALUES
(153, 0x4172726179, 'what is javascript?', 9.90, '/images/javascriptDef.png', 'JS'),
(154, 0x4172726179, 'basics of HTML', 5.90, '/images/htmlBasics.PNG', 'HTML'),
(155, 0x4172726179, 'HTML elements and tags', 9.90, '/images/htmlElements.png', 'HTML'),
(156, 0x4172726179, 'CSS selectors', 69.90, '/images/cssSelectors.jpg', 'CSS'),
(157, 0x4172726179, 'variables and data type of javascript', 19.90, '/images/javascriptVariables.png', 'JS'),
(158, 0x4172726179, 'Javascript operators and conditions', 29.90, '/images/javascriptOperators.png', 'JS'),
(159, 0x4172726179, 'HTML attributes and values', 19.90, '/images/htmlAttrVal.jpg', 'HTML'),
(160, 0x4172726179, 'CSS properties', 29.90, '/images/cssProperties.png', 'CSS'),
(161, 0x4172726179, 'Javascript objects and arrays', 39.90, '/images/javascriptObjects.png', 'JS'),
(162, 0x4172726179, 'mesures and unites of CSS', 19.90, '/images/cssMesures.png', 'CSS'),
(163, 0x4172726179, 'CSS animations', 19.90, '/images/cssAnimation.png', 'CSS'),
(164, 0x4172726179, 'The basics of javascript', 29.90, '/images/javascriptFunctions.png', 'JS'),
(165, 0x4172726179, 'javascript events', 59.90, '/images/javascriptEvents.png', 'JS'),
(166, 0x4172726179, 'css colors', 29.90, '/images/cssColors.png', 'css'),
(167, 0x4172726179, 'getting started with php', 15.90, '/images/phpBasics.png', 'php'),
(168, 0x4172726179, 'functions and loops with javascript', 19.90, '/images/javascriptFunctions2.png', 'JS'),
(169, 0x4172726179, 'connecting to database using PHP', 29.90, '/images/phpDataBase.png', 'PHP'),
(170, 0x4172726179, 'manipulating crud using php', 45.90, '/images/phpCRUD.png', 'php'),
(171, 0x4172726179, 'DOM the power of javascript', 23.90, '/images/javascriptDOM.png', 'JS');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `IDUSER` int(11) NOT NULL,
  `ID_LIBRARY2` int(11) DEFAULT NULL,
  `USERNAME` varchar(25) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `USER_PASSWORD` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`IDUSER`, `ID_LIBRARY2`, `USERNAME`, `EMAIL`, `USER_PASSWORD`) VALUES
(40, NULL, 'walid@qs.vom5', 'habbid@emsi-edu.ma', 'walid@qs.vom5'),
(41, NULL, 'walid@qs.vom5', 'h5alid@emsi-edu.ma', 'walid@qs.vom5'),
(42, NULL, 'walid@qs.vom5', 'wis4@haikido.com', 'walid@qs.vom5'),
(43, NULL, 'walid@qs.vom5', 'wd@haikido.com', 'walid@qs.vom5'),
(44, NULL, 'walid@qs.vom2', 'scscdcc@jsqc.com', 'walid@qs.vom2'),
(45, NULL, 'walid', 'walid@gmail.com', 'Walid@2002'),
(46, NULL, 'walidcscscqS4/', 'test@ail.com', 'walidcscscqS4/@'),
(47, NULL, 'w', 'habbach.oualid@emsi-edu.ma', 'svDvsvsves@50'),
(49, NULL, 'walid', 'habbach_@emsi-edu.ma', 'Walid@2002'),
(50, NULL, 'walid', 'habbacH@emsi-edu.ma', 'h_@emsi-edu.ma1');

-- --------------------------------------------------------

--
-- Structure de la table `wishlist`
--

CREATE TABLE `wishlist` (
  `IDCOURSE` int(11) NOT NULL,
  `IDUSER` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `wishlist`
--

INSERT INTO `wishlist` (`IDCOURSE`, `IDUSER`) VALUES
(157, 40),
(158, 40),
(158, 50),
(162, 50),
(163, 41),
(165, 50),
(171, 40),
(171, 41);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`IDCOURSE`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`IDUSER`);

--
-- Index pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`IDCOURSE`,`IDUSER`),
  ADD KEY `FK_WISHLIST_WISHLIST_USER` (`IDUSER`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `courses`
--
ALTER TABLE `courses`
  MODIFY `IDCOURSE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `IDUSER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_USER_ASSOCIATI_LIBRARY2` FOREIGN KEY (`ID_LIBRARY2`) REFERENCES `library` (`ID_LIBRARY`) ON DELETE CASCADE;

--
-- Contraintes pour la table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `FK_WISHLIST_WISHLIST2_COURSES` FOREIGN KEY (`IDCOURSE`) REFERENCES `courses` (`IDCOURSE`),
  ADD CONSTRAINT `FK_WISHLIST_WISHLIST_USER` FOREIGN KEY (`IDUSER`) REFERENCES `users` (`IDUSER`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
