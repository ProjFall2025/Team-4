USE MindMate;
INSERT INTO Users (username, email, password_hash, role) VALUES
('Aarav', 'aarav.patel@gmail.com', 'hashed123', 'user'),
('Diya', 'diya.sharma@gmail.com', 'hashed123', 'user'),
('Rohan', 'rohan.mehta@gmail.com', 'hashed123', 'user'),
('Ananya', 'ananya.verma@gmail.com', 'hashed123', 'user'),
('Karthik', 'karthik.nair@gmail.com', 'hashed123', 'user'),
('Priya', 'priya.reddy@gmail.com', 'hashed123', 'user'),
('Vikram', 'vikram.singh@gmail.com', 'hashed123', 'user'),
('Sneha', 'sneha.bose@gmail.com', 'hashed123', 'user'),
('Arjun', 'arjun.jain@gmail.com', 'hashed123', 'user'),
('Neha', 'neha.kapoor@gmail.com', 'hashed123', 'admin');

INSERT INTO MoodEntries (user_id, mood_type, emoji, note, mood_date) VALUES
(1, 'happy', '😊', 'Enjoyed pani puri with friends', '2025-10-25'),
(2, 'neutral', '😐', 'Long workday but manageable', '2025-10-26'),
(3, 'sad', '😢', 'Missed family back in Mumbai', '2025-10-27'),
(4, 'happy', '😁', 'Got promoted at work!', '2025-10-28'),
(5, 'anxious', '😰', 'Preparing for upcoming exam', '2025-10-29'),
(6, 'stressed', '😫', 'Traffic jam for 2 hours', '2025-10-30'),
(7, 'happy', '😄', 'Watched a new Bollywood movie', '2025-10-30'),
(8, 'neutral', '🙂', 'Peaceful day at home', '2025-10-30'),
(9, 'sad', '😞', 'Argument with a friend', '2025-10-30'),
(10, 'happy', '😊', 'Completed a 5km run in the morning', '2025-10-30');

INSERT INTO JournalEntries (user_id, mood_id, title, content, entry_date) VALUES
(1, 1, 'Evening Chat', 'Had chai with college friends and laughed a lot.', '2025-10-25'),
(2, 2, 'Late Night Coding', 'Worked on project till midnight but felt accomplished.', '2025-10-26'),
(3, 3, 'Homesick', 'Missing home food — ordered pav bhaji but not the same.', '2025-10-27'),
(4, 4, 'Celebration', 'Team celebrated my promotion with cake and samosas!', '2025-10-28'),
(5, 5, 'Study Stress', 'Focused on revision, took small breaks to meditate.', '2025-10-29'),
(6, 6, 'Frustrated Morning', 'Office cab was late and stuck in traffic.', '2025-10-30'),
(7, 7, 'Fun Friday', 'Watched a comedy show, relaxed after a long week.', '2025-10-30'),
(8, 8, 'Relaxing Day', 'Cooked dal-chawal and listened to music.', '2025-10-30'),
(9, 9, 'Reflection', 'Felt guilty after arguing, apologized and made peace.', '2025-10-30'),
(10, 10, 'Morning Energy', 'Jogged early morning — felt fresh and positive.', '2025-10-30');

INSERT INTO Quotes (quote_text, author) VALUES
('Do good and good will come to you.', 'Swami Vivekananda'),
('Arise, awake, and stop not till the goal is reached.', 'Swami Vivekananda'),
('Be the change that you wish to see in the world.', 'Mahatma Gandhi'),
('Happiness is when what you think, what you say, and what you do are in harmony.', 'Mahatma Gandhi'),
('You have to dream before your dreams can come true.', 'Dr. A.P.J. Abdul Kalam'),
('Difficulties in your life do not come to destroy you, but to help you realize your hidden potential.', 'Dr. A.P.J. Abdul Kalam'),
('It always seems impossible until it’s done.', 'Nelson Mandela'),
('Success is not final, failure is not fatal: It is the courage to continue that counts.', 'Winston Churchill'),
('Calm mind brings inner strength and self-confidence.', 'Dalai Lama'),
('Life is really simple, but we insist on making it complicated.', 'Confucius');

INSERT INTO BreathingSessions (user_id, session_date, duration) VALUES
(1, '2025-10-25', 10),
(2, '2025-10-25', 8),
(3, '2025-10-26', 12),
(4, '2025-10-27', 6),
(5, '2025-10-27', 15),
(6, '2025-10-28', 5),
(7, '2025-10-28', 7),
(8, '2025-10-29', 10),
(9, '2025-10-29', 9),
(10, '2025-10-30', 11);

INSERT INTO Insights (user_id, week_start, summary) VALUES
(1, '2025-10-20', 'Felt energetic and happy this week.'),
(2, '2025-10-20', 'Managed stress better with yoga.'),
(3, '2025-10-20', 'Missed home but stayed productive.'),
(4, '2025-10-20', 'Work success boosted confidence.'),
(5, '2025-10-20', 'Handled exam pressure calmly.'),
(6, '2025-10-20', 'Had stressful commutes, need more rest.'),
(7, '2025-10-20', 'Watched movies and relaxed.'),
(8, '2025-10-20', 'Cooked new recipes and enjoyed peaceful evenings.'),
(9, '2025-10-20', 'Emotional ups and downs but resolved conflicts.'),
(10, '2025-10-20', 'Great consistency with morning exercise.');
