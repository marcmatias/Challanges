'''

    Return the Factorial

    Create a function that takes an integer and returns the factorial of that integer.
    That is, the integer multiplied by all positive lower integers.
    
    Examples
        factorial(3) ➞ 6

        factorial(5) ➞ 120

        factorial(13) ➞ 6227020800

'''


def factorial(num):
    return num * factorial(num-1) if num > 1 else 1
