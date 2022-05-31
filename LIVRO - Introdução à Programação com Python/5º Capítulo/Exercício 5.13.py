divida = float(input("Insira o valor da sua dívida: "))
pagamento = float(input("Insira o valor do pagamento mensal: "))
juros = float(input("Insira o valor dos juros mensais: "))
mês = 1

if juros > 100:
    print("O VALOR DO JUROS É INVÁLIDO")
    while juros > 100:
        juros =  float (input("Insira um valor entre 1 e 100: "))
while divida > 0:
    print(f"O valor da dívida no mês {mês} é de {divida}.")
    divida = divida - pagamento
    print(f"No mês {mês} foi pago {pagamento}") 
    divida = divida + divida * juros/100       
    mês = mês +1