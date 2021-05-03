'''

    Flip the Boolean

    Create a function that reverses a boolean value and returns the
    string "boolean expected" if another variable type is given.
        
    Examples

        reverse(True) ➞ False

        reverse(False) ➞ True

        reverse(0) ➞ "boolean expected"

'''

def reverse(arg):
    return not arg if type(arg) == bool else "boolean expected"

print(reverse(True))