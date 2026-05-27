const PLAN = [
  {
    week: 1,
    label: "Week 1",
    subtitle: "Find & Feel It",
    color: "#06b6d4",
    colorClass: "w1",
    days: [
      {
        day: 1,
        title: "Find Your Diaphragm",
        goal: "Learn what the diaphragm is and feel it move for the first time.",
        why: "Most people chest-breathe their whole lives. Before you can train it, you need to feel it.",
        blocks: [
          {
            icon: "🫁", name: "What Is the Diaphragm?", dur: "3 min",
            steps: [
              "Your diaphragm is a dome-shaped muscle sitting just below your lungs, above your stomach.",
              "When it contracts (moves DOWN), it creates a vacuum that pulls air into your lungs.",
              "When it relaxes (moves UP), it pushes air out.",
              "Chest breathing is shallow — it uses your neck and shoulder muscles. Diaphragm breathing is deep and effortless."
            ]
          },
          {
            icon: "🛏️", name: "The Lie-Down Test", dur: "5 min",
            steps: [
              "Lie flat on your back on a bed or floor.",
              "Place one hand on your chest, one hand on your belly button.",
              "Breathe normally for 30 seconds. Which hand moves more?",
              "If your chest hand moves — you're a chest breather. That's what we're fixing.",
              "Now consciously push your BELLY hand up on the inhale. Chest hand stays still.",
              "Do this 10 times slowly."
            ]
          },
          {
            icon: "📚", name: "Book on Belly Drill", dur: "7 min",
            steps: [
              "Still lying down — place a light book or water bottle on your belly.",
              "Goal: make the book RISE on inhale, FALL on exhale.",
              "Inhale through your nose for 4 counts. Watch the book rise.",
              "Exhale through your mouth for 6 counts. Watch the book fall.",
              "Do 10 slow rounds. Rest. Then 10 more.",
              "This is your new baseline. Everything in voice training builds from this."
            ]
          }
        ],
        video: { label: "Diaphragmatic Breathing Explained (Physio Tutorial)", url: "https://www.youtube.com/watch?v=EsPBnMDmQBY" },
        tip: "You can't feel something you've never paid attention to. Today is just about awareness — nothing more."
      },
      {
        day: 2,
        title: "Sitting Up Right",
        goal: "Transfer diaphragm breathing from lying down to sitting.",
        why: "Lying down is easy — gravity helps. Sitting is harder. This is where most people lose it.",
        blocks: [
          {
            icon: "🪑", name: "Posture Setup", dur: "3 min",
            steps: [
              "Sit upright in a chair — no slouching, no leaning back.",
              "Feet flat on the floor. Shoulders relaxed — not hunched, not forced back.",
              "Poor posture compresses your diaphragm. Good posture gives it room to move.",
              "Take 5 normal breaths. Notice: does your belly move or your chest?"
            ]
          },
          {
            icon: "🤲", name: "Hand-on-Belly Check", dur: "5 min",
            steps: [
              "Place one hand on your chest, one on your belly — same as Day 1.",
              "Repeat the belly breathing drill sitting up.",
              "Inhale 4 counts → belly pushes OUT against your hand.",
              "Exhale 6 counts → belly falls IN. Chest hand should barely move.",
              "Do 15 rounds. If your chest keeps rising — slow down until it clicks."
            ]
          },
          {
            icon: "🐍", name: "Hiss Exhale Drill", dur: "7 min",
            steps: [
              "Inhale deeply through your nose (belly out).",
              "Exhale SLOWLY through clenched teeth making a long 'ssssss' sound.",
              "Goal: make the hiss last 10 full seconds without running out of air.",
              "This forces you to control airflow with your diaphragm — not just dump air from your chest.",
              "Do 8 rounds. Rest 30 seconds between each.",
              "By round 8, aim for 12 seconds on the hiss."
            ]
          }
        ],
        video: { label: "Diaphragm Breathing for Singers & Speakers", url: "https://www.youtube.com/watch?v=kgTL5G1ibIo" },
        tip: "If your shoulders rise when you inhale, that's a chest breath. Reset and try again — slower."
      },
      {
        day: 3,
        title: "Breath Control & Duration",
        goal: "Build the ability to sustain airflow — the foundation of a strong voice.",
        why: "A voice that runs out of air sounds weak and rushed. Diaphragm control = breath that lasts.",
        blocks: [
          {
            icon: "⏱️", name: "Timed Exhale Baseline", dur: "3 min",
            steps: [
              "Take a full diaphragmatic inhale (belly out, 4 counts).",
              "Exhale as a slow, steady 'shhhh' sound.",
              "Time how long you can sustain it on one breath.",
              "Write that number down. This is your Day 3 baseline.",
              "Average beginner: 8–12 seconds. Goal by Day 14: 20+ seconds."
            ]
          },
          {
            icon: "🎵", name: "Sustained Vowel Tones", dur: "5 min",
            steps: [
              "Take a full belly inhale.",
              "Sustain the vowel 'AHH' for as long as possible on one breath.",
              "Keep the tone steady — no wobbling, no fading volume.",
              "Rest. Repeat with 'EEE', then 'OOO'.",
              "Key: feel vibration in your CHEST, not your throat. Throat tension = chest breathing."
            ]
          },
          {
            icon: "📏", name: "Breath Ladder", dur: "7 min",
            steps: [
              "Round 1: Inhale 4 counts → Exhale 4 counts.",
              "Round 2: Inhale 4 counts → Exhale 6 counts.",
              "Round 3: Inhale 4 counts → Exhale 8 counts.",
              "Round 4: Inhale 4 counts → Exhale 10 counts.",
              "Round 5: Inhale 4 counts → Exhale 12 counts.",
              "Do 2 sets of the full ladder. Rest 1 minute between sets."
            ]
          }
        ],
        video: { label: "Breath Support Exercises for Speaking Voice", url: "https://www.youtube.com/watch?v=Ja-ioAbFTKI" },
        tip: "Think of your diaphragm as a slow-release valve. You're training it to release air steadily — not all at once."
      },
      {
        day: 4,
        title: "Connect Breath to Voice",
        goal: "Use diaphragm support while actually speaking — not just breathing.",
        why: "Breathing drills are useless if they don't transfer to your spoken voice. Today we make the connection.",
        blocks: [
          {
            icon: "🔗", name: "Breath Before Speech", dur: "3 min",
            steps: [
              "Before saying anything today, take ONE full diaphragmatic breath.",
              "Feel your belly expand. Hold 1 second. Then speak on the exhale.",
              "Practice this routine with 5 simple sentences.",
              "Breathe → Say: 'My name is [your name] and I am confident.'",
              "Notice how the sentence sounds different when powered by breath vs. not."
            ]
          },
          {
            icon: "🎤", name: "Read Aloud on One Breath", dur: "5 min",
            steps: [
              "Find a sentence 10–15 words long in any article or book.",
              "Take a full belly inhale. Read the entire sentence on that one exhale.",
              "No gasping mid-sentence. No fading volume at the end.",
              "Do this with 6 sentences. Volume should stay even from first word to last.",
              "Fading at the end = running out of breath = chest breathing."
            ]
          },
          {
            icon: "📢", name: "Projection Drill", dur: "7 min",
            steps: [
              "Stand 8–10 feet from a wall.",
              "Take a deep belly inhale. Say a sentence and aim your voice AT the wall.",
              "The air from your diaphragm is what carries the sound across the room.",
              "Do NOT strain your throat. If your throat hurts, you're pushing wrong.",
              "Do 10 sentences. Each one fully supported, landing on the wall."
            ]
          }
        ],
        video: { label: "How to Project Your Voice Using Diaphragm", url: "https://www.youtube.com/watch?v=jAkDf0mMWW4" },
        tip: "Your voice is an instrument. The diaphragm is the bow. Without it, you're just plucking strings with no resonance."
      },
      {
        day: 5,
        title: "Breath Under Pressure",
        goal: "Maintain diaphragm breathing when you're nervous or talking fast.",
        why: "Nerves trigger chest breathing. This is why voices go thin and shaky when it matters most.",
        blocks: [
          {
            icon: "💓", name: "Anxiety Breath Reset", dur: "3 min",
            steps: [
              "This is your go-to reset before ANY high-stakes moment:",
              "Inhale through nose for 4 counts (belly out).",
              "Hold for 4 counts.",
              "Exhale through mouth for 8 counts (belly falls).",
              "Repeat 4 times. This physically lowers your heart rate.",
              "Memorize this. Use it before meetings, speeches, hard conversations."
            ]
          },
          {
            icon: "⚡", name: "Fast Talk Drill", dur: "5 min",
            steps: [
              "Read a paragraph aloud AS FAST AS YOU CAN for 30 seconds.",
              "Stop. Is your chest heaving? Did your breath go shallow?",
              "That's what happens under pressure.",
              "Now read the same paragraph at a normal pace — belly breath before every sentence.",
              "Speed is the enemy of diaphragm breathing. Slowing down restores it."
            ]
          },
          {
            icon: "🧠", name: "Impromptu Speaking Drill", dur: "7 min",
            steps: [
              "Set a 60-second timer. Speak on a random topic without stopping.",
              "Mid-speech rule: every time you naturally pause, take a belly breath — not a chest breath.",
              "Do 3 rounds on 3 different topics.",
              "After each round: was your breath supported or were you gasping?",
              "Record round 3. Listen back for breath sounds or rushed phrasing."
            ]
          }
        ],
        video: { label: "Diaphragmatic Breathing for Anxiety & Public Speaking", url: "https://www.youtube.com/watch?v=tybOi4hjZFQ" },
        tip: "The voice shakes when the breath shakes. Calm the breath first. The voice follows automatically."
      },
      {
        day: 6,
        title: "Full Integration",
        goal: "Chain everything together: posture, breath, tone, projection, speech.",
        why: "Skills practiced in isolation have to be stitched together before they become habits.",
        blocks: [
          {
            icon: "🔥", name: "Complete Warm-Up Sequence", dur: "5 min",
            steps: [
              "Step 1 — Belly breathing: 10 rounds (4 in, 6 out).",
              "Step 2 — Hiss exhale: 5 rounds (aim for 12+ seconds each).",
              "Step 3 — Sustained vowels: AHH, EEE, OOO — one breath each.",
              "Step 4 — Breath ladder: inhale 4, exhale 4 → 6 → 8 → 10.",
              "This sequence takes 5 minutes and primes every part of your vocal system."
            ]
          },
          {
            icon: "🗣️", name: "2-Minute Supported Talk", dur: "5 min",
            steps: [
              "Speak for 2 minutes on anything you know well.",
              "Rules: belly breath before EVERY sentence, no rushed phrasing, pause at natural breaks.",
              "Record it."
            ]
          },
          {
            icon: "🔎", name: "Breath Audit", dur: "5 min",
            steps: [
              "Play back the recording with eyes closed. Listen ONLY for breath.",
              "Do sentences fade at the end? (Not enough air)",
              "Do you hear gasping or gulping? (Chest breathing)",
              "Does the voice sound thin or strained? (No diaphragm support)",
              "Write 1 improvement from Day 1 and 1 thing still to fix."
            ]
          }
        ],
        video: { label: "Breath Support for Public Speaking (Full Guide)", url: "https://www.youtube.com/watch?v=kgTL5G1ibIo" },
        tip: "You're not trying to think about breathing while you speak forever. You're training it until it becomes automatic — like walking."
      },
      {
        day: 7,
        title: "Rest, Reflect & Reset",
        goal: "Let your body consolidate the new patterns. Prepare for Week 2.",
        why: "Physical skills are locked in during rest. This isn't optional — it's part of the training.",
        blocks: [
          {
            icon: "📓", name: "Week 1 Journal", dur: "5 min",
            steps: [
              "Answer these in writing:",
              "Day 1 vs. today — can you feel the difference in how you breathe?",
              "Which drill was hardest? Which felt most natural?",
              "What physical sensation tells you that you're breathing correctly?"
            ]
          },
          {
            icon: "🎧", name: "Listen to a Master", dur: "5 min",
            steps: [
              "Find a TEDx Talk or speech by someone whose voice you admire.",
              "Listen with headphones. Close your eyes.",
              "Notice: when do they breathe? How do they use pauses?",
              "You'll start hearing breath support in voices you never noticed before."
            ]
          },
          {
            icon: "🗓️", name: "Set Week 2 Intention", dur: "5 min",
            steps: [
              "Pick ONE diaphragm habit to carry into every real conversation next week:",
              "Option A: Take a belly breath before every sentence in meetings.",
              "Option B: Use the 4-4-8 anxiety reset before every phone call.",
              "Option C: Check your posture + belly every time you sit down to speak.",
              "Just one. Consistency beats complexity."
            ]
          }
        ],
        video: { label: "TEDx Talks — Listen for Breath Support", url: "https://www.youtube.com/@TEDx" },
        tip: "In one week you've done what most people never do — you've become aware of how you breathe. That awareness IS the skill."
      }
    ]
  },
  {
    week: 2,
    label: "Week 2",
    subtitle: "Build & Apply It",
    color: "#a78bfa",
    colorClass: "w2",
    days: [
      {
        day: 8,
        title: "Deeper Breath Capacity",
        goal: "Expand how much air you can take in and control on each breath.",
        why: "Week 1 built awareness. Week 2 builds horsepower. More air = more voice.",
        blocks: [
          {
            icon: "📊", name: "Baseline Retest", dur: "3 min",
            steps: [
              "Repeat your Day 3 timed exhale test.",
              "Full belly inhale → slow 'shhhh' exhale. Time it.",
              "Compare to your Day 3 number.",
              "Any improvement — even 1 second — means your diaphragm is already stronger.",
              "Write the new number down."
            ]
          },
          {
            icon: "🏔️", name: "Extended Breath Ladder", dur: "5 min",
            steps: [
              "This week we push further:",
              "Inhale 4 → Exhale 6",
              "Inhale 4 → Exhale 8",
              "Inhale 4 → Exhale 10",
              "Inhale 4 → Exhale 12",
              "Inhale 4 → Exhale 15",
              "Inhale 4 → Exhale 18",
              "Do 1 full set. If 18 feels impossible, hold at 15 and build up."
            ]
          },
          {
            icon: "🌊", name: "Wave Breathing", dur: "7 min",
            steps: [
              "Inhale slowly over 6 counts — fill from the bottom up: belly, then ribs, then upper chest.",
              "Hold 2 counts.",
              "Exhale over 8 counts from top down: upper chest, ribs, then belly pulls in last.",
              "This is 3-dimensional breathing. It maximizes lung capacity.",
              "Do 10 full wave breaths. This will feel almost meditative."
            ]
          }
        ],
        video: { label: "Diaphragmatic Breathing Explained (Physio Tutorial)", url: "https://www.youtube.com/watch?v=EsPBnMDmQBY" },
        tip: "You're not just expanding your breath — you're expanding your presence. People with big breath have big rooms."
      },
      {
        day: 9,
        title: "Resonance & Chest Voice",
        goal: "Move your voice from your throat into your chest where it belongs.",
        why: "A chest-resonant voice sounds warm, authoritative, and trustworthy. A throat voice sounds thin and strained.",
        blocks: [
          {
            icon: "🔔", name: "Find Your Chest Resonance", dur: "3 min",
            steps: [
              "Place your hand flat on your sternum (center of your chest).",
              "Hum at a low, comfortable pitch. Feel the vibration under your hand.",
              "No vibration? Your pitch is too high. Drop it lower until you feel the buzz.",
              "That buzz is chest resonance. This is what you want when you speak."
            ]
          },
          {
            icon: "🎸", name: "Chest Voice Activation", dur: "5 min",
            steps: [
              "Hum for 30 seconds — feel the chest vibration.",
              "Transition: 'mmm-AH' — opening the hum into a vowel.",
              "Then speak: 'My voice is full and supported.'",
              "Feel the vibration continue as you speak — not just as you hum.",
              "Do this sequence 6 times. Each time try to hold the resonance longer."
            ]
          },
          {
            icon: "📖", name: "Read Aloud in Chest Voice", dur: "7 min",
            steps: [
              "Find a paragraph in a book or article.",
              "Read it aloud at a slightly lower pitch than your normal speaking voice.",
              "Keep your hand on your chest — maintain that vibration throughout.",
              "If it shifts to your throat, stop, reset, and drop your pitch again.",
              "Record 2 minutes. Listen back: does it sound warmer and fuller?"
            ]
          }
        ],
        video: { label: "Breath Support Exercises for Speaking Voice", url: "https://www.youtube.com/watch?v=Ja-ioAbFTKI" },
        tip: "Most people speak from their throat because they were never told there's another option. Chest voice isn't loud — it's grounded."
      },
      {
        day: 10,
        title: "Breath Phrasing & Natural Pauses",
        goal: "Learn to breathe where punctuation lives — not in the middle of ideas.",
        why: "Awkward breathing breaks up your thoughts and confuses listeners. Strategic breath = smooth delivery.",
        blocks: [
          {
            icon: "✍️", name: "Mark Your Breath Points", dur: "3 min",
            steps: [
              "Take any paragraph — pull it up on your phone.",
              "Mark every comma and period with a slash: /",
              "These slashes are your breath points.",
              "You should ONLY breathe at the slashes — not mid-sentence.",
              "Read through it once identifying all the breathing spots."
            ]
          },
          {
            icon: "🎼", name: "Phrased Reading Drill", dur: "5 min",
            steps: [
              "Read the marked paragraph aloud.",
              "At every slash: complete the phrase, pause 1 second, take a quick belly breath, continue.",
              "The breath should be silent and invisible — no gasping, no audible inhale.",
              "A quick belly sniff through the nose refills you in under a second.",
              "Do the paragraph 3 times. Each time breathing should feel more natural."
            ]
          },
          {
            icon: "🗣️", name: "Phrased Speaking (No Script)", dur: "7 min",
            steps: [
              "Speak for 2 minutes on any topic — no script.",
              "Rule: only breathe at natural pause points. Never mid-thought.",
              "If you run out of air mid-sentence, you took too small a breath at the last pause.",
              "Record it. Does your breathing interrupt your ideas, or support them?"
            ]
          }
        ],
        video: { label: "How to Project Your Voice Using Diaphragm", url: "https://www.youtube.com/watch?v=jAkDf0mMWW4" },
        tip: "Where you breathe is where the listener's brain takes a beat. Make those pauses intentional and your speech becomes music."
      },
      {
        day: 11,
        title: "Volume Without Strain",
        goal: "Get louder without pushing from the throat — pure diaphragm power.",
        why: "Throat-driven volume causes vocal fatigue and cracking. Diaphragm volume is effortless and sustainable.",
        blocks: [
          {
            icon: "🚫", name: "The Throat Push Test", dur: "3 min",
            steps: [
              "Say a sentence loudly — the way you normally would when raising your voice.",
              "Put your hand on your throat. Feel any squeezing or tightening?",
              "That's throat pushing. It's the wrong source of volume.",
              "Now try again: same volume, but squeeze your abs slightly on the exhale.",
              "Volume comes from air pressure, not throat tension."
            ]
          },
          {
            icon: "📶", name: "Diaphragm Volume Ladder", dur: "5 min",
            steps: [
              "Say the same sentence at 5 increasing volumes, each powered by more belly — not more throat:",
              "1 — Quiet (across a table)",
              "2 — Normal (across a room)",
              "3 — Projected (to the back of a large room)",
              "4 — Commanding (imagine speaking to 50 people)",
              "5 — Full power (imagine 200 people)",
              "At every level: throat stays relaxed, abs engage slightly, chest stays open."
            ]
          },
          {
            icon: "🏟️", name: "Room Projection Drill", dur: "7 min",
            steps: [
              "Stand at one end of the largest room in your home.",
              "Take a full belly inhale.",
              "Speak a sentence and aim your voice at the far wall — not at your listener.",
              "Imagine your voice as a physical object traveling across the room.",
              "Do 10 sentences at projected volume. No throat strain. No shouting."
            ]
          }
        ],
        video: { label: "Diaphragm Breathing for Singers & Speakers", url: "https://www.youtube.com/watch?v=kgTL5G1ibIo" },
        tip: "Shouting is throat. Projecting is diaphragm. One exhausts you after 10 minutes. The other lets you speak for hours."
      },
      {
        day: 12,
        title: "Breath in Real Conversation",
        goal: "Use everything you've learned in actual back-and-forth dialogue.",
        why: "Drills in isolation are training wheels. Real conversation is the road.",
        blocks: [
          {
            icon: "🎯", name: "Pre-Conversation Ritual", dur: "3 min",
            steps: [
              "Before any conversation today, run your 30-second reset:",
              "3 deep belly breaths. Shoulders down. Chest open.",
              "Set your intention: 'I will breathe from my belly and speak from my chest.'",
              "This primes your nervous system before the words even start."
            ]
          },
          {
            icon: "💬", name: "Conversation Replay Drill", dur: "5 min",
            steps: [
              "Think of a conversation you had recently.",
              "Re-enact it out loud — your side only.",
              "This time: belly breath before each response, no rushing to fill silence.",
              "Notice: when you give the other person time to speak, you give yourself time to breathe.",
              "Talking less = breathing better = sounding more confident."
            ]
          },
          {
            icon: "📞", name: "Live Conversation Challenge", dur: "7 min",
            steps: [
              "Have ONE real conversation today (call a friend, talk to a coworker, anyone).",
              "Apply your three rules:",
              "1 — Belly breath before you respond.",
              "2 — Only breathe at natural pause points.",
              "3 — Keep your voice in your chest, not your throat.",
              "After: write down how it felt vs. your normal way of speaking."
            ]
          }
        ],
        video: { label: "Diaphragmatic Breathing for Anxiety & Public Speaking", url: "https://www.youtube.com/watch?v=tybOi4hjZFQ" },
        tip: "The goal was never to be perfect in drills. The goal is to be different in real life. Today is the real test."
      },
      {
        day: 13,
        title: "Articulation Powered by Breath",
        goal: "Use diaphragm support to make your words clearer and more precise.",
        why: "Breath is the foundation of articulation. Unsupported breath = lazy consonants and mumbled words.",
        blocks: [
          {
            icon: "👄", name: "Breath + Consonant Drill", dur: "3 min",
            steps: [
              "Say each consonant sound with a short burst of belly air behind it:",
              "P — B — T — D — K — G",
              "Each sound should have a tiny push of air from your core — not your throat.",
              "Weak consonants = too little air pressure. These drills fix that.",
              "Do each consonant 10 times with belly support."
            ]
          },
          {
            icon: "🌀", name: "Tongue Twisters with Breath", dur: "5 min",
            steps: [
              "Run tongue twisters with a full belly breath before each one:",
              "'Red lorry, yellow lorry' × 5",
              "'Unique New York, unique New York' × 5",
              "'She sells seashells by the seashore' × 5",
              "Notice: when fully supported by breath, your mouth moves faster and clearer."
            ]
          },
          {
            icon: "🎙️", name: "Supported Read-Aloud", dur: "7 min",
            steps: [
              "Read any 2–3 paragraph passage aloud at 80% of your normal pace.",
              "Full belly breath at every sentence break.",
              "Exaggerate your consonants slightly — let them land.",
              "Record the full passage.",
              "Listen back: is every word audible? Does nothing fade or blur?"
            ]
          }
        ],
        video: { label: "3-Step Exercise to Instantly Improve Articulation", url: "https://www.youtube.com/watch?v=S5f0FKhPax0" },
        tip: "Articulation without breath support is like trying to type with cold hands. Warm up the breath and the words flow."
      },
      {
        day: 14,
        title: "14-Day Graduation",
        goal: "Measure your total growth. Lock in your daily habits. Return to the Oratory Plan.",
        why: "Completion is its own teacher. You need to see how far you've come.",
        blocks: [
          {
            icon: "📊", name: "Day 3 vs. Day 14 Retest", dur: "5 min",
            steps: [
              "Run your timed exhale one final time: full belly inhale → 'shhhh' exhale. Time it.",
              "Compare to Day 3.",
              "Most people improve from 8–10 seconds to 18–22 seconds in two weeks.",
              "Write both numbers down side by side.",
              "That number is your diaphragm strength in seconds — and it grew."
            ]
          },
          {
            icon: "🎬", name: "Day 1 vs. Day 14 Recording Compare", dur: "5 min",
            steps: [
              "Pull up your Day 6 or earliest recording.",
              "Record yourself speaking for 2 minutes on the same topic today.",
              "Listen to both back to back.",
              "Write down 5 specific differences you hear: tone, steadiness, pace, projection, clarity.",
              "This is your proof."
            ]
          },
          {
            icon: "🚀", name: "Your Permanent Daily Stack", dur: "5 min",
            steps: [
              "These 3 habits take under 5 minutes and maintain everything you've built:",
              "Morning: 10 belly breaths + hiss exhale (2 min).",
              "Before any talk/call: 4-4-8 anxiety reset (30 seconds).",
              "Read aloud daily: any paragraph with full breath support (2 min).",
              "That's it. This is your foundation for life.",
              "Now go back to Day 1 of the Oratory Plan. You're ready."
            ]
          }
        ],
        video: { label: "Clear Speech Exercises (Playlist)", url: "https://www.youtube.com/playlist?list=PLv7CwM-F-vyK1vpLy-Vn3VARf8heGIrVA" },
        tip: "Two weeks ago you didn't know how to breathe. Now you have a skill most speakers never develop. The Oratory Plan is waiting — and it will feel completely different now."
      }
    ]
  }
];

