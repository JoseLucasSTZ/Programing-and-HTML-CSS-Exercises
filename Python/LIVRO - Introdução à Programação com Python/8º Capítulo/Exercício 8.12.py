def ValidaValor (frase,lista):
    if frase in lista:
        return print("True")
    else:
        return print("False") 
L = []
string = input("Insira uma frase ")
x = input("Insira algo ").split()
L.append(x)
print(L)
ValidaValor(string,L)