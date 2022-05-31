primeira = input("Digite a primeira string: ")
segunda = input ("Digite a segunda string: ")
terceira = ""

for letra in primeira:
    if letra in segunda and letra not in terceira:
        terceira += letra
if terceira =="":
    print("Caracteres comuns não encontrados.")
else:
    print(f"Caracteres em comum: {terceira}")

