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
  // Week 2: Nixon
  {
    id: 'week-2-nixon',
    week: 2,
    president: 'Richard Nixon',
    writtenFrom: 'December 31, 1972',
    eventTitle: 'After Linebacker II',
    subject: "What They Won't Print",
    letter: `Dear Jim,

Pat has been after me all evening to put down the briefing papers and join her for a glass of champagne — it's nearly midnight, she reminds me, as if I hadn't noticed the year slipping away. I told her I needed to write to a friend first. She asked which friend, and when I said your name she laughed and said, "The Democrat? On New Year's Eve?" Well, yes. Especially on New Year's Eve.

I hope you've recovered from the Grizzlies' season. Three and eight — even I felt that, and I'm a man who's endured some losses. After those undefeated years, it must sting. But you Montana people are resilient. You'll be back.

You once told me that when the pressure is highest, you want to hear from the people who'll tell you the truth, not the people who'll tell you what you want to hear. I've never forgotten that. So here I am, writing to you instead of the dozen Republicans who've called today to congratulate me on what they're calling a brave decision. Brave. As if that's the word for it.

You'll have seen the headlines about Linebacker II — eleven nights of B-52s over Hanoi. The press is calling it the Christmas bombing, because of course they are. Those bastards have been waiting four years to write my obituary, and they thought this was their chance. Barbaric. Desperate. I could have written their editorials before they did — hell, I could have written them better. What they won't print is why.

Kissinger came back from Paris on December 13 with nothing. Le Duc Tho walked away from the table, calculating that we'd crack before they did. I know you're no admirer of Henry — and I know you think his realpolitik leaves too much blood on the floor — but even you would have to admit the man understands leverage. Without it, you don't negotiate. You surrender. And Hanoi was betting that the new Congress would do their work for them. Your people, mostly — though I'm not blaming you personally.

So I escalated. Fifteen B-52s lost. Thirty-three men killed. Another thirty-three captured. I know those numbers better than the goddamn reporters do. They sit in their offices and write about morality while I'm signing letters to widows. They've never had to make a decision that costs lives. They just get to judge the men who do.

Here's what I'm thinking about tonight, and why I wanted to write to you specifically: the POWs. When their families hear that we're back at the table with terms — real terms, not the theater we've had for three years — they'll know someone didn't forget them. You understand loyalty, Jim. I've watched you operate. That's not nothing. It doesn't balance the ledger. I'm not sure anything balances this particular ledger. But it's not nothing.

The moral weight of a decision like this — you can't describe it to people who've never had to make one. They'll judge me against a clarity I never had. There are no clean choices in moments like this. Only choices.

Will it hold? I don't know. We should have terms by late January, maybe sooner. Whether Saigon survives what comes after — that's a question I'll be answering for the rest of my life. I'm fifty-nine years old, Jim — same age Roosevelt was when he sent the boys across two oceans. I wonder if he slept any better than I do.

But tonight, on the last night of 1972, the guns are quiet and the diplomats are flying back to Paris. I'll take it.

Pat is calling again. I should go be a husband for an hour before I'm back to being a president.

Happy New Year, Jim. Give my regards to your people — even the ones who've been giving me hell. Here's hoping '73 is easier on all of us.`,
    historicalContext: {
      background: "Operation Linebacker II ran from December 18-29, 1972, after peace negotiations in Paris collapsed. It was the largest heavy bomber operation since World War II. By December 26, North Vietnam signaled willingness to resume negotiations. The Paris Peace Accords were signed on January 27, 1973.",
      keyFacts: [
        "December 13: Le Duc Tho breaks off Paris negotiations",
        "December 18-29: Linebacker II bombing campaign (11 days)",
        "Over 20,000 tons of ordnance dropped on Hanoi and Haiphong",
        "15 B-52s lost; 33 airmen killed; 33 captured",
        "December 26: North Vietnam signals willingness to resume talks",
        "January 27, 1973: Paris Peace Accords signed",
        "March 1973: Last American POWs released from Hanoi"
      ],
      whatPresidentKnew: "By December 31, Nixon knew the bombing had achieved its immediate objective: Hanoi had agreed to return to negotiations. He did not yet know whether the talks would succeed, what the final terms would look like, or whether South Vietnam could survive after American withdrawal. The POW release was not yet guaranteed.",
      quote: {
        text: "The bastards have never been bombed like they're going to be bombed this time.",
        attribution: "Richard Nixon to Henry Kissinger, December 14, 1972"
      }
    },
    signature: 'Dick'
  },
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
      background: "On December 7, 1941, Japan launched a surprise attack on the U.S. Pacific Fleet at Pearl Harbor, Hawaii. The attack killed 2,403 Americans, wounded 1,178 more, sank or damaged 19 ships, and destroyed 188 aircraft. The following day, President Roosevelt addressed Congress and requested a declaration of war. On December 11, Germany and Italy declared war on the United States, bringing America fully into the global conflict.",
      keyFacts: [
        "December 7, 1:47 PM ET: Roosevelt receives first word of the attack",
        "December 8: 'Day of Infamy' speech to Congress (6 minutes, ~500 words)",
        "December 8: Congress declares war on Japan (Senate 82-0, House 388-1)",
        "December 11: Germany and Italy declare war on the United States",
        "2,403 Americans killed; USS Arizona lost 1,177 crew",
        "Jeannette Rankin of Montana: sole vote against war declaration"
      ],
      whatPresidentKnew: "By December 18, Roosevelt understood the full political transformation Pearl Harbor had caused — the isolationist movement had collapsed overnight. He knew he now faced a two-front war after Germany's declaration. He did not yet know how long the war would last, how the early months would bring defeat after defeat in the Pacific, or the full cost that lay ahead.",
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
