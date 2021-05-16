'''
    How Many Vowels?

    Create a function that takes a string and returns the number
    (count) of vowels contained within it.

'''

def count_vowels(txt):
	return len([vowel for vowel in list(txt) if vowel in ["a", "e", "i", "o", "u"]])

print(count_vowels("marcel"))

'''
    #Best Solution

    def count_vowels(txt):
        return sum([1 for x in txt.lower() if x in 'aeiou'])
'''