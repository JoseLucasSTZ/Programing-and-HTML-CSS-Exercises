def ValidaString (frase, mínimo, máximo):
    if len(frase) >= mínimo and len(frase) <= máximo:
        return print("Essa frase é válida")
    else:
        return print("Frase inválida")

string = input("Insira uma frase ")
valor1 = int(input("Insira o valor mínimo para a frase "))
valor2 = int(input("Insira o valor máximo para a frase "))
ValidaString(string,valor1,valor2)