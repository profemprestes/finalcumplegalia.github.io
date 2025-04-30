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

def obtener_estructura_directorio(ruta_base, directorio):
    estructura = []
    try:
        for root, dirs, files in os.walk(os.path.join(ruta_base, directorio)):
            nivel = root.replace(ruta_base, '').count(os.sep)
            indent = '  ' * nivel
            carpeta = os.path.basename(root)
            estructura.append(f"{indent}{carpeta}/")
            for archivo in files:
                estructura.append(f"{indent}  {archivo}")
    except Exception as e:
        estructura.append(f"Error al leer el directorio {directorio}: {str(e)}")
    return estructura

def guardar_contenido(contenido, ruta_salida):
    try:
        with open(ruta_salida, 'w', encoding='utf-8') as archivo:
            archivo.write(contenido)
        return f"Contenido guardado exitosamente en {ruta_salida}"
    except Exception as e:
        return f"Error al guardar el archivo {ruta_salida}: {str(e)}"

def main():
    # Rutas de los archivos
    ruta_base = r"c:\Users\Matias\Desktop\Galia\finalcumplegalia.github.io"
    archivos = {
        "astro.config.mjs": "astro.config.mjs",
        "tailwind.config.js": "tailwind.config.js",
        "package.json": "package.json",
        "tsconfig.json": "tsconfig.json"
    }
    
    # Directorio de salida
    directorio_salida = os.path.join(ruta_base, "py", "resultados", "proyecto.txt")
    crear_directorio_si_no_existe(os.path.dirname(directorio_salida))
    
    # Contenido a guardar
    contenido = []
    
    # Agregar contenido de los archivos principales
    for nombre, archivo in archivos.items():
        ruta_completa = os.path.join(ruta_base, archivo)
        contenido.append(f"\n=== {nombre} ===\n")
        contenido.append(leer_archivo(ruta_completa))
    
    # Agregar estructura de directorios
    contenido.append("\n=== Estructura de directorios ===\n")
    
    # Estructura del directorio .astro
    contenido.append("\n.astro/")
    contenido.extend(obtener_estructura_directorio(ruta_base, ".astro"))
    
    # Estructura del directorio src
    contenido.append("\nsrc/")
    contenido.extend(obtener_estructura_directorio(ruta_base, "src"))
    
    # Guardar todo en un solo archivo
    resultado = guardar_contenido("\n".join(contenido), directorio_salida)
    print(resultado)

if __name__ == "__main__":
    main()