import pdfplumber
import re

SCRATCH = "C:/Users/DAVI~1.PON/AppData/Local/Temp/claude/c--Users-davi-pontes-NT/0766d8e2-f217-4ca9-a4c1-c9f32f46d6ea/scratchpad"

RANGES = {
    "genjutsu": (5, 28),
    "cacador": (29, 57),
    "inteligencia": (58, 86),
    "medico": (87, 101),
    "ninjutsu": (102, 127),
    "batedor": (128, 165),
    "taijutsu": (166, 187),
    "armas": (188, 207),
    "marionetes": (208, 277),
    "cozinheiro": (278, 305),
    "cientista": (306, 341),
    "talentos_classe": (342, 357),
}

with pdfplumber.open("Observacoes do Orochimaru-Naruto-5e.pdf") as pdf:
    for name, (start, end) in RANGES.items():
        lines_out = []
        for i in range(start - 1, end):
            page = pdf.pages[i]
            text = page.extract_text(layout=True) or ""
            lines_out.append(f"===== PAGE {i+1} =====")
            for line in text.split("\n"):
                stripped = line.rstrip()
                if stripped.strip() == "":
                    continue
                lines_out.append(stripped)
        out_path = f"{SCRATCH}/orochimaru_{name}.txt"
        with open(out_path, "w", encoding="utf-8") as f:
            f.write("\n".join(lines_out))
        print(name, len(lines_out), "lines ->", out_path)
