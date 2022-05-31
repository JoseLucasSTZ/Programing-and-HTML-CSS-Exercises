expressão = input("Digite a sequênccia de parênteses a validar: ")
x = 0
pilha =[]
while x<len(expressão):
    if expressão[x]== "(":
        pilha.append("(")
    if expressão [x] == ")":
        if len(pilha)>0:
            topo=pilha.pop(-1)
        else:
            pilha.append(")")
            break
    x+=1
if len(pilha) ==0:
    print("Ok")
else:
    print("Erro")