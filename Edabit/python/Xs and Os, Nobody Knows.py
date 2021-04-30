'''
    Xs and Os, Nobody Knows

    Create a function that takes a string, checks if
    it has the same number of "x"s and "o"s and 
    returns either True or False.

'''


def XO(txt):
    return txt.lower().count("x") == txt.lower().count("o")

print(XO("ooXXm"))
