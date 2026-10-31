# SmartMail AI – Intelligent Email Management and Task Automation Agent

## 1. Project Overview

SmartMail AI is an AI-powered email management and task automation application designed to help students and professionals manage their emails efficiently.

It analyses incoming emails, identifies important information, categorizes messages, extracts action items and deadlines, and generates suitable reply drafts.

The application reduces manual email management and helps users stay organized and avoid missing important tasks.

## 2. Problem Statement

Students and professionals receive many emails every day related to assignments, projects, internships, meetings, and other activities.

Manually reading every email, identifying important messages, remembering deadlines, and preparing replies can be time-consuming.

SmartMail AI addresses this problem by using AI-based email analysis and task automation to simplify email management.

## 3. Objectives

- Automatically analyse incoming emails.
- Categorize emails based on their content.
- Identify important and urgent communications.
- Generate short summaries of emails.
- Extract action items and deadlines.
- Manage pending and completed tasks.
- Generate context-based email reply drafts.
- Store email information and replies locally.

## 4. Key Features

### 4.1 Dashboard
- Displays total emails.
- Shows urgent communications.
- Displays pending action items.
- Tracks completed tasks.
- Shows upcoming deadlines.

### 4.2 AI Email Classification
Categorizes emails into:
- Academic
- Work
- Urgent
- Personal
- Promotional

### 4.3 Email Summarization
Generates short summaries to help users understand important email information quickly.

### 4.4 Task Automation
- Extracts action items from emails.
- Identifies due dates.
- Assigns priority levels.
- Tracks pending and completed tasks.
- Links tasks to their original emails.

### 4.5 Smart Reply Studio
- Generates replies based on email content.
- Supports different tones:
  - Professional
  - Academic
  - Friendly
  - Quick Acknowledgment
  - Polite Decline
- Allows users to edit and copy drafts.
- Supports simulated reply sending in Demo Mode.
- Displays sent replies in the original email conversation.

### 4.6 Demo Mode
- Provides sample student and professional emails.
- Allows users to simulate incoming emails.
- Helps demonstrate the application's workflow without connecting Gmail.

### 4.7 Local Data Storage
- Uses IndexedDB to store emails and conversation replies.
- Supports localStorage fallback.
- Preserves stored information after browser refresh.

## 5. Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend development |
| TypeScript | Application logic and type safety |
| Vite | Development server and build tool |
| Tailwind CSS | User interface styling |
| Node.js | Backend runtime |
| Express | Server-side functionality |
| Google Gemini API | AI-based email analysis and reply generation |
| IndexedDB | Local database storage |
| LocalStorage | Fallback data storage |

## 6. System Workflow

1. User receives or simulates an incoming email.
2. SmartMail AI analyses the email content.
3. The application identifies its category and priority.
4. AI generates an email summary.
5. Action items and deadlines are extracted.
6. Tasks are stored and displayed on the dashboard.
7. The user generates and edits a reply draft.
8. The user can copy the reply or simulate sending it.
9. Sent demo replies are saved in the original email conversation.

## 7. Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code
- Modern web browser

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Open the Project Folder

```bash
cd smartmail-ai
```

### Step 3: Install Dependencies

```bash
npm install
```

If a dependency conflict occurs between Vite and esbuild, use:

```bash
npm install -D esbuild@^0.28.2
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open the Application

Open the local URL displayed in the terminal, usually:

```text
http://localhost:3000
```

## 8. How to Use the Application

1. Open the SmartMail AI dashboard.
2. Explore the dashboard statistics.
3. Select Demo Mode or Simulate Incoming Email.
4. Add a sample email.
5. Open the received email.
6. View its category, priority and AI-generated summary.
7. Extract action items and check the Tasks section.
8. Generate a Smart Reply.
9. Edit the reply and use Copy Reply or Send Reply (Demo).
10. Refresh the browser to verify that the saved information remains available.

## 9. Database Information

**Database:** SmartMailAIDatabase

**Storage:** IndexedDB

**Object Store:** emails

Email records can contain:
- Email ID
- Sender
- Recipient
- Subject
- Message body
- Category
- Priority
- Summary
- Action items
- Sent replies
- Timestamps

Sent demo replies are associated with their original email using the email ID.

## 10. Security and Privacy

- Gmail integration is not enabled in the current demo.
- No real emails are sent through Demo Mode.
- Users retain control over editing and copying reply drafts.
- Replies marked Sent (Demo) are simulated.
- Email and reply data are stored locally in the browser.

## 11. Future Enhancements

- Optional Gmail integration with secure authentication.
- Real-time email notifications.
- Calendar integration for deadlines.
- Advanced email analytics.
- Multi-user support.
- Cloud-based email and task synchronization.

## 12. Conclusion

SmartMail AI provides an intelligent approach to email management by combining email classification, summarization, task extraction, deadline tracking and smart reply generation.

It helps students and professionals save time, organize their work and manage important communications more effectively.

## 13. Project Status

**Project Name:** SmartMail AI

**Project Type:** AI Agent / Intelligent Email Management System

**Current Mode:** Local Demo Mode

**Email Sending:** Simulated only; Gmail is not connected.

---

**Developed as an academic project.**
