def money(first):
    now = 1988
    while now < 2016:
        now = now + 1
        first = first + (first * 0.12)

    if first > 1100000000:
        comp = first - 1100000000
        print("%d원 차이로 동일 아저씨 말씀이 맞습니다." % (comp))

    else:
        comp = 1100000000 - first
        print("%d원 차이로 미란 아주머니 말씀이 맞습니다." % (comp))


print(money(50000000))
