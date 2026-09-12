import type { AisItem, AisBand } from "./ais";

/** Athens Insomnia Scale (Soldatos et al., 2000) — 8 items, 0–3 each. */
export const aisItemsEn: AisItem[] = [
  {
    id: "onset",
    prompt: "Sleep induction",
    hint: "The time it takes you to fall asleep after turning off the light.",
    options: [
      "No delay",
      "Slightly delayed",
      "Markedly delayed",
      "Very delayed or no sleep at all",
    ],
  },
  {
    id: "awakenings",
    prompt: "Awakenings during the night",
    options: [
      "No problem",
      "Minor problem",
      "Considerable problem",
      "Serious problem or no sleep at all",
    ],
  },
  {
    id: "early",
    prompt: "Final awakening earlier than desired",
    options: [
      "Not earlier",
      "A little earlier",
      "Markedly earlier",
      "Much earlier or no sleep at all",
    ],
  },
  {
    id: "duration",
    prompt: "Total sleep duration",
    options: [
      "Sufficient",
      "Slightly insufficient",
      "Markedly insufficient",
      "Very insufficient or no sleep at all",
    ],
  },
  {
    id: "quality",
    prompt: "Overall quality of sleep",
    hint: "Regardless of how many hours you slept.",
    options: [
      "Satisfactory",
      "Slightly unsatisfactory",
      "Markedly unsatisfactory",
      "Very unsatisfactory or no sleep at all",
    ],
  },
  {
    id: "wellbeing",
    prompt: "Sense of wellbeing during the day",
    options: ["Normal", "Slightly decreased", "Markedly decreased", "Very decreased"],
  },
  {
    id: "functioning",
    prompt: "Physical and mental functioning during the day",
    options: ["Normal", "Slightly decreased", "Markedly decreased", "Very decreased"],
  },
  {
    id: "sleepiness",
    prompt: "Sleepiness during the day",
    options: ["None", "Mild", "Considerable", "Intense"],
  },
];

export function bandForEn(score: number): AisBand {
  if (score <= 3) {
    return {
      label: "No indication of insomnia",
      range: "0–3",
      tone: "calm",
      headline: "Your sleep appears to be working.",
      body: "Your score does not indicate clinically significant insomnia. If you nevertheless feel something is wrong with your sleep — loud snoring, breathing pauses, leg movements, nightmares — it is worth discussing, because those are other sleep disorders, not insomnia.",
    };
  }
  if (score <= 5) {
    return {
      label: "Borderline score",
      range: "4–5",
      tone: "watch",
      headline: "You are just below the threshold.",
      body: "Your score is borderline: there is difficulty, but it does not reach the clinical cut-off of the scale. This is often the stage at which a brief intervention pays off most — before the habits and thoughts that make insomnia chronic have settled in.",
    };
  }
  if (score <= 11) {
    return {
      label: "Probable insomnia",
      range: "6–11",
      tone: "alert",
      headline: "Your score is above the cut-off of the scale.",
      body: "A score of 6 or more is considered an indication of insomnia and warrants assessment. CBT-I is the first-line treatment for exactly this picture, with results that hold after the sessions end.",
    };
  }
  return {
    label: "Severe symptoms",
    range: "12–24",
    tone: "alert",
    headline: "What you describe is a heavy picture.",
    body: "Your score points to a serious burden on both your night-time sleep and your day. A clinical assessment matters here — both for the insomnia itself and to rule out other sleep disorders that may coexist with it.",
  };
}
