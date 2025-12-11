# Presidential Inbox — Session Notes

**Last Updated:** December 10, 2025

## Project Overview
52-week letter series where historical U.S. presidents write to Jim Messina as a contemporary friend. Christmas gift to be delivered December 18, 2025.

## Repository
- **GitHub:** https://github.com/TMG-AI/presidential_letters_jim
- **Local Path:** `/Users/shannonwheatman/presidential-inbox`
- **Deploy:** Vercel (auto-deploys on push to main)

## Current Status

### Completed
- [x] Vite React app initialized
- [x] Letters data file created (`src/data/letters.js`)
- [x] Main component with deep navy header (#1e3a5a), warm cream background
- [x] Archive functionality
- [x] Expandable historical context
- [x] Logic to show letter closest to current date on load
- [x] FDR letter (Week 1) — fixed Rankin 1917 reference
- [x] Nixon letter (Week 2)
- [x] Pushed to GitHub

### Pending Changes (NOT YET PUSHED)
- Removed "— Germany and Italy declared war on December 11th" from FDR letter (redundant with historical context)

### Not Yet Done
- [ ] Deploy to Vercel (user needs to do this manually)
- [ ] Draft launch email for Jim (Dec 18) — draft provided in chat
- [ ] Set up email notifications (decided to use Gmail scheduled sends)

## Key Files
- `src/data/letters.js` — **ADD NEW LETTERS HERE** (newest first in array)
- `src/components/PresidentialInbox.jsx` — Main UI component
- `index.html` — Page title and meta

## Adding New Letters
Just say: "Add week X letter for [President Name]" and provide:
- Letter content
- Historical date (writtenFrom)
- Event title
- Subject line
- Historical context (background, keyFacts, whatPresidentKnew, quote)
- Signature

## December 18 Launch Email (Draft)

**Subject:** `FDR wrote you a letter`

**Body:**
```
Jim,

I made something for you.

You and I share a love of history — the moments that shaped the country, the leaders who navigated them, and the impossible decisions they faced. So I built you an experience: letters from American presidents, written directly to you.

Every so often, a different president writes to you as if you're a close friend and trusted confidant. They know your character — your Montana roots, your pragmatism, your reputation as The Fixer. They write from the middle of their defining moments, sharing what they couldn't say publicly.

The first letter is from Franklin D. Roosevelt, writing eleven days after Pearl Harbor:

---

My dear Jim,

Eleanor tells me you've been asking after us — bless you for that. I should have written sooner, but these past eleven days have been unlike anything I've experienced in public life, and I find myself only now able to put pen to paper with any coherence...

---

[Read the full letter →](YOUR-VERCEL-URL)

This is what AI can do for us history geeks — not replace the scholarship, but bring it to life in ways that weren't possible before.

Consider this your holiday gift from one history nerd to another. Merry Christmas, my friend.

Shannon

P.S. New letters will show up from time to time. I'll let you know when one arrives.
```

## Technical Notes
- App shows letter whose month/day is closest to today's date
- Letters ordered newest-first in data file
- Historical context includes: background, keyFacts, whatPresidentKnew, quote

## Research Notes

### Nixon & Civilian Casualties
- Nixon showed little concern for Vietnamese civilian casualties in tapes/memoirs
- His focus was on American losses, POWs, and political perception
- Current Nixon letter is authentic to his character — focuses on American airmen and POWs
- ~1,600 civilian deaths in Hanoi/Haiphong from Linebacker II (Nixon barely acknowledged)

### FDR Letter Fixes Made
1. Rankin reference: Changed from "as she did in 1917" (inaccurate — she wasn't alone in 1917) to "her pacifism as unwavering now as it was in 1917"
2. Removed redundant "— Germany and Italy declared war on December 11th" (pending push)
