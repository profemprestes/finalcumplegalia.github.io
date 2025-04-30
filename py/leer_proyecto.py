import os

def leer_y_guardar_info_proyecto(ruta_proyecto, ruta_destino):
    """
    Lee el contenido de los archivos de configuración y la carpeta src de un proyecto
    y guarda la información en un archivo de texto.

    Args:
        ruta_proyecto (str): La ruta base del proyecto.
        ruta_destino (str): La ruta donde se guardará el archivo de texto con la información.
    """
    archivos_configuracion = [
        "astro.config.mjs",
        "tailwind.config.js",
        "package.json",
        "tsconfig.json"
    ]
    ruta_completa_destino = os.path.join(ruta_destino, "info_proyecto.txt")

    try:
        os.makedirs(ruta_destino, exist_ok=True)  # Crea el directorio si no existe
        with open(ruta_completa_destino, "w", encoding="utf-8") as archivo_resultado:
            archivo_resultado.write("--- INFORMACIÓN DE ARCHIVOS DE CONFIGURACIÓN ---\n\n")
            for archivo in archivos_configuracion:
                ruta_archivo = os.path.join(ruta_proyecto, archivo)
                if os.path.exists(ruta_archivo):
                    archivo_resultado.write(f"Contenido de: {archivo}\n")
                    try:
                        with open(ruta_archivo, "r", encoding="utf-8") as archivo_config:
                            contenido = archivo_config.read()
                            archivo_resultado.write(contenido + "\n\n")
                    except Exception as e:
                        archivo_resultado.write(f"Error al leer {archivo}: {e}\n\n")
                else:
                    archivo_resultado.write(f"No se encontró el archivo: {archivo}\n\n")

            archivo_resultado.write("\n--- CONTENIDO DE LA CARPETA SRC ---\n\n")
            ruta_src = os.path.join(ruta_proyecto, "src")
            if os.path.exists(ruta_src) and os.path.isdir(ruta_src):
                for directorio, subdirectorios, archivos in os.walk(ruta_src):
                    ruta_relativa = os.path.relpath(directorio, ruta_src)
                    archivo_resultado.write(f"Directorio: src/{ruta_relativa}\n")
                    for nombre_archivo in archivos:
                        ruta_completa_archivo = os.path.join(directorio, nombre_archivo)
                        try:
                            with open(ruta_completa_archivo, "r", encoding="utf-8") as archivo_src:
                                contenido_src = archivo_src.read()
                                archivo_resultado.write(f"  Archivo: {nombre_archivo}\n")
                                # Para evitar archivos binarios ilegibles, podrías añadir una comprobación del tipo de archivo
                                archivo_resultado.write(contenido_src + "\n")
                        except Exception as e:
                            archivo_resultado.write(f"  Error al leer {nombre_archivo}: {e}\n")
                    archivo_resultado.write("\n")
            else:
                archivo_resultado.write("No se encontró la carpeta src.\n")

        print(f"La información del proyecto se ha guardado en: {ruta_completa_destino}")

    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    ruta_proyecto_gali = r"C:\Users\Matias\Desktop\Galia\finalcumplegalia.github.io"
    ruta_destino_resultados = r"C:\Users\Matias\Desktop\Galia\finalcumplegalia.github.io\py\resultados"
    leer_y_guardar_info_proyecto(ruta_proyecto_gali, ruta_destino_resultados)