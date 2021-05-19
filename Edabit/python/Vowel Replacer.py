'''

    Vowel Replacer

    Create a function that replaces all the vowels in a string with
    a specified character.

'''

def replace_vowels(txt, ch):
	return "".join([x if not x in ["a", "e", "i", "o", "u"] else ch for x in txt])

print(replace_vowels("the aardvark", "#")) # print "th# ##rdv#rk"