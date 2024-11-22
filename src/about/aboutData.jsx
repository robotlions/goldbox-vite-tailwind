export const accordionItems = [
  {
    title: "What is this?",
    content:
      "This is a web-based app, written in React with Next JS, for editing saved-game files from the Dungeons and Dragons 'gold box' games.",
  },
  {
    title: "What are the gold box games?",
    content: (
      <p>
        The gold box games were a series of role-playing games created by{" "}
        <a
          href="https://en.wikipedia.org/wiki/Strategic_Simulations"
          className="text-blue-600 font-semibold"
        >
          Strategic Simulations, Inc.
        </a>{" "}
        in the late 1980s through early 1990s. Although there were several
        games, they all ran on the same engine, which gives us - hackers from
        the future - the ability to edit many different games with a single app.
      </p>
    ),
  },

  {
    title: `How does this editor work?`,

    content: `
                      The games save characters and inventories as binary files, with each
                      byte corresponding to an in-game value. The editor allows you to
                      change the values of specific bytes to produce, if you wish,
                      demi-gods with overpowered weapons and limitless wealth.`,
  },

  {
    title: `Why only four of the gold box games?`,
    content: `
                               These four seemed like the logical place to start.`,
  },
  {
    title: `Why now? Why not thirty-five years ago?`,
    content: `
              Because I was in middle school and I wasn't a web developer and
              I didn't know JavaScript and JavaScript didn't exist.`,
  },
  {
    title: `Who are you? How'd you get in here?`,
    content: `
                          I'm a locksmith. And I'm a locksmith.`,
  },
  {
    title: `Is the source code available?`,
    content: (
      <span>
        Absolutely.{" "}
        <a
          href="https://github.com/robotlions/gold-box-next"
          className="text-blue-600 font-semibold"
        >
          Here's the GitHub.
        </a>
      </span>
    ),
  },

  {
    title: `Why, these gold box games sound delightful! Where might I acquire them?`,

    content: (
      <p>
        <a href="https://gog.com" className="text-blue-600 font-semibold">
          Gog.com
        </a>{" "}
        has several collections of the various D&D games, but{" "}
        <a
          href="https://www.gog.com/en/game/forgotten_realms_the_archives_collection_two"
          className="text-blue-600 font-semibold"
        >
          Forgotten Realms - The Archives: Collection Two
        </a>{" "}
        is the one to start with.
      </p>
    ),
  },

  {
    title: `Tips`,
    content: (
      <ul className="list-disc">
        <li>Back up your files.</li>
        <li>
          This app edits only character and inventory files. Other in-game
          values such as party location and mission status are stored elsewhere.
        </li>
        <li>
          Pushing certain values too far will break the game, especially if the
          value depends on an AD&D reference table. For example, because character
          ability scores in AD&D max out at 18, if you give your character an 85
          charisma, weird stuff will happen.
        </li>
        <li>
          Most of the values can't exceed 255, unless they're obviously meant to
          be large numbers, such as experience and wealth.
        </li>
        <li>
          Certain values - such as saving throws and thief skills - come
          directly from the AD&D tables and are determined by the character's
          level and modifiers. These values are set by the game automatically on
          load. So even though you can change them with this editor, the values will reset when the game starts.
        </li>
        <li>
          Where possible, the integer input fields have minimum and maximum
          values. But those are easy to get around, and it's your game to break.
        </li>
        <br />
        <h4>Tips for editing characters</h4>
        <li>To make a character's strength 18(00), set it to 18(100).</li>

        <li>
          Although this editor provides checkboxes for cleric spells, there's no
          way assign a character a specific cleric spell. In AD&D, if a
          character has access to a clerical spell level, that character
          automatically knows all the spells of that level.
        </li>
        <li>
          Magic-user spells, however, can be assigned one-at-a-time. Which leads
          to:
        </li>
        <li>
          If you want to give a non-magic-user character access to magic-user
          spells, you don't have to multi-class the character in the game.
          Simply use the editor to assign magic-user levels to that character.
          The game won't automatically change the character's class, but that
          character will be able to use magic-user spells.
        </li>
        <br />
        <h4>Tips for editing inventory</h4>
        <li>
          Inventory items can't be named just any string of text. They must be
          renamed by selecting from the dropdown menus of pre-programmed
          descriptors.
        </li>
        <li>
          Each item has three slots for special effects. For the most part these
          don't do anything, however:
        </li>
        <li>
          For wands, the "Effect1(charges)" field determines how many times the
          wand can be used before its magic is depleted.
        </li>
        <li>
          For scrolls, the "Effect1(charges)" field determines which spell the
          scroll contains. The spell is determined by an integer that will vary
          from game to game. Effect2 is the scroll's second spell and Effect3 is
          the third spell.
        </li>
        <li>
          Arrows, darts and certain other items can be assigned an <em>ammo</em>{" "}
          number. This gives a single item multiple uses without taking up
          another inventory slot. This is not the same as duplicating an item.
          In other words, assigning ammo to a sword won't make multiple copies
          of that sword.
        </li>
      </ul>
    ),
  },

  {
    title: `Contact`,

    content: (
      <>
        <p>
          {" "}
          Did something not work right? Have a suggestion? Want to chat about
          D&D or the joys of cheating at 35-year-old games?
        </p>
        <p>
          You can reach me at{" "}
          <a
            href="mailto:info@robotlions.com"
            className="text-blue-600 font-semibold"
          >
            info@robotlions.com
          </a>
        </p>
        <p>
          My main development site is{" "}
          <a
            href="https://robotlions.com"
            className="text-blue-600 font-semibold"
          >
            robotlions.com
          </a>
        </p>
      </>
    ),
  },

  {
    title: `Credits`,

    content: (
      <>
        <p>
          <em>Dungons and Dragons™</em> © Wizards of the Coast
        </p>
        <p>
          <em>Advanced Dungeons and Dragons™</em> © Wizards of the Coast
        </p>
        <p>All cover art © Wizards of the Coast, I assume.</p>
        <p>
          <em>Pool of Radiance</em> and <em>Curse of the Azure Bonds</em> cover
          art by{" "}
          <a
            href="https://clydecaldwell.com/"
            className="text-blue-600 font-semibold"
          >
            Clyde Caldwell
          </a>
        </p>
        <p>
          <em>Secret of the Silver Blades</em> cover art by{" "}
          <a
            href="https://larryelmore.com/store/"
            className="text-blue-600 font-semibold"
          >
            Larry Elmore
          </a>
        </p>
        <p>
          <em>Pools of Darkness</em> cover art by{" "}
          <a
            href="https://www.keithparkinson.com/artwork/"
            className="text-blue-600 font-semibold"
          >
            Keith Parkinson
          </a>
          .
        </p>
        <p>
          My thanks and admiration go to Joonas Hirvonen for his mind-boggling
          work on{" "}
          <a
            href="https://www.gbc.zorbus.net/"
            className="text-blue-600 font-semibold"
          >
            Gold Box Companion
          </a>
          . Seriously, if you're into these games, install GBC. It's the gold
          standard of gold box.
        </p>
        <p>
          Also, massive credit goes to{" "}
          <a
            href="https://gamefaqs.gamespot.com/community/ssjlee9"
            className="text-blue-600 font-semibold"
          >
            Stephen S. Lee
          </a>{" "}
          for his comprehensive game guides, which were indespensible for
          figuring out hex values.
        </p>
      </>
    ),
  },
];
