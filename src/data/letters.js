/**
 * Presidential Inbox — Letters Data
 *
 * To add a new letter:
 * 1. Add a new object to the beginning of the array (newest first)
 * 2. Follow the structure below
 * 3. Increment the week number
 *
 * Weekly workflow: Just say "Add week X letter for [President]" and provide the letter content
 */

export const letters = [
  // Week 1: FDR
  {
    id: 'week-1-fdr',
    week: 1,
    president: 'Franklin D. Roosevelt',
    writtenFrom: 'December 18, 1941',
    eventTitle: 'Eleven Days After Pearl Harbor',
    subject: "Can't Sleep",
    letter: `My dear Jim,

Eleanor tells me you've been asking after us — bless you for that. I should have written sooner, but these past eleven days have been unlike anything I've experienced in public life, and I find myself only now able to put pen to paper with any coherence.

When the telephone rang at 1:47 on that fateful Sunday afternoon, I had no idea how much our world would change.

The first reports were chaos — fragmentary, contradictory, impossible to verify. By evening we had some picture of the devastation at Pearl Harbor, but not the full scope. The Arizona alone took more than a thousand men down with her. We still don't have final numbers. I'm not sure we ever will.

I barely slept that night. By morning I knew I had to go before Congress — the country needed to hear what had happened, who was responsible, and what we intended to do about it. Eleanor stayed up with me while I worked on the speech, and you know how she is about words. She understands, perhaps better than anyone, that in a moment like this they are not ornament. They are architecture. Six minutes. Five hundred words. Sometimes less is the only honest approach.

The vote to declare war on Japan came that same afternoon — the Senate 82-0, the House 388-1. Miss Rankin from Montana stood alone, her pacifism as unwavering now as it was in 1917. I thought of you when I heard that, knowing your affection for that state. And then, three days later, Hitler solved my other problem for me. I didn't have to ask Congress to fight a two-ocean war. The Axis powers handed it to us.

What I could not say from the rostrum — what I can tell you — is how strange it felt to watch the isolationists fold. For two years I have been fighting Lindbergh and the America Firsters, dragging this country inch by inch toward the understanding that we cannot hide behind our oceans while the world burns. And in one Sunday afternoon, the Japanese Navy accomplished what I could not: they made the argument undeniable.

I am not fool enough to think unity will last. It never does. The politics will return — they always do, as you well know. But for this moment, the country is together in a way I have not seen in my lifetime. Young men are lining up at recruitment offices before they open. The mail runs twenty-to-one in favor of whatever action we take.

You and I are too old now to do any of the fighting ourselves — I'm fifty-nine, and these legs wouldn't carry me far even if they'd have me. But Patton is fifty-six, same as you, and champing at the bit. I suspect he'll get his chance soon enough. The rest of us must fight with whatever tools we have.

The political capital is real, but it is borrowed against grief. The challenge now is to spend it wisely on a war that will take years, not months. Crisis creates clarity. What comes after crisis — that is the real test.

Eleanor says I need to sleep more. She is usually right about these things. But I find myself awake at hours I shouldn't be, thinking about the boys on those ships, and the boys we're about to send across two oceans. The weight of that doesn't get lighter. You just learn to carry it differently.

Do write when you can — your letters always lift my spirits.

Affectionately,`,
    historicalContext: {
      background: "The attack lasted just 110 minutes — from 7:55 a.m. to 9:45 a.m. — yet it transformed American history. The Japanese fleet had traveled 3,400 miles across the Pacific in complete secrecy, maintaining radio silence the entire voyage, planning the strike since January 1941. The name 'Pearl Harbor' itself comes from the Hawaiian 'Wai Momi' (Waters of Pearl), named for the pearl oysters that once thrived there before being harvested to extinction by the late 1800s.",
      keyFacts: [
        "The first shots were fired before any planes arrived: USS Ward sank a Japanese midget submarine at the harbor entrance at 6:45 a.m., but Navy brass dismissed the report",
        "Radar operators detected the incoming Japanese planes but the warning was waved off — officers assumed it was a flight of American B-17s expected that morning",
        "All three U.S. aircraft carriers happened to be away from Pearl Harbor that day — by pure chance",
        "There were 38 sets of brothers serving aboard the USS Arizona; 63 of those 79 men died together",
        "America's first POW of WWII: Kazuo Sakamaki, a Japanese submariner whose vessel malfunctioned — he washed ashore unconscious and was captured on Waimanalo Beach",
        "When Commander Fuchida radioed 'Tora! Tora! Tora!' it wasn't a battle cry — it was code telling the Japanese fleet they had achieved complete surprise",
        "Doris Miller, an African American mess attendant on the USS West Virginia, manned an anti-aircraft gun despite having no training — he was later awarded the Navy Cross"
      ],
      whatPresidentKnew: "Eleanor Roosevelt later recalled finding her husband 'deadly calm' that afternoon — 'If it was something bad, he just became almost like an iceberg.' That night, he told her privately that America would 'have to take a good many defeats before we can have a victory.' To his Cabinet, he said: 'This is probably the most serious crisis any Cabinet has confronted since the Civil War.' In drafting his speech, FDR made one crucial edit by hand: he crossed out 'a date which will live in world history' and replaced it with the far more powerful word — 'infamy.'",
      quote: {
        text: "Yesterday, December 7th, 1941 — a date which will live in infamy — the United States of America was suddenly and deliberately attacked by naval and air forces of the Empire of Japan.",
        attribution: "Franklin D. Roosevelt, Address to Congress, December 8, 1941"
      }
    },
    signature: 'Franklin'
  }
];

/**
 * TEMPLATE FOR NEW LETTERS
 * Copy this when adding a new week:
 *
 * {
 *   id: 'week-X-lastname',
 *   week: X,
 *   president: 'Full Name',
 *   writtenFrom: 'Month Day, Year',
 *   eventTitle: 'Brief Event Description',
 *   subject: "Email Subject Line",
 *   letter: `Letter content here...`,
 *   historicalContext: {
 *     background: "Paragraph explaining the historical context...",
 *     keyFacts: [
 *       "Fact 1",
 *       "Fact 2",
 *       "Fact 3"
 *     ],
 *     whatPresidentKnew: "What the president knew (and didn't know) at the time of writing...",
 *     quote: {
 *       text: "A relevant quote from the era...",
 *       attribution: "Source of the quote"
 *     }
 *   },
 *   signature: 'How they signed'
 * }
 */
