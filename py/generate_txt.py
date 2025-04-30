import os

# Definir rutas de los archivos
base_path = "c:/Users/Matias/Desktop/Galia/finalcumplegalia.github.io/src"
output_file = "c:/Users/Matias/Desktop/Galia/finalcumplegalia.github.io/py/resultados/paginainicio_completo.txt"

# Archivos a incluir
files_to_read = [
    "pages/paginainicio.astro",
    "layouts/Layout.astro",
    "components/Particles.astro",
    "components/Hero.astro",
    "components/Countdown.astro",
    "components/Principal.astro",
    "styles/carga2.css"
]

# Función para leer archivos
def read_file_content(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except FileNotFoundError:
        return f"Archivo no encontrado: {file_path}"

# Generar contenido completo
complete_content = ""
for file in files_to_read:
    file_path = os.path.join(base_path, file)
    complete_content += f"\n\n=== {file} ===\n\n"
    complete_content += read_file_content(file_path)

# Guardar en archivo TXT
with open(output_file, 'w', encoding='utf-8') as output:
    output.write(complete_content)

print(f"Archivo generado exitosamente en: {output_file}")