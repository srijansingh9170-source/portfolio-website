# Srijan Singh — Portfolio

A personal portfolio site designed around a "model card / lab notebook" aesthetic — a nod to my focus on AI & ML, built with plain HTML, CSS, and JavaScript.

## Features

- **Model-card inspired design** — About, Skills, and Projects are styled like config panels, tensor arrays, and status cards instead of generic sections
- **Dark / light mode** — toggle in the nav, defaults to your system preference
- **8 built-in languages** — English, Hindi, Spanish, French, German, Portuguese, Japanese, and Chinese (Simplified), switchable instantly with no page reload
- **Functioning contact actions** — mailto link, one-click email copy with confirmation, and a direct link to GitHub
- **Animated hero** — a draw-in "loss curve" graphic and a rotating typing status line
- **Scroll-triggered reveals** on every section, respecting `prefers-reduced-motion`
- **Responsive layout** — works down to mobile
- **Live GitHub stats** pulled in via github-profile-summary-cards

## Technologies Used

- HTML5
- CSS3 (custom properties for theming, no framework)
- Vanilla JavaScript (no build step, no dependencies)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Project Structure

```
portfolio-website/
├── index.html      # markup + i18n data-attributes
├── style.css        # design system, light/dark tokens, animations
├── script.js         # i18n engine, theme toggle, typing effect, scroll reveal
├── profile.jpg      # profile photo (not tracked here — add your own)
└── README.md
```

## Installation

1. Clone the repository
   ```
   git clone https://github.com/srijansingh9170-source/portfolio-website.git
   ```
2. Open the folder
   ```
   cd portfolio-website
   ```
3. Open `index.html` in your browser — no build step or server required

## Projects Included

- [Python File Organizer](https://github.com/srijansingh9170-source/file-organizer-python) — sorts files into folders automatically by type
- [DSA Practice](https://github.com/srijansingh9170-source/python-mini-projects) — a running collection of solved Data Structures & Algorithms problems
- This portfolio site itself

## Future Improvements

- Add a downloadable resume/CV section
- Persist theme and language choice across visits
- Add more project entries as they ship

## Author

**Srijan Singh**
B.Tech CSE (AI & ML)
[github.com/srijansingh9170-source](https://github.com/srijansingh9170-source)