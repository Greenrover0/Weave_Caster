/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This is the syntax for adding a new class to the sheet
				Note that you will need the syntax for adding a subclass as well if you want the class to have any choices for subclasses
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "Weave Caster.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ClassList["weavecaster"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*weave)(?=.*caster).*$/i,
	name : "Weave Caster",
	source : ["HB", 0],
	primaryAbility : "\n \u2022 Weave Caster: Intelligence;",
	abilitySave : 4,
	prereqs : "\n \u2022 Weave Caster: Intelligence 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 6,
	saves : ["Int", "Con"],
	skills : ["\n\n" + toUni("Weave Caster") + ": Choose two from Arcana, History, Insight, Investigation, and Nature."],
	armor : [[false, false, false, false]],
	weapons : [[false, false, ["dagger", "dart", "sling", "quarterstaff", "light crossbow"]]],
	equipment : "Weave Caster starting equipment:\n \u2022 An Arcane focus -or- A Component Pouch;\n \u2022 A Scholar's pack -or- An Explorer's pack;\n \u2022 A quarterstaff -or- A dagger.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Weave Theory", ["threads", "fabrics", "waves"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
	spellcastingKnown : {
		cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells : [6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	},
	spellcastingList : {
		class : "wizard"
	},

	features : {

		"spellcasting" : {
			name : "Spellcasting",
			source : ["HB", 114],
			minlevel : 1,
			description : "\n   " + "I can cast weave caster cantrips/spells, using Intelligence as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus",
			additional : ["3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"], //optional; text to display in the header of the feature. This can be one value, but can also be an array of 20 values, one for each level.
		},
	
		"arcane well" : {
			name : "Arcane Well",
			source : ["HB", 72],
			minlevel : 1,
			description : "\n   " + "At a short rest I can expend hit die to regain spell points instead of hit points." + "\n   " + "I can expend a maximum of half my weave caster hit die and regain 2 spell points for every hit die.", //required; the text to put in the "Class Features" field
			additional : ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8","9","9","10","10"]
		},

		"magically attuned" : {
			name : "Magically Attuned",
			source : ["HB", 72],
			minlevel : 2,
			description : "\n   " + "I learn detect magic and identify and can cast them as rituals." + "\n   " + "I do not need material components when casting identify.",
			spellcastingExtra : ["detect magic", "identify","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","AddToKnown"], //Optional; An array of spells that are added to the spell list from which the class can choose. If the class prepares spells, than this list of spells are always considered prepared. Each entry has to match the name of the entry of the spell in the SpellsList exactly
			},

		"subclassfeature2" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Weave Theory",
			source : ["HB", 72],
			minlevel : 2,
			description : "\n   " + "Choose a Weave Theory you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Threads, Fabrics, or Waves",
		},

		"greater arcane well" : {
			name : "Greater Arcane Well",
			source : ["HB", 72],
			minlevel : 18,
			description : "\n   " + "When I gain spell points using my Arcane Well feature I roll the die and regain hit points equal to the number rolled.",
			
			},
		
		"living weave" : {
			name : "Living Weave",
			source : ["HB", 72],
			minlevel : 20,
			description : "\n   " + "I gain defensive benefits based on how many spell points I have remaining." + "\n   " + "133-66; No effect" + "\n   " + "65-32; +1 to AC and Saving throws" + "\n   " + "31-16; +2 to AC and Saving throws" + "\n   " + "15-8; +3 to AC and Saving throws" + "\n   " + "7-0; Advantage on Saving throws and attacks against me have disadvantage",
			},
		
		
		
		/*"natural antivenom" : {
			name : "Natural Antivenom",
			source : ["UA:MC", 7],
			minlevel : 9,
			description : desc([
				"I have advantage on saves vs. poison and resistance to poison damage",
				"When I use a poultice, in addition to healing, I cure one poison effect on the creature",
				"I gain proficiency with Constitution saving throws"
			]),

			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"

				text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg", "Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here

				immune : ["poison", "disease"], // Optional; this is an array of strings that the character is immune to. This is put in the field after the text "Immune to ", so in this example it would result in "Immune to poison and disease"

				adv_vs : ["traps", "charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
			},

			dmgres : ["Poison"], //optional; an array of damage types that the class gets resistance against. // If the resistance has a condition attached to it, like only being against nonmagical attacks, substitute the entry in the array with an array of 2: [the damage type, the damage type with the condition]. // For example: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]

			saves : ["Con"], //optional; an array of the ability scores with which the class feature grants proficiency in saving throws

			toolProfs : [["Musical instrument", 3], ["Thieves' tools", "Dex"]], // optional; this is an array with the tool proficiencies gained. Each entry can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated

			languageProfs : [1, "Elvish"], // optional; this is an array of the language proficiencies gained. An entry can either be 1) a string that represents the language learned or 2) a number which is the number of language gained that can be chosen by the player

			speed : { //required; This sets a value for one or more speed modes, and/or a value to be added to a specific speed mode or to all speed modes // the attributes of this object can be "walk", "burrow", "climb", "fly", "swim", and "allModes"

				// all of the following attributes are optional and you can add more ("burrow" isn't part of this example!)

				walk : { spd : 30, enc : 20 }, // the objects "walk", "burrow", "climb", "fly", "swim" are all the same, they are an object with two attributes, 'spd' for the speed in feet, and 'enc' for the encumbered speed in feet.

				climb : { spd : "+50", enc : 0 }, // instead of numbers, you can also have modifiers. Modifiers are a string, starting with a mathematical operator, followed by a number (e.g. "-10", "+20"). // a value that is zero is ignored

				fly : { spd : "walk", enc : 0 }, // instead of a number/modifier, you can also set the attribute to "walk". This makes the speed mode assume the walking speed // Using an underscore as the first character means the value is only added if the value would be non-zero

				swim : { spd : "fixed 60", enc : "fixed 60" }, // if you include the word "fixed" together with a number, the movement mode will be that number, without any modifiers from other sources (like the Monk's speed bonus). However, if another entry that isn't 'fixed' does end up with a higher total while including any modifiers, that speed is used instead

				allModes : "+10" // the 'allModes' attribute can only consist of a modifier. This modifier is applied to all speed modes, both normal and encumbered. It is only applied if the speed mode exists, it won't give the character a burrow speed if it would otherwise have none, for example
			},
		},*/
		
	}
}

