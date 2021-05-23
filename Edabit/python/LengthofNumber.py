'''
    Length of Number

    Create a function that takes a number num and returns its length.

'''

def number_length(num):
	nums = [x for x in str(num)]
	count = 0
	for x in nums:
		count += 1
	return count

print(number_length(10))

'''
    Best solution

    def number_length(num):
        return sum(1 for i in str(num))
'''
