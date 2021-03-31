'''

    Find the Odd Integer


'''


def find_odd(lst):
    obj = dict((e, lst.count(e)) for e in lst)
    return [key for key, value in obj.items() if (value % 2 != 0)][0]


print(find_odd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))


'''
    Best solution

    def find_odd(lst):
        for num in lst:
            if lst.count(num) % 2:
            return num

'''
