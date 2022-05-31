DepoInicial = float(input("Insira o valor do depósito inicial: "))
taxaJuros = float(input("Insira o valor da taxa de juros: "))
ValorAcumulado = DepoInicial
mês = 1
acumuladoJuros = 0
totalJuros = 0

while mês <= 24:
    totalJuros = totalJuros + ValorAcumulado*taxaJuros/100
    ValorAcumulado = ValorAcumulado + ValorAcumulado*taxaJuros/100
    print (f"O valor total corrigido no mês {mês} é de {ValorAcumulado} reais")
    print (f"O valor total ganho com juros é de {totalJuros} reais")
    mês = mês + 1