# Escreva um programa para determinar se uma pessoa deve, ou não, pagar imposto. Considere que pagam imposto pessoas cujo salário é maior do que R$ 1.200,00

print("Bem-vindo ao impostômetro. Insira o valor do seu salário para saber se deves ou não pagar impostos")
salário = float(input())
if salário > 1200:
    print ("Você terá de pagar impostos")
else:
    print("Você não terá de pagar impostos")

