'''
    Shuffle the Name

    Create a function that takes a string (will be a person's
    first and last name) and returns a string with the first
    and last name swapped.

'''


def nameShuffle(str):
    return ' '.join(reversed(str.split(' ')))


print(name_shuffle("Seymour Butts"))
