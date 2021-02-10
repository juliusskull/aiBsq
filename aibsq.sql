-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.5.25a - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando estructura para tabla aibsq.autor
CREATE TABLE IF NOT EXISTS `autor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) NOT NULL DEFAULT '0',
  `fchalta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla aibsq.autor: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `autor` DISABLE KEYS */;
INSERT INTO `autor` (`id`, `nombre`, `fchalta`) VALUES
	(1, '0', '2021-02-10 11:51:56'),
	(2, 'x', '2021-02-10 11:53:36');
/*!40000 ALTER TABLE `autor` ENABLE KEYS */;

-- Volcando estructura para tabla aibsq.comentario
CREATE TABLE IF NOT EXISTS `comentario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `autor_id` int(11) NOT NULL DEFAULT '0',
  `comentario_id` int(11) NOT NULL DEFAULT '0',
  `contenido` varchar(1000) NOT NULL DEFAULT '0',
  `fchalta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla aibsq.comentario: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` (`id`, `autor_id`, `comentario_id`, `contenido`, `fchalta`) VALUES
	(1, 1, 1, 'prueba', '2021-02-10 11:57:36');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;

-- Volcando estructura para tabla aibsq.post
CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `red_id` int(11) NOT NULL DEFAULT '0',
  `autor_id` int(11) NOT NULL DEFAULT '0',
  `titulo` varchar(500) NOT NULL DEFAULT '0',
  `contenido` varchar(1000) DEFAULT '0',
  `fchalta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla aibsq.post: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` (`id`, `red_id`, `autor_id`, `titulo`, `contenido`, `fchalta`) VALUES
	(1, 1, 1, 'prueba 1', 'prueba 1 contenido', '2021-02-10 12:03:52');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;

-- Volcando estructura para tabla aibsq.reaccion
CREATE TABLE IF NOT EXISTS `reaccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `autor_id` int(11) NOT NULL DEFAULT '0',
  `post_id` int(11) NOT NULL DEFAULT '0',
  `comentario_id` int(11) NOT NULL DEFAULT '0',
  `tipo_reaccion` int(11) NOT NULL DEFAULT '0',
  `fchalta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla aibsq.reaccion: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `reaccion` DISABLE KEYS */;
INSERT INTO `reaccion` (`id`, `autor_id`, `post_id`, `comentario_id`, `tipo_reaccion`, `fchalta`) VALUES
	(1, 0, 1, 1, 1, '2021-02-10 12:06:44');
/*!40000 ALTER TABLE `reaccion` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
