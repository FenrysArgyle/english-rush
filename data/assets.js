window.LOBSTER_GAME_ASSETS = {
  "assets": [
    {
      "id": "robot-run",
      "role": "robot-run",
      "displayName": "Robot chạy",
      "kind": "image",
      "runtimeKey": "robotRun",
      "renderMode": "canvas-2d",
      "transparent": true,
      "alphaRequired": true,
      "placeholder": false,
      "source": "generated-image",
      "url": "https://ssr.iappsign.com/soonlab/game-materials/2d-materials/characters/neon-robot-run-a53d3a1b-3ef4-44cf-9950-2675c4c186ac/Neon-Robot-Run.webp",
      "mimeType": "image/webp",
      "oss": {
        "kind": "sprite-character",
        "assetId": "5af17dea-c072-4b07-9073-ce0b462b3815",
        "versionId": "a53d3a1b-3ef4-44cf-9950-2675c4c186ac",
        "artifactId": "source",
        "objectKey": "soonlab/game-materials/2d-materials/characters/neon-robot-run-a53d3a1b-3ef4-44cf-9950-2675c4c186ac/Neon-Robot-Run.webp",
        "sizeBytes": 1280304,
        "etag": "3E10E909403A76311918483AAC5AC492"
      },
      "fileName": "Neon-Robot-Run.webp",
      "materialType": "2d-materials",
      "category": "characters",
      "categoryPath": "2d-materials/characters",
      "fileType": "webp",
      "materialSize": 1280304,
      "tags": [
        "robot",
        "neon",
        "side-view",
        "sprite"
      ],
      "materialInfo": {
        "fileName": "Neon-Robot-Run.webp",
        "category": "2d-materials/characters",
        "fileType": "webp",
        "description": "Friendly ivory robot with cyan visor eyes and magenta ear plates performing a readable run action in side view.",
        "source": "SoonLab",
        "size": 1280304,
        "dimensions": "1024x1152",
        "tags": [
          "robot",
          "neon",
          "side-view",
          "sprite"
        ],
        "hasAlpha": true,
        "sprite": {
          "layout": {
            "columns": 2,
            "rows": 2,
            "frameWidth": 512,
            "frameHeight": 576,
            "frameCount": 4,
            "paddingX": 0,
            "paddingY": 0,
            "spacingX": 0,
            "spacingY": 0,
            "order": "row-major"
          },
          "pivot": {
            "x": 0.5,
            "y": 1
          },
          "animations": [
            {
              "name": "run",
              "frames": [
                {
                  "frameIndex": 0
                },
                {
                  "frameIndex": 1
                },
                {
                  "frameIndex": 2
                },
                {
                  "frameIndex": 3
                }
              ],
              "frameRate": 12,
              "loop": true
            }
          ],
          "defaultAnimation": "run",
          "directionMode": "single"
        }
      },
      "hasAlpha": true,
      "sprite": {
        "layout": {
          "columns": 2,
          "rows": 2,
          "frameWidth": 512,
          "frameHeight": 576,
          "frameCount": 4,
          "paddingX": 0,
          "paddingY": 0,
          "spacingX": 0,
          "spacingY": 0,
          "order": "row-major"
        },
        "pivot": {
          "x": 0.5,
          "y": 1
        },
        "animations": [
          {
            "name": "run",
            "frames": [
              {
                "frameIndex": 0
              },
              {
                "frameIndex": 1
              },
              {
                "frameIndex": 2
              },
              {
                "frameIndex": 3
              }
            ],
            "frameRate": 12,
            "loop": true
          }
        ],
        "defaultAnimation": "run",
        "directionMode": "single"
      },
      "description": "Bốn tư thế chạy liên tục của robot trắng ngà, mắt xanh lam và tai hồng.",
      "reviewCategory": "character",
      "size": "1024x1152",
      "dimensions": {
        "width": 1024,
        "height": 1152
      },
      "profile": "sprite-sheet",
      "coverageGroup": "character",
      "usage": "gameplay",
      "layer": "world-main",
      "animation": {
        "layout": "2x2",
        "frameWidth": 512,
        "frameHeight": 576,
        "anchor": "bottom-center",
        "frames": [
          "run-1",
          "run-2",
          "run-3",
          "run-4"
        ],
        "phasePlan": [
          {
            "frame": "run-1",
            "action": "run",
            "cue": "Left boot contacts ground, right arm forward"
          },
          {
            "frame": "run-2",
            "action": "run",
            "cue": "Body passes over planted left foot, right knee lifts"
          },
          {
            "frame": "run-3",
            "action": "run",
            "cue": "Right boot contacts ground, left arm forward"
          },
          {
            "frame": "run-4",
            "action": "run",
            "cue": "Body passes over right foot, left knee lifts; closes into first contact"
          }
        ],
        "loopClip": {
          "name": "run",
          "indices": [
            0,
            1,
            2,
            3
          ],
          "fps": 12,
          "loop": true
        }
      },
      "fallback": {
        "type": "procedural",
        "description": "Draw rounded jointed robot with same colors and articulated run phases; preserve the action and feet anchor."
      },
      "replaceTargets": [
        "scripts/renderer.js:ASSET.robotRun"
      ]
    },
    {
      "id": "robot-jump",
      "role": "robot-jump",
      "displayName": "Robot nhảy",
      "kind": "image",
      "runtimeKey": "robotJump",
      "renderMode": "canvas-2d",
      "transparent": true,
      "alphaRequired": true,
      "placeholder": false,
      "source": "generated-image",
      "url": "https://ssr.iappsign.com/soonlab/game-materials/2d-materials/characters/neon-robot-jump-45c47343-6810-4569-8f18-393dc7bba0a3/Neon-Robot-Jump.webp",
      "mimeType": "image/webp",
      "oss": {
        "kind": "sprite-character",
        "assetId": "90f3189e-bdc2-4de7-875c-81a277d8d22a",
        "versionId": "45c47343-6810-4569-8f18-393dc7bba0a3",
        "artifactId": "source",
        "objectKey": "soonlab/game-materials/2d-materials/characters/neon-robot-jump-45c47343-6810-4569-8f18-393dc7bba0a3/Neon-Robot-Jump.webp",
        "sizeBytes": 1380674,
        "etag": "220A4B66D34D8E475DBC3694EEF8BBEB"
      },
      "fileName": "Neon-Robot-Jump.webp",
      "materialType": "2d-materials",
      "category": "characters",
      "categoryPath": "2d-materials/characters",
      "fileType": "webp",
      "materialSize": 1380674,
      "tags": [
        "robot",
        "neon",
        "side-view",
        "sprite"
      ],
      "materialInfo": {
        "fileName": "Neon-Robot-Jump.webp",
        "category": "2d-materials/characters",
        "fileType": "webp",
        "description": "Friendly ivory robot with cyan visor eyes and magenta ear plates performing a readable jump action in side view.",
        "source": "SoonLab",
        "size": 1380674,
        "dimensions": "1024x1152",
        "tags": [
          "robot",
          "neon",
          "side-view",
          "sprite"
        ],
        "hasAlpha": true,
        "sprite": {
          "layout": {
            "columns": 2,
            "rows": 2,
            "frameWidth": 512,
            "frameHeight": 576,
            "frameCount": 4,
            "paddingX": 0,
            "paddingY": 0,
            "spacingX": 0,
            "spacingY": 0,
            "order": "row-major"
          },
          "pivot": {
            "x": 0.5,
            "y": 1
          },
          "animations": [
            {
              "name": "jump",
              "frames": [
                {
                  "frameIndex": 0
                },
                {
                  "frameIndex": 1
                },
                {
                  "frameIndex": 2
                },
                {
                  "frameIndex": 3
                }
              ],
              "frameRate": 8,
              "loop": false
            }
          ],
          "defaultAnimation": "jump",
          "directionMode": "single"
        }
      },
      "hasAlpha": true,
      "sprite": {
        "layout": {
          "columns": 2,
          "rows": 2,
          "frameWidth": 512,
          "frameHeight": 576,
          "frameCount": 4,
          "paddingX": 0,
          "paddingY": 0,
          "spacingX": 0,
          "spacingY": 0,
          "order": "row-major"
        },
        "pivot": {
          "x": 0.5,
          "y": 1
        },
        "animations": [
          {
            "name": "jump",
            "frames": [
              {
                "frameIndex": 0
              },
              {
                "frameIndex": 1
              },
              {
                "frameIndex": 2
              },
              {
                "frameIndex": 3
              }
            ],
            "frameRate": 8,
            "loop": false
          }
        ],
        "defaultAnimation": "jump",
        "directionMode": "single"
      },
      "description": "Bốn tư thế chuẩn bị, bật nhảy, trên không và tiếp đất.",
      "reviewCategory": "character",
      "size": "1024x1152",
      "dimensions": {
        "width": 1024,
        "height": 1152
      },
      "profile": "sprite-sheet",
      "coverageGroup": "character",
      "usage": "gameplay",
      "layer": "world-main",
      "animation": {
        "layout": "2x2",
        "frameWidth": 512,
        "frameHeight": 576,
        "anchor": "bottom-center",
        "frames": [
          "jump-1",
          "jump-2",
          "jump-3",
          "jump-4"
        ],
        "phasePlan": [
          {
            "frame": "jump-1",
            "action": "jump",
            "cue": "Crouch with bent knees preparing launch"
          },
          {
            "frame": "jump-2",
            "action": "jump",
            "cue": "Push off, extend legs and lift both arms"
          },
          {
            "frame": "jump-3",
            "action": "jump",
            "cue": "Tuck knees at airborne apex"
          },
          {
            "frame": "jump-4",
            "action": "jump",
            "cue": "Extend boots to land with knees absorbing impact"
          }
        ],
        "units": [
          {
            "type": "sequence",
            "name": "jump",
            "indices": [
              0,
              1,
              2,
              3
            ],
            "fps": 8
          }
        ]
      },
      "fallback": {
        "type": "procedural",
        "description": "Draw rounded jointed robot with same colors and articulated jump phases; preserve the action and feet anchor."
      },
      "replaceTargets": [
        "scripts/renderer.js:ASSET.robotJump"
      ]
    },
    {
      "id": "robot-hit",
      "role": "robot-hit",
      "displayName": "Robot va chạm",
      "kind": "image",
      "runtimeKey": "robotHit",
      "renderMode": "canvas-2d",
      "transparent": true,
      "alphaRequired": true,
      "placeholder": false,
      "source": "generated-image",
      "url": "https://ssr.iappsign.com/soonlab/game-materials/2d-materials/characters/neon-robot-hit-63adeb79-5134-40ac-982d-fd91e6937b8f/Neon-Robot-Hit.webp",
      "mimeType": "image/webp",
      "oss": {
        "kind": "sprite-character",
        "assetId": "eb97553f-af2d-43ba-ac26-fe1557932fa6",
        "versionId": "63adeb79-5134-40ac-982d-fd91e6937b8f",
        "artifactId": "source",
        "objectKey": "soonlab/game-materials/2d-materials/characters/neon-robot-hit-63adeb79-5134-40ac-982d-fd91e6937b8f/Neon-Robot-Hit.webp",
        "sizeBytes": 711814,
        "etag": "2FF8054E84FAA82B04AD35A412CDCDE8"
      },
      "fileName": "Neon-Robot-Hit.webp",
      "materialType": "2d-materials",
      "category": "characters",
      "categoryPath": "2d-materials/characters",
      "fileType": "webp",
      "materialSize": 711814,
      "tags": [
        "robot",
        "neon",
        "side-view",
        "sprite"
      ],
      "materialInfo": {
        "fileName": "Neon-Robot-Hit.webp",
        "category": "2d-materials/characters",
        "fileType": "webp",
        "description": "Friendly ivory robot with cyan visor eyes and magenta ear plates performing a readable hit action in side view.",
        "source": "SoonLab",
        "size": 711814,
        "dimensions": "1024x1152",
        "tags": [
          "robot",
          "neon",
          "side-view",
          "sprite"
        ],
        "hasAlpha": true,
        "sprite": {
          "layout": {
            "columns": 2,
            "rows": 2,
            "frameWidth": 512,
            "frameHeight": 576,
            "frameCount": 4,
            "paddingX": 0,
            "paddingY": 0,
            "spacingX": 0,
            "spacingY": 0,
            "order": "row-major"
          },
          "pivot": {
            "x": 0.5,
            "y": 1
          },
          "animations": [
            {
              "name": "hit",
              "frames": [
                {
                  "frameIndex": 0
                },
                {
                  "frameIndex": 1
                },
                {
                  "frameIndex": 2
                },
                {
                  "frameIndex": 3
                }
              ],
              "frameRate": 8,
              "loop": false
            }
          ],
          "defaultAnimation": "hit",
          "directionMode": "single"
        }
      },
      "hasAlpha": true,
      "sprite": {
        "layout": {
          "columns": 2,
          "rows": 2,
          "frameWidth": 512,
          "frameHeight": 576,
          "frameCount": 4,
          "paddingX": 0,
          "paddingY": 0,
          "spacingX": 0,
          "spacingY": 0,
          "order": "row-major"
        },
        "pivot": {
          "x": 0.5,
          "y": 1
        },
        "animations": [
          {
            "name": "hit",
            "frames": [
              {
                "frameIndex": 0
              },
              {
                "frameIndex": 1
              },
              {
                "frameIndex": 2
              },
              {
                "frameIndex": 3
              }
            ],
            "frameRate": 8,
            "loop": false
          }
        ],
        "defaultAnimation": "hit",
        "directionMode": "single"
      },
      "description": "Bốn tư thế va chạm, mất thăng bằng và hồi phục.",
      "reviewCategory": "character",
      "size": "1024x1152",
      "dimensions": {
        "width": 1024,
        "height": 1152
      },
      "profile": "sprite-sheet",
      "coverageGroup": "character",
      "usage": "gameplay",
      "layer": "world-main",
      "animation": {
        "layout": "2x2",
        "frameWidth": 512,
        "frameHeight": 576,
        "anchor": "bottom-center",
        "frames": [
          "hit-1",
          "hit-2",
          "hit-3",
          "hit-4"
        ],
        "phasePlan": [
          {
            "frame": "hit-1",
            "action": "hit",
            "cue": "Leading boot catches crystal; torso recoils"
          },
          {
            "frame": "hit-2",
            "action": "hit",
            "cue": "Arms flail and knees fold away from impact"
          },
          {
            "frame": "hit-3",
            "action": "hit",
            "cue": "Robot stumbles with lowered head and bent legs"
          },
          {
            "frame": "hit-4",
            "action": "hit",
            "cue": "Regain balanced stance ready to continue"
          }
        ],
        "units": [
          {
            "type": "sequence",
            "name": "hit",
            "indices": [
              0,
              1,
              2,
              3
            ],
            "fps": 8
          }
        ]
      },
      "fallback": {
        "type": "procedural",
        "description": "Draw rounded jointed robot with same colors and articulated hit phases; preserve the action and feet anchor."
      },
      "replaceTargets": [
        "scripts/renderer.js:ASSET.robotHit"
      ]
    },
    {
      "id": "neon-skyline",
      "role": "neon-skyline",
      "displayName": "Chân trời neon",
      "kind": "image",
      "runtimeKey": "neonSkyline",
      "renderMode": "canvas-2d",
      "transparent": false,
      "alphaRequired": false,
      "placeholder": false,
      "source": "generated-image",
      "url": "https://ssr.iappsign.com/soonlab/game-materials/2d-materials/backgrounds/neon-dusk-skyline-a8392887-2536-4bde-80bd-f946bfb68bc7/Neon-Dusk-Skyline.webp",
      "mimeType": "image/webp",
      "oss": {
        "kind": "image",
        "assetId": "214f5e08-15a5-4678-8bca-998f14b3e1ee",
        "versionId": "a8392887-2536-4bde-80bd-f946bfb68bc7",
        "artifactId": "source",
        "objectKey": "soonlab/game-materials/2d-materials/backgrounds/neon-dusk-skyline-a8392887-2536-4bde-80bd-f946bfb68bc7/Neon-Dusk-Skyline.webp",
        "sizeBytes": 119366,
        "etag": "92C10F7BB5B5486DA87A15A8039577E8"
      },
      "fileName": "Neon-Dusk-Skyline.webp",
      "materialType": "2d-materials",
      "category": "backgrounds",
      "categoryPath": "2d-materials/backgrounds",
      "fileType": "webp",
      "materialSize": 119366,
      "tags": [
        "city",
        "cyberpunk",
        "skyline"
      ],
      "materialInfo": {
        "fileName": "Neon-Dusk-Skyline.webp",
        "category": "2d-materials/backgrounds",
        "fileType": "webp",
        "description": "Groundless layered distant cyberpunk city skyline under an indigo and purple dusk sky.",
        "source": "SoonLab",
        "size": 119366,
        "dimensions": "2560x1440",
        "tags": [
          "city",
          "cyberpunk",
          "skyline"
        ],
        "hasAlpha": false
      },
      "hasAlpha": false,
      "description": "Bầu trời tím chạng vạng và đường chân trời thành phố xa.",
      "reviewCategory": "environment",
      "size": "2048x1152",
      "dimensions": {
        "width": 2560,
        "height": 1440
      },
      "profile": "wide-background",
      "coverageGroup": "environment",
      "usage": "background",
      "layer": "background",
      "fallback": {
        "type": "procedural",
        "description": "One gradient dusk sky with distant rounded skyline silhouettes, no second background."
      },
      "replaceTargets": [
        "scripts/renderer.js:ASSET.neonSkyline"
      ]
    },
    {
      "id": "near-city",
      "role": "near-city",
      "displayName": "Lớp phố neon",
      "kind": "image",
      "runtimeKey": "nearCity",
      "renderMode": "canvas-2d",
      "transparent": true,
      "alphaRequired": true,
      "placeholder": false,
      "source": "generated-image",
      "url": "https://ssr.iappsign.com/soonlab/game-materials/2d-materials/backgrounds/neon-city-parallax-buildings-dbb3f184-fd2f-4041-ae69-098850b8be1f/Neon-City-Parallax-Buildings.webp",
      "mimeType": "image/webp",
      "oss": {
        "kind": "image",
        "assetId": "e293146a-151b-4148-9b0b-1a7c0462af90",
        "versionId": "dbb3f184-fd2f-4041-ae69-098850b8be1f",
        "artifactId": "source",
        "objectKey": "soonlab/game-materials/2d-materials/backgrounds/neon-city-parallax-buildings-dbb3f184-fd2f-4041-ae69-098850b8be1f/Neon-City-Parallax-Buildings.webp",
        "sizeBytes": 2507038,
        "etag": "2DBF191BEC6E6FC1BA3C285820998009"
      },
      "fileName": "Neon-City-Parallax-Buildings.webp",
      "materialType": "2d-materials",
      "category": "backgrounds",
      "categoryPath": "2d-materials/backgrounds",
      "fileType": "webp",
      "materialSize": 2507038,
      "tags": [
        "buildings",
        "neon",
        "city"
      ],
      "materialInfo": {
        "fileName": "Neon-City-Parallax-Buildings.webp",
        "category": "2d-materials/backgrounds",
        "fileType": "webp",
        "description": "Transparent city building silhouettes with cyan and magenta windows for a scrolling middle-distance layer.",
        "source": "SoonLab",
        "size": 2507038,
        "dimensions": "2560x1440",
        "tags": [
          "buildings",
          "neon",
          "city"
        ],
        "hasAlpha": true
      },
      "hasAlpha": true,
      "description": "Các tòa nhà trong suốt với cửa sổ xanh lam và hồng cho nền chuyển động.",
      "reviewCategory": "environment",
      "size": "2048x1152",
      "dimensions": {
        "width": 2560,
        "height": 1440
      },
      "profile": "wide-background",
      "coverageGroup": "environment",
      "usage": "decorative",
      "layer": "world-back",
      "fallback": {
        "type": "procedural",
        "description": "Sparse translucent building silhouettes scrolling slower than the track."
      },
      "replaceTargets": [
        "scripts/renderer.js:ASSET.nearCity"
      ]
    },
    {
      "id": "energy-crystal",
      "role": "energy-crystal",
      "displayName": "Tinh thể năng lượng",
      "kind": "image",
      "runtimeKey": "energyCrystal",
      "renderMode": "canvas-2d",
      "transparent": true,
      "alphaRequired": true,
      "placeholder": false,
      "source": "generated-image",
      "url": "https://ssr.iappsign.com/soonlab/game-materials/2d-materials/items/magenta-energy-crystal-obstacle-05bec6e1-cbcd-4363-82e6-d0d9f85225d4/Magenta-Energy-Crystal-Obstacle.webp",
      "mimeType": "image/webp",
      "oss": {
        "kind": "image",
        "assetId": "65378c83-e7d6-4cf2-a934-7616cb5612e1",
        "versionId": "05bec6e1-cbcd-4363-82e6-d0d9f85225d4",
        "artifactId": "source",
        "objectKey": "soonlab/game-materials/2d-materials/items/magenta-energy-crystal-obstacle-05bec6e1-cbcd-4363-82e6-d0d9f85225d4/Magenta-Energy-Crystal-Obstacle.webp",
        "sizeBytes": 373576,
        "etag": "497F90B3B4102166394DF5EC87771D24"
      },
      "fileName": "Magenta-Energy-Crystal-Obstacle.webp",
      "materialType": "2d-materials",
      "category": "items",
      "categoryPath": "2d-materials/items",
      "fileType": "webp",
      "materialSize": 373576,
      "tags": [
        "crystal",
        "neon",
        "obstacle"
      ],
      "materialInfo": {
        "fileName": "Magenta-Energy-Crystal-Obstacle.webp",
        "category": "2d-materials/items",
        "fileType": "webp",
        "description": "Jagged magenta crystal cluster with cyan rim lighting, readable as a low jumping obstacle.",
        "source": "SoonLab",
        "size": 373576,
        "dimensions": "1024x1024",
        "tags": [
          "crystal",
          "neon",
          "obstacle"
        ],
        "hasAlpha": true
      },
      "hasAlpha": true,
      "description": "Cụm tinh thể hồng có viền xanh lam làm chướng ngại vật.",
      "reviewCategory": "prop",
      "size": "1024x1024",
      "dimensions": {
        "width": 1024,
        "height": 1024
      },
      "profile": "sprite",
      "coverageGroup": "prop",
      "usage": "gameplay",
      "layer": "world-main",
      "fallback": {
        "type": "procedural",
        "description": "Draw faceted magenta crystal cluster matching authoritative obstacle bounds; never a plain box."
      },
      "replaceTargets": [
        "scripts/renderer.js:ASSET.energyCrystal"
      ]
    }
  ],
  "schemaVersion": 2,
  "delivery": {
    "type": "soonlab-oss-flat",
    "format": "webp",
    "cdnBaseUrl": "https://ssr.iappsign.com"
  },
  "audioPlan": {
    "version": 1,
    "requiredEvents": [
      "jump",
      "powerup",
      "hit"
    ],
    "bgm": {
      "source": "synth",
      "loop": true,
      "volume": 0.08
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
    "selectionAudit": {
      "mode": "scene-v1",
      "requestHash": "a6085ae453d6a067d2feac664f1b8f067d1c12bec62293b3e39a2c568e9f4a55",
      "round": 1,
      "expansion": {
        "jump": [
          [
            "chirp",
            "pitch rise",
            "boing"
          ]
        ],
        "powerup": [
          [
            "ting",
            "two note",
            "success chime"
          ]
        ],
        "hit": [
          [
            "buzz",
            "error",
            "low impact"
          ]
        ]
      },
      "decisions": {
        "jump": {
          "reason": "Use a live Web Audio rising-pitch chirp on robot takeoff as explicitly approved. Retro and futuristic jump recordings fit the action better than voices, footsteps or magic, but all are prerecorded media and conflict with required runtime synthesis. Supplemental comparison does not remove this conflict. Catalog coverage is incomplete; this is not a claim that no matching sound exists.",
          "source": "synth",
          "rejections": [
            {
              "candidateId": "00ff068accbbface46aa3dda",
              "kind": "material",
              "reason": "The source sfx-movement-jump19.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "02af58089e44b3fbe09232c1",
              "kind": "material",
              "reason": "The source male-voice-troll-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0b84649ea46e44dee40bca50",
              "kind": "material",
              "reason": "The source sfx-movement-jump19-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0d3553d4773f55a5fb6722c1",
              "kind": "material",
              "reason": "The source sfx-movement-jump9-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "10bda0466ca5e38f982d3ce1",
              "kind": "material",
              "reason": "The source dwarf-female-jump-land-foot-movement.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "11160364bb0118a511698ed9",
              "kind": "material",
              "reason": "The source voice-male-jump-dwarf.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "121df58a3fea7ea2259ae031",
              "kind": "material",
              "reason": "The source female-jump-land-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1303b1484877ea593fc25ddc",
              "kind": "material",
              "reason": "The source male-voice-female-tauren-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "13a71b83296b96a5907283d3",
              "kind": "material",
              "reason": "The source jump-fast.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "19a3adc10541e1075d1939db",
              "kind": "material",
              "reason": "The source dwarf-female-jump-vocal-reaction.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1ca1f03498b597ad304c30cc",
              "kind": "material",
              "reason": "The source jump-land-male-orc-foot-movement.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1dc08588f92f692cc105cf69",
              "kind": "material",
              "reason": "The source voice-male-jump-human.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "225c6ae6a1483c9098e2ecbf",
              "kind": "material",
              "reason": "The source voice-child-female-undead-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2338380ab268534a103ea8cb",
              "kind": "material",
              "reason": "The source female-gnome-jump-land-foot-movement.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2698710fb1d07853a8aecd82",
              "kind": "material",
              "reason": "The source spring-08.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "273874c200afc7822afd7d31",
              "kind": "material",
              "reason": "The source jump-magic-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2967adcb3f8262710a692e64",
              "kind": "material",
              "reason": "The source phasejump3.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "29e060a47d07abe54c83a782",
              "kind": "material",
              "reason": "The source jump-swing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2b05b531addf5199e72a109c",
              "kind": "material",
              "reason": "The source phasejump4-2.mp3 is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2d964feccbeb81620852aa63",
              "kind": "material",
              "reason": "The source female-jump-land-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "33df92b471c51f051fcfba01",
              "kind": "material",
              "reason": "The source jump-magic-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "34acb7dc1c14504d208c93ab",
              "kind": "material",
              "reason": "The source sfx-movement-jump16-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "41164b9cd59a3a1b1a57bb23",
              "kind": "material",
              "reason": "The source sfx-movement-jump13-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "48f1028b84c7ee88e0d75561",
              "kind": "material",
              "reason": "The source jump-land-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "4c1869c5bad275093cccc623",
              "kind": "material",
              "reason": "The source voice-female-jump-land.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "4fda1e643593d06ea21308af",
              "kind": "material",
              "reason": "The source female-voice-child-jump-human.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "7ec986fdd9e86d9fae2d7a21",
              "kind": "material",
              "reason": "The source voice-male-undead-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "85cbeb1fbc8f4c6e08ec6ee3",
              "kind": "material",
              "reason": "The source sfx-movement-jump17-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "9139abc25c99256a109bc51f",
              "kind": "material",
              "reason": "The source voice-child-female-elf-jump-night.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "92359d7f6a17d1a0d8d9f07f",
              "kind": "material",
              "reason": "The source voice-male-tauren-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "a14d92b800a54fcc6fcda370",
              "kind": "material",
              "reason": "The source female-jump-land-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "a14fa62f85d471fad464cd01",
              "kind": "material",
              "reason": "The source male-jump-land-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "a89ea4e269a90ea061d0c8f8",
              "kind": "material",
              "reason": "The source jump-land-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "a9f54f6d56f54ebbcbacfa6d",
              "kind": "material",
              "reason": "The source sfx-movement-jump10-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "aa83c7499e293f79ea4d4e87",
              "kind": "material",
              "reason": "The source jump-land-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "af6eaad7acd789d3b86508b1",
              "kind": "material",
              "reason": "The source sfx-movement-jump14-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "b4f787007dfbb514473ee5fb",
              "kind": "material",
              "reason": "The source female-jump-vocal-reaction.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "bb181ab93669299a07fffa38",
              "kind": "material",
              "reason": "The source male-jump-land-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "bd42d21960bdf2c0cd49e514",
              "kind": "material",
              "reason": "The source jump-cloth.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "bdebce55ddd5c5b04f86c931",
              "kind": "material",
              "reason": "The source male-jump-land-04.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "bf2e032cf1bc6fe0851f2a90",
              "kind": "material",
              "reason": "The source sfx-movement-jump18-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "c10077b88f181d15f6d03e59",
              "kind": "material",
              "reason": "The source jump-male-orc-vocal-reaction.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "ca1be6ee052e5890af3ef14a",
              "kind": "material",
              "reason": "The source jump-land-cloth.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "ce32da52bf044d813990dbab",
              "kind": "material",
              "reason": "The source jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "d6c2654ae336aba0ae922440",
              "kind": "material",
              "reason": "The source gnome-jump-male-vocal-reaction.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "d6d373e31c222c734b2b0a18",
              "kind": "material",
              "reason": "The source sfx-movement-jump11-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "e070ce93999ab10ccb8d4196",
              "kind": "material",
              "reason": "The source sfx-movement-jump12-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "e448b744f39e7f48cfa4ee71",
              "kind": "material",
              "reason": "The source male-voice-female-orc-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "e69a221e255da35ff30931db",
              "kind": "material",
              "reason": "The source voice-male-troll-jump.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "e6bec4b972ccbc2b298f9376",
              "kind": "material",
              "reason": "The source male-jump-land-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "ecabdf9d32edd30b3d5c4979",
              "kind": "material",
              "reason": "The source female-gnome-jump-vocal-reaction.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "ed079737a9d47959792c1081",
              "kind": "material",
              "reason": "The source sfx-movement-jump15-landing.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "f9ee78dd46864d56948a3588",
              "kind": "material",
              "reason": "The source voice-male-elf-jump-night.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "fdb2bb004ac8e6a819f6f06a",
              "kind": "material",
              "reason": "The source jump-swing-staff.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "04323107e9635440ab07e53b",
              "kind": "material",
              "reason": "The source footstep02.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "08e9f55fbdd471544387ef99",
              "kind": "material",
              "reason": "The source footstep-concrete-002.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "251ec9ed5f8a6fb8d998424d",
              "kind": "material",
              "reason": "The source explosioncrunch-001.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "29adf22cd5357ef8052dca28",
              "kind": "material",
              "reason": "The source footstep-grass-004.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "3496f16d142ea5c592922640",
              "kind": "material",
              "reason": "The source footstep-wood-002.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "471565a2ccab0cc808f528a8",
              "kind": "material",
              "reason": "The source footstep-snow-002.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "5a1048f23bd09df05ff32f16",
              "kind": "material",
              "reason": "The source footstep-carpet-000.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "bc53888cff49e9732fde6849",
              "kind": "material",
              "reason": "The source voice-monster-water.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "dbee130806f559201b3b7a97",
              "kind": "material",
              "reason": "The source voice-bird-cheer.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "123989bd0d56f8993315c93c",
              "kind": "material",
              "reason": "The source sfx-movement-jump10.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits jump, selecting this recording conflicts with the approved synthesized-only sound direction."
            }
          ],
          "coverageComplete": false,
          "totalMatches": 133,
          "candidateSetVerified": true,
          "candidatesTruncated": true,
          "fallbackKind": "no-suitable-candidate"
        },
        "powerup": {
          "reason": "Use two live synthesized bell-like notes for a correct answer. Retro powerups and short stingers are closer than cheering, construction, brass or sword hits, but their two-note identity is undocumented and prerecorded playback conflicts with approved Web Audio-only synthesis. Supplemental comparison retains that decision. Incomplete coverage does not establish catalog-wide absence.",
          "source": "synth",
          "rejections": [
            {
              "candidateId": "016f8abc0e3edf26f6943cec",
              "kind": "material",
              "reason": "The source voice-victory-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "017f2419f5210a2b9a5bc115",
              "kind": "material",
              "reason": "The source victory-07.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "030a1adf7696916c85b188d0",
              "kind": "material",
              "reason": "The source jingles-steel07.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "04712bdb758c9b440fe338e5",
              "kind": "material",
              "reason": "The source jingles-sax15.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "06fc173dbd3672f740838226",
              "kind": "material",
              "reason": "The source jingles-pizzi08.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "076cb7466fd6e8f8b6ffd7cb",
              "kind": "material",
              "reason": "The source jingles-hit15.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "083f88afa1a18d361a610a73",
              "kind": "material",
              "reason": "The source victory-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0ae29669798c7d00dc6ad16a",
              "kind": "material",
              "reason": "The source jingles-nes15.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1b80c02f327f4fe1aecacdf5",
              "kind": "material",
              "reason": "The source victory-human-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2098d8a75733f3e0fa3991d5",
              "kind": "material",
              "reason": "The source victory-04.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2e8130d26e2a210cc21b0b74",
              "kind": "material",
              "reason": "The source victory-complete-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "34d47b3f2818b91895e9c3fb",
              "kind": "material",
              "reason": "The source victory-3.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "3635a1b8712f4409b7b6a8b8",
              "kind": "material",
              "reason": "The source sfx-sounds-fanfare3.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "37ea1b177fc69aa3a64552a0",
              "kind": "material",
              "reason": "The source orc-victory-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "4315b93a82e2d513a42b8235",
              "kind": "material",
              "reason": "The source victory-complete-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "4eb522cd1ee410b42a3e4741",
              "kind": "material",
              "reason": "The source victory-human-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "5028ae536e129429f1eb26f5",
              "kind": "material",
              "reason": "The source victory-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "6549e8a0644494924fa98f75",
              "kind": "material",
              "reason": "The source succes-3.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "6fb485305ddbe84f79800467",
              "kind": "material",
              "reason": "The source voice-victory-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "ae464d15f5f537523c8cc8fb",
              "kind": "material",
              "reason": "The source victory-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "b8c0ee07caa64cf8981a19fc",
              "kind": "material",
              "reason": "The source victory-05.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "bcb1518316c1ccd720f480f3",
              "kind": "material",
              "reason": "The source victory-06.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "d67de46010eb2acaa680b099",
              "kind": "material",
              "reason": "The source victory-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "dafea9fa0b237e6abd445d15",
              "kind": "material",
              "reason": "The source metal-victory-drum.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "e6cc75bc6a6f1c8aada41314",
              "kind": "material",
              "reason": "The source orc-victory-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "eb3879b4f410945f03e09573",
              "kind": "material",
              "reason": "The source victory-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "f6eec1f2c9f91a2eb5b0d887",
              "kind": "material",
              "reason": "The source victory-human-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "ff0550388453a8e9aa96da6c",
              "kind": "material",
              "reason": "The source orc-victory-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "3074bb10859a761eb418caa5",
              "kind": "material",
              "reason": "The source combo-blade-04.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0717e647a2071607e0e7df9e",
              "kind": "material",
              "reason": "The source jingles-pizzi16.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "08899745641a6eefb939e305",
              "kind": "material",
              "reason": "The source jingles-sax04.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1044154f6ef9cf6e3fc94cb4",
              "kind": "material",
              "reason": "The source jingles-steel10.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "123ee91df84a5a63827121b7",
              "kind": "material",
              "reason": "The source jingles-hit10.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "18cb361179f505f046f56430",
              "kind": "material",
              "reason": "The source jingles-nes13.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "778b501f20a1d35b30c6aed6",
              "kind": "material",
              "reason": "The source sfx-sounds-fanfare2.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "9d88e595f778c71eb8056921",
              "kind": "material",
              "reason": "The source succes.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "d6b9f29d57b8d4ef87063363",
              "kind": "material",
              "reason": "The source victory-2.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "dac12e653987350014292df8",
              "kind": "material",
              "reason": "The source victory-08.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits powerup, selecting this recording conflicts with the approved synthesized-only sound direction."
            }
          ],
          "coverageComplete": false,
          "totalMatches": 116,
          "candidateSetVerified": true,
          "candidatesTruncated": true,
          "fallbackKind": "no-suitable-candidate"
        },
        "hit": {
          "reason": "Use a short low-pitch synthesized buzz for collision or timeout. Electronic impact and error notification recordings are closer than swords, flesh, falling stone or metal clangs; gentleness and low pitch remain undocumented. All recordings conflict with explicit live Web Audio synthesis. Supplemental comparison preserves this direction; incomplete coverage is not catalog-wide no-match evidence.",
          "source": "synth",
          "rejections": [
            {
              "candidateId": "39bc910f295eaf09d8d7fb8e",
              "kind": "material",
              "reason": "The source hit-electronic.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0193929c39cab4062e97ad92",
              "kind": "material",
              "reason": "The source impactglass-light-000.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "03b5545333fd06010e6e39e9",
              "kind": "material",
              "reason": "The source hit-metal.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "02105acad605dfae3c611efa",
              "kind": "material",
              "reason": "The source weapon-hit-armor-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0313583cd2d1af2d4953eb17",
              "kind": "material",
              "reason": "The source sfx-sounds-impact15.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "045b5508d9043e560fd74ab0",
              "kind": "material",
              "reason": "The source hit-blade-09.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "02409eeba59bcbd2dca5b2ec",
              "kind": "material",
              "reason": "The source hit-71.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "04f675fda8422d46f772ad2e",
              "kind": "material",
              "reason": "The source blade-hit-metal-shield-impact-sound-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0ca0b9d2347399939b869e91",
              "kind": "material",
              "reason": "The source hit-shield-08.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "028b5383f2706e6ec8682d6b",
              "kind": "material",
              "reason": "The source weapon-hit-flesh-15.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0737139f8a1e8c1c0c3cdbb7",
              "kind": "material",
              "reason": "The source impactmetal-light-001.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "170d67d066af0487a4670997",
              "kind": "material",
              "reason": "The source hit-spaceship-large.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "02b5935b153c76dfd16dabf4",
              "kind": "material",
              "reason": "The source hit-stone-15.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "092d7ff7ac597368ffd9d0a2",
              "kind": "material",
              "reason": "The source magic-impact-07.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "17a25dfa1be8d482ff152e2b",
              "kind": "material",
              "reason": "The source hit-explosion-magic-metal-whoosh.mp3 is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "02cf1255ad8e0113ccdd64da",
              "kind": "material",
              "reason": "The source hit-50.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0ca5506c7d29b13e1224dd65",
              "kind": "material",
              "reason": "The source blade-staff-impact-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "19e956591d6eb43bb3848eb8",
              "kind": "material",
              "reason": "The source hit-shield-21.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "032e70952d85b7882c79d88a",
              "kind": "material",
              "reason": "The source hit-electric.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0fd93781b88e744b4f4355f7",
              "kind": "material",
              "reason": "The source impactpunch-heavy-000.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "27f2ea8d33933fa7d705df2c",
              "kind": "material",
              "reason": "The source hit-blade-06.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "039ec476aae305b73fddd0ed",
              "kind": "material",
              "reason": "The source hit-explosion-airflow-whoosh-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "10e737820e7569307a713a24",
              "kind": "material",
              "reason": "The source impactmetal-000.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2b18c3e79f6e0c9edf9ed46b",
              "kind": "material",
              "reason": "The source hit-53.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "046870fb6335e9a3839a72d5",
              "kind": "material",
              "reason": "The source impactsoft-medium-001.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1104fab3acb98e801ddb14d9",
              "kind": "material",
              "reason": "The source hit-coin.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2c4ffa5795bca45c90da7801",
              "kind": "material",
              "reason": "The source hit-high-frequency.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0510e3852c5ce2e7f2495305",
              "kind": "material",
              "reason": "The source hit-body-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "121e52272bcbe54a140d97bf",
              "kind": "material",
              "reason": "The source electric-like-hit-impact-sound.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "2f9843f051e494b9541edbed",
              "kind": "material",
              "reason": "The source hit-metal-04.mp3 is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "05901ad81d0717ec1be7cbfc",
              "kind": "material",
              "reason": "The source hit-metal-airflow.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "12516820051f5d3b2a734898",
              "kind": "material",
              "reason": "The source door-hit-impact-sound-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "05e4697c2b76a53f1e9f5ca9",
              "kind": "material",
              "reason": "The source hit-12.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1308dc5ec158c6d97c61f25f",
              "kind": "material",
              "reason": "The source impactglass-heavy-002.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "34a52868b41303577667c721",
              "kind": "material",
              "reason": "The source hit-shield-16.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0e27e4a64b7cc6d1c9a9b5e5",
              "kind": "material",
              "reason": "The source sfx-sounds-error9.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0727c9aa349031369b6b55a5",
              "kind": "material",
              "reason": "The source weapon-hit-iron-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "143d26aeb029bca7d2514705",
              "kind": "material",
              "reason": "The source fall-impact-sound-06.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "42345903c96ba5a14853b8e5",
              "kind": "material",
              "reason": "The source hit-release-magic-blade.mp3 is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1bece7cc44db7866a394719c",
              "kind": "material",
              "reason": "The source error-007.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "076cb7466fd6e8f8b6ffd7cb",
              "kind": "material",
              "reason": "The source jingles-hit15.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "156e7dfaf64a59a543473b0c",
              "kind": "material",
              "reason": "The source fall-stone-impact-sound-06.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "47ad2142e1ac4e9d5f13fd62",
              "kind": "material",
              "reason": "The source hit-shield-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "68e26e84fe5b5009341ba25e",
              "kind": "material",
              "reason": "The source alert-click-failure-mouse-ui-feedback.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "078b84741353482fbfb1602b",
              "kind": "material",
              "reason": "The source impactmining-004.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1706ba88fe487a9263c196dd",
              "kind": "material",
              "reason": "The source hit-05.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "50a9f48cffdad147b8b388cb",
              "kind": "material",
              "reason": "The source hit-metal-06.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "aae54fb6efd7f1a567036620",
              "kind": "material",
              "reason": "The source failure-02.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "07fdb0798a3c2cd22958b752",
              "kind": "material",
              "reason": "The source hit-weapon-06.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1828c105b492499c72b60160",
              "kind": "material",
              "reason": "The source fall-stone-impact-sound-15.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "5c59feaa8b0579f308cda3e5",
              "kind": "material",
              "reason": "The source hit-shield-13.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "9bfdb45c7b9442f8aa9a3baf",
              "kind": "material",
              "reason": "The source failure-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "08a5bfa9bc9bfbff668f2910",
              "kind": "material",
              "reason": "The source impactbell-heavy-003.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "18e3d8b11f5b764fb95c34da",
              "kind": "material",
              "reason": "The source armor-blade-hit-metal-object-impact-sound-03.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "5f5fcbf1ecb459788e584bce",
              "kind": "material",
              "reason": "The source hit-04.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "acf9a850342a4a575cd26640",
              "kind": "material",
              "reason": "The source failure-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "08c0060d4892d840e6550177",
              "kind": "material",
              "reason": "The source sword-clash-05.mp3 is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1c6f48760c5b7cebe87278c6",
              "kind": "material",
              "reason": "The source metal-impact-08.mp3 is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "6af19f624573922ddc732b4d",
              "kind": "material",
              "reason": "The source hit-shield-20.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "0902b10d50b185b7a1a10b9d",
              "kind": "material",
              "reason": "The source hit-blade-body-high-frequency-01.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "1d479ec2d0a8bee496ba9d9f",
              "kind": "material",
              "reason": "The source impactpunch-medium-004.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "70bd8b8b0ef40974503b0ef1",
              "kind": "material",
              "reason": "The source hit-shield-18.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "09438f4ecd0cf8d2b24cceda",
              "kind": "material",
              "reason": "The source voice-monster-exertion-hit.wav is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            },
            {
              "candidateId": "20afa51bbde261f041919012",
              "kind": "material",
              "reason": "The source impact-2.ogg is prerecorded audio, not a live Web Audio synthesis implementation. Even if its described action fits hit, selecting this recording conflicts with the approved synthesized-only sound direction."
            }
          ],
          "coverageComplete": false,
          "totalMatches": 1265,
          "candidateSetVerified": true,
          "candidatesTruncated": true,
          "fallbackKind": "no-suitable-candidate"
        }
      }
    },
    "creatorOverrides": {
      "bgm": {
        "source": "creator-provided",
        "url": "https://resource.utdownload.com/soonlab/game-audio/2026-11-15/9422a871-8431-4cda-815c-f59f9ed64d36.mp3",
        "mimeType": "audio/mpeg"
      }
    }
  }
};
