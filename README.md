# Simple – Location‑Based MMO (working title)

> *“Explore the real world, build together, and leave your mark.”*
---

## Game Overview

**Simple** is a casual, real‑world **location‑based MMORPG** for **Android**. Your in‑game avatar mirrors your GPS position on an live map. Walk around your town, gather resources, fight scalable enemies, co‑operate with nearby players and found persistent cities.

---

## Login & Onboarding

| Step                    | Description                                                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Google Sign‑In**      | Players authenticate with their Google account (Play Games Services).                                                                                                     |
| **Character Creation**  | Lightweight customisation: choose **Name** and one of the **Classes** (see below).Few customisation options, hair,skin,gender,face,beard,hair color,beard color,skincolor |
| **First Inn Placement** | If no **Inn** exists within **150 m**, the player is prompted to place one for free (no resources). The Inn serves as the local quest hub.                                |

---

## Core Gameplay Loop

1. **Walk & Explore** – GPS movement reveals resource nodes, encounters and other players.
2. **Collect & Craft** – Gather **wood, stone, metals, herbs…**; craft gear & consumables; construct buildings.
3. **Fight** – Nearby enemies spawn with a level that scales to the player; tap‑based combat uses three class abilities.
4. **Quest** – Story‑driven and location‑based tasks acquired from Inns; require real‑world movement.
5. **Group Up** – Form **Dungeon Parties** (1 Tank, 1 Healer, up to 3 Damage, max 5 players, all within 10 km) and enter instanced dungeons via the UI.
6. **Build & Grow** – build buildings, found towns, expand shared infrastructure.

---

## Key Features

| Feature                           | Description                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Google Sign‑In**                | Seamless login with Play Games Services.                                                         |
| **Real‑time GPS movement**        | Avatar follows device location; background & low‑power polling supported.                        |
| **Scaled Enemy Spawns**           | Enemies appear near the player; their level matches the player’s level for balanced solo play.   |
| **Lightweight Combat**            | Fast tap/gesture battles; each class equips **3 active abilities** per fight for quick sessions. |
| **Chat (10 km radius)**           | Proximity chat lets players coordinate within their local area.                                  |
| **Dungeon Parties**               | Up to 5 players, role‑locked (Tank/Healer/Damage), must be within 10 km to queue.                |
| **Persistent Buildings**          | Inns, Banks, Blacksmiths, etc. anchored to real locations; radius limits prevent spam.           |
| **Resource Gathering & Crafting** | Nodes yield materials; crafting improves gear.                                                   |
| **“Scents” Items**                | Consumables that temporarily bias spawn tables toward specific monster types.                    |
| **Future PvP Zones**              | Players will be able to deploy PvP arenas where full‑loot combat is enabled.                     |

---

## Player Classes & Abilities

| Class        | Archetype | Example Active Abilities (choose 3) | Passive Buff Idea         |
| ------------ | --------- | ----------------------------------- | ------------------------- |
| **Warrior**  | Tank      | *Shield Slam*, *Taunt*, *Whirlwind* | +% Armor while moving     |
| **Priest**   | Healer    | *Heal*, *Group Heal*, *Smite*       | +% Regen near Inns        |
| **Mage**     | Damage    | *Fireball*, *Frost Nova*, *Blink*   | +% Spell Power after kill |
| **Hunter**   | Damage    | *Aimed Shot*, *Pet Bite*, *Trap*    | Pet gains XP 2× faster    |
| **Engineer** | Damage    | *Turret*, *Rocket Punch*, *EMP*     | Turret lasts longer       |

*(Ability list is WIP; only three can be equipped at a time to keep combat simple.)*

---

## Buildings & City System

| Building       | Radius Limit\* | Function                                                    |
| -------------- | -------------- | ----------------------------------------------------------- |
| **Inn**        | 1 per 150 m    | Quest hub, resting buffs, free first placement on new area. |
| **Bank**       | 1 per 2 km     | Shared stash, expanded inventory slots.                     |
| **Blacksmith** | 1 per 150 m    | Craft & upgrade weapons/armor.                              |
| **Forge**      | 1 per 150 m    | Process ores into refined metals.                           |
| **vendors**    | 1 per 50 m     | Buy stuff                                                   |

\* *Radius limits prevent overcrowding and encourage cooperation.*

---

## Inventory & Economy

* **Equipment Slots:** Head, Weapon, Shirt, Pants, Shoes (5 total).
* **Bag Slots:** Limited personal inventory; or Bank storage.
* **Currency:** Gold (drops from enemies, quests, trading).
* **Auction Houses:** Global & Local variants planned for player‑driven economy.

---

## Stretch Goals

* **Co‑op Dungeons** – Larger, multi‑stage instances with leaderboard timers.
* **PvP Arenas** – Player‑placed zones enabling full‑loot PvP.

---

## Tech Stack

* **Engine:** 
* **Map & GPS:** 
* **Auth:** Google Play Games Services
* **Testing:** 
* **Target Platform:** Android

---

## Development Setup

Consult [AGENTS.md](AGENTS.md) for repository conventions.




