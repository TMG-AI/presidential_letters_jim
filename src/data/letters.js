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
  // Week 4: JFK (most recently posted)
  {
    id: 'week-4-jfk',
    week: 4,
    president: 'John F. Kennedy',
    writtenFrom: 'January 21, 1961',
    eventTitle: 'The Morning After the Inauguration',
    subject: "Before the Machinery Takes Over",
    letter: `Dear Jim,

The house is quiet. Jackie is still asleep — she earned it after yesterday — and the children won't stir for another hour. I've been up since before dawn, which surprises no one more than me given when I finally got to bed. But sleep wouldn't come. My mind keeps turning over everything that happened, and everything that's about to happen.

I wanted to write to you before the machinery of this office takes over.

Yesterday was unlike anything I could have imagined. The snow nearly wrecked the whole affair — they had Army engineers and Boy Scouts out before dawn, clearing Pennsylvania Avenue with flamethrowers and plows. And then the sun came out, so bright off the snow that poor Robert Frost couldn't read the poem he'd written for the occasion. He's eighty-six years old, squinting at the page while Lyndon tried to shield it with his top hat. It was no use. So Frost set the paper aside and recited "The Gift Outright" from memory instead. An old man summoning the words without a net. I'll remember that moment for the rest of my life.

In an hour I'm signing my first executive order. We're doubling the surplus food distributed to families in need. It's not enough — it's never enough — but it's a start, and it's the first thing I wanted to do. You know why.

West Virginia. I went there during the primary expecting to understand something about this country, and I discovered I understood almost nothing. I met families living in conditions I couldn't have imagined existed in America — coal miners thrown out of work, surviving on government surplus, children who looked hungry. There I was, a Harvard man in a pressed suit, asking for their votes. I felt like a fraud until I stopped talking and started listening.

What I learned is that I need people around me who know what struggle actually looks like. Not from textbooks, not from briefings — from life. You're one of those people, Jim. You didn't inherit your place at the table. You fought your way there. That shapes how you see the world, who you fight for, what you're willing to do. I admire it more than I can properly express — because I don't have it, and I know that's a blind spot.

"Ask not what your country can do for you — ask what you can do for your country." I meant every word. But I'll confess to you what I can't say publicly: the people who need to hear that message most are people like me, not people like you. You've been asking what you can do for others your whole life. That's not rhetoric for you. It's just Tuesday.

I don't know what the next four years will bring. There will be crises I can't foresee and decisions that will keep me up at night. But I believe we have a real chance to do something meaningful — not just for the people who already have everything, but for the ones who've been forgotten. The ones I met in West Virginia. That executive order is the first step. There will be more.

Write when you can. I want the unfiltered version — not what people think the President wants to hear.

Yours,`,
    historicalContext: {
      background: "John F. Kennedy's inauguration on January 20, 1961, was a triumph of logistics over weather. A major winter storm had dumped eight inches of snow on Washington the night before, nearly canceling the ceremony. The Army Corps of Engineers, over 1,000 city workers, and 1,700 Boy Scouts worked through the night with plows, dump trucks, and flamethrowers to clear Pennsylvania Avenue. By morning, the skies had cleared but temperatures hovered around 20°F. Nearly one million people braved the cold to witness Kennedy take the oath — the youngest man ever elected to the presidency, and the first Catholic.",
      keyFacts: [
        "Robert Frost, 86 years old, was the first poet ever invited to speak at a presidential inauguration — he had written a new poem called 'Dedication' for the occasion but couldn't read it due to the blinding sun glare off the snow",
        "Kennedy's famous 'Ask not' line was inspired by his old headmaster at Choate, who often said: 'Ask not what Choate can do for you, but what you can do for Choate'",
        "The night before, Frank Sinatra and Peter Lawford produced a star-studded inaugural gala; Kennedy stayed out until nearly 4:00 a.m. on inauguration morning",
        "Jackie Kennedy, exhausted and still recovering from John Jr.'s birth two months earlier, left the inaugural balls early; JFK continued to a party hosted by his father and didn't return to the White House until 3:30 a.m.",
        "Kennedy's first act as president the next morning was to sign Executive Order 10914, doubling the surplus food distributed to needy families — a direct result of what he'd witnessed in West Virginia",
        "The West Virginia primary had been a turning point: Kennedy, who admitted he'd 'barely ever seen poverty before,' was shocked by conditions in Appalachian mining towns and later credited the experience with shaping his domestic agenda"
      ],
      whatPresidentKnew: "Kennedy understood he had won one of the closest elections in American history — just 112,000 votes separated him from Nixon out of nearly 69 million cast. He knew half the country doubted whether a 43-year-old Catholic could handle the job. In private, he was already consumed by foreign policy crises: the deteriorating situation in Laos, tensions with the Soviet Union, and a CIA plan (inherited from Eisenhower) to use Cuban exiles to overthrow Fidel Castro. He did not yet know that plan would become the Bay of Pigs disaster in just three months. On the morning of January 21, as he looked out at the snow-covered South Lawn, he was still riding the high of the inauguration — but the weight of the office was already settling in.",
      quote: {
        text: "Ask not what your country can do for you — ask what you can do for your country.",
        attribution: "John F. Kennedy, Inaugural Address, January 20, 1961"
      }
    },
    signature: 'Jack'
  },

  // Week 3: Washington
  {
    id: 'week-3-washington',
    week: 3,
    president: 'George Washington',
    writtenFrom: 'January 8, 1790',
    eventTitle: 'After the First State of the Union Address',
    subject: "The Burdens of This Station",
    letter: `My dear Sir,

Your letter of the 20th of last month came safely to hand, and I cannot tell you what comfort it brought me. In these early days of this new Government, when every man seems to want something from the President, it is a rare blessing to hear from one who asks nothing but to know how I fare. You are a true friend, and I do not use that word lightly.

It is now past ten o'clock, and Martha has at last retir'd after what I can only describe as a most fatiguing day — tho' she bore it, as she bears all things, with a patience and grace that puts my own endurance to shame. I find myself unable to seek the same repose, and so I take up my pen to continue our correspondence while the house is quiet and my thoughts are my own.

This morning I stood before the Congress assembled in Federal Hall and deliver'd what they are calling an Annual Address — a thing unprecedented, for which there existed no model nor precedent to guide me. I confess to you, my dear Sir, that I approach'd the occasion with all the reluctance of a culprit going to his execution. You will think I exaggerate, but I assure you upon my honour that I do not. The eyes of the Nation, and indeed of the World, were fix'd upon that chamber, and I felt the weight of every one of them.

The Address itself went tolerably well, I am told. I spoke of the militia, of manufactures, of the naturalization of foreigners, of weights and measures — matters of governance that must be attended to if this experiment in republican government is to succeed. Yet even as I spoke, I could not escape the sensation that I was venturing upon an untrodden ground, where a single misstep might prove ruinous to all we have laboured to build.

You know, my dear friend, that I accepted this office with the greatest reluctance, having bid farewell to all expectations of private happiness in this world. Mount Vernon calls to me in every quiet moment — the Potomack, the fields, the simple rhythms of a planter's life. In a few months the shad and herring will be running, and I confess there are mornings when I would trade all the honours of this office for a day on the river with a fishing line. You must come to Mount Vernon when the spring arrives, my friend — I should dearly love to take you out on the water, and to have your counsel on these matters away from the ceremonies and formalities of this city. And yet here I remain for now, bound by a sense of duty that will not release me, tho' I sometimes wonder if I have not sacrific'd more than any man ought to sacrifice for his country.

What troubles me most, and what I would confide only to one such as yourself, is the fragility of this Union we have labour'd so hard to build. North Carolina has at last join'd us — thank Providence — but Rhode Island remains obstinate, and there is talk in Congress of imposing sanctions to compel her cooperation. Imagine it, my friend: we fought a war to unite thirteen colonies against tyranny, and now we must threaten one of our own with isolation to bring her into the fold. You, who have navigated the treacherous waters of political life with such skill, will understand my apprehension. If we cannot hold together eleven states and persuade a twelfth, what hope have we of enduring?

There is something else I must own to you. I find the demands of this office more burdensome than anything I encounter'd during the War. In the field, the enemy was visible, the objective clear. Here, every decision invites criticism from one quarter or another, and there are days when I question whether I possess the faculties equal to the task. I tell you this not to invite your pity, but because I know you will keep my confidence, and because there is a relief in speaking plainly to a friend that no public ceremony can provide.

Martha sends her warmest regards. She bids me tell you that you must visit us when your affairs permit, that we might enjoy an evening of conversation unclouded by the ceremonies that attend our present situation.

I remain, with sentiments of sincere esteem and friendship,

Your most Obedt. & Affecte. Hble Servant,`,
    historicalContext: {
      background: "Washington delivered the first-ever State of the Union address to a joint session of Congress in Federal Hall, New York City. The Constitution required only that the President 'shall from time to time give to the Congress Information of the State of the Union' — it said nothing about how. Washington chose to appear in person, setting a precedent that would last until Jefferson ended the practice in 1801, considering it too monarchical. The personal address tradition was revived by Woodrow Wilson in 1913.",
      keyFacts: [
        "Federal Hall was a hastily renovated city hall — the Senate chamber where Washington spoke had been a courtroom just months before",
        "Washington wore a suit of brown American-made cloth to promote domestic manufactures — a political statement in an era of British imports",
        "The address lasted about 10 minutes — the shortest State of the Union in history",
        "Congress formally replied to Washington's address, and Washington then replied to their reply — a cumbersome tradition quickly abandoned",
        "Vice President John Adams presided over the Senate, unsure of proper protocol; he had spent weeks debating what title to give Washington",
        "Washington had been inaugurated only 8 months earlier, on April 30, 1789, on the same balcony of Federal Hall",
        "The new government was so fragile that only 11 of 13 states had ratified the Constitution — North Carolina joined just two months before, Rhode Island still held out"
      ],
      whatPresidentKnew: "Washington's private letters reveal genuine anguish about accepting the presidency. To Henry Knox, he confessed he approached the inauguration 'with feelings not unlike those of a culprit who is going to his place of execution.' To Edward Rutledge, he wrote of having 'bid adieu to all expectations of private happiness in this world.' His diaries from this period show a man consumed by protocol questions: How should he receive visitors? Should he attend private dinners? He feared that every decision would set a precedent — and he was right.",
      quote: {
        text: "I walk on untrodden ground. There is scarcely any part of my conduct which may not hereafter be drawn into precedent.",
        attribution: "George Washington, January 1790"
      }
    },
    signature: 'G. Washington'
  },

  // Week 2: Nixon
  {
    id: 'week-2-nixon',
    week: 2,
    president: 'Richard Nixon',
    writtenFrom: 'December 31, 1972',
    eventTitle: 'After the Christmas Bombing',
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
      background: "The North Vietnamese called it 'Dien Bien Phu of the air' — invoking their legendary 1954 victory over France that ended colonial rule. American newspaper headlines were brutal: 'Genocide,' 'Stone-Age Barbarism,' 'Savage and Senseless.' The New York Times accused Nixon of 'disregard of humanitarian principles'; columnist James Reston called it 'war by tantrum.' Sweden's Prime Minister Olof Palme compared it to Guernica, Treblinka, and the massacre at Katyn — the U.S. withdrew its ambassador in response.",
      keyFacts: [
        "North Vietnam had prepared: after studying American tactics for months, they published a manual called 'How to Fight the B-52' and distributed it to all missile units",
        "On the first night alone, North Vietnam fired 200 surface-to-air missiles — crews said they looked like 'telephone poles with lights' illuminating the night sky",
        "Bach Mai hospital was hit by a wayward string of bombs, killing 28 doctors and nurses — it became a rallying point for peace activists worldwide",
        "At least 1,624 North Vietnamese civilians were killed in the 11-day campaign",
        "CBS gave six times as much airtime to critics as supporters; the New York Times ratio was 19-to-1 against; the Washington Post, 25-to-1",
        "Nixon refused to explain the bombing to the American people — speechwriter Ray Price later said 'He thought it was diplomatically vital that he make this look as cold an operation as possible'",
        "Of 92 American crewmen shot down, 26 were rescued, 33 captured, and 33 killed"
      ],
      whatPresidentKnew: "Nixon knew the bombing would be controversial, but the White House tapes reveal how little the civilian cost weighed on him. When Kissinger raised concerns about casualties earlier that year, Nixon replied: 'I don't give a damn. I don't care.' In June 1972, when the famous napalm photo of children fleeing an attack was published, Nixon discussed it coldly with Haldeman, more concerned with whether it was staged than with the suffering it depicted. By December 31, he knew Hanoi had agreed to return to talks — but not whether the terms would hold or what the final agreement would look like.",
      quote: {
        text: "The bastards have never been bombed like they're going to be bombed this time.",
        attribution: "Richard Nixon to Henry Kissinger, December 14, 1972"
      }
    },
    signature: 'Dick'
  },

  // Week 1: FDR (first letter posted)
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
