prato = 5
pilha = list(range(1,prato+1))
while True:
    print(F"\nExistem {len(pilha)} pratos na pulha")
    print(f"Pilha atual:{pilha}")
    print("Digite E para empilha um novo prato,")
    print("ou D para desempilhar. S para sair.")
    operação = input("Operação (E, D ou S): ")
    if operação =="D":
        if len(pilha)>0:
            lavado = pilha.pop(-1)
            print(f"Prato{lavado} lavado")
        else:
            print("Pilha vazia! Nada para lavar.")
    elif operação == "E":
        prato +=1
        pilha.append(prato)
    elif operação == "S":
        break
    else:
        print("Operação inválida! Digite apenas E, D ou S!")