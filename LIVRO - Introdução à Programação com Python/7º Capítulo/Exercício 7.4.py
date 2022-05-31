primeira = input("Insira uma string: ")
contador = 0
x = 0
L=[]
for letra in primeira:
    if primeira[x] == letra:
        
        contador +=1
        print(f"{letra} encontrada {contador} vezes") 
        x+=1
    

