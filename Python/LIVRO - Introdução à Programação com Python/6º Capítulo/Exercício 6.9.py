L = [15, 7, 27, 39]
p = int(input("Digite o primeiro valor a ser procurado:"))
v = int(input("Digite o segundo valor a ser procurado"))
x = 0
achouP = False
achouV = False
posiçãoP = 0
posiçãoV = 0
while x < len(L):
    if L[x] == p:
        achouP = True
        posiçãoP = x
    if L[x] == v:
        achouV = True
        posiçãoV = x
    if achouV and achouP:
        break
    x += 1
if achouP:
    print(f"{p} achado na posição {posiçãoP}")
if not achouP:
    print(p, "não encontrado")
if achouV:
    print(f"{v} achado na posição {posiçãoV}")
if not achouV:
    print(v, "não encontrado")