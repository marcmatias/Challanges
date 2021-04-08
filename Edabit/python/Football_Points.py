'''

    Football Points

    Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

    PREP 
    Parameters
        3 integers numbers

    Returns
        1 integer number

    Examples
        football_points(3, 4, 2) ➞ 13

        football_points(5, 0, 2) ➞ 15

        football_points(0, 0, 1) ➞ 0

    Pseudocode
        Recebe 3 valores, o primeiro valor multiplica por 3 o segundo por 2 e o terceiro retorna 0

'''


def football_points(wins, draws, losses):
    return wins * 3 + draws


print(football_points(5, 0, 2))
