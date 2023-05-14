-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2023 at 12:44 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_commerce_for_react`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220518055456-create-super-admin.js');

-- --------------------------------------------------------

--
-- Table structure for table `superadmins`
--

CREATE TABLE `superadmins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `superadmins`
--

INSERT INTO `superadmins` (`id`, `name`, `email`, `password`, `mobile`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@gmail.com', '$2a$10$88Jg4uX1fYmD1aXrFjZi0eoVgeYhWd5j.LG6NHQHbXFCLn/U96Tmq', '7065054289', '2023-01-31 13:19:12', '2023-04-28 05:19:19');

-- --------------------------------------------------------

--
-- Table structure for table `user_apis`
--

CREATE TABLE `user_apis` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_apis`
--

INSERT INTO `user_apis` (`id`, `name`, `email`, `age`, `createdAt`, `updatedAt`, `password`, `image`) VALUES
(96, 'om kumar mishra', 'omkrmishra123@gmail.com', '54', '2023-03-28 10:15:54', '2023-03-28 10:15:54', '$2a$10$Z6GuK/dRoN2itBAbrl9W/uECAhKRjeGa7Tz5xtrWPkVN887.6gybO', '/uploaded-files/02.jpg'),
(97, 'sports', 'awarashubham45@gmail.com', '45', '2023-03-28 10:17:28', '2023-03-28 10:17:28', '$2a$10$eb.yIdtp2GXSufjRggcRx.pPWbUpdnSJEuQ6bsqykxQBQ7modZsrC', '/uploaded-files/03.jpg'),
(114, 'dfge54', 'ankit@gmail.com', '54', '2023-04-03 06:00:28', '2023-04-03 06:00:28', '$2a$10$IwmDTZNq8SslcIFT3DvtKeIvS.k5HmAUrPDz47BjQXBbHVXyIxLKm', '/uploaded-files/02.jpg'),
(115, 'regular', 'om@gmail.com', '54', '2023-04-03 06:01:30', '2023-04-03 06:01:30', '$2a$10$3JqO2xTIMloSsbie1A95UOCDdKt26mE6JQF83VbQUMcXYbYJw8MDq', '/uploaded-files/No_image_available.png'),
(116, 'om kumar mishra', 'johan@gmail.com', '32', '2023-04-03 06:02:42', '2023-04-03 06:02:42', '$2a$10$tgIThCIiCHMPmrsQQCu10.CltnVEImqd8tQEP/X/JYsOYXZT.hnBe', '/uploaded-files/Best Cricket Blogs Websites.jpg'),
(117, 'jhfsdrfyew34', 'johan@gmail.com', '23', '2023-04-03 06:15:33', '2023-04-03 06:47:32', '$2a$10$cb7q34ph0ryJ36rXPVV4TecK1HWcnnAhZWOjemvfXmf/cOMpTRbsm', '/uploaded-files/expert-team.png'),
(118, 'ertert', 'ok@gmail.com', '23', '2023-04-03 06:17:15', '2023-04-03 06:17:15', '$2a$10$SUbJhB4kMf3FAlzmmu7e3OUYRUxJpY5VYtj0dHIEkFG8ISRitAqfW', '/uploaded-files/blackshirt.jpg'),
(119, 'sports', 'awarashubham45@gmail.com', '23', '2023-04-03 06:22:02', '2023-04-03 06:46:55', 'hsdhfh674', '/uploaded-files/01.jpg'),
(122, 'admin@gmail.com', 'omkrmishra123@gmail.com', '4', '2023-05-04 12:11:26', '2023-05-05 05:19:40', '$2a$10$PVTb9w2U7v.S1N79hlntX.rBIY54A.d0ovTCo6adVWrhTdZqgJL4C', '/uploaded-files/expert-team.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `superadmins`
--
ALTER TABLE `superadmins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_apis`
--
ALTER TABLE `user_apis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `superadmins`
--
ALTER TABLE `superadmins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_apis`
--
ALTER TABLE `user_apis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