ClassSubList["waves"] = {
	regExpSearch : /^(?=.*waves)(?=.*theory).*$/i,
	subname : "Theory of Waves",
	source : ["HB", 5],
	fullname : "Wave Theorist",
	features : {
		"subclassfeature2" : {
			name : "Flowing Magic",
			source : ["HB", 5],
			minlevel : 2,
			description : "\n   " + "When I cast a spell of 1st level or higher, I can cast it as a bonus action on my next turn.",
			action : ["bonus action", ""],
		},
		
		"subclassfeature2.1" : {
			name : "Practical Experience",
			source : ["HB", 5],
			minlevel : 2,
			description : desc([
				"I learn the shape water cantrip and it does not count against my number of cantrips known.",
				"Any checks I make to identify or control a source of magic I have advantage."
			]),
			spellcastingExtra : ["shape water", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","AddToKnown"],
		},
		
		"subclassfeature6" : {
			name : "Directer Flow",
			source : ["HB", 5],
			minlevel : 6,
			description : desc([
				"When I cast a spell of 3rd level or higher I can use my bonus action to allow a creature within 30 feet to cast a cantrip using their reaction"
			]),
			action : ["bonus action", ""]
		},
		
		"subclassfeature10" : {
			name : "Swollen Weave",
			source : ["HB", 5],
			minlevel : 10,
			description : desc([
			"As a bonus action I begin to gather magical energy in my space",
			"While I am gathering this energy my speed becomes 0 and cannot be increased in any way.",
			"On the turn I activate swollen weave I must cast a 1st level spell",
			"On subsequent turns I can either cast a spell of the next level up to 5th level, or",
			"Cast a spell of the same level I cast the turn before without expending spell points",
			"Once I cast a spell without using spell points the effect ends.",
			"I can use this ability once between short rests."
		]),
		usages : "1 per ",
		recovery : "short rest",
		action : ["bonus action",""]
		},
		
		"subclassfeature14" : {
			name : "Magical Riptide",
			source : ["HB", 5],
			minlevel : 14,
			description : desc([
				"As an action I can influence the weave within a 10 foot radius of me",
				"This lasts 1 minute or until I lose concentration as if concentrating on a spell",
				"When I start this riptide and as a bonus action on each of my turns I can choose a magic zone",
				"",
				""
			]),
			usages : "1 per ",
			recovery : "long rest",
			action : ["action action",""],
			action : ["bonus action","Change Zone"],
			"standard magic" : {
				source : ["HB", 5],
				name : "Standard Magic Zone",
				description : desc([
					"I normalize the weave around me allowing all spells to be cast normally"
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'standard magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'standard magic', 'extra'], 'remove');",
			
			"wild magic" : {
				source : ["HB", 5],
				name : "Wild Magic Zone",
				description : desc([
					"I destabalize the weave around me triggering strange effects.",
					"Any creature that casts a spell that passes through the area or affects a creature in the area",
					"Triggers a Wild Magic Surge as if they were a Wild Magic Sorcerer."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'wild magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'wild magic', 'extra'], 'remove');",
			
			"low magic" : {
				source : ["HB", 5],
				name : "Low Magic Zone",
				description : desc([
					"I drain the weave around me, spells that are cast within the area must be of 3rd level or lower",
					"The maximum spell slot that can be used on a spell is limited to 5th level.",
					"If a creature attempts to cast a spell greater than 3rd level or uses a spell slot of 6th or higher",
					"The spell fails and the spell slot is consumed."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'low magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'low magic', 'extra'], 'remove');"
		},
		
		"subclassfeature18" : {
			name : "Magical Riptide: Additional Zones",
			source : ["HB", 5],
			minlevel : 18,
			description : desc([
				"I have gained additional magic zones to use with my Magical Riptide"
			]),
			
			"high magic" : {
				source : ["HB", 5],
				name : "High Magic Zone",
				description : desc([
					"I saturate the air around me with magic causing any creature who uses a spell slot to instantly regain it.",
					"When a creature regains a spell slot in this way they take Force Damage equal to 2xSpell slot level",
					"This damage ignores resistance and immunity. They must then make a constitution saving throw against a DC",
					"equal to 10 + damage taken, or gain a level of exhaustion.",
					"Spell slots that are spent outside the zone do not refill upon entering the area."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'high magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'high magic', 'extra'], 'remove');",
			
			"dead magic" : {
				source : ["HB", 5],
				name : "Dead Magic Zone",
				description : desc([
					"When I have less than 1/4 of my maximum spell points I can cause spells cast around me to refuel my own energy.",
					"When a creature other than me casts a spell in the area the spell slot is consumed and the spell fails.",
					"I regain a number of spell points equal to the slots level.",
					"If this puts me above 1/4 of my maximum the effects of dead magic zone end and to continue using magical riptide",
					"my first action on my next turn must be to choose a new zone.",
					"I can use a reaction to cause a creatures spell to not be consumed.",
					"Spells can be cast through this zone but have their effects supressed within it's area"
				]),
				},
			additional : ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","31","33"],
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'dead magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'dead magic', 'extra'], 'remove');"
		}
	}
};

ClassSubList["threads"] = {
	regExpSearch : /^(?=.*threads)(?=.*theory).*$/i,
	subname : "Theory of Threads",
	source : ["HB", 5],
	fullname : "Thread Theorist",
	features : {
		"subclassfeature2" : {
			name : "Flowing Magic",
			source : ["HB", 5],
			minlevel : 2,
			description : "\n   " + "When I cast a spell of 1st level or higher, I can cast it as a bonus action on my next turn.",
			action : ["bonus action", ""],
		},
		
		"subclassfeature2.1" : {
			name : "Practical Experience",
			source : ["HB", 5],
			minlevel : 2,
			description : desc([
				"I learn the shape water cantrip and it does not count against my number of cantrips known.",
				"Any checks I make to identify or control a source of magic I have advantage."
			]),
			spellcastingExtra : ["shape water", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","AddToKnown"],
		},
		
		"subclassfeature6" : {
			name : "Directer Flow",
			source : ["HB", 5],
			minlevel : 6,
			description : desc([
				"When I cast a spell of 3rd level or higher I can use my bonus action to allow a creature within 30 feet to cast a cantrip using their reaction"
			]),
			action : ["bonus action", ""]
		},
		
		"subclassfeature10" : {
			name : "Swollen Weave",
			source : ["HB", 5],
			minlevel : 10,
			description : desc([
			"As a bonus action I begin to gather magical energy in my space",
			"While I am gathering this energy my speed becomes 0 and cannot be increased in any way.",
			"On the turn I activate swollen weave I must cast a 1st level spell",
			"On subsequent turns I can either cast a spell of the next level up to 5th level, or",
			"Cast a spell of the same level I cast the turn before without expending spell points",
			"Once I cast a spell without using spell points the effect ends.",
			"I can use this ability once between short rests."
		]),
		usages : "1 per ",
		recovery : "short rest",
		action : ["bonus action",""]
		},
		
		"subclassfeature14" : {
			name : "Magical Riptide",
			source : ["HB", 5],
			minlevel : 14,
			description : desc([
				"As an action I can influence the weave within a 10 foot radius of me",
				"This lasts 1 minute or until I lose concentration as if concentrating on a spell",
				"When I start this riptide and as a bonus action on each of my turns I can choose a magic zone",
				"",
				""
			]),
			usages : "1 per ",
			recovery : "long rest",
			action : ["action action",""],
			action : ["bonus action","Change Zone"],
			"standard magic" : {
				source : ["HB", 5],
				name : "Standard Magic Zone",
				description : desc([
					"I normalize the weave around me allowing all spells to be cast normally"
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'standard magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'standard magic', 'extra'], 'remove');",
			
			"wild magic" : {
				source : ["HB", 5],
				name : "Wild Magic Zone",
				description : desc([
					"I destabalize the weave around me triggering strange effects.",
					"Any creature that casts a spell that passes through the area or affects a creature in the area",
					"Triggers a Wild Magic Surge as if they were a Wild Magic Sorcerer."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'wild magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'wild magic', 'extra'], 'remove');",
			
			"low magic" : {
				source : ["HB", 5],
				name : "Low Magic Zone",
				description : desc([
					"I drain the weave around me, spells that are cast within the area must be of 3rd level or lower",
					"The maximum spell slot that can be used on a spell is limited to 5th level.",
					"If a creature attempts to cast a spell greater than 3rd level or uses a spell slot of 6th or higher",
					"The spell fails and the spell slot is consumed."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'low magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'low magic', 'extra'], 'remove');"
		},
		
		"subclassfeature18" : {
			name : "Magical Riptide: Additional Zones",
			source : ["HB", 5],
			minlevel : 18,
			description : desc([
				"I have gained additional magic zones to use with my Magical Riptide"
			]),
			
			"high magic" : {
				source : ["HB", 5],
				name : "High Magic Zone",
				description : desc([
					"I saturate the air around me with magic causing any creature who uses a spell slot to instantly regain it.",
					"When a creature regains a spell slot in this way they take Force Damage equal to 2xSpell slot level",
					"This damage ignores resistance and immunity. They must then make a constitution saving throw against a DC",
					"equal to 10 + damage taken, or gain a level of exhaustion.",
					"Spell slots that are spent outside the zone do not refill upon entering the area."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'high magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'high magic', 'extra'], 'remove');",
			
			"dead magic" : {
				source : ["HB", 5],
				name : "Dead Magic Zone",
				description : desc([
					"When I have less than 1/4 of my maximum spell points I can cause spells cast around me to refuel my own energy.",
					"When a creature other than me casts a spell in the area the spell slot is consumed and the spell fails.",
					"I regain a number of spell points equal to the slots level.",
					"If this puts me above 1/4 of my maximum the effects of dead magic zone end and to continue using magical riptide",
					"my first action on my next turn must be to choose a new zone.",
					"I can use a reaction to cause a creatures spell to not be consumed.",
					"Spells can be cast through this zone but have their effects supressed within it's area"
				]),
				},
			additional : ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","31","33"],
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'dead magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'dead magic', 'extra'], 'remove');"
		}
	}
};

ClassSubList["fabrics"] = {
	regExpSearch : /^(?=.*fabrics)(?=.*theory).*$/i,
	subname : "Theory of Fabrics",
	source : ["HB", 5],
	fullname : "Fabric Theorist",
	features : {
		"subclassfeature2" : {
			name : "Flowing Magic",
			source : ["HB", 5],
			minlevel : 2,
			description : "\n   " + "When I cast a spell of 1st level or higher, I can cast it as a bonus action on my next turn.",
			action : ["bonus action", ""],
		},
		
		"subclassfeature2.1" : {
			name : "Practical Experience",
			source : ["HB", 5],
			minlevel : 2,
			description : desc([
				"I learn the shape water cantrip and it does not count against my number of cantrips known.",
				"Any checks I make to identify or control a source of magic I have advantage."
			]),
			spellcastingExtra : ["shape water", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","AddToKnown"],
		},
		
		"subclassfeature6" : {
			name : "Directer Flow",
			source : ["HB", 5],
			minlevel : 6,
			description : desc([
				"When I cast a spell of 3rd level or higher I can use my bonus action to allow a creature within 30 feet to cast a cantrip using their reaction"
			]),
			action : ["bonus action", ""]
		},
		
		"subclassfeature10" : {
			name : "Swollen Weave",
			source : ["HB", 5],
			minlevel : 10,
			description : desc([
			"As a bonus action I begin to gather magical energy in my space",
			"While I am gathering this energy my speed becomes 0 and cannot be increased in any way.",
			"On the turn I activate swollen weave I must cast a 1st level spell",
			"On subsequent turns I can either cast a spell of the next level up to 5th level, or",
			"Cast a spell of the same level I cast the turn before without expending spell points",
			"Once I cast a spell without using spell points the effect ends.",
			"I can use this ability once between short rests."
		]),
		usages : "1 per ",
		recovery : "short rest",
		action : ["bonus action",""]
		},
		
		"subclassfeature14" : {
			name : "Magical Riptide",
			source : ["HB", 5],
			minlevel : 14,
			description : desc([
				"As an action I can influence the weave within a 10 foot radius of me",
				"This lasts 1 minute or until I lose concentration as if concentrating on a spell",
				"When I start this riptide and as a bonus action on each of my turns I can choose a magic zone",
				"",
				""
			]),
			usages : "1 per ",
			recovery : "long rest",
			action : ["action action",""],
			action : ["bonus action","Change Zone"],
			"standard magic" : {
				source : ["HB", 5],
				name : "Standard Magic Zone",
				description : desc([
					"I normalize the weave around me allowing all spells to be cast normally"
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'standard magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'standard magic', 'extra'], 'remove');",
			
			"wild magic" : {
				source : ["HB", 5],
				name : "Wild Magic Zone",
				description : desc([
					"I destabalize the weave around me triggering strange effects.",
					"Any creature that casts a spell that passes through the area or affects a creature in the area",
					"Triggers a Wild Magic Surge as if they were a Wild Magic Sorcerer."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'wild magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'wild magic', 'extra'], 'remove');",
			
			"low magic" : {
				source : ["HB", 5],
				name : "Low Magic Zone",
				description : desc([
					"I drain the weave around me, spells that are cast within the area must be of 3rd level or lower",
					"The maximum spell slot that can be used on a spell is limited to 5th level.",
					"If a creature attempts to cast a spell greater than 3rd level or uses a spell slot of 6th or higher",
					"The spell fails and the spell slot is consumed."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'low magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature14', 'low magic', 'extra'], 'remove');"
		},
		
		"subclassfeature18" : {
			name : "Magical Riptide: Additional Zones",
			source : ["HB", 5],
			minlevel : 18,
			description : desc([
				"I have gained additional magic zones to use with my Magical Riptide"
			]),
			
			"high magic" : {
				source : ["HB", 5],
				name : "High Magic Zone",
				description : desc([
					"I saturate the air around me with magic causing any creature who uses a spell slot to instantly regain it.",
					"When a creature regains a spell slot in this way they take Force Damage equal to 2xSpell slot level",
					"This damage ignores resistance and immunity. They must then make a constitution saving throw against a DC",
					"equal to 10 + damage taken, or gain a level of exhaustion.",
					"Spell slots that are spent outside the zone do not refill upon entering the area."
				]),
				},
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'high magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'high magic', 'extra'], 'remove');",
			
			"dead magic" : {
				source : ["HB", 5],
				name : "Dead Magic Zone",
				description : desc([
					"When I have less than 1/4 of my maximum spell points I can cause spells cast around me to refuel my own energy.",
					"When a creature other than me casts a spell in the area the spell slot is consumed and the spell fails.",
					"I regain a number of spell points equal to the slots level.",
					"If this puts me above 1/4 of my maximum the effects of dead magic zone end and to continue using magical riptide",
					"my first action on my next turn must be to choose a new zone.",
					"I can use a reaction to cause a creatures spell to not be consumed.",
					"Spells can be cast through this zone but have their effects supressed within it's area"
				]),
				},
			additional : ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","31","33"],
			eval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'dead magic', 'extra']);",
			removeeval : "ClassFeatureOptions(['weave caster', 'subclassfeature18', 'dead magic', 'extra'], 'remove');"
		}
	}
};