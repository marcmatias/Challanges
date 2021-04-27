'''

    Is it Time for Milk and Cookies?
    
    https://edabit.com/challenge/6nSckbgCx9hjTwmcw

'''

import datetime

def time_for_milk_and_cookies(d):
	return d.strftime("%d/%m") == "24/12"

print(time_for_milk_and_cookies(datetime.date(2013, 12, 24)))