string1 = input("Insira a primeira string: ")
string2 = input("Insira a segunda string: ")
string1 = list(string1)
string2 = list(string2)
string1 = set(string1)
string2 = set(string2)
string3 = string1-string2
print(string3)
