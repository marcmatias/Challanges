'''

    Basic Calculator

    Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
    If the input tries to divide by 0, return: "Can't divide by 0!"
    
    Examples
        calculator(2, "+", 2) ➞ 4

        calculator(2, "*", 2) ➞ 4

        calculator(4, "/", 2) ➞ 2

'''


def calculator(num1, operator, num2):
    calc = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': "Can't divide by 0!" if num1 == 0 or num2 == 0 else num1 / num2,
    }
    return calc[operator]


print(calculator(2, "/", 2))
