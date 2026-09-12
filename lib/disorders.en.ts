import type { Disorder } from "./disorders";

export const disordersEn: Disorder[] = [
  {
    slug: "aypnia-eleysis",
    nav: "Sleep-onset insomnia",
    title: "Sleep-onset insomnia",
    short:
      "You lie down and sleep does not come. The time it takes you to fall asleep is consistently over 20–30 minutes.",
    lede: "The most common form of insomnia, and the one most directly tied to hyperarousal: the body is tired, but the mind refuses to slow down at precisely the moment you need it to.",
    what: [
      "It is defined as a consistent delay in sleep onset beyond 20–30 minutes, after you have gone to bed intending to sleep and in conditions that allow it.",
      "In most cases this is not a lack of tiredness but hyperarousal: the alerting system stays switched on when it should be winding down. Waiting for sleep becomes a source of tension in itself.",
      "A hallmark is the «second wind»: you doze off on the sofa, you go to bed, and the sleepiness vanishes. That is no coincidence — it is a learned association between the bed and being awake.",
    ],
    signs: [
      "More than 20–30 minutes to fall asleep, most nights",
      "Thoughts that start racing the moment the light goes off",
      "Sleepiness before bed that disappears once you lie down",
      "Clock-watching and counting the hours you have left",
      "Anxiety about the night that begins as early as the afternoon",
    ],
    treatment: [
      "Stimulus control: the bed is reconnected with sleep and nothing else. You go to bed only when genuinely sleepy, and if sleep does not come, you get up.",
      "Sleep restriction, so that homeostatic sleep pressure rises and sleepiness appears where it should.",
      "Arousal-reduction techniques and a structured «worry time» earlier in the day, so thoughts are not carried to bed.",
      "Cognitive work on effort: the harder you try to sleep, the more awake you become. Letting go of the effort is itself therapeutic.",
    ],
  },
  {
    slug: "aypnia-diatirisis",
    nav: "Sleep-maintenance insomnia",
    title: "Sleep-maintenance insomnia",
    short:
      "You fall asleep, but you wake during the night and struggle to get back to sleep.",
    lede: "This is the form that demands the most care in differential diagnosis: very often a sleep-related breathing disorder is hiding behind it, not insomnia.",
    what: [
      "Sleep arrives normally but is interrupted once or more during the night, with difficulty returning to sleep that exceeds 20–30 minutes.",
      "Brief awakenings are normal and happen to everyone. The problem is not the awakening itself, but the inability to get back to sleep — and the tension that comes with it.",
      "It is the form of insomnia most often linked to organic causes: sleep apnoea, restless legs syndrome, nocturia, chronic pain, hormonal changes of menopause.",
    ],
    signs: [
      "One or more awakenings every night",
      "More than 20–30 minutes to fall back asleep",
      "A sense that sleep is «broken» and unrefreshing",
      "Waking with a choking sensation, palpitations or a dry mouth",
      "Snoring or breathing pauses reported by a partner",
    ],
    treatment: [
      "Differential diagnosis first: where the history points to respiratory or movement causes, a sleep study comes before anything else.",
      "When it is insomnia, stimulus control applies to night-time awakenings too: you do not stay in bed awake, waiting.",
      "Compressing time in bed so that sleep becomes continuous before it is extended in duration.",
      "Managing middle-of-the-night catastrophising — the thought that «that's it, I won't sleep again», which by itself keeps the brain awake.",
    ],
    caution:
      "If there is loud snoring, witnessed breathing pauses, morning headache or marked daytime sleepiness, a sleep study is needed before any behavioural intervention.",
  },
  {
    slug: "chronia-aypnia",
    nav: "Chronic insomnia",
    title: "Chronic insomnia",
    short:
      "Difficulty at least three nights a week, for at least three months, with a clear impact on your day.",
    lede: "This is where CBT-I has the strongest evidence base internationally — and exactly where medication on its own delivers the least.",
    what: [
      "Chronic insomnia affects 8–10% of the population. It differs from acute insomnia not only in duration but in mechanism: it is no longer sustained by whatever started it.",
      "Whatever triggered it — a pressure, a loss, a period of anxiety — has usually passed. What remains are the compensating behaviours: going to bed earlier, staying there awake, daytime naps, caffeine, clock-watching.",
      "Each of these is an entirely reasonable response. And each one feeds the problem. This is how insomnia becomes self-sustaining.",
    ],
    signs: [
      "Sleep difficulty at least 3 nights a week, for more than 3 months",
      "Fatigue that does not lift with rest",
      "Difficulty with concentration and memory",
      "Irritability and mood swings",
      "An expectation of failure: «I know I won't sleep»",
      "Organising the whole day around sleep",
    ],
    treatment: [
      "The full CBT-I protocol, 4 to 8 weekly sessions, with a sleep diary and weekly reassessment.",
      "Sleep restriction and stimulus control at the core — the two most powerful components.",
      "Cognitive restructuring of beliefs about sleep, plus arousal-reduction techniques.",
      "A relapse-prevention plan, so that one bad week does not become a chronic problem again. This is what makes the results last after the sessions end.",
    ],
  },
  {
    slug: "paraypnies",
    nav: "Parasomnias",
    title: "Parasomnias",
    short:
      "Sleepwalking, night terrors, sleep talking, behaviours during the night.",
    lede: "Unwanted phenomena that occur during sleep or in its transitions. Not a psychological disorder as such, but a disorder of sleep architecture.",
    what: [
      "Parasomnias appear when the brain is caught between stages: one part of it is asleep while another becomes active.",
      "In deep-sleep parasomnias — sleepwalking, night terrors, confusional arousals — the person usually remembers nothing the next morning.",
      "They are triggered and worsened by sleep deprivation, stress, alcohol, fever, irregular schedules and by other sleep disorders that fragment sleep.",
    ],
    signs: [
      "Sleepwalking, or sitting up awake and confused",
      "Night terrors with a scream and intense autonomic arousal",
      "Talking in your sleep",
      "No memory of the episode in the morning",
      "Episodes in the first third of the night",
    ],
    treatment: [
      "Stabilising the schedule and getting enough sleep — sleep deprivation is the strongest trigger.",
      "Safety measures in the bedroom, where there is a risk of injury.",
      "Identifying and removing triggers, together with stress management.",
      "Treating any underlying disorder that is fragmenting sleep.",
    ],
    caution:
      "Episodes with vigorous movement in the second half of the night, especially in older adults, need medical assessment and a sleep study.",
  },
  {
    slug: "efialtes",
    nav: "Nightmares",
    title: "Recurrent nightmares",
    short:
      "Intensely distressing dreams that wake you and leave you afraid to go back to sleep.",
    lede: "When nightmares recur and start to define your relationship with the night, there are targeted protocols with a very good response rate.",
    what: [
      "A nightmare differs from a night terror: it happens in REM sleep, in the second half of the night, it causes full awakening, and the content is recalled in detail.",
      "Occasional nightmares are normal. They become a clinical issue when they recur and lead to avoiding sleep — at which point insomnia is added on top.",
      "They are linked to traumatic experience, to intense stress, to certain medications, and to the abrupt withdrawal of substances that suppress REM sleep.",
    ],
    signs: [
      "Recurrent distressing dreams recalled in detail",
      "Waking with palpitations, sweating, fear",
      "Avoiding or postponing sleep",
      "Episodes mainly in the second half of the night",
      "An effect on daytime mood and functioning",
    ],
    treatment: [
      "Imagery Rehearsal Therapy: the script of the recurring nightmare is rewritten while awake and rehearsed daily.",
      "Arousal-reduction techniques before bed, to lower night-time activation.",
      "Treating in parallel the insomnia that has developed as sleep avoidance.",
      "Where there is a traumatic background, the work is coordinated with the overall treatment plan.",
    ],
  },
  {
    slug: "kirkadies-diataraches",
    nav: "Circadian disorders",
    title: "Circadian rhythm sleep disorders",
    short:
      "Your body clock is out of step with your schedule — delayed phase, shift work, jet lag.",
    lede: "This is not an inability to sleep, but a mismatch between your internal rhythm and the hours your life demands of you.",
    what: [
      "In delayed sleep phase syndrome, sleep comes normally but very late — and waking at a socially acceptable hour becomes punishing. It is particularly common in adolescents and young adults.",
      "In shift work, the body clock never catches up with rotating cycles, which leads to chronic sleep loss and sleepiness.",
      "Jet lag is the acute, temporary version of the same phenomenon after travelling across time zones.",
    ],
    signs: [
      "Sleep that comes normally, but very late",
      "Serious difficulty waking in the morning",
      "Normal sleep when the schedule is free (holidays, weekends)",
      "Heavy sleepiness on shift and an inability to sleep off it",
      "A chronic sense of jet lag without having travelled",
    ],
    treatment: [
      "Chronotherapy: a gradual, controlled shift of sleep and wake times.",
      "Targeted light exposure — and light avoidance — at specific hours, depending on the direction of the shift.",
      "Anchoring the rhythm to a fixed wake time rather than a fixed bedtime.",
      "Designing sleep strategies for shift work, with planned short naps and caffeine management.",
    ],
  },
  {
    slug: "aypnia-agchos",
    nav: "Insomnia & anxiety",
    title: "Insomnia, anxiety and mood",
    short:
      "When insomnia coexists with anxiety or depressive symptoms.",
    lede: "The most widespread misconception is that the anxiety has to be resolved first. The evidence says the opposite: treating sleep directly improves both.",
    what: [
      "The relationship runs both ways. Anxiety makes sleep harder, but poor sleep also increases vulnerability to anxiety and worsens mood the next day.",
      "For decades insomnia was treated as a «secondary» symptom. Today it is considered comorbid and treated alongside, not second.",
      "Early morning awakening — waking well before your time and not getting back to sleep — is the pattern most closely linked to depressive symptoms.",
    ],
    signs: [
      "Thoughts that intensify the moment the light goes off",
      "Physical tension and a sense of alertness in bed",
      "Early final awakening with worry",
      "Mood at its worst in the morning hours",
      "Avoiding activities because of fatigue, which in turn worsens mood",
    ],
    treatment: [
      "CBT-I as the primary intervention for sleep, independently of how anxiety or mood is progressing.",
      "A structured worry time earlier in the day, so the evening is not the only window for processing.",
      "Arousal-reduction techniques and work on ruminative thinking.",
      "Collaboration with the treating physician where medication is already in place.",
    ],
  },
  {
    slug: "ypnotika-apexartisi",
    nav: "Coming off sleeping pills",
    title: "Dependence on sleeping pills",
    short:
      "Sleep that depends on the pill, with tolerance to the dose and fear of stopping.",
    lede: "CBT-I is the evidence-based support for gradual withdrawal — always in collaboration with the doctor who prescribed the medication.",
    what: [
      "Hypnotics were designed for short-term use. With long-term use, tolerance often develops: the same dose does less, and insomnia returns.",
      "Alongside it, psychological dependence takes hold — the belief that sleep is impossible without the drug. That belief alone produces anxiety and sustains the insomnia.",
      "On stopping, rebound insomnia is common: temporary but intense. Without preparation, it is read as proof that the drug was necessary.",
    ],
    signs: [
      "Taking a hypnotic daily for months or years",
      "Needing a higher dose for the same effect",
      "Intense anxiety at the thought of a night without the drug",
      "Failed attempts at stopping",
      "Morning grogginess, fogginess or memory problems",
    ],
    treatment: [
      "CBT-I is established first and sleep is stabilised, while the medication stays unchanged.",
      "The taper is planned and carried out solely by the treating physician. A psychologist does not intervene in medication.",
      "Preparation for rebound insomnia, so that it is recognised as temporary and expected.",
      "Cognitive work on the belief in dependence, and a gradual recovery of confidence in sleep.",
    ],
    caution:
      "No change to your medication happens without your doctor. Abruptly stopping certain classes of drug is dangerous.",
  },
];
