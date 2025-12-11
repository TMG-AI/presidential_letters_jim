# The Presidential Inbox

A 52-week letter series where historical U.S. presidents write to Jim Messina.

## Development

```bash
npm install
npm run dev
```

## Adding New Letters

Letters are stored in `src/data/letters.js`. Add new letters to the **beginning** of the array (newest first).

Each letter needs:
- `id`: 'week-X-lastname'
- `week`: Week number (1-52)
- `president`: Full name
- `writtenFrom`: Historical date
- `eventTitle`: Brief event description
- `subject`: Email subject line
- `letter`: The letter content
- `historicalContext`: Background, keyFacts, whatPresidentKnew, quote
- `signature`: How they signed

## Deployment

Deployed on Vercel. Push to main to deploy.
