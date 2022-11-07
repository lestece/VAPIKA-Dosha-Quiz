// All of the quiz questions are found below
const quizQuestions = [
    {
        question: "How would you describe your body frame?",
        answers: {
            v: "Slim. It is difficult for me to gain weight",
            p: "Medium build, symmetrical and with good muscle development",
            k: "Large, heavy. Weight is gained easily and it's difficult to lose it.",
        }

    },

    {
        question: "Skin:",
        answers: {
            v: "Dry, thin skin (veins easily visible). Cool, dark circles under eyes. Tans easily. Scanty perspiration.",
            p: "Reddish and sensitive skin. Susceptible to wrinkles, moles, freckles, rashes, flushes, sunburn, occasional spots. Sweats easily",
            k: "Well moisturised, smooth skin with few wrinkles. Prone to blackheads. Tends to tan. Profuse perspiration.",
        }

    },

    {
        question: "Nails:",
        answers: {
            v: "Dry, they break easily",
            p: "Shiny, pinkish, smooth",
            k: "Strong, thick, well-defined moons",
        }

    },

    {
        question: "Hair:",
        answers: {
            v: "Dry and brittle; sometimes falls out easily",
            p: "Fine, straight hair; a tendency to premature graying",
            k: "Soft, thick, lustrous and abundant",
        }

    },

    {
        question: "Face:",
        answers: {
            v: "Angular/thin/long",
            p: "Heart shape",
            k: "Rounder face",
        }

    },

    {
        question: "Eyes:",
        answers: {
            v: "Sunken, small, dark eyes, move a lot, sparse lashes",
            p: "Medium size, Grey, green or light brown eyes, sharp steady gaze",
            k: "Long lashes, large, calm, loving eyes",
        }

    },

    {
        question: "Teeth:",
        answers: {
            v: "Irregular teeth, thin gums",
            p: "Medium teeth, gums bleed easily. Cavities tendency",
            k: "Large, strong, straight white teeth, healthy pink gums",
        }

    },

    {
        question: "Digestion:",
        answers: {
            v: "Gas, irregular digestion, sensitive stomach",
            p: "Steady, strong digestion",
            k: "Slow, heavy digestion, feel sleepy after eating",
        }

    },

    {
        question: "Body temperature:",
        answers: {
            v: "Hands and feet are usually cold; warm environment preference",
            p: "Warm extremities with good circulation. Prefer cooler environments.",
            k: "Body is cold and adaptable to most temperatures",
        }

    },

    {
        question: "Thirst:",
        answers: {
            v: "Irregular thirst",
            p: "Strong, frequent thirst",
            k: "Rarely thirsty",
        }

    },

    {
        question: "Appetite",
        answers: {
            v: "Irregular, small appetite. Often forgets to eat",
            p: "Robust, healthy appetite. Rarely misses a meal and can become 'h-angry'",
            k: "Steady, moderate appetite. Emotional eating. Tends to eat large amounts even when not hungry",
        }

    },

    {
        question: "Speech:",
        answers: {
            v: "Talks quickly",
            p: "Sharp, precise language, convincing",
            k: "Slow, monotonous speech",
        }

    },

    {
        question: "Sleep pattern:",
        answers: {
            v: "Doesn't fall asleep easily and makes up often in the night. Light sleep",
            p: "Moderately spun sleeper and wakes up energetic in the morning",
            k: "Moderately spun sleeper and wakes up energetic in the morning",
        }

    },

    {
        question: "Personality:",
        answers: {
            v: "Extroverted, easily excited, creative, imaginative, enthusiastic. Indecisive, changeable, lacking constancy, worried, timid.",
            p: "Intelligent, powerful, clear, focused, short tempered, aggressive, competitive, workaholic, ambitious, conversationalist, precise, courageous, passionate, protective, dynamic energy, emotional",
            k: "Caring, calm, patient, loyal, easy going, fun, loving, slower moving",
        }

    },

    {
        question: "Memory and concentration:",
        answers: {
            v: "Active mind; good short-term memory but easily forgets",
            p: "Good medium -term memory but accurate",
            k: "Good long-term memory. Takes longer to learn but never forgets",
        }

    },

    {
        question: "Routine:",
        answers: {
            v: "Irregular schedule and eating times, disorganised",
            p: "Long working day, organised, logical and methodical",
            k: "Good at keeping routine, untidy, organised chaos",
        }

    },

    {
        question: "Challenges when stressed:",
        answers: {
            v: "Anxiety, fear, uncertainty, fatigue, spaced out, lack of focus, difficulty falling asleep",
            p: "Anger, defensive, controlling, overheated, prone to rashes and acne, interrupted sleep, loose bowel movements, irritable, overly competitive, judgmental, critical, sarcastic, egotistical",
            k: "Cool, calm and collected, weight gain, slow digestion, sinus and respiratory problems, lethargic, difficulty waking up, food cravings, feeling of depression",
        }

    },

    {
        question: "Emotions:",
        answers: {
            v: "Anxious, fearful, uncertain, too many choices confuse me",
            p: "I am ambitious and like to make plans: I can get irritated when interrupted",
            k: "I am calm, I like solitude and I am peace-loving",
        }

    },
]
