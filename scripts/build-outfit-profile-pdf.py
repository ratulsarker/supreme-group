"""Rebuild the Supreme Outfit company profile as a clean, watermark-free PDF."""
import os
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.lib.colors import Color, HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

IMG = "/home/user/supreme-group/public/images/"
OUT = "/home/user/supreme-group/public/supreme-outfit-company-profile.pdf"

W, H = 1280.0, 720.0  # 16:9 deck

SKY = HexColor("#38B6FF")
SKY_DEEP = HexColor("#0E86D4")
INK = HexColor("#0B1D2E")
INK_MID = HexColor("#0E2438")
INK_RAISED = HexColor("#123049")
BRASS = HexColor("#C9A84C")
BRASS_LT = HexColor("#D9BC6B")
CREAM = HexColor("#F6F4EE")
LINE = HexColor("#E8E2D4")
SLATE = HexColor("#52697C")
WHITE = HexColor("#FFFFFF")

# Fonts: Archivo-like heavy grotesque for headings, clean sans for body.
FONT_DIRS = [
    "/usr/share/fonts/truetype/liberation/",
    "/usr/share/fonts/truetype/dejavu/",
]


def reg(name, filename):
    for d in FONT_DIRS:
        p = os.path.join(d, filename)
        if os.path.exists(p):
            pdfmetrics.registerFont(TTFont(name, p))
            return True
    return False


HEAD = "Head" if reg("Head", "LiberationSans-Bold.ttf") else "Helvetica-Bold"
BODY = "Body" if reg("Body", "LiberationSans-Regular.ttf") else "Helvetica"
BODY_B = "BodyB" if reg("BodyB", "LiberationSans-Bold.ttf") else "Helvetica-Bold"
BODY_I = "BodyI" if reg("BodyI", "LiberationSans-Italic.ttf") else "Helvetica-Oblique"

c = canvas.Canvas(OUT, pagesize=(W, H))
c.setTitle("Supreme Outfit Ltd. | Company Profile")
c.setAuthor("Supreme Group Bangladesh")
c.setSubject("Company Profile")
c.setCreator("Supreme Group Bangladesh")

page_no = [0]


def draw_image_cover(path, x, y, w, h, focus=0.5):
    """Draw image cropped to fill the box (object-fit: cover)."""
    img = ImageReader(IMG + path if not path.startswith("/") else path)
    iw, ih = img.getSize()
    box_ar, img_ar = w / h, iw / ih
    if img_ar > box_ar:          # image wider: crop sides
        sh = ih
        sw = ih * box_ar
        sx = (iw - sw) * focus
        sy = 0
    else:                         # image taller: crop top/bottom
        sw = iw
        sh = iw / box_ar
        sx = 0
        sy = (ih - sh) * focus
    c.saveState()
    p = c.beginPath()
    p.rect(x, y, w, h)
    c.clipPath(p, stroke=0, fill=0)
    scale = w / sw
    c.drawImage(img, x - sx * scale, y - (ih - sy - sh) * scale,
                width=iw * scale, height=ih * scale, mask="auto")
    c.restoreState()


_scrim_cache = {}


