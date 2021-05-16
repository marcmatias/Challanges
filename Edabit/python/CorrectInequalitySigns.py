'''

    Correct Inequality Signs
    
    Create a function that returns True if a given inequality
    expression is correct and False otherwise.

'''

def correct_signs(txt):
    el = txt.split(" ")
    count = 0
    for i in range(sum([1 for symbol in el if symbol in "<>"])):
        result = int(el[count]) > int(el[count+2]) if el[count+1] == ">" else int(el[count]) < int(el[count+2])
        if result == False:
            return False
        count = count+2
    return True



print(correct_signs("13 < 44 > 33 > 1"))



'''
    # Best Solution
    def correct_signs(txt):
        lst = [int(i) if i.isdigit() else i for i in txt.split()]

        for i in range(0,len(lst)-2,2):
            print(i)
            if lst[i+1] == '>':
                if lst[i] <= lst[i+2]:
                    return False
            elif lst[i+1] == '<':
                if lst[i] >= lst[i+2]:
                    return False
        return True
'''