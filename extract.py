import os
import glob

output_path = "/Users/vladyslavholdysh/.gemini/antigravity/brain/9c19facc-3ac4-4fbd-bc15-d90cfc410872/knowledge_base.md"
article_files = glob.glob("/Users/vladyslavholdysh/Lioncrest/Articles/*.md")

with open(output_path, "w") as out:
    out.write("# VC Industry Knowledge Base (Extracted)\n\n")
    
    for file in sorted(article_files):
        filename = os.path.basename(file)
        out.write(f"## File: {filename}\n")
        
        with open(file, "r") as f:
            lines = f.readlines()
            
        capture = False
        captured_text = ""
        for line in lines:
            if line.startswith("# "):
                captured_text += line
            elif line.startswith("## Executive Analysis") or line.startswith("## Summary") or line.startswith("## Key Strategic"):
                capture = True
                captured_text += line
            elif line.startswith("## ") and capture:
                break
            elif capture:
                captured_text += line
                
        if not captured_text:
            captured_text = "".join(lines[:20])
            
        out.write(captured_text.strip() + "\n\n---\n\n")

print(f"Knowledge base generated with {len(article_files)} articles.")
