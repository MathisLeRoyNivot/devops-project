Create database IF NOT EXISTS data;
use data;
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
CREATE TABLE IF NOT EXISTS `data` (
  
  `numero_unite` int(10) NOT NULL,
  `numero_automate` int(10) NOT NULL,
  `type_automate` int(10) NOT NULL,
  `temperature_cuve` float NOT NULL,
  `temperature_exterieur` float NOT NULL,
  `poids_lait_cuve` float NOT NULL,
  `poids_produit_fini` float NOT NULL,
  `mesure_pH` float NOT NULL,
  `mesure_K+` int(10) NOT NULL,
  `concentration_NaCl` float NOT NULL,
  `niveau_bacterien_salmonelle` int(10) NOT NULL,
  `niveau_bacterien_E-coli` int(10) NOT NULL,
  `niveau_bactérien_Listeria` int(10) NOT NULL,
  `date` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;
