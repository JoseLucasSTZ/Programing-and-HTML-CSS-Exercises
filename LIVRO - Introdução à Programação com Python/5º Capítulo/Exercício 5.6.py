print("Praticar tabuada")
n = int(input("Você quer fazer a tabuada de qual número? "))
repetições = int(input("Até qual repetição? "))
x = 1
while x <= repetições:
    print(f"{x} x {n} = {x*n}")
    x = x+1