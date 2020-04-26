Create database IF NOT EXISTS devops;
use devops;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `data`
--

-- --------------------------------------------------------

--
-- Structure de la table `data`
--

DROP TABLE IF EXISTS `data`;
CREATE TABLE IF NOT EXISTS `devops`.`data` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `unit_num` int(10) NOT NULL,
  `automaton_num` int(10) NOT NULL,
  `automaton_type` VARCHAR(255) NOT NULL,
  `tank_temp` float NOT NULL,
  `outside_temp` float NOT NULL,
  `milk_weight` float NOT NULL,
  `final_product_weight` float NOT NULL,
  `ph` float NOT NULL,
  `potassium` int(10) NOT NULL,
  `sodium_chlorure_concentration` float NOT NULL,
  `salmonella_lvl` int(10) NOT NULL,
  `e_coli_lvl` int(10) NOT NULL,
  `listeria_lvl` int(10) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
