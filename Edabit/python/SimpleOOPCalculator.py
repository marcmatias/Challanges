'''
    
    Simple OOP Calculator
    
    Create methods for the Calculator class
    that can do the following:

    Add two numbers.
    Subtract two numbers.
    Multiply two numbers.
    Divide two numbers.
    
'''

class Calculator:
	def add(self, x, y):
		return x + y
	def subtract(self, x, y):
		return x - y
	def multiply(self, x, y):
		return x * y
	def divide(self, x, y):
		return x / y

x = Calculator()

print(x.add(5,5))