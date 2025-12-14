# Presidential Inbox — Session Notes

**Last Updated:** December 12, 2025

## Project Overview
52-week letter series where historical U.S. presidents write to Jim Messina as a contemporary friend. Christmas gift to be delivered December 18, 2025.

---

## Critical Design Principles
1. Letters must sound like warm friend-to-friend correspondence — NOT essays, NOT speeches, NOT formal letters
2. Jim Messina is a Democrat — Republican presidents should include friendly political ribbing
3. Never start letters abruptly — Open with warmth, personal connection, or a scene
4. Jim is treated as a contemporary — He has worked with each president in some capacity
5. Each president writes from a specific historical moment — Use the calendar doc for dates/events
6. Include personal touches — Montana references, age comparisons, shared experiences
7. **AVOID EM DASHES** — Use commas, semicolons, colons, or separate sentences instead. Em dashes are overused and feel modern.

---

## Jim Messina Profile
- **Born:** October 29, 1969, Boise, Idaho
- **Age:** 56 (as of 2025)
- **Education:** University of Montana (political science/journalism, 1993)
- **Current Role:** CEO, The Messina Group

### Key Background
- Raised by single mother
- Max Baucus was his mentor ("father-son relationship")
- Obama 2012 campaign manager ("best-run campaign ever" — Eric Schmidt)
- White House Deputy Chief of Staff 2009-2011
- Nickname: "The Fixer"
- Democrat through-and-through but pragmatic (worked with UK Conservatives Cameron/May)
- Data-driven, tech-savvy, tough but has "big heart"
- Italian ancestry (won Machiavelli Award)
- Deep Montana roots, huge Montana Grizzlies football fan

### Personal Interests & Tastes
- **Sports:** Fly fishing, Denver Broncos, college football (especially Montana Grizzlies), college basketball (picks Louisville, follows March Madness), New York Yankees
- **Food/Drink:** Steak, good wine, macaroni and cheese (comfort food)
- **Entertainment:** Music, loved the movie "Lincoln"
- **Tech:** iPhone guy, not Blackberry

### Key Background (Expanded)
- Born in Denver, raised in Boise, Idaho
- Raised by single mother
- **Fourth grade origin story:** Volunteered to represent Jimmy Carter in a 1980 class mock election — lost badly to Reagan. This sparked his interest in politics.
- Max Baucus was his mentor ("father-son relationship")
- His political mentor is Dave Hunter from Montana — "the wisest political operator I've ever met"
- Obama 2012 campaign manager ("best-run campaign ever" — Eric Schmidt)
- White House Deputy Chief of Staff 2009-2011
- Nickname: "The Fixer"
- Democrat through-and-through but pragmatic (worked with UK Conservatives Cameron/May)
- Data-driven, tech-savvy, tough but has "big heart"
- Italian ancestry (won Machiavelli Award)
- Deep Montana roots, huge Montana Grizzlies football fan
- Graduated University of Montana 1993 (political science)
- 1993: As college senior, managed Dan Kemmis's successful mayoral re-election in Missoula
- 1995: Went to work for Sen. Max Baucus
- Worked with Baucus to stop Bush's Social Security privatization plan

### "White Knuckle" Campaign Moments (His Words)
- August 2011 debt-limit crisis when Obama's numbers were "historically low"
- After the first 2012 debate "when everyone was very, very concerned"
- Said of both: "Even then I believed we would win"

### How He Describes Obama
- "Intelligent and committed"
- "Always the smartest guy in the room"
- Admires Obama for doing "what was right for the country" over political decisions (auto bailout, healthcare)

### What Presidents Might Reference
- His Montana connection (Jeannette Rankin, Grizzlies football, Max Baucus, University of Montana)
- His fourth-grade Carter campaign loss to Reagan
- His pragmatism / willingness to work across party lines
- His reputation as "The Fixer"
- His data-driven approach
- His age (56) — compare to historical figures at same age
- His loyalty
- Fly fishing (outdoor presidents could bond over this)
- Denver Broncos / Yankees fandom
- His love of steak and good wine

---

## Letter Structure
1. **Opening** — Warm, personal, sets the scene (never jump straight to the topic)
2. **The Historical Moment** — What's happening, why it matters
3. **Personal Reflection** — What they're really thinking/feeling (not for public consumption)
4. **Connection to Jim** — Why they're telling HIM this, what they value about him
5. **Closing** — Warm sign-off, looking forward to hearing from him

**Target Length:** 600-900 words

---

