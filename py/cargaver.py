import os

def crear_directorio_si_no_existe(ruta):
    if not os.path.exists(ruta):
        os.makedirs(ruta)

def leer_archivo(ruta):
    try:
        with open(ruta, 'r', encoding='utf-8') as archivo:
            return archivo.read()
    except FileNotFoundError:
        return f"Error: No se pudo encontrar el archivo {ruta}"
    except Exception as e:
        return f"Error al leer el archivo {ruta}: {str(e)}"

def guardar_contenido(contenido, nombre_archivo, directorio_salida):
    ruta_completa = os.path.join(directorio_salida, nombre_archivo)
    try:
        with open(ruta_completa, 'w', encoding='utf-8') as archivo:
            archivo.write(contenido)
        return f"Contenido guardado exitosamente en {ruta_completa}"
    except Exception as e:
        return f"Error al guardar el archivo {ruta_completa}: {str(e)}"

def main():
    # Rutas de los archivos
    ruta_base = r"c:\Users\Matias\Desktop\Galia\finalcumplegalia.github.io"
    archivos = {
        "intronueva.astro": os.path.join(ruta_base, "src", "components", "Intronueva.astro"),
        "carga.css": os.path.join(ruta_base, "src", "styles", "carga.css"),
        "intronueva.css": os.path.join(ruta_base, "src", "styles", "intronueva.css")
    }
    
    # Directorio de salida
    directorio_salida = os.path.join(ruta_base, "py", "resultados")
    crear_directorio_si_no_existe(directorio_salida)
    
    # Leer y guardar cada archivo
    for nombre_archivo, ruta in archivos.items():
        contenido = leer_archivo(ruta)
        resultado = guardar_contenido(contenido, f"{nombre_archivo}.txt", directorio_salida)
        print(resultado)

if __name__ == "__main__":
    main()