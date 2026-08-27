import os
import math
from PIL import Image, ImageDraw

output_dir = r"c:\Users\Admin\OneDrive\Documents\Immersio Suprema"
os.makedirs(output_dir, exist_ok=True)

width, height = 960, 540

def create_base_canvas(color1=(12, 11, 15), color2=(20, 18, 26)):
    img = Image.new("RGB", (width, height), color1)
    draw = ImageDraw.Draw(img)
    # Vignette background
    for r in range(height, 0, -8):
        factor = r / height
        c = (
            int(color1[0] * factor + color2[0] * (1 - factor)),
            int(color1[1] * factor + color2[1] * (1 - factor)),
            int(color1[2] * factor + color2[2] * (1 - factor)),
        )
        draw.ellipse([width//2 - r*1.5, height//2 - r, width//2 + r*1.5, height//2 + r], fill=c)
    return img, draw

def draw_grid_lines(draw):
    for x in range(0, width, 40):
        draw.line([(x, 0), (x, height)], fill=(30, 28, 40), width=1)
    for y in range(0, height, 40):
        draw.line([(0, y), (width, y)], fill=(30, 28, 40), width=1)

def generate_all_images():
    specs = [
        # Stage 01
        ("custom_stage1_1.jpg", (204, 164, 59)),
        ("custom_stage1_2.jpg", (0, 240, 255)),
        ("custom_stage1_3.jpg", (204, 164, 59)),
        ("custom_stage1_4.jpg", (0, 240, 255)),
        
        # Stage 02
        ("custom_stage2_1.jpg", (204, 164, 59)),
        ("custom_stage2_2.jpg", (0, 240, 255)),
        ("custom_stage2_3.jpg", (204, 164, 59)),
        ("custom_stage2_4.jpg", (0, 240, 255)),
        
        # Stage 03
        ("custom_stage3_1.jpg", (0, 240, 255)),
        ("custom_stage3_2.jpg", (204, 164, 59)),
        ("custom_stage3_3.jpg", (0, 240, 255)),
        ("custom_stage3_4.jpg", (204, 164, 59)),
        
        # Stage 04
        ("custom_stage4_1.jpg", (204, 164, 59)),
        ("custom_stage4_2.jpg", (0, 240, 255)),
        ("custom_stage4_3.jpg", (204, 164, 59)),
        ("custom_stage4_4.jpg", (0, 240, 255)),
        
        # Stage 05
        ("custom_stage5_1.jpg", (0, 240, 255)),
        ("custom_stage5_2.jpg", (204, 164, 59)),
        ("custom_stage5_3.jpg", (0, 240, 255)),
        ("custom_stage5_4.jpg", (204, 164, 59)),
        
        # Stage 06
        ("custom_stage6_1.jpg", (204, 164, 59)),
        ("custom_stage6_2.jpg", (0, 240, 255)),
        ("custom_stage6_3.jpg", (204, 164, 59)),
        ("custom_stage6_4.jpg", (0, 240, 255))
    ]

    for filename, accent_color in specs:
        img, draw = create_base_canvas()
        draw_grid_lines(draw)
        
        cx, cy = width // 2, height // 2
        
        # Draw 3D Orbit geometry preview in artwork
        for r in [200, 150, 100]:
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(50, 46, 65), width=1)
        
        num_nodes = 4
        for i in range(num_nodes):
            angle = i * (2 * math.pi / num_nodes)
            nx = cx + int(150 * math.cos(angle))
            ny = cy + int(150 * math.sin(angle))
            draw.line([(cx, cy), (nx, ny)], fill=accent_color, width=1)
            draw.ellipse([nx-14, ny-14, nx+14, ny+14], fill=(12, 11, 15), outline=accent_color, width=2)
            draw.ellipse([nx-6, ny-6, nx+6, ny+6], fill=accent_color)
            
        # Draw central symbol core
        draw.rectangle([cx - 50, cy - 50, cx + 50, cy + 50], outline=accent_color, width=2)
        draw.ellipse([cx - 25, cy - 25, cx + 25, cy + 25], outline=(255, 255, 255, 120), width=1)
        
        # Corner brackets
        b_len = 24
        m = 20
        draw.line([(m, m), (m + b_len, m)], fill=accent_color, width=2)
        draw.line([(m, m), (m, m + b_len)], fill=accent_color, width=2)
        draw.line([(width - m, m), (width - m - b_len, m)], fill=accent_color, width=2)
        draw.line([(width - m, m), (width - m, m + b_len)], fill=accent_color, width=2)
        draw.line([(m, height - m), (m + b_len, height - m)], fill=accent_color, width=2)
        draw.line([(m, height - m), (m, height - m - b_len)], fill=accent_color, width=2)
        draw.line([(width - m, height - m), (width - m - b_len, height - m)], fill=accent_color, width=2)
        draw.line([(width - m, height - m), (width - m, height - m - b_len)], fill=accent_color, width=2)
        
        filepath = os.path.join(output_dir, filename)
        img.save(filepath, "JPEG", quality=92)
        print(f"Saved {filename}")

if __name__ == "__main__":
    generate_all_images()
