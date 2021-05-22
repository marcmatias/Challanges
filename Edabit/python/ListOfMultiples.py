'''

    List of Multiples

    Create a function that takes two numbers as arguments
    (num, length) and returns a list of multiples of num
    until the list length reaches length.

'''

def list_of_multiples (num, length):
	result = []
	sum = 0
	for i in range(length):
		sum += num
		result.append(sum)
	return result

list_of_multiples(7, 5)