último = 1
fila = list(range(1,último + 1))
operação = []
x=0
while True:
    print(f"\nExistem {len(fila)} clienntes na fila")
    print(f"Fila atual: {fila}")
    print("Digite F para adicionar um lcinete ao fim da fila,")
    print("ou A para realizar o atendimento. S para sair.")
    operação[x] = input("Operação (F, A ou S): ")  
     
    #REFAZER