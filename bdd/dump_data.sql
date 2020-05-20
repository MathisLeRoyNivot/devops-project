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
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `inserted_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;


-- CREATE USER

-- managing_director
CREATE USER 'managing_director'@'%' IDENTIFIED BY 'managing_director';
GRANT ALL PRIVILEGES ON `devops`.* TO `managing_director`@`%`;

-- docker concentrator
CREATE USER 'docker_concentrator'@'%' IDENTIFIED BY 'docker_concentrator';
GRANT SELECT, INSERT ON `devops`.* TO `docker_concentrator`@`%`;

-- DataVision
CREATE USER 'DataVision'@'%' IDENTIFIED BY 'DataVision';
GRANT SELECT ON `devops`.* TO `DataVision`@`%`;


INSERT INTO devops.`data` (unit_num,automaton_num,automaton_type,tank_temp,outside_temp,milk_weight,final_product_weight,ph,potassium,sodium_chlorure_concentration,salmonella_lvl,e_coli_lvl,listeria_lvl,created_at) VALUES 
(1,1,"0001",3.7,10.7,4046,4029,6.9000001,39,1.29999995,25,37,37,'2020-04-26 14:47:53.0')
,(1,2,'0002',2.79999995,8.80000019,4100,3914,6.9000001,41,1.5,26,46,43,'2020-04-26 14:47:53.0')
,(1,3,'0003',3.79999995,11.39999962,4490,4210,7.0999999,39,1.39999998,19,38,29,'2020-04-26 14:47:53.0')
,(1,4,'0004',3.5999999,10.89999962,4520,4548,7,45,1.10000002,18,38,45,'2020-04-26 14:47:53.0')
,(1,5,'0005',3.5,12.60000038,3843,4483,7.19999981,45,1.20000005,30,41,52,'2020-04-26 14:47:53.0')
,(1,6,'0006',3.9000001,12.89999962,3987,4406,7.0999999,41,1.70000005,21,40,36,'2020-04-26 14:47:53.0')
,(1,7,'0007',3.5,13.69999981,3579,4465,6.9000001,40,1.60000002,27,45,30,'2020-04-26 14:47:53.0')
,(1,8,'0008',3.70000005,9.80000019,4049,4545,6.80000019,44,1.20000005,17,41,47,'2020-04-26 14:47:53.0')
,(1,9,'0009',3.5999999,10.39999962,3716,3514,6.9000001,40,1.60000002,25,43,32,'2020-04-26 14:47:53.0')
,(1,10,'000a',3.70000005,10.89999962,4245,4163,6.9000001,38,1.5,27,47,39,'2020-04-26 14:47:53.0')
;
INSERT INTO devops.`data` (unit_num,automaton_num,automaton_type,tank_temp,outside_temp,milk_weight,final_product_weight,ph,potassium,sodium_chlorure_concentration,salmonella_lvl,e_coli_lvl,listeria_lvl,created_at) VALUES 
(1,1,'0001',2.70000005,8.19999981,4426,3584,6.9000001,43,1.29999995,19,48,31,'2020-04-26 14:49:00.0')
,(1,2,'0002',3.0999999,12.19999981,3660,4200,7,42,1.60000002,24,37,46,'2020-04-26 14:49:00.0')
,(1,3,'0003',3.5999999,12.19999981,3738,3924,6.9000001,43,1.60000002,26,46,29,'2020-04-26 14:49:00.0')
,(1,4,'0004',3,12.30000019,4024,4372,6.80000019,42,1.20000005,26,37,30,'2020-04-26 14:49:00.0')
,(1,5,'0005',3.0999999,9,4367,4364,6.9000001,45,1,22,39,52,'2020-04-26 14:49:00.0')
,(1,6,'0006',2.70000005,11.80000019,4598,4415,7,44,1.39999998,22,36,34,'2020-04-26 14:49:00.0')
,(1,7,'0007',3.5,12.30000019,3934,4040,7.19999981,37,1.5,18,47,49,'2020-04-26 14:49:00.0')
,(1,8,'0008',2.5,12.19999981,3993,4575,7.0999999,38,1.5,25,48,39,'2020-04-26 14:49:00.0')
,(1,9,'0009',3.4000001,10,3864,4520,6.80000019,43,1.5,27,44,38,'2020-04-26 14:49:00.0')
,(1,10,'000a',3,11.30000019,4370,4158,7.19999981,46,1.29999995,29,46,47,'2020-04-26 14:49:00.0')
;
INSERT INTO devops.`data` (unit_num,automaton_num,automaton_type,tank_temp,outside_temp,milk_weight,final_product_weight,ph,potassium,sodium_chlorure_concentration,salmonella_lvl,e_coli_lvl,listeria_lvl,created_at) VALUES 
(2,1,'0001',3,12.39999962,4473,4138,6.80000019,43,1,18,37,51,'2020-04-26 14:51:23.0')
,(2,2,'0002',3.4000001,13.80000019,4128,3948,7,40,1.60000002,27,35,33,'2020-04-26 14:51:23.0')
,(2,3,'0003',3.79999995,14,4546,3898,6.9000001,46,1.29999995,23,47,30,'2020-04-26 14:51:23.0')
,(2,4,'0004',3,11.39999962,4282,3552,7,35,1.20000005,24,48,43,'2020-04-26 14:51:23.0')
,(2,5,'0005',3,12.89999962,4118,3746,6.9000001,42,1.10000002,24,40,34,'2020-04-26 14:51:23.0')
,(2,6,'0006',3.4000001,10.5,3607,4338,6.80000019,43,1.5,26,44,53,'2020-04-26 14:51:23.0')
,(2,7,'0007',3.4000001,11.30000019,3841,4599,6.9000001,35,1.39999998,20,40,45,'2020-04-26 14:51:23.0')
,(2,8,'0008',2.5999999,11.60000038,3699,4547,6.80000019,46,1.20000005,17,42,43,'2020-04-26 14:51:23.0')
,(2,9,'0009',3.5,13.89999962,3876,4019,6.80000019,40,1.39999998,28,41,50,'2020-04-26 14:51:23.0')
,(2,10,'000a',3.5,9.5,3860,4474,6.80000019,37,1.70000005,23,46,31,'2020-04-26 14:51:23.0')
;
INSERT INTO devops.`data` (unit_num,automaton_num,automaton_type,tank_temp,outside_temp,milk_weight,final_product_weight,ph,potassium,sodium_chlorure_concentration,salmonella_lvl,e_coli_lvl,listeria_lvl,created_at) VALUES 
(1,1,'0001',3.70000005,9.80000019,3856,3828,6.9000001,39,1.29999995,25,48,40,'2020-04-26 15:02:13.0')
,(1,2,'0002',2.9000001,8,4210,3810,6.9000001,46,1.70000005,21,37,38,'2020-04-26 15:02:13.0')
,(1,3,'0003',2.70000005,11.39999962,3917,3654,6.80000019,44,1.5,26,39,42,'2020-04-26 15:02:13.0')
,(1,4,'0004',3.20000005,10.19999981,4151,3892,7.0999999,36,1.70000005,17,42,40,'2020-04-26 15:02:13.0')
,(1,5,'0005',2.5999999,8.89999962,4073,4357,6.9000001,38,1.70000005,25,47,52,'2020-04-26 15:02:13.0')
,(1,6,'0006',3.5,9.39999962,4022,3908,7.0999999,42,1.10000002,25,39,48,'2020-04-26 15:02:13.0')
,(1,7,'0007',3.29999995,11.10000038,4412,4088,7,35,1.5,17,44,50,'2020-04-26 15:02:13.0')
,(1,8,'0008',3.5999999,12.10000038,4534,3716,6.9000001,41,1.39999998,22,45,35,'2020-04-26 15:02:13.0')
,(1,9,'0009',3.0999999,11.5,4500,4315,7.0999999,45,1.10000002,28,41,42,'2020-04-26 15:02:13.0')
,(1,10,'000a',3,10.19999981,3925,3660,7,36,1.5,19,45,39,'2020-04-26 15:02:13.0')
;
INSERT INTO devops.`data` (unit_num,automaton_num,automaton_type,tank_temp,outside_temp,milk_weight,final_product_weight,ph,potassium,sodium_chlorure_concentration,salmonella_lvl,e_coli_lvl,listeria_lvl,created_at) VALUES 
(1,1,'0001',3.20000005,13.19999981,3856,3565,7.19999981,37,1.5,17,42,37,'2020-04-26 16:45:48.0')
,(1,2,'0002',3.29999995,12.5,4540,4218,6.9000001,36,1.39999998,24,45,33,'2020-04-26 16:45:48.0')
,(1,3,'0003',3.9000001,11.10000038,4242,3800,7,45,1.60000002,28,46,51,'2020-04-26 16:45:48.0')
,(1,4,'0004',4,12.39999962,3702,4415,6.80000019,38,1,23,41,40,'2020-04-26 16:45:48.0')
,(1,5,'0005',2.9000001,9.5,4164,4574,6.80000019,42,1.10000002,24,43,29,'2020-04-26 16:45:48.0')
,(1,6,'0006',3.5999999,12.60000038,3525,4458,6.9000001,44,1.10000002,26,45,30,'2020-04-26 16:45:48.0')
,(1,7,'0007',3.20000005,12.69999981,4304,4348,7.19999981,36,1.29999995,23,38,31,'2020-04-26 16:45:48.0')
,(1,8,'0008',3.70000005,9.10000038,4125,3852,6.80000019,44,1.60000002,17,35,39,'2020-04-26 16:45:48.0')
,(1,9,'0009',3.5999999,10.5,4264,4237,6.9000001,38,1.39999998,18,48,52,'2020-04-26 16:45:48.0')
,(1,10,'000a',3.0999999,12.10000038,4468,3960,7.19999981,37,1.10000002,30,43,42,'2020-04-26 16:45:48.0')
;
