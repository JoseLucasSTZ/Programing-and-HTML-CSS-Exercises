Lista1 =[]
Lista2=[]
Lista3 = []
Controlador = 0


while Controlador != 3:
    Controlador = int(input("Você deseja adicionar algo à lista 1? (1 para inserir, 2 para mostrar os elementos da lista, 3 para sair: "))
    if Controlador == 1:
        y = float(input("Insira um valor na lista 1: "))
        Lista1 = Lista1 + [y]
    if Controlador == 3:
        break
    if Controlador == 2:
        print(Lista1)
    if Controlador == 0 or Controlador > 3:
        print ("Código inválido")

Controlador = 0 

while Controlador != 3:
    Controlador = int(input("Você deseja adicionar algo à lista 2? (1 para inserir, 2 para mostrar os elementos da lista, 3 para sair: "))
    if Controlador == 1:
        y = float(input("Insira um valor na  lista 2: "))
        Lista2 = Lista2 + [y]
    if Controlador == 3:
        break
    if Controlador == 2:
        print(Lista1)
    if Controlador == 0 or Controlador > 3:
        print ("Código inválido")

L = Lista1 [:] 
L.extend (Lista2)

print(L)

        