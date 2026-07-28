

class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."


def info_log(func):
    def wrapper(*args, **kwargs):
        print("This is the start log message.")

        result = func(*args, **kwargs)

        print("This is the end log message.")

        return result
    return wrapper


@info_log
def unique_elements(lst):
    unique_lst = []
    for element in lst:
        if element not in unique_lst:
            unique_lst.append(element)
    return unique_lst   


def read_file(file_path):
    with open(file_path, 'r') as file:
        total_lines = 0
        content = file.read()
        for line in content.splitlines():
            total_lines += 1
    print(f"Total lines in the file: {total_lines}")
    return total_lines


class Manager(User):
    def __init__(self, name, age, department):
        super().__init__(name, age)
        self.department = department

    def manage(self):
        return f"{self.name} is managing the {self.department} department."


lista = [1, 2, 3, 4, 5, 2, 3]
print(unique_elements(lista))   