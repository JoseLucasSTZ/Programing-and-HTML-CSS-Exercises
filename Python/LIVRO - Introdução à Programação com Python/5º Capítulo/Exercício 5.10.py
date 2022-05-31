pontos = 0
questão = 1
while questão <= 3:
    resposta = input(f"Resposta da questão {questão}: ")
    if questão == 1 and resposta =="b" or "B":
        pontos = pontos +1
    if questão == 2 and resposta == "a" or "A":
        pontos = pontos + 1
    if questão == 3 and resposta == "d" or "D":
        pontos = pontos +1
    questão = questão + 1
print (f"O aluno fez {pontos} ponto(s)")