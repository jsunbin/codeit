fibonacci = []

for i in range(50):
    if i <= 1:
        fibonacci.append(1)
    else:
        element = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.append(element)

    print(fibonacci[i])

previous = 0
current = 1
i = 1

while i <= 50:
    print(current)
    temp = previous
    previous = current
    current = current + temp
    i += 1
