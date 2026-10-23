# VentureVerse 2026 - Event Landing Page

A single-page website for a fictional event, **VentureVerse 2026 - Ideas into Action**, organised by the Entrepreneurship Development Cell (EDC), JSS University, Noida.
Built for the EDC JSSUN Technical Team Recruitment 2026 (Task 01, First-Year).

## How to view
1. Download or unzip the project folder.
2. Double-click `index.html` to open it in any browser (Chrome, Edge, Firefox).
No installation or internet connection is needed.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure and content (all 6 required sections) |
| `style.css` | Colors, layout and the mobile-friendly design |
| `script.js` | Countdown timer and mobile menu |

## Required sections included
- **Header** with navigation links that jump to each section
- **Hero** with event name, tagline, date, time, venue and a "Register Now" button
- **About and highlights** with a description and 3 highlight cards
- **Schedule** as a timeline with 6 agenda items
- **Speakers** with 3 fictional profiles (initials as avatars)
- **Footer** with EDC branding, contact and social placeholders

## Interactions
- **Countdown timer** to 12 Nov 2026, 10:00 AM (IST)
- **Mobile hamburger menu** that opens and closes on small screens

## Design decisions
- Navy and teal colors were chosen to match the EDC logo.
- Colors are stored as CSS variables at the top of `style.css`, so the theme can be changed in one place.
- Layout uses CSS Grid for cards and Flexbox for the header and timeline.
- A media query at 800px and 520px stacks cards in one column for phones.

## Credits and disclosure
- All speakers, contact details and the venue are **fictional placeholders**.
- No external images or libraries are used. Icons are standard emoji.
- **AI disclosure:** I used an AI assistant (Claude by Anthropic) to help generate and structure the code for this project. I have reviewed it and can explain how each part works.
