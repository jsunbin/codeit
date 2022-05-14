for a in range(10, 1000):
    for b in range(10, 1000):
        c = (a**2 + b**2) ** (1/2)
        if a + b + c == 400:
            print(a*b*c)
        else:
            pass
