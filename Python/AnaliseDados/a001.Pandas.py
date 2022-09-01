import pandas as pd
from pathlib import Path

FILE_PATH = Path('Python\AnaliseDados\documents\ratings.csv')
notas = pd.read_csv(FILE_PATH)