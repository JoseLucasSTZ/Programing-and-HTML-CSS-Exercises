n1 = 1
contador = 0
soma = 0
while n1 != 0:
    n1 = int(input("Insira um número inteiro (0 para sair): "))
    print(n1)
    soma = soma + n1
    contador += 1
print(f"Foram digitados {contador} números")
print(f"A média aritimética dos números digitados é {soma/contador}")