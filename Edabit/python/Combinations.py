'''

    Combinations
    
    https://edabit.com/challenge/G9QRtAGXb9Cu368Pw
    
'''

def combinations(*items):
	x = 1
	for item in items:
		x = x * item if item != 0 else x
	return x

combinations(2, 3)