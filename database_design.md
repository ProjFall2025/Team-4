#  MindMate – Database Design (Part 2)

  
## 1. Entities and Attributes (Summaries)

### **Users**
Stores account information for each registered user.

| Attribute | Description |
|------------|--------------|
| `user_id` *(PK)* | Unique identifier |
| `username` | Display name (unique) |
| `email` | Login email (unique) |
| `password_hash` | Encrypted password |
| `created_at` | Account creation date |
| `last_login` | Last active date (for streak tracking) |

**Relationships:**  
One `User` → Many `MoodEntry`, `JournalEntry`, `BreathingSession`, `Insights`.

---

### **MoodEntry**
Tracks a user’s emotional log for the day.

| Attribute | Description |
|------------|--------------|
| `mood_id` *(PK)* | Unique mood record |
| `user_id` *(FK)* | References `Users(user_id)` |
| `mood_date` | Date of mood log |
| `mood_type` | Enum: `happy`, `neutral`, `sad`, `anxious`, `stressed` |
| `emoji` | Optional emoji representation |
| `note` | Optional reflection |

**Relationships:**  
Many `MoodEntry` records belong to one `User`.  
One `MoodEntry` may link to one or more `JournalEntry`.

---

### **JournalEntry**
Stores user reflections and notes.

| Attribute | Description |
|------------|--------------|
| `journal_id` *(PK)* | Unique journal ID |
| `user_id` *(FK)* | References `Users(user_id)` |
| `mood_id` *(FK)* | Optional reference to `MoodEntry(mood_id)` |
| `entry_date` | Date created |
| `title` | Optional title |
| `content` | Main journal text |

**Relationships:**  
Many `JournalEntry` records belong to one `User`.  
Optionally connected to a `MoodEntry`.

---

###  **Quotes**
Contains motivational quotes or wellness messages.

| Attribute | Description |
|------------|--------------|
| `quote_id` *(PK)* | Unique quote ID |
| `quote_text` | Quote text |
| `author` | Optional quote author |
| `created_at` | Timestamp added |

**Relationships:**  
Independent table (no foreign keys). Displayed globally.

---

###  **BreathingSession**
Logs each guided breathing activity.

| Attribute | Description |
|------------|--------------|
| `session_id` *(PK)* | Unique session ID |
| `user_id` *(FK)* | References `Users(user_id)` |
| `session_date` | Date performed |
| `duration` | Duration in seconds |

**Relationships:**  
Many `BreathingSession` records belong to one `User`.

---

###  **Insights**
Generates weekly summaries of user emotions.

| Attribute | Description |
|------------|--------------|
| `insight_id` *(PK)* | Unique summary record |
| `user_id` *(FK)* | References `Users(user_id)` |
| `week_start` | Start date of analyzed week |
| `summary` | Text-based insight summary |

**Relationships:**  
Many `Insights` belong to one `User`.

---

###  **Entity Relationships Summary**

| Relationship | Type |
|---------------|------|
| `Users` → `MoodEntry` | 1 : M |
| `Users` → `JournalEntry` | 1 : M |
| `Users` → `BreathingSession` | 1 : M |
| `Users` → `Insights` | 1 : M |
| `MoodEntry` → `JournalEntry` | 1 : M (optional) |

