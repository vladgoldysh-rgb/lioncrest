import os
import glob

output_path = "/Users/vladyslavholdysh/.gemini/antigravity/brain/9c19facc-3ac4-4fbd-bc15-d90cfc410872/knowledge_base_full.md"
article_files = glob.glob("/Users/vladyslavholdysh/Lioncrest/Articles/*.md")
video_files = glob.glob("/Users/vladyslavholdysh/Lioncrest/Videos/*.md")

all_files = article_files + video_files

with open(output_path, "w") as out:
    out.write("# Full VC Industry Knowledge Base\n\n")
    
    for file in sorted(all_files):
        filename = os.path.basename(file)
        out.write(f"## {filename}\n")
        
        with open(file, "r") as f:
            content = f.read()
            
        # Take first 1500 words
        words = content.split()
        summary_words = words[:1500]
        summary_text = " ".join(summary_words)
        
        out.write(summary_text + "\n\n---\n\n")

print(f"Knowledge base generated with {len(all_files)} files.")