## Quality Checklist
Before finalizing any letter:
- [ ] Does it sound like a friend writing, not an essay?
- [ ] Is the opening warm and personal (not abrupt)?
- [ ] Is historical accuracy verified for what president knew ON THAT DATE?
- [ ] Is there a personal connection to Jim?
- [ ] For GOP presidents: Is there friendly political ribbing?
- [ ] Does the voice match the president's actual writing style?
- [ ] Is the signature correct for how they signed to friends?
- [ ] Is length appropriate (600-900 words)?
- [ ] **CRITICAL — REVIEW ALL PAST LETTERS BEFORE FINALIZING:**
  - [ ] No repeated themes (e.g., "honest counsel" used in JFK — don't reuse)
  - [ ] No repeated devices (e.g., age comparisons used in FDR — don't overuse)
  - [ ] No similar opening structures
  - [ ] No repeated phrases or language patterns
  - [ ] Each letter must feel unique in its approach to connecting with Jim

## Themes/Devices Already Used (DO NOT REPEAT)
- **Age comparisons:** FDR (Patton at 56), Nixon (FDR at 59) — STOP USING
- **"Honest counsel" / "tell me what you really think":** JFK — don't reuse
- **Sports/Grizzlies:** Nixon — vary how personal connections are made
- **Spouse opening scene:** Nixon (Pat), Washington (Martha) — vary openings
- **Fishing:** Washington — don't overuse outdoor activities
- **Humble origins/self-made:** JFK — find other ways to connect
- **"Shows up when things go sideways":** Reagan — don't reuse
- **Absorbs criticism and persists:** JQA — don't reuse
- **"Write when you can" closing:** Used in multiple letters — STOP USING

---

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
- Enhanced historical context for both FDR and Nixon letters with unique facts
- Added Eleanor Roosevelt's recollections to FDR "What the President Knew"
- Added Nixon tape quotes about civilian casualties to Nixon "What the President Knew"
- Added Historical Context Guidelines section to this file

### Not Yet Done
- [x] Deploy to Vercel — DONE
- [ ] Draft launch email for Jim (Dec 18) — draft provided in chat
- [ ] Set up email notifications (decided to use Gmail scheduled sends)

## SCHEDULED PUBLISH DATES

**Letters are in `src/data/upcoming-letters.js`**

### December 31, 2025 — Nixon (Week 2)
Tell Claude: "Publish the Nixon letter"

### ~January 7-8, 2026 — Washington (Week 3)
Tell Claude: "Publish the Washington letter"

### ~January 21, 2026 — JFK (Week 4)
Tell Claude: "Publish the JFK letter"

### ~January 28, 2026 — Reagan (Week 5)
Tell Claude: "Publish the Reagan letter"

### ~February 9, 2026 — John Quincy Adams (Week 6)
Tell Claude: "Publish the John Quincy Adams letter"

### ~February 24, 2026 — Andrew Johnson (Week 7)
Tell Claude: "Publish the Andrew Johnson letter"

**To publish a letter:**
1. Move the letter object from `upcoming-letters.js` to `letters.js` (add to BEGINNING of array)
2. Push to GitHub — Vercel auto-deploys
3. Send Jim an email that a new letter arrived

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

---

## Historical Context Guidelines (IMPORTANT)

The historical context section appears at the bottom of each letter in the app. It should ADD VALUE, not repeat what's in the letter.

### What to Include:
1. **Unique, lesser-known facts** that would intrigue a history buff like Jim
2. **Primary source material** — quotes from diaries, memoirs, biographies, tapes
3. **Personal details** from people who were there (Eleanor's observations, cabinet members' recollections, etc.)
4. **Fascinating operational details** (e.g., B-52s taking off one per minute from Guam)
5. **Human stories** (e.g., 38 sets of brothers on the Arizona, Doris Miller manning the gun)

### What NOT to Include:
1. **Nothing already in the letter** — don't repeat what the president wrote
2. **No future events** — don't reference things that happened after the letter's date
3. **No obvious statements** — don't say "Roosevelt didn't know how long the war would last"
4. **No generic background** — assume Jim knows the basics; give him the insider details

### "What the President Knew" Section:
This is the most interesting part. Include:
- Private quotes from diaries, tapes, or memoirs
- Observations from those closest to them (spouse, cabinet, staff)
- Their emotional state as recalled by witnesses
- Specific decisions or edits they made (e.g., FDR changing "world history" to "infamy")

### Research Sources to Look For:
- Presidential memoirs and autobiographies
- Biographies by major historians (Doris Kearns Goodwin, Robert Caro, etc.)
- White House tapes (Nixon, LBJ, JFK)
- Letters and diaries from the era
- Spouse memoirs (Eleanor Roosevelt, Lady Bird Johnson, etc.)
- Cabinet member recollections

## Research Notes

### Nixon & Civilian Casualties
- Nixon showed little concern for Vietnamese civilian casualties in tapes/memoirs
- His focus was on American losses, POWs, and political perception
- Current Nixon letter is authentic to his character — focuses on American airmen and POWs
- ~1,600 civilian deaths in Hanoi/Haiphong from Linebacker II (Nixon barely acknowledged)

### FDR Letter Fixes Made
1. Rankin reference: Changed from "as she did in 1917" (inaccurate — she wasn't alone in 1917) to "her pacifism as unwavering now as it was in 1917"
2. Removed redundant "— Germany and Italy declared war on December 11th" ✅ PUSHED

---

## Voice Cards (For Future Letters)

### FDR Voice Card
- **Writing Style:** Warm, patrician, uses dashes liberally, literary but accessible
- **Personality:** Confident, optimistic even in crisis, genuinely warm to friends
- **How he addressed friends:** "My dear [Name]"
- **Signature to friends:** "Affectionately, Franklin"

### Nixon Voice Card
- **Writing Style:** Analytical, self-justifying, punctuated with profanity in private, uses dashes
- **Personality:** Paranoid about press, deeply strategic, surprisingly sentimental about loyalty
- **How he addressed friends:** "Dear [Name]"
- **Signature to friends:** "Dick"
- **Notes:** Include Pat references, friendly ribbing about Jim being a Democrat, football references

### Washington Voice Card
- **Writing Style:** Formal 18th-century prose, long complex sentences, period spellings (retir'd, deliver'd, fix'd, labour'd, sacrific'd), elaborate metaphors
- **Personality:** Reluctant leader, duty-bound, deeply private, longing for Mount Vernon
- **How he addressed friends:** "My dear Sir" or "My dear friend"
- **Signature to friends:** "Your most Obedt. & Affecte. Hble Servant, G. Washington"
- **Key themes:** Untrodden ground, setting precedents, sacrifice of private happiness, burden of office
- **Actual quotes to use:** "culprit going to execution," "bid adieu to all expectations of private happiness," "untrodden ground"

---

## 52-Week Calendar Reference
See original project document for full calendar. Key notes:
- All 46 presidents covered, 6 appear twice
- Week 47: Use McKinley (not third Lincoln)
- Week 51: Use Arthur (not second Pierce)

---

## Completed Letters

### Week 1: Franklin D. Roosevelt
- **Subject:** "Can't Sleep"
- **Written From:** December 18, 1941 (11 days after Pearl Harbor)
- **Delivered:** December 18, 2025
- **Key Elements:** Eleanor reference, Jeannette Rankin/Montana, age comparison (Patton 56), speech-writing scene
- **Signature:** "Affectionately, Franklin"

### Week 2: Richard Nixon
- **Subject:** "What They Won't Print"
- **Written From:** December 31, 1972 (after Linebacker II)
- **Delivered:** December 31, 2025
- **Key Elements:** Pat calling him to champagne, Grizzlies 3-8 season tease, "The Democrat?", Kissinger skepticism acknowledged, authentic profanity ("those bastards"), POW families, FDR age comparison
- **Signature:** "Dick"

### Week 3: George Washington
- **Subject:** "The Burdens of This Station"
- **Written From:** January 8, 1790 (after First State of the Union)
- **Delivered:** ~January 7-8, 2026
- **Key Elements:** Martha retiring for evening, authentic 18th-century language (retir'd, deliver'd, tho'), "culprit going to execution" quote, Rhode Island holdout concern, Mount Vernon longing, fishing invitation, period abbreviations in signature
- **Signature:** "Your most Obedt. & Affecte. Hble Servant, G. Washington"
- **Voice Notes:** Uses period spellings, formal address ("My dear Sir"), long complex sentences, elaborate structure

### Week 4: John F. Kennedy
- **Subject:** "Before the Machinery Takes Over"
- **Written From:** January 21, 1961 (morning after inauguration)
- **Delivered:** ~January 21, 2026
- **Key Elements:** Quiet morning scene, Robert Frost unable to read poem due to sun glare, Executive Order 10914 (doubling surplus food), West Virginia poverty experience, admiration for Jim's humble origins/self-made success
- **Signature:** "Jack"
- **Voice Notes:** Crisp clear sentences, witty, charming, direct

### Week 5: Ronald Reagan
- **Subject:** "Finding the Words"
- **Written From:** January 28, 1986 (Challenger disaster)
- **Delivered:** ~January 28, 2026
- **Key Elements:** Somber tone throughout, Peggy Noonan writing the speech, "High Flight" poem on plaque at Patti's school, speaking to 8-year-olds and 80-year-olds, Jim shows up when things go sideways, names all seven crew members, duty to carry on
- **Signature:** "Ron"
- **Voice Notes:** Warm, down to earth, gently humorous when appropriate but somber here

### Week 6: John Quincy Adams
- **Subject:** "Less Chosen Than Appointed"
- **Written From:** February 9, 1825 (House elects JQA president)
- **Delivered:** ~February 9, 2026
- **Key Elements:** Introspective self-doubt, "corrupt bargain" accusation, minority president anxiety, father's one-term defeat memory, Jim absorbs criticism and persists, Louisa sends regards to Jim and Taya
- **Signature:** "John Quincy Adams"
- **Voice Notes:** Formal but candid, self-critical, scholarly, melancholic

### Week 7: Andrew Johnson
- **Subject:** "They've Done It"
- **Written From:** February 24, 1868 (House votes to impeach)
- **Delivered:** ~February 24, 2026
- **Key Elements:** Combative and defiant tone, profanity ("bullshit," "bastards"), Tenure of Office Act as trap, tailor's son class resentment, thirty-six senators will decide, fighting not begging
- **Signature:** "Andrew Johnson"
- **Voice Notes:** Coarse, stubborn, pugnacious, class-conscious, raw and angry
