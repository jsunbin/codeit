def binary_search(element, some_list):
    # 코드를 작성하세요.
    start_index = 0
    end_index = len(some_list) - 1
    mid_index = (end_index - start_index) // 2

    for i in range(start_index, end_index):
        if element < some_list[mid_index]:
            for j in range(start_index, mid_index):
                if some_list[j] == element:
                    return j
        elif element == some_list[mid_index]:
            return mid_index
        else:
            for j in range(mid_index, end_index):
                if some_list[j] == element:
                    return j
    return None


print(binary_search(2, [2, 3, 5, 7, 11]))
print(binary_search(0, [2, 3, 5, 7, 11]))
print(binary_search(5, [2, 3, 5, 7, 11]))
print(binary_search(3, [2, 3, 5, 7, 11]))
print(binary_search(11, [2, 3, 5, 7, 11]))
