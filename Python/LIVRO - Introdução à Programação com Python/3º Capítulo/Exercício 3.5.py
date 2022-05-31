matéria1 = 0
matéria2 = 0
matéria3 = 0
#você só cursa 3 matérias
print("Faça o cálculo da sua média e descubra se você foi aprovado")
matéria1 = float(input("insira o valor da primeira matéria:" ))
matéria2 = float(input("insira o valor da segunda matéria:" ))
matéria3 = float(input("insira o valor da terceira matéria:" ))
if matéria1 + matéria2 + matéria3/3 > 7:
    print("Boas férias!")
else:
    print("Vejo-te na recuperação ; )")