const REWARDS = [
  { emoji: "🔥", title: "Day Complete!", msg: "Solid work. Your diaphragm is getting stronger with every session." },
  { emoji: "💪", title: "Crushed It!", msg: "Two days down. Your breath control is already improving. Keep the streak alive." },
  { emoji: "⚡", title: "On a Roll!", msg: "Three days in. Most people quit before now. You're not most people." },
  { emoji: "🎯", title: "Locked In!", msg: "Four days done. The habit is forming. Your voice is already changing." },
  { emoji: "🌊", title: "Flow State!", msg: "Day 5 complete. Halfway through Week 1. The foundation is building under you." },
  { emoji: "🏆", title: "Week Almost Done!", msg: "Day 6 finished. One more day and Week 1 is yours." },
  { emoji: "🎉", title: "Week 1 Complete!", msg: "Seven days of diaphragm work. Take a breath — you've earned the rest. Week 2 awaits." },
  { emoji: "🚀", title: "Week 2 Starts!", msg: "Day 8 done. This week we go deeper. Your body remembers everything from last week." },
  { emoji: "🔔", title: "Resonating!", msg: "Chest voice activated. You can literally feel the difference now." },
  { emoji: "🎼", title: "Finding the Music!", msg: "Day 10 — breath phrasing is the secret most speakers never learn. You have it now." },
  { emoji: "📶", title: "Power Up!", msg: "Volume without strain. This is what separates amateurs from orators." },
  { emoji: "💬", title: "Real World!", msg: "You took it into a live conversation. That's the whole point. Day 12 done." },
  { emoji: "🎙️", title: "Crystal Clear!", msg: "Articulation powered by breath. Day 13 in the books. One day left." },
  { emoji: "🏅", title: "14-Day Graduate!", msg: "You did it. Compare Day 1 to today — the difference is real. Now go crush the Oratory Plan." }
];