def scrimmed(path, w, h, rgb, a_left, a_right, focus=0.5):
    """Crop-to-fill an image and bake a smooth horizontal scrim onto it.

    Drawing the gradient as stacked translucent rects in the PDF produced
    visible banding, so the blend happens in pixel space instead.
    """
    from PIL import Image as PILImage
    key = (path, int(w), int(h), rgb, a_left, a_right, focus)
    if key in _scrim_cache:
        return _scrim_cache[key]
    ow, oh = int(w * 2), int(h * 2)          # 2x for print sharpness
    im = PILImage.open(IMG + path).convert("RGB")
    box_ar, img_ar = ow / oh, im.width / im.height
    if img_ar > box_ar:
        cw = int(im.height * box_ar)
        cx = int((im.width - cw) * focus)
        im = im.crop((cx, 0, cx + cw, im.height))
    else:
        ch = int(im.width / box_ar)
        cy = int((im.height - ch) * focus)
        im = im.crop((0, cy, im.width, cy + ch))
    im = im.resize((ow, oh), PILImage.LANCZOS)
    overlay = PILImage.new("RGB", (ow, oh), tuple(int(v * 255) for v in rgb))
    mask = PILImage.linear_gradient("L").rotate(-90, expand=True).resize((ow, oh))
    lo, hi = int(a_left * 255), int(a_right * 255)
    mask = mask.point(lambda v: lo + (hi - lo) * v // 255)
    im = PILImage.composite(overlay, im, mask)
    out = f"scrim_{abs(hash(key))}.jpg"
    im.save(out, quality=90, optimize=True)
    _scrim_cache[key] = out
    return out


def wrap(text, font, size, max_w):
    words, lines, cur = text.split(), [], ""
    for wd in words:
        t = (cur + " " + wd).strip()
        if pdfmetrics.stringWidth(t, font, size) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = wd
    if cur:
        lines.append(cur)
    return lines


def para(text, x, y, font, size, leading, max_w, color=SLATE):
    c.setFont(font, size)
    c.setFillColor(color)
    for ln in wrap(text, font, size, max_w):
        c.drawString(x, y, ln)
        y -= leading
    return y


def page_frame(dark=False, number=True, left_label=True, right_label=True):
    page_no[0] += 1
    if number:
        c.setFont(BODY, 9)
        c.setFillColor(Color(1, 1, 1, 0.45) if dark else Color(0.35, 0.42, 0.49, 1))
        c.drawRightString(W - 46, H - 42, f"{page_no[0]:02d}")
        c.setFont(BODY, 8)
        c.setFillColor(Color(1, 1, 1, 0.28) if dark else Color(0.55, 0.6, 0.65, 1))
        if left_label:
            c.drawString(46, 30, "SUPREME OUTFIT LTD.  ·  COMPANY PROFILE")
        if right_label:
            c.drawRightString(W - 46, 30, "supremegroupbd.com")


def eyebrow(text, x, y, color=BRASS):
    c.setFont(BODY_B, 9)
    c.setFillColor(color)
    c.drawString(x, y, " ".join(text.upper()))


def heading(text, x, y, size=40, color=INK):
    c.setFont(HEAD, size)
    c.setFillColor(color)
    c.drawString(x, y, text)


def rule(x, y, w=54, color=BRASS, h=2.5):
    c.setFillColor(color)
    c.rect(x, y, w, h, stroke=0, fill=1)


# ── 01 COVER ────────────────────────────────────────────────────────────────
c.drawImage(scrimmed("hero-building.jpg", W, H, (7 / 255, 22 / 255, 36 / 255),
                     0.97, 0.55, focus=0.45), 0, 0, width=W, height=H)
c.setFillColor(BRASS)
c.rect(0, H - 4, W, 4, stroke=0, fill=1)

eyebrow("Company Profile", 96, 500, BRASS_LT)
c.setFont(HEAD, 68)
c.setFillColor(WHITE)
c.drawString(96, 415, "Supreme")
c.setFillColor(SKY)
c.drawString(96, 340, "Outfit Ltd.")
rule(96, 300, 90, BRASS, 3)
c.setFont(BODY, 17)
c.setFillColor(Color(1, 1, 1, 0.72))
c.drawString(96, 258, "Dhamrai, Dhaka, Bangladesh")
c.setFont(BODY, 12)
c.setFillColor(Color(1, 1, 1, 0.45))
c.drawString(96, 120, "A SUPREME GROUP COMPANY   ·   supremegroupbd.com")
page_no[0] = 1

# ── 02 VISION ───────────────────────────────────────────────────────────────
c.showPage()
c.setFillColor(INK)
c.rect(0, 0, W, H, stroke=0, fill=1)
draw_image_cover("wa-factory-0011.jpg", 0, 0, W, H, focus=0.4)
c.setFillColor(Color(11 / 255, 29 / 255, 46 / 255, 0.90))
c.rect(0, 0, W, H, stroke=0, fill=1)
page_frame(dark=True)
eyebrow("Corporate Vision", 96, 560, BRASS_LT)
c.setFont(HEAD, 34)
c.setFillColor(WHITE)
y = 505
for ln in wrap("To become a leading global apparel manufacturer, recognised for our "
               "commitment to quality, sustainability and ethical business practices.",
               HEAD, 34, W - 300):
    c.drawString(96, y, ln)
    y -= 46
rule(96, y - 6, 70, BRASS, 3)
para("We strive to build long-lasting relationships with our customers, partners and "
     "employees, while creating a positive impact on the communities in which we operate.",
     96, y - 60, BODY, 15, 26, W - 420, Color(1, 1, 1, 0.65))

# ── 03 INTRODUCTION + TIMELINE ──────────────────────────────────────────────
c.showPage()
c.setFillColor(WHITE)
c.rect(0, 0, W, H, stroke=0, fill=1)
page_frame()
eyebrow("Introduction", 96, 618)
heading("Supreme Outfit Ltd.", 96, 560, 40)
rule(96, 534)

y = para("A state-of-the-art garment factory specialising in knitwear production, owned by "
         "Supreme Stitch Ltd., a leading garment exporter with years of experience in "
         "high-quality apparel.", 96, 492, BODY, 14, 25, 500)
y = para("Built on a 15-hectare site in Dhamrai, the project brings knitting, printing, "
         "cutting, sewing and finishing onto a single campus.", 96, y - 14, BODY, 14, 25, 500)

# Total project area callout
c.setFillColor(CREAM)
c.roundRect(96, y - 108, 300, 78, 6, stroke=0, fill=1)
c.setFillColor(BRASS)
c.rect(96, y - 108, 4, 78, stroke=0, fill=1)
c.setFont(BODY_B, 9)
c.setFillColor(HexColor("#A8832E"))
c.drawString(120, y - 52, "T O T A L   P R O J E C T   A R E A")
c.setFont(HEAD, 30)
c.setFillColor(INK)
c.drawString(120, y - 90, "15 Hectares")

# Timeline of group companies
tl = [("2009", "Supreme Accessories Industries Ltd."),
      ("2009", "Supreme Stitch Ltd."),
      ("2015", "Supreme Embellishment Ltd."),
      ("2019", "Supreme Eco Bricks & Agro Ltd."),
      ("2025", "Supreme Outfit Ltd.")]
tx, ty = 690, 560
c.setFont(BODY_B, 9)
c.setFillColor(HexColor("#A8832E"))
c.drawString(tx, ty + 46, "G R O U P   T I M E L I N E")
c.setStrokeColor(HexColor("#E3D9BF"))
c.setLineWidth(2)
c.line(tx + 6, ty + 20, tx + 6, ty - 4 - 62 * (len(tl) - 1))
for i, (yr, nm) in enumerate(tl):
    yy = ty - 62 * i
    cur = (i == len(tl) - 1)
    c.setFillColor(SKY if cur else WHITE)
    c.setStrokeColor(SKY if cur else BRASS)
    c.setLineWidth(2)
    c.circle(tx + 6, yy + 8, 6.5, stroke=1, fill=1)
    c.setFont(HEAD, 16)
    c.setFillColor(SKY_DEEP if cur else HexColor("#A8832E"))
    c.drawString(tx + 30, yy + 2, yr)
    c.setFont(BODY_B if cur else BODY, 12)
    c.setFillColor(INK if cur else SLATE)
    c.drawString(tx + 92, yy + 2, nm)

# ── 04 FACTORY LAYOUT ───────────────────────────────────────────────────────
c.showPage()
c.setFillColor(INK)
c.rect(0, 0, W, H, stroke=0, fill=1)
page_frame(dark=True)
eyebrow("Factory Layout", 96, 618, BRASS_LT)
heading("Building Overview", 96, 560, 40, WHITE)
rule(96, 534)

cards = [
    ("4 x Six-Storied Blocks", ["Phase 1  ·  Buildings 1 & 2", "Phase 2  ·  Buildings 3 & 4"]),
    ("Worker Welfare & Support", ["Building 5, Ground  ·  Childcare & medical",
                                  "Building 5, 1st Floor  ·  Worker's canteen"]),
    ("Utilities & Compliance", ["Effluent treatment plant (ETP)", "Fire-pump house",
                                "Dual septic-tank system, hygienic zoning"]),
    ("Site & Environment", ["100-car dedicated parking zone",
                            "Large pond for rainwater harvesting",
                            "30% landscaped green buffer"]),
]
cx, cy, cw, ch = 96, 330, 250, 158
for i, (title, items) in enumerate(cards):
    x = cx + (i % 2) * (cw + 16)
    yy = cy - (i // 2) * (ch + 16)
    c.setFillColor(INK_RAISED)
    c.roundRect(x, yy, cw, ch, 6, stroke=0, fill=1)
    c.setFillColor(BRASS)
    c.rect(x, yy + ch - 3, cw, 3, stroke=0, fill=1)
    c.setFont(HEAD, 13)
    c.setFillColor(WHITE)
    c.drawString(x + 18, yy + ch - 32, title)
    ly = yy + ch - 58
    for it in items:
        for j, ln in enumerate(wrap(it, BODY, 9.5, cw - 46)):
            if j == 0:
                c.setFillColor(SKY)
                c.circle(x + 22, ly + 3.5, 2.2, stroke=0, fill=1)
            c.setFont(BODY, 9.5)
            c.setFillColor(Color(1, 1, 1, 0.62))
            c.drawString(x + 32, ly, ln)
            ly -= 14
        ly -= 4

draw_image_cover("wa-factory-0005.jpg", 700, 250, 484, 300)
c.setStrokeColor(Color(56 / 255, 182 / 255, 255 / 255, 0.3))
c.setLineWidth(1)
c.rect(700, 250, 484, 300, stroke=1, fill=0)
c.setFont(BODY_I, 9.5)
c.setFillColor(Color(1, 1, 1, 0.45))
c.drawCentredString(942, 232, "Fig 1.0  ·  Proposed CAD model of Supreme Outfit Ltd.")
draw_image_cover("outfit-welfare.jpg", 700, 96, 236, 120)
draw_image_cover("outfit-pond.jpg", 948, 96, 236, 120)
c.setFont(BODY, 8.5)
c.setFillColor(Color(1, 1, 1, 0.4))
c.drawCentredString(818, 82, "Welfare block")
c.drawCentredString(1066, 82, "Rainwater pond")


# ── 05 FLOOR PLANS ──────────────────────────────────────────────────────────
def floor_plan(x, y, w, name, sub, floors):
    head_h = 64
    row_h = 54
    total = head_h + row_h * len(floors)
    c.setFillColor(WHITE)
    c.roundRect(x, y - total, w, total, 6, stroke=0, fill=1)
    c.setStrokeColor(LINE)
    c.setLineWidth(1)
    c.roundRect(x, y - total, w, total, 6, stroke=1, fill=0)
    c.setFillColor(INK)
    p = c.beginPath()
    p.roundRect(x, y - head_h, w, head_h, 6)
    c.saveState()
    c.clipPath(p, stroke=0, fill=0)
    c.rect(x, y - head_h, w, head_h, stroke=0, fill=1)
    c.restoreState()
    c.setFont(HEAD, 17)
    c.setFillColor(WHITE)
    c.drawString(x + 22, y - 30, name)
    c.setFont(BODY, 9.5)
    c.setFillColor(BRASS_LT)
    c.drawString(x + 22, y - 46, sub)
    for i, (fl, use, proposed) in enumerate(reversed(floors)):
        ry = y - head_h - row_h * (i + 1)
        if i:
            c.setStrokeColor(LINE)
            c.line(x + 1, ry + row_h, x + w - 1, ry + row_h)
        c.setFont(BODY_B, 8.5)
        c.setFillColor(HexColor("#A8832E"))
        c.drawString(x + 22, ry + 17, fl.upper())
        c.setFont(BODY_I if proposed else BODY, 12)
        c.setFillColor(HexColor("#7C8B99") if proposed else INK)
        c.drawString(x + 118, ry + 16, use)


c.showPage()
c.setFillColor(WHITE)
c.rect(0, 0, W, H, stroke=0, fill=1)
page_frame()
eyebrow("Phase 1", 96, 640)
heading("What sits on every floor", 96, 596, 36)
rule(96, 574)

b1 = [("Ground", "Finished Goods Store", False), ("1st", "Finishing & C-TPAT", False),
      ("2nd", "Sewing Section", False), ("3rd", "Sewing Section", False),
      ("4th", "Cut Panel Store", False), ("5th", "Office, CAD & Sample", False)]
b2 = [("Ground", "Yarn & Knitting", False), ("1st", "Screen Printing", False),
      ("2nd", "Auto Printing", False), ("3rd", "Proposed for Outerwear", True),
      ("4th", "Cutting Section", False), ("5th", "Proposed for Outerwear", True)]
floor_plan(96, 528, 500, "Building 1", "Sewing, finishing & dispatch", b1)
floor_plan(684, 528, 500, "Building 2", "Fabric, print & cutting", b2)

# ── 06 PHASE 1 TARGETS ──────────────────────────────────────────────────────
c.showPage()
c.setFillColor(INK_MID)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.drawImage(scrimmed("wa-factory-0011.jpg", 660, H, (14 / 255, 36 / 255, 56 / 255),
                     1.0, 0.5, focus=0.45), 620, 0, width=660, height=H)
c.setFillColor(INK_MID)
c.rect(0, 0, 621, H, stroke=0, fill=1)
page_frame(dark=True)
eyebrow("Targets & Timeline  ·  Buildings 1 & 2", 96, 618, BRASS_LT)
heading("Phase 1 capacity", 96, 560, 40, WHITE)
rule(96, 534)

targets = [("60,000", "Knitwear pieces per day"),
           ("30", "Production lines, two sewing floors of 15 each"),
           ("45", "Sewing workstations per line, 1,350 in total"),
           ("3", "Double-headed needle detectors")]
ty = 470
for num, txt in targets:
    c.setFont(HEAD, 27)
    c.setFillColor(SKY)
    c.drawString(96, ty, num)
    c.setFont(BODY, 12)
    c.setFillColor(Color(1, 1, 1, 0.68))
    lines = wrap(txt, BODY, 12, 300)
    yy = ty + 6
    for ln in lines:
        c.drawString(230, yy, ln)
        yy -= 17
    ty -= 76
    c.setStrokeColor(Color(1, 1, 1, 0.10))
    c.setLineWidth(1)
    c.line(96, ty + 44, 560, ty + 44)

c.setFillColor(Color(56 / 255, 182 / 255, 255 / 255, 0.10))
c.roundRect(96, 110, 380, 84, 6, stroke=0, fill=1)
c.setStrokeColor(Color(56 / 255, 182 / 255, 255 / 255, 0.35))
c.roundRect(96, 110, 380, 84, 6, stroke=1, fill=0)
c.setFont(BODY_B, 9)
c.setFillColor(HexColor("#6FCBFF"))
c.drawString(120, 162, "T R I A L   P R O D U C T I O N   S T A R T   T A R G E T")
c.setFont(HEAD, 26)
c.setFillColor(WHITE)
c.drawString(120, 128, "September 2025")


# ── 07-09 PRODUCTION SECTIONS ───────────────────────────────────────────────
def section_page(eb, title, capacity, specs, image, focus=0.5, flip=False):
    c.showPage()
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    img_x = 0 if not flip else W / 2
    txt_x = W / 2 + 76 if not flip else 96
    draw_image_cover(image, img_x, 0, W / 2, H, focus=focus)
    # the half-bleed image would sit under a footer label on its own side
    page_frame(left_label=flip, right_label=not flip)

    # measure the block so it can be centred vertically
    spec_lines = [wrap(sp, BODY, 12.5, 470) for sp in specs]
    block_h = 60 + 34 + 26 + 30 + sum(len(l) * 20 + 12 for l in spec_lines)
    top = H / 2 + block_h / 2

    eyebrow(eb, txt_x, top)
    heading(title, txt_x, top - 58, 44)
    rule(txt_x, top - 84)
    c.setFont(BODY_B, 13)
    c.setFillColor(SKY_DEEP)
    c.drawString(txt_x, top - 122, capacity)
    yy = top - 164
    for lines in spec_lines:
        for j, ln in enumerate(lines):
            if j == 0:
                c.saveState()
                c.setFillColor(BRASS)
                c.translate(txt_x + 5, yy + 4)
                c.rotate(45)
                c.rect(-3.5, -3.5, 7, 7, stroke=0, fill=1)
                c.restoreState()
            c.setFont(BODY, 12.5)
            c.setFillColor(SLATE)
            c.drawString(txt_x + 22, yy, ln)
            yy -= 20
        yy -= 12


section_page("Building 2  ·  Ground Floor", "Knitting", "Capacity: 12 tons of fabric per day",
             ["26 x circular knitting machines, single jersey (Gong Li)",
              "4 x circular knitting machines, fleece (Gong Li)",
              "2 x circular knitting machines, rib (Gong Li)",
              "2 x fabric inspection machines"],
             "outfit-knitting.jpg", 0.5)

section_page("Building 2  ·  1st & 2nd Floor", "Printing",
             "Screen, automatic and oval printing in-house",
             ["18 x 80 ft screen printing tables",
              "3 x automatic oval printing machines",
              "18 x auto-run dryers",
              "2 x curing machines",
              "Well-equipped colour and quality lab"],
             "outfit-printing.jpg", 0.5, flip=True)

section_page("Building 2  ·  4th Floor", "Cutting", "CAD-linked automated cutting",
             ["6 x 80 ft cutting tables",
              "6 x automatic fabric spreaders",
              "2 x CAD-linked auto cutters",
              "1 x steam fabric relaxer",
              "2 x fabric inspection machines"],
             "wa-factory-0014.jpg", 0.5)

# ── 10 SOLAR & SUSTAINABILITY ───────────────────────────────────────────────
c.showPage()
draw_image_cover("outfit-solar.jpg", 0, 0, W, H, focus=0.5)
c.setFillColor(Color(7 / 255, 22 / 255, 36 / 255, 0.88))
c.rect(0, 0, W, H, stroke=0, fill=1)
page_frame(dark=True)
eyebrow("Solar Power & Sustainability  ·  Buildings 1 & 2", 96, 618, BRASS_LT)
heading("Powered mostly by the roof above it", 96, 558, 38, WHITE)
rule(96, 532)
para("Phase 1 runs largely on its own rooftop generation, with a zero-discharge water system "
     "handling every wastewater stream on site.", 96, 492, BODY, 14, 25, 620, Color(1, 1, 1, 0.68))

sus = [("1.4 MW", "Rooftop PV across Buildings 1 & 2"),
       ("~ 70%", "Of the Phase 1 electricity load"),
       ("2.2 GWh", "Generated per year"),
       ("1,700 t", "CO2e offset per year")]
sx, sw2 = 96, 262
for i, (st, lb) in enumerate(sus):
    x = sx + i * (sw2 + 14)
    c.setFillColor(Color(1, 1, 1, 0.07))
    c.roundRect(x, 250, sw2, 140, 6, stroke=0, fill=1)
    c.setStrokeColor(Color(1, 1, 1, 0.15))
    c.roundRect(x, 250, sw2, 140, 6, stroke=1, fill=0)
    c.setFont(HEAD, 30)
    c.setFillColor(SKY)
    c.drawString(x + 22, 336, st)
    c.setFont(BODY, 11)
    c.setFillColor(Color(1, 1, 1, 0.62))
    yy = 306
    for ln in wrap(lb, BODY, 11, sw2 - 44):
        c.drawString(x + 22, yy, ln)
        yy -= 16

c.setFillColor(Color(201 / 255, 168 / 255, 76 / 255, 0.14))
c.roundRect(96, 150, 620, 62, 6, stroke=0, fill=1)
c.setStrokeColor(Color(201 / 255, 168 / 255, 76 / 255, 0.45))
c.roundRect(96, 150, 620, 62, 6, stroke=1, fill=0)
c.setFont(BODY_B, 13)
c.setFillColor(BRASS_LT)
c.drawString(122, 173, "Zero discharge")
c.setFont(BODY, 12.5)
c.setFillColor(Color(1, 1, 1, 0.72))
c.drawString(258, 173, "15 m3/h ETP + HTP for all wastewater streams")

# ── 11 CLOSING ──────────────────────────────────────────────────────────────
c.showPage()
draw_image_cover("wa-factory-0005.jpg", 0, 0, W, H, focus=0.5)
c.setFillColor(Color(11 / 255, 29 / 255, 46 / 255, 0.92))
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(BRASS)
c.rect(0, H - 4, W, 4, stroke=0, fill=1)
c.setFont(HEAD, 52)
c.setFillColor(WHITE)
c.drawCentredString(W / 2, 430, "Supreme Outfit Ltd.")
rule(W / 2 - 45, 396, 90, BRASS, 3)
c.setFont(BODY, 16)
c.setFillColor(Color(1, 1, 1, 0.7))
c.drawCentredString(W / 2, 352, "Dhamrai, Dhaka, Bangladesh")
c.setFont(BODY, 13)
c.setFillColor(SKY)
c.drawCentredString(W / 2, 296, "supremegroupbd.com")
c.setFont(BODY, 12)
c.setFillColor(Color(1, 1, 1, 0.55))
c.drawCentredString(W / 2, 262, "office@supremegroupbd.com   ·   +880 1678 038802")
c.setFont(BODY, 10)
c.setFillColor(Color(1, 1, 1, 0.3))
c.drawCentredString(W / 2, 150, "A SUPREME GROUP COMPANY")

c.save()
print("Wrote", OUT, os.path.getsize(OUT) // 1024, "KB,", page_no[0], "numbered pages")
