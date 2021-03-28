'''

    Stuttering Function
    https://edabit.com/challenge/gt9LLufDCMHKMioh2

    Exapmles:
        stutter("incredible") ➞ "in... in... incredible?"

        stutter("enthusiastic") ➞ "en... en... enthusiastic?"

        stutter("outstanding") ➞ "ou... ou... outstanding?"

'''


def stutter(word):
    return word[:2] + "... " + word[:2] + "... " + word + "?"


print(stutter("incredible"))
