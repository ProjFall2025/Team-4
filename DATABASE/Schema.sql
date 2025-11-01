
CREATE DATABASE IF NOT EXISTS MindMate;
USE MindMate;

-- =====================
-- USERS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS Users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin','user','guest') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login DATETIME DEFAULT NULL
) ENGINE=InnoDB;

-- =====================
-- MOOD ENTRIES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS MoodEntries (
  mood_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  mood_date DATE DEFAULT (CURRENT_DATE),
  mood_type ENUM('happy','neutral','sad','anxious','stressed') NOT NULL,
  emoji VARCHAR(10),
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- =====================
-- JOURNAL ENTRIES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS JournalEntries (
  journal_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  mood_id INT NULL,
  entry_date DATE DEFAULT (CURRENT_DATE),
  title VARCHAR(200),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (mood_id) REFERENCES MoodEntries(mood_id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- =====================
-- QUOTES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS Quotes (
  quote_id INT PRIMARY KEY AUTO_INCREMENT,
  quote_text TEXT NOT NULL,
  author VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- =====================
-- BREATHING SESSIONS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS BreathingSessions (
  session_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  session_date DATE DEFAULT (CURRENT_DATE),
  duration INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- =====================
-- INSIGHTS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS Insights (
  insight_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  week_start DATE NOT NULL,
  summary TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
) ENGINE=InnoDB;
