ValorImóvel = float(input("Qual o valor do imóvel?: "))
salário = float(input("Qual o valor do seu salário?: "))
tempo = int (input("em quantos meses você quer pagar o imóvel? "))

prestação = ValorImóvel/tempo
MaxPrest = salário *0.3

if MaxPrest>prestação:
    print("Não é possível adquirir o imóvel porque sua prestação seria superior à 30% do valor do seu salário")
else:
    print("Você pode adquirir um imóvel")

