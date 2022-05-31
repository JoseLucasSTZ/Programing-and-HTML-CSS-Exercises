from statistics import median


T = [-10,-8,0,1,2,5,-2,-4]
máximo = 0
mínimo = 10
soma=0
for e in T:
    if e > máximo:
        máximo = e
    if e < mínimo:
        mínimo = e
    soma += e
media=soma/len(T)
print(f"A média é {media}")
print(f"A temperatura máxima é {máximo}")
print(f"A temperatura mínima é {mínimo}")
