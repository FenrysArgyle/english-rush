window.LOBSTER_GAME_CONFIG = {
  "stage": {
    "width": 1280,
    "height": 720
  },
  "worldLayout": {
    "playfieldOwner": "runtime",
    "groundY": 570,
    "playerAnchor": {
      "x": 245,
      "y": 570
    },
    "groundDescription": "One continuous runtime-owned track; background has no playable ground. Track details and particles use the same groundY.",
    "portraitLayout": "Compact stage above question card with four full-width answer buttons and HUD; fit full available width and height without scrolling.",
    "obstacle": {
      "role": "energy-crystal",
      "spawnX": 1390,
      "width": 68,
      "height": 110,
      "anchor": "bottom-center",
      "questionTriggerX": 425,
      "despawnX": -80
    },
    "parallax": [
      {
        "role": "neon-skyline",
        "speedRatio": 0.12
      },
      {
        "role": "near-city",
        "speedRatio": 0.38
      }
    ],
    "responsive": {
      "portraitBreakpointRatio": 1,
      "portraitStageFraction": 0.3,
      "portraitAnswerColumns": 1,
      "landscapeAnswerColumns": 2,
      "minTouchTargetCssPixels": 44,
      "fitAvailableWidthAndHeight": true
    }
  },
  "characterScale": {
    "stageHeightRatio": 0.2,
    "colliderWidthFraction": 0.38,
    "colliderHeightFraction": 0.78
  },
  "character": {
    "anchor": "bottom-center",
    "actions": {
      "run": {
        "role": "robot-run",
        "fps": 12,
        "loop": true
      },
      "jump": {
        "role": "robot-jump",
        "fps": 8,
        "loop": false
      },
      "hit": {
        "role": "robot-hit",
        "fps": 8,
        "loop": false
      }
    }
  },
  "controls": {
    "answerKeys": [
      [
        "1",
        "a",
        "A"
      ],
      [
        "2",
        "b",
        "B"
      ],
      [
        "3",
        "c",
        "C"
      ],
      [
        "4",
        "d",
        "D"
      ]
    ],
    "pointerAnswers": true,
    "ignoreKeyRepeat": true,
    "answerOncePerQuestion": true,
    "start": "button",
    "continue": "button",
    "restart": "button",
    "mute": "button"
  },
  "difficulty": {
    "preset": "balanced",
    "startingLives": 3,
    "baseSpeed": 260,
    "maxSpeed": 420,
    "speedIncreasePerPoint": 0.025,
    "questionSeconds": 15,
    "sentenceStructureSeconds": 20,
    "timerIndependentOfSpeed": true
  },
  "progression": {
    "mode": "endless",
    "terminalState": "gameover",
    "finalWin": false,
    "shuffleQuestionBag": true,
    "shuffleOptions": true,
    "avoidRepeatWithinBag": true,
    "avoidImmediateCrossBagRepeat": true,
    "questionsPerBag": 48
  },
  "scoring": {
    "correctBase": 100,
    "comboBonusStep": 20,
    "comboBonusCap": 100,
    "comboIncrementBeforeAward": true,
    "formula": "100 + min(100, 20 * (combo - 1))",
    "wrongAnswer": 0,
    "distance": 0,
    "resetComboOnError": true,
    "finalScoreFrozenOn": "gameover"
  },
  "gameplay": {
    "questionPausesWorld": true,
    "questionPausesAnimation": true,
    "questionTimerUsesElapsedTime": true,
    "pauseTimerWhenHidden": true,
    "lifeLossPerError": 1,
    "timeoutCountsAsError": true,
    "feedbackRequiresContinue": true,
    "showCorrectionOnGameover": true,
    "correctAnswerTriggersJump": true,
    "collisionBypassOnlyOnCorrect": true,
    "jump": {
      "durationSeconds": 1.35,
      "height": 195,
      "arc": "parabola",
      "landingParticles": true
    },
    "collisionSeconds": 0.5,
    "nextObstacleDelaySeconds": 1.2,
    "restartResets": [
      "score",
      "lives",
      "combo",
      "questionTimer",
      "animation",
      "feedback",
      "obstacle",
      "questionBag"
    ],
    "restartPreserves": [
      "highScore",
      "muted"
    ]
  },
  "questions": [
    {
      "id": "fill-in-the-blank-1",
      "category": "fill-in-the-blank",
      "prompt": "If I ___ more time, I would join the club.",
      "options": [
        {
          "id": "fill-in-the-blank-1-option-1",
          "text": "had"
        },
        {
          "id": "fill-in-the-blank-1-option-2",
          "text": "have"
        },
        {
          "id": "fill-in-the-blank-1-option-3",
          "text": "will have"
        },
        {
          "id": "fill-in-the-blank-1-option-4",
          "text": "am having"
        }
      ],
      "correctOptionId": "fill-in-the-blank-1-option-1",
      "explanation": "Điều kiện loại hai dùng quá khứ đơn trong mệnh đề if.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-2",
      "category": "fill-in-the-blank",
      "prompt": "She has studied English ___ 2020.",
      "options": [
        {
          "id": "fill-in-the-blank-2-option-1",
          "text": "since"
        },
        {
          "id": "fill-in-the-blank-2-option-2",
          "text": "for"
        },
        {
          "id": "fill-in-the-blank-2-option-3",
          "text": "during"
        },
        {
          "id": "fill-in-the-blank-2-option-4",
          "text": "by"
        }
      ],
      "correctOptionId": "fill-in-the-blank-2-option-1",
      "explanation": "Since đi với mốc thời gian; for đi với khoảng thời gian.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-3",
      "category": "fill-in-the-blank",
      "prompt": "By the time we arrived, the film ___ .",
      "options": [
        {
          "id": "fill-in-the-blank-3-option-1",
          "text": "had started"
        },
        {
          "id": "fill-in-the-blank-3-option-2",
          "text": "will start"
        },
        {
          "id": "fill-in-the-blank-3-option-3",
          "text": "starts"
        },
        {
          "id": "fill-in-the-blank-3-option-4",
          "text": "has starting"
        }
      ],
      "correctOptionId": "fill-in-the-blank-3-option-1",
      "explanation": "Quá khứ hoàn thành diễn tả hành động xảy ra trước một hành động khác trong quá khứ.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-4",
      "category": "fill-in-the-blank",
      "prompt": "The student ___ won the competition is in my class.",
      "options": [
        {
          "id": "fill-in-the-blank-4-option-1",
          "text": "who"
        },
        {
          "id": "fill-in-the-blank-4-option-2",
          "text": "which"
        },
        {
          "id": "fill-in-the-blank-4-option-3",
          "text": "where"
        },
        {
          "id": "fill-in-the-blank-4-option-4",
          "text": "whose"
        }
      ],
      "correctOptionId": "fill-in-the-blank-4-option-1",
      "explanation": "Who chỉ người và làm chủ ngữ của mệnh đề quan hệ.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-5",
      "category": "fill-in-the-blank",
      "prompt": "Public transport helps reduce air ___ .",
      "options": [
        {
          "id": "fill-in-the-blank-5-option-1",
          "text": "pollution"
        },
        {
          "id": "fill-in-the-blank-5-option-2",
          "text": "pollute"
        },
        {
          "id": "fill-in-the-blank-5-option-3",
          "text": "polluted"
        },
        {
          "id": "fill-in-the-blank-5-option-4",
          "text": "polluting"
        }
      ],
      "correctOptionId": "fill-in-the-blank-5-option-1",
      "explanation": "Air pollution là cụm danh từ có nghĩa ô nhiễm không khí.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-6",
      "category": "fill-in-the-blank",
      "prompt": "Lan is interested ___ learning languages.",
      "options": [
        {
          "id": "fill-in-the-blank-6-option-1",
          "text": "in"
        },
        {
          "id": "fill-in-the-blank-6-option-2",
          "text": "on"
        },
        {
          "id": "fill-in-the-blank-6-option-3",
          "text": "at"
        },
        {
          "id": "fill-in-the-blank-6-option-4",
          "text": "for"
        }
      ],
      "correctOptionId": "fill-in-the-blank-6-option-1",
      "explanation": "Be interested in + danh từ hoặc V-ing nghĩa là hứng thú với.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-7",
      "category": "fill-in-the-blank",
      "prompt": "This bridge ___ in 2010.",
      "options": [
        {
          "id": "fill-in-the-blank-7-option-1",
          "text": "was built"
        },
        {
          "id": "fill-in-the-blank-7-option-2",
          "text": "built"
        },
        {
          "id": "fill-in-the-blank-7-option-3",
          "text": "has built"
        },
        {
          "id": "fill-in-the-blank-7-option-4",
          "text": "is building"
        }
      ],
      "correctOptionId": "fill-in-the-blank-7-option-1",
      "explanation": "Bị động quá khứ đơn: was/were + quá khứ phân từ.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-8",
      "category": "fill-in-the-blank",
      "prompt": "You will miss the bus ___ you leave now.",
      "options": [
        {
          "id": "fill-in-the-blank-8-option-1",
          "text": "unless"
        },
        {
          "id": "fill-in-the-blank-8-option-2",
          "text": "because"
        },
        {
          "id": "fill-in-the-blank-8-option-3",
          "text": "although"
        },
        {
          "id": "fill-in-the-blank-8-option-4",
          "text": "so that"
        }
      ],
      "correctOptionId": "fill-in-the-blank-8-option-1",
      "explanation": "Unless nghĩa là nếu không: bạn sẽ lỡ xe nếu không đi ngay.",
      "timeLimitSeconds": 15
    },
    {
      "id": "sentence-structure-1",
      "category": "sentence-structure",
      "prompt": "Arrange: never / I / such a beautiful beach / have / seen.",
      "options": [
        {
          "id": "sentence-structure-1-option-1",
          "text": "I have never seen such a beautiful beach."
        },
        {
          "id": "sentence-structure-1-option-2",
          "text": "I never have see such a beautiful beach."
        },
        {
          "id": "sentence-structure-1-option-3",
          "text": "I have seen never such a beautiful beach."
        },
        {
          "id": "sentence-structure-1-option-4",
          "text": "I has never seen such a beautiful beach."
        }
      ],
      "correctOptionId": "sentence-structure-1-option-1",
      "explanation": "Hiện tại hoàn thành: have/has + quá khứ phân từ; never thường đứng giữa have và seen.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-2",
      "category": "sentence-structure",
      "prompt": "Choose the passive form: People speak English in many countries.",
      "options": [
        {
          "id": "sentence-structure-2-option-1",
          "text": "English is spoken in many countries."
        },
        {
          "id": "sentence-structure-2-option-2",
          "text": "English speaks in many countries."
        },
        {
          "id": "sentence-structure-2-option-3",
          "text": "English is speak in many countries."
        },
        {
          "id": "sentence-structure-2-option-4",
          "text": "English has speaking in many countries."
        }
      ],
      "correctOptionId": "sentence-structure-2-option-1",
      "explanation": "Bị động hiện tại đơn: am/is/are + quá khứ phân từ. Speak có dạng phân từ là spoken.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-3",
      "category": "sentence-structure",
      "prompt": "Report this statement: Nam said, \"I am tired.\"",
      "options": [
        {
          "id": "sentence-structure-3-option-1",
          "text": "Nam said that he was tired."
        },
        {
          "id": "sentence-structure-3-option-2",
          "text": "Nam said that he is tire."
        },
        {
          "id": "sentence-structure-3-option-3",
          "text": "Nam said that I was tired."
        },
        {
          "id": "sentence-structure-3-option-4",
          "text": "Nam said that he were tired."
        }
      ],
      "correctOptionId": "sentence-structure-3-option-1",
      "explanation": "Khi tường thuật lời Nam, I đổi thành he và am lùi thì thành was.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-4",
      "category": "sentence-structure",
      "prompt": "Choose the equivalent: Although it rained, we went out.",
      "options": [
        {
          "id": "sentence-structure-4-option-1",
          "text": "Despite the rain, we went out."
        },
        {
          "id": "sentence-structure-4-option-2",
          "text": "Because of the rain, we stayed in."
        },
        {
          "id": "sentence-structure-4-option-3",
          "text": "Despite it rained, we went out."
        },
        {
          "id": "sentence-structure-4-option-4",
          "text": "Although the rain, we went out."
        }
      ],
      "correctOptionId": "sentence-structure-4-option-1",
      "explanation": "Despite đi với danh từ hoặc V-ing; although đi với một mệnh đề.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-5",
      "category": "sentence-structure",
      "prompt": "Choose the equivalent: This exercise is too difficult for me to do.",
      "options": [
        {
          "id": "sentence-structure-5-option-1",
          "text": "This exercise is so difficult that I cannot do it."
        },
        {
          "id": "sentence-structure-5-option-2",
          "text": "This exercise is easy enough for me to do."
        },
        {
          "id": "sentence-structure-5-option-3",
          "text": "This exercise is so difficult that I can do it."
        },
        {
          "id": "sentence-structure-5-option-4",
          "text": "This exercise is too easy for me to do."
        }
      ],
      "correctOptionId": "sentence-structure-5-option-1",
      "explanation": "Too ... to V ở đây tương đương so ... that ... cannot: quá khó nên không thể làm.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-6",
      "category": "sentence-structure",
      "prompt": "Choose the correct first conditional sentence.",
      "options": [
        {
          "id": "sentence-structure-6-option-1",
          "text": "If you study hard, you will pass the exam."
        },
        {
          "id": "sentence-structure-6-option-2",
          "text": "If you will study hard, you pass the exam."
        },
        {
          "id": "sentence-structure-6-option-3",
          "text": "If you studied hard, you will passed the exam."
        },
        {
          "id": "sentence-structure-6-option-4",
          "text": "If you study hard, you would passed the exam."
        }
      ],
      "correctOptionId": "sentence-structure-6-option-1",
      "explanation": "Điều kiện loại một: If + hiện tại đơn, will + động từ nguyên mẫu.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-7",
      "category": "sentence-structure",
      "prompt": "Arrange: would rather / stay home / I / than / go out.",
      "options": [
        {
          "id": "sentence-structure-7-option-1",
          "text": "I would rather stay home than go out."
        },
        {
          "id": "sentence-structure-7-option-2",
          "text": "I would rather to stay home than go out."
        },
        {
          "id": "sentence-structure-7-option-3",
          "text": "I would rather staying home than go out."
        },
        {
          "id": "sentence-structure-7-option-4",
          "text": "I would rather stay home than to going out."
        }
      ],
      "correctOptionId": "sentence-structure-7-option-1",
      "explanation": "Would rather + động từ nguyên mẫu + than + động từ nguyên mẫu diễn tả sự ưu tiên.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-8",
      "category": "sentence-structure",
      "prompt": "Combine: The girl is my cousin. She is wearing a red hat.",
      "options": [
        {
          "id": "sentence-structure-8-option-1",
          "text": "The girl who is wearing a red hat is my cousin."
        },
        {
          "id": "sentence-structure-8-option-2",
          "text": "The girl which is wearing a red hat is my cousin."
        },
        {
          "id": "sentence-structure-8-option-3",
          "text": "The girl who wearing a red hat is my cousin."
        },
        {
          "id": "sentence-structure-8-option-4",
          "text": "The girl whose is wearing a red hat is my cousin."
        }
      ],
      "correctOptionId": "sentence-structure-8-option-1",
      "explanation": "Who thay cho she, chỉ người và làm chủ ngữ; mệnh đề giữ đầy đủ is wearing.",
      "timeLimitSeconds": 20
    },
    {
      "id": "meaning-idioms-1",
      "category": "meaning-idioms",
      "prompt": "What does \"The test was a piece of cake\" mean?",
      "options": [
        {
          "id": "meaning-idioms-1-option-1",
          "text": "Bài kiểm tra rất dễ."
        },
        {
          "id": "meaning-idioms-1-option-2",
          "text": "Bài kiểm tra nói về bánh ngọt."
        },
        {
          "id": "meaning-idioms-1-option-3",
          "text": "Bài kiểm tra rất dài."
        },
        {
          "id": "meaning-idioms-1-option-4",
          "text": "Bài kiểm tra bị hủy."
        }
      ],
      "correctOptionId": "meaning-idioms-1-option-1",
      "explanation": "A piece of cake là thành ngữ chỉ một việc rất dễ.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-2",
      "category": "meaning-idioms",
      "prompt": "What does \"I feel under the weather today\" mean?",
      "options": [
        {
          "id": "meaning-idioms-2-option-1",
          "text": "Hôm nay tôi thấy không khỏe."
        },
        {
          "id": "meaning-idioms-2-option-2",
          "text": "Hôm nay tôi rất hào hứng."
        },
        {
          "id": "meaning-idioms-2-option-3",
          "text": "Hôm nay tôi đứng dưới mưa."
        },
        {
          "id": "meaning-idioms-2-option-4",
          "text": "Hôm nay tôi dự báo thời tiết."
        }
      ],
      "correctOptionId": "meaning-idioms-2-option-1",
      "explanation": "Feel under the weather nghĩa là cảm thấy mệt hoặc hơi ốm.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-3",
      "category": "meaning-idioms",
      "prompt": "What does \"once in a blue moon\" mean?",
      "options": [
        {
          "id": "meaning-idioms-3-option-1",
          "text": "Rất hiếm khi."
        },
        {
          "id": "meaning-idioms-3-option-2",
          "text": "Mỗi đêm."
        },
        {
          "id": "meaning-idioms-3-option-3",
          "text": "Hai lần mỗi tháng."
        },
        {
          "id": "meaning-idioms-3-option-4",
          "text": "Ngay lập tức."
        }
      ],
      "correctOptionId": "meaning-idioms-3-option-1",
      "explanation": "Once in a blue moon diễn tả việc rất ít khi xảy ra.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-4",
      "category": "meaning-idioms",
      "prompt": "What does \"break the ice\" mean at the start of a meeting?",
      "options": [
        {
          "id": "meaning-idioms-4-option-1",
          "text": "Phá tan sự ngại ngùng ban đầu."
        },
        {
          "id": "meaning-idioms-4-option-2",
          "text": "Kết thúc cuộc họp sớm."
        },
        {
          "id": "meaning-idioms-4-option-3",
          "text": "Gây ra một cuộc tranh cãi."
        },
        {
          "id": "meaning-idioms-4-option-4",
          "text": "Giữ im lặng hoàn toàn."
        }
      ],
      "correctOptionId": "meaning-idioms-4-option-1",
      "explanation": "Break the ice nghĩa là giúp mọi người thoải mái và bắt đầu trò chuyện.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-5",
      "category": "meaning-idioms",
      "prompt": "Choose the meaning of \"Practice makes perfect.\"",
      "options": [
        {
          "id": "meaning-idioms-5-option-1",
          "text": "Luyện tập giúp ngày càng thành thạo."
        },
        {
          "id": "meaning-idioms-5-option-2",
          "text": "Chỉ người hoàn hảo mới cần luyện tập."
        },
        {
          "id": "meaning-idioms-5-option-3",
          "text": "Luyện tập luôn lãng phí thời gian."
        },
        {
          "id": "meaning-idioms-5-option-4",
          "text": "Không cần luyện tập vẫn thành công."
        }
      ],
      "correctOptionId": "meaning-idioms-5-option-1",
      "explanation": "Luyện tập thường xuyên giúp cải thiện kỹ năng.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-6",
      "category": "meaning-idioms",
      "prompt": "What does \"give up\" mean in \"Never give up on your dreams\"?",
      "options": [
        {
          "id": "meaning-idioms-6-option-1",
          "text": "Từ bỏ."
        },
        {
          "id": "meaning-idioms-6-option-2",
          "text": "Thức dậy."
        },
        {
          "id": "meaning-idioms-6-option-3",
          "text": "Tra cứu."
        },
        {
          "id": "meaning-idioms-6-option-4",
          "text": "Cất giữ."
        }
      ],
      "correctOptionId": "meaning-idioms-6-option-1",
      "explanation": "Give up nghĩa là từ bỏ; câu khuyên bạn đừng từ bỏ ước mơ.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-7",
      "category": "meaning-idioms",
      "prompt": "What does \"look after\" mean in \"She looks after her younger brother\"?",
      "options": [
        {
          "id": "meaning-idioms-7-option-1",
          "text": "Chăm sóc."
        },
        {
          "id": "meaning-idioms-7-option-2",
          "text": "Nhìn về phía sau."
        },
        {
          "id": "meaning-idioms-7-option-3",
          "text": "Tìm kiếm."
        },
        {
          "id": "meaning-idioms-7-option-4",
          "text": "Bắt chước."
        }
      ],
      "correctOptionId": "meaning-idioms-7-option-1",
      "explanation": "Look after là cụm động từ nghĩa là chăm sóc hoặc trông nom.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-8",
      "category": "meaning-idioms",
      "prompt": "Choose the meaning of \"Better late than never.\"",
      "options": [
        {
          "id": "meaning-idioms-8-option-1",
          "text": "Muộn còn hơn không bao giờ làm."
        },
        {
          "id": "meaning-idioms-8-option-2",
          "text": "Đến muộn luôn tốt hơn đến sớm."
        },
        {
          "id": "meaning-idioms-8-option-3",
          "text": "Không bao giờ nên bắt đầu."
        },
        {
          "id": "meaning-idioms-8-option-4",
          "text": "Chỉ làm khi có đủ thời gian."
        }
      ],
      "correctOptionId": "meaning-idioms-8-option-1",
      "explanation": "Câu khuyến khích vẫn thực hiện việc cần làm dù đã trễ, không cổ vũ thói quen đến muộn.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-9",
      "category": "fill-in-the-blank",
      "prompt": "She enjoys ___ books in her free time.",
      "options": [
        {
          "id": "fill-in-the-blank-9-option-1",
          "text": "reading"
        },
        {
          "id": "fill-in-the-blank-9-option-2",
          "text": "read"
        },
        {
          "id": "fill-in-the-blank-9-option-3",
          "text": "to reading"
        },
        {
          "id": "fill-in-the-blank-9-option-4",
          "text": "reads"
        }
      ],
      "correctOptionId": "fill-in-the-blank-9-option-1",
      "explanation": "Sau enjoy, động từ theo sau có dạng V-ing.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-10",
      "category": "fill-in-the-blank",
      "prompt": "There is ___ university near my house.",
      "options": [
        {
          "id": "fill-in-the-blank-10-option-1",
          "text": "a"
        },
        {
          "id": "fill-in-the-blank-10-option-2",
          "text": "an"
        },
        {
          "id": "fill-in-the-blank-10-option-3",
          "text": "the an"
        },
        {
          "id": "fill-in-the-blank-10-option-4",
          "text": "many"
        }
      ],
      "correctOptionId": "fill-in-the-blank-10-option-1",
      "explanation": "University bắt đầu bằng âm /j/ (phụ âm), nên dùng a.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-11",
      "category": "fill-in-the-blank",
      "prompt": "This is the ___ film I have ever seen.",
      "options": [
        {
          "id": "fill-in-the-blank-11-option-1",
          "text": "most interesting"
        },
        {
          "id": "fill-in-the-blank-11-option-2",
          "text": "more interesting"
        },
        {
          "id": "fill-in-the-blank-11-option-3",
          "text": "interesting than"
        },
        {
          "id": "fill-in-the-blank-11-option-4",
          "text": "as interesting"
        }
      ],
      "correctOptionId": "fill-in-the-blank-11-option-1",
      "explanation": "So sánh nhất của tính từ dài dùng the most + tính từ.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-12",
      "category": "fill-in-the-blank",
      "prompt": "You ___ wear a helmet when riding a motorbike.",
      "options": [
        {
          "id": "fill-in-the-blank-12-option-1",
          "text": "must"
        },
        {
          "id": "fill-in-the-blank-12-option-2",
          "text": "can to"
        },
        {
          "id": "fill-in-the-blank-12-option-3",
          "text": "ought"
        },
        {
          "id": "fill-in-the-blank-12-option-4",
          "text": "has to"
        }
      ],
      "correctOptionId": "fill-in-the-blank-12-option-1",
      "explanation": "Must diễn tả sự bắt buộc và đi với động từ nguyên mẫu.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-13",
      "category": "fill-in-the-blank",
      "prompt": "We have lived here ___ ten years.",
      "options": [
        {
          "id": "fill-in-the-blank-13-option-1",
          "text": "for"
        },
        {
          "id": "fill-in-the-blank-13-option-2",
          "text": "since"
        },
        {
          "id": "fill-in-the-blank-13-option-3",
          "text": "during of"
        },
        {
          "id": "fill-in-the-blank-13-option-4",
          "text": "from to"
        }
      ],
      "correctOptionId": "fill-in-the-blank-13-option-1",
      "explanation": "For dùng với khoảng thời gian; since dùng với mốc thời gian.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-14",
      "category": "fill-in-the-blank",
      "prompt": "If it rains tomorrow, we ___ at home.",
      "options": [
        {
          "id": "fill-in-the-blank-14-option-1",
          "text": "will stay"
        },
        {
          "id": "fill-in-the-blank-14-option-2",
          "text": "would stayed"
        },
        {
          "id": "fill-in-the-blank-14-option-3",
          "text": "stayed"
        },
        {
          "id": "fill-in-the-blank-14-option-4",
          "text": "had stayed"
        }
      ],
      "correctOptionId": "fill-in-the-blank-14-option-1",
      "explanation": "Điều kiện loại một: if + hiện tại đơn, will + động từ nguyên mẫu.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-15",
      "category": "fill-in-the-blank",
      "prompt": "My sister is good ___ solving puzzles.",
      "options": [
        {
          "id": "fill-in-the-blank-15-option-1",
          "text": "at"
        },
        {
          "id": "fill-in-the-blank-15-option-2",
          "text": "on"
        },
        {
          "id": "fill-in-the-blank-15-option-3",
          "text": "for"
        },
        {
          "id": "fill-in-the-blank-15-option-4",
          "text": "with to"
        }
      ],
      "correctOptionId": "fill-in-the-blank-15-option-1",
      "explanation": "Cấu trúc be good at + danh từ hoặc V-ing nghĩa là giỏi việc gì.",
      "timeLimitSeconds": 15
    },
    {
      "id": "fill-in-the-blank-16",
      "category": "fill-in-the-blank",
      "prompt": "The train had left ___ we reached the station.",
      "options": [
        {
          "id": "fill-in-the-blank-16-option-1",
          "text": "before"
        },
        {
          "id": "fill-in-the-blank-16-option-2",
          "text": "because of"
        },
        {
          "id": "fill-in-the-blank-16-option-3",
          "text": "despite"
        },
        {
          "id": "fill-in-the-blank-16-option-4",
          "text": "during"
        }
      ],
      "correctOptionId": "fill-in-the-blank-16-option-1",
      "explanation": "Before nối hai mệnh đề; quá khứ hoàn thành chỉ hành động xảy ra trước.",
      "timeLimitSeconds": 15
    },
    {
      "id": "sentence-structure-9",
      "category": "sentence-structure",
      "prompt": "Choose the correct sentence.",
      "options": [
        {
          "id": "sentence-structure-9-option-1",
          "text": "She suggested going to the library."
        },
        {
          "id": "sentence-structure-9-option-2",
          "text": "She suggested to go to the library."
        },
        {
          "id": "sentence-structure-9-option-3",
          "text": "She suggested go to the library."
        },
        {
          "id": "sentence-structure-9-option-4",
          "text": "She suggested went to the library."
        }
      ],
      "correctOptionId": "sentence-structure-9-option-1",
      "explanation": "Suggest + V-ing được dùng để đề xuất làm việc gì.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-10",
      "category": "sentence-structure",
      "prompt": "Choose the passive form: They will build a new school.",
      "options": [
        {
          "id": "sentence-structure-10-option-1",
          "text": "A new school will be built."
        },
        {
          "id": "sentence-structure-10-option-2",
          "text": "A new school will built."
        },
        {
          "id": "sentence-structure-10-option-3",
          "text": "A new school will be build."
        },
        {
          "id": "sentence-structure-10-option-4",
          "text": "A new school will building."
        }
      ],
      "correctOptionId": "sentence-structure-10-option-1",
      "explanation": "Bị động tương lai đơn: will be + quá khứ phân từ.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-11",
      "category": "sentence-structure",
      "prompt": "Choose the equivalent: The bag is so heavy that I cannot carry it.",
      "options": [
        {
          "id": "sentence-structure-11-option-1",
          "text": "The bag is too heavy for me to carry."
        },
        {
          "id": "sentence-structure-11-option-2",
          "text": "The bag is light enough for me to carry."
        },
        {
          "id": "sentence-structure-11-option-3",
          "text": "I can carry the bag easily."
        },
        {
          "id": "sentence-structure-11-option-4",
          "text": "The bag is too light to carry."
        }
      ],
      "correctOptionId": "sentence-structure-11-option-1",
      "explanation": "Too + tính từ + for someone + to V diễn tả quá mức nên không thể làm.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-12",
      "category": "sentence-structure",
      "prompt": "Arrange: used to / my father / walk / to school.",
      "options": [
        {
          "id": "sentence-structure-12-option-1",
          "text": "My father used to walk to school."
        },
        {
          "id": "sentence-structure-12-option-2",
          "text": "My father used to walked to school."
        },
        {
          "id": "sentence-structure-12-option-3",
          "text": "My father use to walking to school."
        },
        {
          "id": "sentence-structure-12-option-4",
          "text": "Used my father to walk school."
        }
      ],
      "correctOptionId": "sentence-structure-12-option-1",
      "explanation": "Used to + động từ nguyên mẫu nói về thói quen trong quá khứ.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-13",
      "category": "sentence-structure",
      "prompt": "Choose the equivalent: I last saw Mai two years ago.",
      "options": [
        {
          "id": "sentence-structure-13-option-1",
          "text": "I have not seen Mai for two years."
        },
        {
          "id": "sentence-structure-13-option-2",
          "text": "I did not see Mai tomorrow."
        },
        {
          "id": "sentence-structure-13-option-3",
          "text": "I have seen Mai since two years."
        },
        {
          "id": "sentence-structure-13-option-4",
          "text": "I see Mai every two years."
        }
      ],
      "correctOptionId": "sentence-structure-13-option-1",
      "explanation": "Have not + quá khứ phân từ + for diễn tả khoảng thời gian chưa làm việc gì.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-14",
      "category": "sentence-structure",
      "prompt": "Combine: This is the book. I bought it yesterday.",
      "options": [
        {
          "id": "sentence-structure-14-option-1",
          "text": "This is the book that I bought yesterday."
        },
        {
          "id": "sentence-structure-14-option-2",
          "text": "This is the book who I bought yesterday."
        },
        {
          "id": "sentence-structure-14-option-3",
          "text": "This is the book where I bought yesterday."
        },
        {
          "id": "sentence-structure-14-option-4",
          "text": "This is the book that I bought it yesterday."
        }
      ],
      "correctOptionId": "sentence-structure-14-option-1",
      "explanation": "That thay cho tân ngữ chỉ vật; không lặp lại tân ngữ it.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-15",
      "category": "sentence-structure",
      "prompt": "Choose the correct indirect question.",
      "options": [
        {
          "id": "sentence-structure-15-option-1",
          "text": "Could you tell me where the station is?"
        },
        {
          "id": "sentence-structure-15-option-2",
          "text": "Could you tell me where is the station?"
        },
        {
          "id": "sentence-structure-15-option-3",
          "text": "Could you tell me where does the station is?"
        },
        {
          "id": "sentence-structure-15-option-4",
          "text": "Could you tell me where the station are?"
        }
      ],
      "correctOptionId": "sentence-structure-15-option-1",
      "explanation": "Câu hỏi gián tiếp dùng trật tự chủ ngữ + động từ, không đảo ngữ.",
      "timeLimitSeconds": 20
    },
    {
      "id": "sentence-structure-16",
      "category": "sentence-structure",
      "prompt": "Choose the equivalent: Study hard or you will fail.",
      "options": [
        {
          "id": "sentence-structure-16-option-1",
          "text": "If you do not study hard, you will fail."
        },
        {
          "id": "sentence-structure-16-option-2",
          "text": "If you study hard, you will fail."
        },
        {
          "id": "sentence-structure-16-option-3",
          "text": "Unless you do not study hard, you will fail."
        },
        {
          "id": "sentence-structure-16-option-4",
          "text": "You will fail because you study hard."
        }
      ],
      "correctOptionId": "sentence-structure-16-option-1",
      "explanation": "If ... not tương đương unless; câu nhắc cần học chăm để tránh trượt.",
      "timeLimitSeconds": 20
    },
    {
      "id": "meaning-idioms-9",
      "category": "meaning-idioms",
      "prompt": "What does \"keep an eye on\" mean?",
      "options": [
        {
          "id": "meaning-idioms-9-option-1",
          "text": "Trông chừng, để mắt tới."
        },
        {
          "id": "meaning-idioms-9-option-2",
          "text": "Nhắm mắt lại."
        },
        {
          "id": "meaning-idioms-9-option-3",
          "text": "Vẽ một con mắt."
        },
        {
          "id": "meaning-idioms-9-option-4",
          "text": "Quên hoàn toàn."
        }
      ],
      "correctOptionId": "meaning-idioms-9-option-1",
      "explanation": "Keep an eye on nghĩa là chú ý theo dõi hoặc trông chừng.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-10",
      "category": "meaning-idioms",
      "prompt": "What does \"run out of time\" mean?",
      "options": [
        {
          "id": "meaning-idioms-10-option-1",
          "text": "Không còn thời gian."
        },
        {
          "id": "meaning-idioms-10-option-2",
          "text": "Chạy nhanh hơn."
        },
        {
          "id": "meaning-idioms-10-option-3",
          "text": "Có rất nhiều thời gian."
        },
        {
          "id": "meaning-idioms-10-option-4",
          "text": "Bắt đầu chạy bộ."
        }
      ],
      "correctOptionId": "meaning-idioms-10-option-1",
      "explanation": "Run out of something nghĩa là dùng hết hoặc không còn thứ gì.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-11",
      "category": "meaning-idioms",
      "prompt": "What does \"cost an arm and a leg\" mean?",
      "options": [
        {
          "id": "meaning-idioms-11-option-1",
          "text": "Rất đắt đỏ."
        },
        {
          "id": "meaning-idioms-11-option-2",
          "text": "Hoàn toàn miễn phí."
        },
        {
          "id": "meaning-idioms-11-option-3",
          "text": "Rất dễ sử dụng."
        },
        {
          "id": "meaning-idioms-11-option-4",
          "text": "Bị đau chân tay."
        }
      ],
      "correctOptionId": "meaning-idioms-11-option-1",
      "explanation": "Thành ngữ này nhấn mạnh một thứ có giá rất cao.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-12",
      "category": "meaning-idioms",
      "prompt": "What does \"learn by heart\" mean?",
      "options": [
        {
          "id": "meaning-idioms-12-option-1",
          "text": "Học thuộc lòng."
        },
        {
          "id": "meaning-idioms-12-option-2",
          "text": "Học về trái tim."
        },
        {
          "id": "meaning-idioms-12-option-3",
          "text": "Học một cách tình cờ."
        },
        {
          "id": "meaning-idioms-12-option-4",
          "text": "Học một mình."
        }
      ],
      "correctOptionId": "meaning-idioms-12-option-1",
      "explanation": "Learn by heart nghĩa là ghi nhớ chính xác, học thuộc lòng.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-13",
      "category": "meaning-idioms",
      "prompt": "Choose the meaning of \"Actions speak louder than words.\"",
      "options": [
        {
          "id": "meaning-idioms-13-option-1",
          "text": "Hành động có giá trị hơn lời nói."
        },
        {
          "id": "meaning-idioms-13-option-2",
          "text": "Nói càng to càng tốt."
        },
        {
          "id": "meaning-idioms-13-option-3",
          "text": "Không nên hành động."
        },
        {
          "id": "meaning-idioms-13-option-4",
          "text": "Lời nói luôn quan trọng hơn."
        }
      ],
      "correctOptionId": "meaning-idioms-13-option-1",
      "explanation": "Câu nhấn mạnh điều ta làm thuyết phục hơn điều ta chỉ nói.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-14",
      "category": "meaning-idioms",
      "prompt": "What does \"get along with\" mean?",
      "options": [
        {
          "id": "meaning-idioms-14-option-1",
          "text": "Hòa thuận với."
        },
        {
          "id": "meaning-idioms-14-option-2",
          "text": "Chạy xa khỏi."
        },
        {
          "id": "meaning-idioms-14-option-3",
          "text": "Từ bỏ hoàn toàn."
        },
        {
          "id": "meaning-idioms-14-option-4",
          "text": "Đến muộn hơn."
        }
      ],
      "correctOptionId": "meaning-idioms-14-option-1",
      "explanation": "Get along with someone nghĩa là có mối quan hệ hòa thuận với ai.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-15",
      "category": "meaning-idioms",
      "prompt": "What does \"a helping hand\" mean?",
      "options": [
        {
          "id": "meaning-idioms-15-option-1",
          "text": "Sự giúp đỡ."
        },
        {
          "id": "meaning-idioms-15-option-2",
          "text": "Một chiếc găng tay."
        },
        {
          "id": "meaning-idioms-15-option-3",
          "text": "Một bài kiểm tra."
        },
        {
          "id": "meaning-idioms-15-option-4",
          "text": "Một lời từ chối."
        }
      ],
      "correctOptionId": "meaning-idioms-15-option-1",
      "explanation": "Give someone a helping hand nghĩa là giúp đỡ người đó.",
      "timeLimitSeconds": 15
    },
    {
      "id": "meaning-idioms-16",
      "category": "meaning-idioms",
      "prompt": "Choose the meaning of \"Every cloud has a silver lining.\"",
      "options": [
        {
          "id": "meaning-idioms-16-option-1",
          "text": "Trong khó khăn vẫn có điều tích cực."
        },
        {
          "id": "meaning-idioms-16-option-2",
          "text": "Mây luôn làm bằng bạc."
        },
        {
          "id": "meaning-idioms-16-option-3",
          "text": "Khó khăn không bao giờ hết."
        },
        {
          "id": "meaning-idioms-16-option-4",
          "text": "Chỉ nên ra ngoài khi có mây."
        }
      ],
      "correctOptionId": "meaning-idioms-16-option-1",
      "explanation": "Thành ngữ khuyến khích tìm điểm tốt hoặc hy vọng trong hoàn cảnh khó khăn.",
      "timeLimitSeconds": 15
    }
  ],
  "accessibility": {
    "minTouchTargetCssPixels": 44,
    "reducedMotion": {
      "cameraShake": false,
      "particleMultiplier": 0.25
    },
    "correctnessUsesTextAndColor": true,
    "pauseOnHidden": true
  },
  "effects": {
    "correctParticles": 18,
    "landingParticles": 10,
    "hitParticles": 8,
    "cameraShakePixels": 4
  },
  "persistence": {
    "highScoreKey": "neon-english-runner.highScore.v1",
    "muteKey": "neon-english-runner.muted.v1",
    "storageFailureFallback": "memory"
  },
  "ui": {
    "title": "english rush",
    "start": "Bắt đầu",
    "objective": "Trả lời đúng để robot nhảy qua tinh thể và phá kỷ lục!",
    "instructions": "Chọn đáp án bằng chuột, chạm hoặc phím 1–4 / A–D. Bạn có 3 tim.",
    "score": "Điểm",
    "highScore": "Kỷ lục thiết bị",
    "lives": "Tim",
    "combo": "Combo",
    "timer": "Thời gian",
    "correct": "Chính xác!",
    "incorrect": "Chưa đúng",
    "timeout": "Hết thời gian",
    "correctAnswer": "Đáp án đúng",
    "explanation": "Giải thích",
    "continue": "Tiếp tục",
    "gameover": "Hết tim!",
    "restart": "Chơi lại",
    "mute": "Tắt âm thanh",
    "unmute": "Bật âm thanh",
    "leaderboard": "Bảng xếp hạng",
    "finalScore": "Điểm lượt này",
    "personalBest": "Điểm cao nhất",
    "rank": "Hạng theo kỷ lục",
    "nextScore": "Mốc điểm tiếp theo",
    "editNickname": "Sửa biệt danh",
    "nicknameHint": "Biệt danh mới dùng cho bảng xếp hạng của trò chơi này và các lượt chơi sau; điểm cao nhất không đổi.",
    "save": "Lưu",
    "cancel": "Hủy",
    "close": "Đóng",
    "offline": "Chưa kết nối bảng xếp hạng. Bạn vẫn có thể chơi lại.",
    "you": "Bạn",
    "loading": "Đang tải",
    "noScore": "Chưa có điểm",
    "retry": "Thử lại"
  },
  "title": "english rush",
  "gameType": "english-quiz-endless-runner",
  "renderMode": "canvas-2d",
  "inGameLanguage": "vi",
  "presentation": {
    "orientation": "adaptive",
    "viewportMode": "adaptive",
    "scaleMode": "continuous"
  },
  "leaderboard": {
    "enabled": true,
    "scoreLabel": "Điểm",
    "submitStates": [
      "gameover"
    ],
    "gameId": "game_8e33250c-e332-458b-b475-39c926f6fe62"
  },
  "audio": {
    "requiredEvents": [
      "jump",
      "powerup",
      "hit"
    ],
    "bgm": {
      "loop": true,
      "volume": 0.08,
      "source": "creator-provided",
      "url": "https://resource.utdownload.com/soonlab/game-audio/2026-11-15/9422a871-8431-4cda-815c-f59f9ed64d36.mp3",
      "mimeType": "audio/mpeg"
    },
    "sfx": {
      "volume": 0.22,
      "clips": {
        "jump": {
          "gain": 0.65,
          "cooldownMs": 90,
          "polyphony": 2,
          "fallbackTone": {
            "from": 300,
            "to": 560,
            "duration": 0.09,
            "type": "sine"
          },
          "source": "synth"
        },
        "powerup": {
          "gain": 0.8,
          "cooldownMs": 100,
          "polyphony": 3,
          "fallbackTone": {
            "from": 380,
            "to": 900,
            "duration": 0.18,
            "type": "triangle"
          },
          "source": "synth"
        },
        "hit": {
          "gain": 0.9,
          "cooldownMs": 80,
          "polyphony": 3,
          "fallbackTone": {
            "from": 180,
            "to": 90,
            "duration": 0.1,
            "type": "sawtooth"
          },
          "source": "synth"
        }
      }
    },
    "modeBgm": {
      "memory": {
        "source": "creator-provided",
        "url": "https://resource.utdownload.com/soonlab/game-audio/2026-11-15/fe1c9c0f-fd6a-4991-a45d-dbe94ed2dae3.mp3",
        "mimeType": "audio/mpeg"
      },
      "quest": {
        "source": "creator-provided",
        "url": "https://resource.utdownload.com/soonlab/game-audio/2026-11-15/cda00439-aa72-4359-a8e0-8b615f1f0cb0.mp3",
        "mimeType": "audio/mpeg"
      }
    }
  },
  "learningVocabulary": [
    [
      "apple",
      "quả táo"
    ],
    [
      "book",
      "quyển sách"
    ],
    [
      "sun",
      "mặt trời"
    ],
    [
      "moon",
      "mặt trăng"
    ],
    [
      "water",
      "nước"
    ],
    [
      "flower",
      "bông hoa"
    ],
    [
      "house",
      "ngôi nhà"
    ],
    [
      "friend",
      "người bạn"
    ],
    [
      "tiger",
      "hổ"
    ],
    [
      "horse",
      "ngựa"
    ],
    [
      "panda",
      "gấu trúc"
    ],
    [
      "koala",
      "gấu túi"
    ],
    [
      "cat",
      "mèo"
    ],
    [
      "dog",
      "chó"
    ],
    [
      "rabbit",
      "thỏ"
    ],
    [
      "monkey",
      "khỉ"
    ],
    [
      "lion",
      "sư tử"
    ],
    [
      "zebra",
      "ngựa vằn"
    ],
    [
      "bird",
      "chim"
    ],
    [
      "fish",
      "cá"
    ],
    [
      "orange",
      "quả cam"
    ],
    [
      "banana",
      "quả chuối"
    ],
    [
      "grape",
      "quả nho"
    ],
    [
      "mango",
      "quả xoài"
    ],
    [
      "bread",
      "bánh mì"
    ],
    [
      "rice",
      "gạo"
    ],
    [
      "milk",
      "sữa"
    ],
    [
      "cheese",
      "phô mai"
    ],
    [
      "carrot",
      "cà rốt"
    ],
    [
      "tomato",
      "cà chua"
    ],
    [
      "school",
      "trường học"
    ],
    [
      "teacher",
      "giáo viên"
    ],
    [
      "student",
      "học sinh"
    ],
    [
      "pencil",
      "bút chì"
    ],
    [
      "ruler",
      "thước kẻ"
    ],
    [
      "desk",
      "bàn học"
    ],
    [
      "chair",
      "ghế"
    ],
    [
      "window",
      "cửa sổ"
    ],
    [
      "garden",
      "khu vườn"
    ],
    [
      "kitchen",
      "nhà bếp"
    ],
    [
      "river",
      "dòng sông"
    ],
    [
      "ocean",
      "đại dương"
    ],
    [
      "forest",
      "rừng"
    ],
    [
      "mountain",
      "ngọn núi"
    ],
    [
      "island",
      "hòn đảo"
    ],
    [
      "rain",
      "mưa"
    ],
    [
      "cloud",
      "đám mây"
    ],
    [
      "snow",
      "tuyết"
    ],
    [
      "wind",
      "gió"
    ],
    [
      "star",
      "ngôi sao"
    ],
    [
      "happy",
      "vui vẻ"
    ],
    [
      "brave",
      "dũng cảm"
    ],
    [
      "kind",
      "tốt bụng"
    ],
    [
      "clever",
      "thông minh"
    ],
    [
      "quiet",
      "yên tĩnh"
    ],
    [
      "travel",
      "du lịch"
    ],
    [
      "listen",
      "lắng nghe"
    ],
    [
      "write",
      "viết"
    ],
    [
      "read",
      "đọc"
    ],
    [
      "swim",
      "bơi"
    ],
    [
      "dance",
      "nhảy múa"
    ],
    [
      "sing",
      "hát"
    ],
    [
      "family",
      "gia đình"
    ],
    [
      "summer",
      "mùa hè"
    ]
  ]
};
