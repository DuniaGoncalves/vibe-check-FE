# VibeCheck - Mood Journal

A simple mood journaling app that allows users to record and reflect on their daily moods and notes. Built using React for the frontend and Express for the backend.

## Features

- Display a list of moods from the backend
- Users can input their current mood and add a note

## Definition of Done

- [x] Display moods from the backend
- [ ] Users can add a mood and note
- [ ] Users can delete a mood entry
- [ ] Implement persistent storage for moods (e.g., JSON file or database)
- [ ] Input validation to ensure mood and note are not empty
- [ ] Improve UI/UX for better user experience

## To-Do

- [ ] Implement form submission to add a mood and note
- [ ] Allow users to delete a mood
- [ ] Store moods and notes persistently on the backend
- [ ] Add input validation (ensure mood and note are not empty)
- [ ] Improve the form UI/UX
- [ ] Enhance error handling for API requests
- [ ] Clean up and organize project structure

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/vibecheck.git
   cd vibecheck
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # In the root directory
   npm install

   # Navigate to the backend folder (if applicable)
   cd backend
   npm install
   ```

3. Start the backend server:

   ```bash
   node index.js
   ```

4. Start the React frontend:
   ```bash
   npm run dev
   ```

## Usage

1. Record your current mood and add a note.
2. View past mood entries.
3. Delete mood entries (upcoming feature).
