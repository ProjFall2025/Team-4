## MindaMate

 **TEAM MEMBER:**
-Student 1 (Saunil Patel)
-Student 2 (Rohit Saresa)
-Student 3 (Fenny Patel)

## 1. Website Conceptualization

### Mission Statement  

MindMate is our group project website that focuses mainly on **mental health**. The goal is pretty simple: give people an easy way to check in with their feelings, reflect, and build good habits over time. A lot of health apps are either too complicated or they only look at one thing, like fitness or meditation. We wanted to bring those ideas together in one space.  

The site will include tools like a daily mood tracker, journal notes, reminders, and even a breathing exercise for short breaks. It’s not about being perfect or competitive, but about consistency. By checking in daily and seeing patterns in their moods, users can become more aware of what helps them and what stresses them out.  

Our design approach is to keep everything calming. The interface will use soft colors, big buttons, and easy navigation so that the site feels supportive, not stressful. In short, MindMate is like a friendly digital buddy that nudges you to pause, reflect, and take care of yourself.  


## 2. Target Users  

### User Group 1: College Students (18–25 years)  
- *Demographics & Interests:* Students who are busy with classes, part-time jobs, and campus activities. They often care about productivity but struggle with irregular sleep and stress.  
- *Needs:* Quick reminders to take care of themselves, stress tracking during exams, and something positive to see when they’re overwhelmed.  
- *Support from Site:* Mood tracking during exam weeks, motivational quotes that show up when logging in.  

### User Group 2: Working Professionals (25–40 years)  
- *Demographics & Interests:* Full-time employees who don’t have much extra time. They want short, practical ways to reset and check in.  
- *Needs:* Simple tools that don’t waste time, plus insights that connect their work-life balance with how they’re feeling.  
- *Support from Site:* A guided breathing exercise for a 2-minute break, quick logging of mood or stress level, and weekly summaries that show overall balance.  

### User Group 3: Health-Conscious Adults (30–50 years)  
- *Demographics & Interests:* Adults already trying to improve lifestyle habits, like eating better or exercising more. Many already use some kind of app or wearable.  
- *Needs:* A way to connect mental and emotional health. They don’t want too much complexity.  
- *Support from Site:* Journal notes to capture context for moods, streak tracker to encourage consistency, and emotional insights that make the data meaningful.


## 3. 🧠 Mental Health Features  

1. *Mood Tracker*  
   - Users log how they feel daily with emojis (😊 Happy, 😐 Neutral, 😞 Sad, etc.).  
   - Data is stored by date (localStorage for now).  
   - Helps users see emotional ups and downs over time.  

2. *Mood History & Patterns*  
   - A list or calendar shows past mood entries.  
   - Charts (via Chart.js) display weekly or monthly trends.  
   - Example: a student might notice more “sad” logs around finals week.  

3. *Daily Wellness Quotes / Tips*  
   - Each visit shows a random motivational quote or self-care tip.  
   - Example: “Take a deep breath — you’re doing your best.”  
   - Keeps the experience positive and light.  

4. *Personal Journal / Notes*  
   - Users can add short notes with their mood logs.  
   - Example: “Felt anxious in class, but walking with friends helped.”  
   - Promoting self-awareness and growth.  

5. *Guided Breathing Exercise*  
   - A circle or text animation grows/shrinks with inhale/exhale prompts.  
   - Lasts 1–2 minutes, perfect for quick breaks.  
   - Reduces stress using simple accessible visuals.

6. *Streaks & Consistency Tracker*  
   - Shows how many days in a row a user checked in.  
   - Example: “You’ve logged your mood 6 days straight!”  
   - Encourages habit-building without making it competitive.  

7. *Reminders (optional)*  
   - Browser notifications once a day.  
   - Example: “How are you feeling today?”  
   - Gentle nudges that keep users engaged.  

8. *Weekly Emotional Insights*  
   - Creates a short summary from the week’s logs.  
   - Example: “This week you felt positive 4 times, neutral twice, and low once.”  
   - Makes mood data easy to understand and useful.  


## 4. Preliminary Development Plan  

### Phase 1: Research & Analysis  
- Talk to students and professionals about what features they’d actually use.  
- Review apps like Daylio, Calm, and Headspace to see what they do well and what feels overwhelming.  
- Key pain points we found: too many notifications, overcomplicated menus, and lack of meaningful summaries.  

### Phase 2: Design  
- Calming colors (lavender, pastel blues, soft green).  
- Minimal layout: a dashboard with big buttons for logging moods and notes.  
- Mobile-first approach since most users check in quickly on their phone.  
- Accessibility: readable fonts, ARIA labels, and options for higher contrast.  
- Create wireframes in Figma and share with classmates for early feedback.  

### Phase 3: Development  
- *Frontend:*  
  - HTML, CSS, and JavaScript for structure, styling, and features.  
  - Chart.js to make mood graphs.  
  - LocalStorage for saving data in the browser.  
- *Backend:*  
  - Node.js + Express for storing user accounts and syncing across devices.  
- *Collaboration:*  
  - Use GitHub branches (like feature/mood-tracker) so each team member works on a part and merges later.  

### Phase 4: Testing  
- *Usability Testing:* Have classmates use the site and give feedback.  
- *Performance Testing:* Make sure pages and charts load fast.  
- *Cross-Browser Testing:* Try Chrome, Firefox, Safari, and Edge.  
- *Input Validation:* Prevent broken entries in forms.  

### Phase 5: Launch & Maintenance  
- Deploy the first version on GitHub Pages or Netlify.  
- Ask classmates and professor for feedback after launch.  
- Future upgrades could include:  
  - AI-based suggestions (e.g., “Try breathing exercise when mood is low”).  
  - Multi-language support.  
  - Syncing with wearables.  
  - Secure logins with personal dashboards.  


## 📌 References  

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)  
- [Daylio Journal](https://daylio.net/)  
- [Calm App](https://www.calm.com/)  
- [National Institute of Mental Health](https://www.nimh.nih.gov/health)
- [Headspace](https://www.headspace.com/)  
