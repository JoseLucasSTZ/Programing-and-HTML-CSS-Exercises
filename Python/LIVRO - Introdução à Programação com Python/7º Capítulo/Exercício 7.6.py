string1 = input("insira a primeira string ")
string2 = input("insira a segunda string ")
string3 = input("insira a terceira string ")
NovaString = string1
stringFinal = ""
string1 = set(string1)
string2 = set(string2)

for letra in string3:
    if letra not in string2:
       NovaString += letra
NovaString = set(NovaString)   

string1 = string1 - string2
stringFinal = string1 | NovaString
print(stringFinal)