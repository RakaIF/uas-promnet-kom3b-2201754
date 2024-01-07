-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jan 2024 pada 09.22
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2201754_rakaibnufirdaus_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_keuangan_rakaibnufirdaus`
--

CREATE TABLE `transaksi_keuangan_rakaibnufirdaus` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `description` text DEFAULT NULL,
  `amount` bigint(20) DEFAULT NULL,
  `status` enum('kredit','debit') DEFAULT NULL,
  `receiver` varchar(50) DEFAULT NULL,
  `jk` enum('laki','perempuan') DEFAULT NULL,
  `no_telp` varchar(13) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transaksi_keuangan_rakaibnufirdaus`
--

INSERT INTO `transaksi_keuangan_rakaibnufirdaus` (`id`, `date`, `description`, `amount`, `status`, `receiver`, `jk`, `no_telp`, `address`) VALUES
(2, '2024-01-01', 'Dana prodi pilkom', 4000000, 'kredit', 'Rayi Nur\'iman', 'laki', '08972564561', 'Jl Cimahi No.35'),
(4, '2024-01-05', 'Dana jumat berkah', 5000000, 'kredit', 'Muhammad Zidan Alfian', 'laki', '085860115209', 'Jl Buah Batu'),
(5, '2024-01-02', 'Dana akhir tahun', 100000000, '', 'Khrisna Wahyu Wibisono', 'laki', '0895351977747', 'Jl Buah Batu no.45'),
(6, '2024-01-03', 'Dana keperluan pilkom', 3000000, 'kredit', 'Raka Ibnu Firdaus', 'laki', '087812387654', 'Jl Geger Hilir'),
(7, '2024-01-06', 'Dana Bulanan', 500000, 'debit', 'Nadila Azzahra', 'perempuan', '083843861457', 'Jl Kuningan');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `transaksi_keuangan_rakaibnufirdaus`
--
ALTER TABLE `transaksi_keuangan_rakaibnufirdaus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transaksi_keuangan_rakaibnufirdaus`
--
ALTER TABLE `transaksi_keuangan_rakaibnufirdaus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
