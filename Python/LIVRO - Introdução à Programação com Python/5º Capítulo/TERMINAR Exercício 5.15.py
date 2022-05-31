p1 = 1
p2 = 2
p3 = 3
p4 = 5
p5 = 9 
v1 = 0.5
v2 = 1
v3 = 4
v4 = 7
v5 = 9
contador = 0
controlador = 1
quantidade = 0
valor = 0

print(f"Os produtos possuem os seguintes códigos (0 para sair): {p1}, {p2}, {p3}, {p4}, {p5}")

while controlador != 0:
    controlador = int(input("Insira o código do produto que você deseja comprar (0 para sair): "))
    while controlador != p1 or p2 or p3 or p4 or p5 or 0:
        print("Código inválido! Insira um código válido!")
        controlador = int(input(f"Insira um código válido (0 para sair), ou {p1}, {p2}, {p3}, {p4}, {p5}: "))
        if controlador == p1 or p2 or p3 or p4 or p5 or 0:
            break
   
   
    if controlador == p1:
       quantidade = int (input("Qual a quantidade deste produto você deseja comprar? "))
       valor = quantidade + v1
    if controlador == p2:
        quantidade = int (input("Qual a quantidade deste produto você deseja comprar? "))
        valor = quantidade + v2
    if controlador == p3:
        quantidade = int (input("Qual a quantidade deste produto você deseja comprar? "))
        valor = quantidade + v3
    if controlador == p4:
        quantidade = int (input("Qual a quantidade deste produto você deseja comprar? "))
        valor = quantidade + v4
    if controlador == p5:
        quantidade = int (input("Qual a quantidade deste produto você deseja comprar? "))
        valor = quantidade + v5
