/**
 * UPCOMING LETTERS — Not yet published
 *
 * These letters are ready but not yet live on the site.
 * To publish: move the letter object to letters.js
 *
 * SCHEDULED:
 * - Nixon: December 31, 2025 at 7am
 * - Washington: January 8, 2026 (or first week of January)
 * - JFK: ~January 21, 2026
 * - Reagan: ~January 28, 2026
 * - JQA: ~February 9, 2026
 * - Andrew Johnson: ~February 24, 2026
 */

export const upcomingLetters = [
  // Week 7: Andrew Johnson — PUBLISH ~FEB 24, 2026
  {
    id: 'week-7-ajohnson',
    week: 7,
    president: 'Andrew Johnson',
    writtenFrom: 'February 24, 1868',
    eventTitle: 'The House Votes to Impeach',
    subject: "They've Done It",
    letter: `My dear Sir,

Well, they've done it. Today the House has voted to impeach me.

You'd appreciate the numbers game they played: whips counting noses in cloakrooms, cowards ducking and hedging, radicals lining up to pull the trigger they've been itching to pull for two years. They call it a solemn constitutional duty; I call it what it is: a damned political ambush dressed up in legal language.

These men never forgave me for refusing to be their puppet. They passed that Tenure of Office Act not to uphold any principle, but to lay a trap. Dare me to remove Stanton, then howl that I've broken the law they wrote for that very purpose. They talk about "usurpation" while they reach both hands into the powers of the Presidency and try to rip them out by the roots.

You're a numbers man, so here are the numbers that matter to me: I never asked for this office. It was thrust upon me by an assassin's bullet, but I'll be damned if I surrender it to a mob. Eleven ex-Confederate states they would like to rule like conquered provinces. And thirty-six senators who now get to decide whether any President is allowed to stand up to a vindictive Congress again. They say this is about me and Stanton. That's bullshit. This is about whether the Executive is allowed to say "no" to the loudest faction in the Capitol.

I know what they say about me: that I'm coarse, that I drink, that I shoot my mouth off. Fine. I never pretended to be a polished gentleman. But I am damned if I'll sit here and watch Thaddeus Stevens and his crew tear up the Constitution in the name of "reconstruction" and obedience. They talk of law while they trample it; they talk of union while they run half the country like occupied territory.

If you were advising me, I suppose you'd tell me to stay on message, talk separation of powers, make this about preserving the office, not saving my own hide. I'll do some of that, because it's true: if they can throw me out for a political quarrel, every future President will govern with a knife at his throat whenever Congress gets the votes and the urge. But I won't pretend this isn't personal. They're not just after a theory of government; they're after Andrew Johnson, the tailor's son who wouldn't bow and scrape.

From here out it's a different kind of campaign. No torchlight parades, no county fairs. Just thirty-six men in the Senate, each one weighing whether he wants to go down in history as the one who killed the Presidency to please a mob. They will talk about "conscience" and "country" while counting editors, donors, and party bosses. You'd recognize the game instantly.

If I go down, I'll go down fighting, not begging. I'll call them what they are: hypocrites, fanatics, and power-hungry bastards. And I'll remind the country that today it's me, tomorrow it can be any President who won't lick the hand that holds the gavel.

That may not be pretty, but it's honest. And if there's anything I refuse to surrender to these men, it's the right to speak plainly.

Yours in a hard season,`,
    historicalContext: {
      background: "The impeachment of Andrew Johnson was the culmination of a two-year war between the President and the Radical Republicans in Congress over Reconstruction. Johnson, a Tennessee Democrat who had been Lincoln's running mate in 1864, favored a lenient approach to the defeated South. The Radical Republicans wanted to remake Southern society, protect the freed slaves, and punish the rebels. When Johnson vetoed bill after bill, Congress overrode him more times than any president in history. The Tenure of Office Act was their trap: it forbade the president from firing cabinet members without Senate approval. When Johnson fired Secretary of War Edwin Stanton anyway, the House had its grounds for impeachment.",
      keyFacts: [
        "Edwin Stanton barricaded himself in the War Department for nearly two months after Johnson fired him, sleeping on a couch and posting armed guards at the door",
        "Thaddeus Stevens, the driving force behind impeachment, was so ill he had to be carried to the Senate chamber in a chair by two younger men; he died four months after the trial ended",
        "The Senate printed 1,000 tickets each day to control the crush of spectators; newspaper coverage was relentless and public interest bordered on hysteria",
        "Johnson's attorney general, Henry Stanbery, resigned his post to lead the president's defense, believing the case important enough to sacrifice his own career",
        "Johnson never appeared at his own trial, though he gave press interviews throughout and quietly negotiated with senators behind the scenes",
        "The final vote was 35 to 19 for conviction, one vote short of the two-thirds needed to remove Johnson from office",
        "Seven Republican senators broke with their party to vote 'not guilty'; they became known as the 'Recusants' and most saw their political careers destroyed"
      ],
      whatPresidentKnew: "Johnson knew the impeachment was coming. He had been warned repeatedly that firing Stanton would trigger exactly this response, and he did it anyway, hoping to force a Supreme Court test of the Tenure of Office Act's constitutionality. What he did not know on February 24, 1868, was whether he would survive the trial. The Republicans held more than two-thirds of the Senate. His only hope was that a handful of moderates would decide that removing a president over a policy dispute set a dangerous precedent. Johnson also knew his own combative instincts had hurt him: his rambling, sometimes drunken speeches during the 1866 midterms, in which he compared himself to Christ and called for a congressman to be hanged, had turned public opinion against him. During the trial, he forced himself to stay quiet, a discipline that did not come naturally.",
      quote: {
        text: "I have been almost literally tortured. I have suffered more in mind perhaps than any man who has held the office of President.",
        attribution: "Andrew Johnson, reflecting on the impeachment"
      }
    },
    signature: 'Andrew Johnson'
  },

  // Week 6: John Quincy Adams — PUBLISH ~FEB 9, 2026
  {
    id: 'week-6-jqadams',
    week: 6,
    president: 'John Quincy Adams',
    writtenFrom: 'February 9, 1825',
    eventTitle: 'The House Elects John Quincy Adams President',
    subject: "Less Chosen Than Appointed",
    letter: `Dear Jim,

I have just returned from Federal Hall, and my hand trembles as I write — not from cold, though the February night is bitter, but from the enormity of what has transpired. Louisa has been magnificent all day, but she has at last retired, and I find myself alone with my thoughts and my diary. Tonight, however, the diary will not suffice. I require a friend who understands the peculiar burdens of political life — and so I write to you.

The House of Representatives has chosen me to be the sixth President of the United States.

I should feel triumph. I feel something closer to dread.

You will have heard the particulars by now. Jackson received the most popular votes. Jackson received the most electoral votes. And yet here I sit, President-elect, because the Constitution sent the question to the House, and because Henry Clay determined that his support should rest with me rather than with the General from Tennessee. Thirteen states for Adams. Seven for Jackson. Four for Crawford. A majority, perfectly legal, and entirely insufficient to silence the whispers that have already begun.

They are calling it a "corrupt bargain," Jim. Jackson's people are saying I traded the State Department for the Presidency — that Clay sold his influence and I bought it. There was no such bargain. I give you my word as a gentleman that Henry and I made no arrangement of the kind. But when I offer Clay the position — as I almost certainly must, for he is the most qualified man for it — who will believe me? The accusation will follow me into the grave.

I am a minority President, my friend. I know it. The country knows it. And Jackson, who sits tonight in his rooms convinced that the people's will has been thwarted, will spend the next four years making certain no one forgets.

You know what this is, Jim. You have maneuvered through political terrain where every decision invites suspicion, where your motives are questioned no matter how pure they may be. You have been called things I will not repeat in writing. And yet you persist. You do the work, absorb the criticism, and keep your eye fixed on what must be accomplished. I confess I do not know how you manage it with such equanimity.

I watched what the Presidency did to my father. He gave everything to this country — his health, his fortune, his peace of mind — and the people turned him out after a single term. He went home to Quincy convinced that his sacrifices had been forgotten. I remember the look on his face. He told me his shoulders felt relieved of a burden, but I knew him too well to believe it entirely.

Jackson will not rest. His people are already sharpening their knives. I may well follow my father's path — one term and out, the Adams inheritance.

You have a quality I lack, Jim. You can take a blow and get back to work without brooding over the injustice of it. I am told I have a cold and forbidding manner, that I am an unsocial creature ill-suited to democratic politics. My diary agrees with this assessment. The people wanted a General; they will receive a scholar. I suspect they will resent the substitution.

Perhaps they are right to. Perhaps I am not the man for this moment. But I am the man who was chosen, however imperfectly, and I will not pretend otherwise. History will render its verdict. I can only hope to give it something worth judging.

Louisa asks me to convey her warm regards to you and to Taya.

I remain, with sincere esteem and the warmest regard, ever faithfully your friend,`,
    historicalContext: {
      background: "The election of 1824 was the first in American history where no candidate won a majority of electoral votes, throwing the decision to the House of Representatives under the Twelfth Amendment. It was also the first election where the popular vote was widely recorded — and the first where the winner of that vote did not become president. The Constitution limited the House to choosing among the top three electoral vote-getters, which eliminated fourth-place finisher Henry Clay. But as Speaker of the House, Clay controlled the outcome anyway.",
      keyFacts: [
        "The House vote took place during a blizzard so severe that many representatives struggled to reach the Capitol; one congressman from North Carolina arrived just minutes before the roll was called",
        "Each state delegation cast a single vote — meaning tiny Delaware had equal weight with populous New York",
        "Stephen Van Rensselaer, a New York congressman, reportedly couldn't decide how to vote, bowed his head in prayer, opened his eyes, saw an Adams ballot on the floor, and took it as a sign from God",
        "Clay had received instructions from the Kentucky legislature to support Jackson, but ignored them and delivered Kentucky's vote to Adams anyway",
        "Jackson won the popular vote by more than 41,000 ballots — a margin that would be considered a landslide in modern elections",
        "When the result was announced, a Jackson supporter shouted from the gallery: 'It is enough — the deed is done!' and had to be escorted out",
        "No presidential election has been decided by the House of Representatives since"
      ],
      whatPresidentKnew: "Adams understood the precariousness of his position better than anyone. In his diary, he had written during the campaign: 'It seems as if every liar and calumniator in the Country was at work day and night to destroy my character.' He knew that appointing Clay as Secretary of State — then considered the stepping-stone to the presidency — would confirm every suspicion. But Clay was genuinely his first choice for the role, and Adams refused to let the appearance of impropriety dictate his Cabinet. 'I determined to give him the place,' Adams later wrote, describing the decision as one of 'duty' rather than payment. Historians have found no evidence of an explicit deal, but the political damage was done the moment Clay's name was announced.",
      quote: {
        text: "May the blessing of God rest upon the event of this day!",
        attribution: "John Quincy Adams, diary entry, February 9, 1825"
      }
    },
    signature: 'John Quincy Adams'
  },

  // Week 5: Reagan — PUBLISH ~JAN 28, 2026
  {
    id: 'week-5-reagan',
    week: 5,
    president: 'Ronald Reagan',
    writtenFrom: 'January 28, 1986',
    eventTitle: 'The Challenger Disaster',
    subject: "Finding the Words",
    letter: `Dear Jim,

I've been wanting to write to you all day but couldn't find the words until now. I'm not sure I've found them yet, but I'm going to try.

You've seen what happened. The whole world has. Seventy-three seconds after launch, and they were gone — all seven of them. I've been turning it over in my mind for hours, trying to understand something that doesn't make sense. Christa McAuliffe was going to teach a lesson from space. Every classroom in America was watching. Every child saw it happen.

I was supposed to give the State of the Union tonight. We postponed it — first time that's ever been done, they tell me. It didn't feel like a decision. It was just the only decent thing to do.

I spoke to the country a few hours ago. Peggy Noonan wrote it for me — you'd like her, she's got a sharp mind and knows how to cut through the noise. She ended it with lines from a poem called "High Flight," written by a young pilot who died in the war: "slipped the surly bonds of earth to touch the face of God." I used to read that poem on a plaque outside Patti's school when I'd drop her off in the mornings. Strange, the things that stay with you. I wasn't sure about using it — felt like it might be reaching for something. But sometimes when there's nothing adequate to say, you have to reach.

Here's what I keep thinking about, Jim: How do you talk to a country that just watched seven people die on live television? I had to speak to the children who lost their teacher and to the NASA engineers who are already blaming themselves, all in the same five minutes. I had to find words for the eight-year-old and the eighty-year-old in the same breath, without talking down to either one. There's no playbook for that. You just stand there and hope something true comes out.

You know, we've sparred plenty over the years. You're a Democrat down to your bones, and I suspect nothing I do will ever change that. But I've noticed something about you — when things go sideways, you don't disappear. You show up. You roll up your sleeves and figure out what needs doing. That's rarer than it should be. Most people are only around for the easy days.

There will be investigations. There should be. But tonight I just want to remember their names: Dick Scobee, Michael Smith, Judith Resnik, Ellison Onizuka, Ronald McNair, Gregory Jarvis, and Christa McAuliffe. They climbed into that shuttle because they believed in something.

Tomorrow the questions start. Tonight, we just grieve. But tomorrow I'll get up and do this job again, because that's what the job requires. The country needs to see that we go on.

Write when you get a chance.

Warmly,`,
    historicalContext: {
      background: "The Space Shuttle Challenger disaster on January 28, 1986, was one of the most watched tragedies in American history. NASA had invited Christa McAuliffe, a high school social studies teacher from Concord, New Hampshire, to be the first private citizen in space as part of the Teacher in Space Project. Because of her presence, schools across America had set up televisions so students could watch the launch live. An estimated 17% of Americans — and millions of schoolchildren — witnessed the shuttle break apart 73 seconds after liftoff.",
      keyFacts: [
        "The Challenger crew included five NASA astronauts and two payload specialists: Commander Dick Scobee, Pilot Michael Smith, Mission Specialists Judith Resnik, Ellison Onizuka, and Ronald McNair, and Payload Specialists Gregory Jarvis and Christa McAuliffe",
        "The disaster was caused by the failure of an O-ring seal in the right solid rocket booster, which had become brittle in the unusually cold Florida weather that morning (36°F at launch)",
        "Engineer Roger Boisjoly of Morton Thiokol had warned NASA the night before that the O-rings could fail in cold temperatures — his concerns were overruled",
        "The speech Reagan delivered that evening was written by Peggy Noonan, then a relatively unknown White House speechwriter, in just a few hours",
        "Reagan was initially skeptical of Noonan's closing lines from the poem 'High Flight' — the next morning he called her and said Frank Sinatra had phoned to praise the speech, adding 'and Frank doesn't call after every speech'",
        "Three days later, Reagan and Nancy traveled to Houston for a memorial service at the Johnson Space Center, where T-38 jets flew overhead in the missing man formation"
      ],
      whatPresidentKnew: "When the news reached Reagan, his 'eyes went wide, his mouth opened in total surprise,' according to Cabinet Secretary Alfred Kingon. Reagan and his staff gathered around a television in stunned silence, watching the footage replay again and again. He later called it 'a very traumatic experience.' Reagan faced a unique challenge: he had to address both grieving adults and the millions of children who had just watched their teacher die on live television. Noonan later said Reagan had to 'speak to the nation's kids while saying what was appropriate to adults... to those who were 8 and those who were 80, without patronizing anyone.' There were also questions — never proven — about whether White House pressure to launch before the State of the Union had contributed to NASA's decision to proceed despite the cold weather.",
      quote: {
        text: "The crew of the space shuttle Challenger honored us by the manner in which they lived their lives. We will never forget them, nor the last time we saw them, this morning, as they prepared for their journey and waved goodbye and 'slipped the surly bonds of earth' to 'touch the face of God.'",
        attribution: "Ronald Reagan, Address to the Nation, January 28, 1986"
      }
    },
    signature: 'Ron'
  },

  // Week 4: JFK — PUBLISH ~JAN 21, 2026
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

What I learned is that I need people around me who know what struggle actually looks like. Not from textbooks, not from briefings — from life. You're one of those people, Jim. You didn't inherit your place at the table. You fought your way there, and you remember what it's like when the rent is due and you're not sure how to make it. That kind of memory doesn't leave a person. It shapes how you see the world, who you fight for, what you're willing to do. I admire it more than I can properly express — because I don't have it, and I know that's a blind spot.

"Ask not what your country can do for you — ask what you can do for your country." I meant every word. But I'll confess to you what I can't say publicly: the people who need to hear that message most are people like me, not people like you. You've been asking what you can do for others your whole life. That's not rhetoric for you. It's just Tuesday.

I don't know what the next four years will bring. There will be crises I can't foresee and decisions that will keep me up at night. But I believe we have a real chance to do something meaningful — not just for the people who already have everything, but for the ones who've been forgotten. The ones I met in West Virginia. That executive order is the first step. There will be more.

Write when you can. I want the unfiltered version — not what people think the President wants to hear.

Yours,`,
    historicalContext: {
      background: "John F. Kennedy's inauguration on January 20, 1961, was a triumph of logistics over weather. A major winter storm had dumped eight inches of snow on Washington the night before, nearly canceling the ceremony. The Army Corps of Engineers, over 1,000 city workers, and 1,700 Boy Scouts worked through the night with plows, dump trucks, and flamethrowers to clear Pennsylvania Avenue. By morning, the skies had cleared but temperatures hovered around 20°F. Nearly one million people braved the cold to witness Kennedy take the oath — the youngest man ever elected to the presidency, and the first Catholic.",
      keyFacts: [
        "Robert Frost, 86 years old, was the first poet ever invited to speak at a presidential inauguration — he had written a new poem called 'Dedication' for the occasion but couldn't read it due to the blinding sun glare off the snow",
        "Vice President Lyndon Johnson tried to shield Frost's paper with his top hat, but it didn't help — Frost abandoned the new poem and recited 'The Gift Outright' from memory instead",
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


  // Week 3: Washington — PUBLISH ~JAN 7-8, 2026
  {
    id: 'week-3-washington',
    week: 3,
    president: 'George Washington',
    writtenFrom: 'January 8, 1790',
    eventTitle: 'After the First State of the Union Address',
    subject: "The Burdens of This Station",
    letter: \`My dear Sir,

Your letter of the 20th of last month came safely to hand, and I cannot tell you what comfort it brought me. In these early days of this new Government, when every man seems to want something from the President, it is a rare blessing to hear from one who asks nothing but to know how I fare. You are a true friend, and I do not use that word lightly.

It is now past ten o'clock, and Martha has at last retir'd after what I can only describe as a most fatiguing day — tho' she bore it, as she bears all things, with a patience and grace that puts my own endurance to shame. I find myself unable to seek the same repose, and so I take up my pen to continue our correspondence while the house is quiet and my thoughts are my own.

This morning I stood before the Congress assembled in Federal Hall and deliver'd what they are calling an Annual Address — a thing unprecedented, for which there existed no model nor precedent to guide me. I confess to you, my dear Sir, that I approach'd the occasion with all the reluctance of a culprit going to his execution. You will think I exaggerate, but I assure you upon my honour that I do not. The eyes of the Nation, and indeed of the World, were fix'd upon that chamber, and I felt the weight of every one of them.

The Address itself went tolerably well, I am told. I spoke of the militia, of manufactures, of the naturalization of foreigners, of weights and measures — matters of governance that must be attended to if this experiment in republican government is to succeed. Yet even as I spoke, I could not escape the sensation that I was venturing upon an untrodden ground, where a single misstep might prove ruinous to all we have laboured to build.

You know, my dear friend, that I accepted this office with the greatest reluctance, having bid farewell to all expectations of private happiness in this world. Mount Vernon calls to me in every quiet moment — the Potomack, the fields, the simple rhythms of a planter's life. In a few months the shad and herring will be running, and I confess there are mornings when I would trade all the honours of this office for a day on the river with a fishing line. You must come to Mount Vernon when the spring arrives, my friend — I should dearly love to take you out on the water, and to have your counsel on these matters away from the ceremonies and formalities of this city. And yet here I remain for now, bound by a sense of duty that will not release me, tho' I sometimes wonder if I have not sacrific'd more than any man ought to sacrifice for his country.

What troubles me most, and what I would confide only to one such as yourself, is the fragility of this Union we have labour'd so hard to build. North Carolina has at last join'd us — thank Providence — but Rhode Island remains obstinate, and there is talk in Congress of imposing sanctions to compel her cooperation. Imagine it, my friend: we fought a war to unite thirteen colonies against tyranny, and now we must threaten one of our own with isolation to bring her into the fold. You, who have navigated the treacherous waters of political life with such skill, will understand my apprehension. If we cannot hold together eleven states and persuade a twelfth, what hope have we of enduring?

There is something else I must own to you. I find the demands of this office more burdensome than anything I encounter'd during the War. In the field, the enemy was visible, the objective clear. Here, every decision invites criticism from one quarter or another, and there are days when I question whether I possess the faculties equal to the task. I tell you this not to invite your pity, but because I know you will keep my confidence, and because there is a relief in speaking plainly to a friend that no public ceremony can provide.

Martha sends her warmest regards. She bids me tell you that you must visit us when your affairs permit, that we might enjoy an evening of conversation unclouded by the ceremonies that attend our present situation.

I remain, with sentiments of sincere esteem and friendship,

Your most Obedt. & Affecte. Hble Servant,\`,
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

  // Week 2: Nixon — PUBLISH DEC 31, 2025
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
  }
];
