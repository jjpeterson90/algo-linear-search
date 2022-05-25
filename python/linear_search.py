array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    for i in range(len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            return i

# print(linear_search(3, [1, 2, 3, 4, 5]))

def global_linear_search(value_to_find, array_to_search_through):
    result = []
    for i in range(len(array_to_search_through)):
        if value_to_find == array_to_search_through[i]:
            result.append(i)
    return result