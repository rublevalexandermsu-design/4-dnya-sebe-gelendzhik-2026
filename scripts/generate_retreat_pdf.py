from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"
STITCH = ASSETS / "stitch"
OUTPUT = ROOT / "public" / "retreat-brochure.pdf"

BOOKING_PHONE = "+7 918 140-54-39"
BOOKING_NAME = "Ирина"
BOOKING_LINK = "https://wa.me/79181405439"
VENUE_LINK = "https://share.google/StyCWoI4zwdjdBf3K"

ARIAL = r"C:\Windows\Fonts\arial.ttf"
ARIAL_BOLD = r"C:\Windows\Fonts\arialbd.ttf"
GEORGIA = r"C:\Windows\Fonts\georgia.ttf"
GEORGIA_BOLD = r"C:\Windows\Fonts\georgiab.ttf"

FONT_SANS = "Helvetica"
FONT_SANS_BOLD = "Helvetica-Bold"
FONT_SERIF = "Times-Roman"
FONT_SERIF_BOLD = "Times-Bold"

for name, path in [
    ("Arial", ARIAL),
    ("Arial-Bold", ARIAL_BOLD),
    ("Georgia", GEORGIA),
    ("Georgia-Bold", GEORGIA_BOLD),
]:
    try:
        pdfmetrics.registerFont(TTFont(name, path))
    except Exception:
        pass

if "Arial" in pdfmetrics.getRegisteredFontNames():
    FONT_SANS = "Arial"
if "Arial-Bold" in pdfmetrics.getRegisteredFontNames():
    FONT_SANS_BOLD = "Arial-Bold"
if "Georgia" in pdfmetrics.getRegisteredFontNames():
    FONT_SERIF = "Georgia"
if "Georgia-Bold" in pdfmetrics.getRegisteredFontNames():
    FONT_SERIF_BOLD = "Georgia-Bold"

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Eyebrow",
        fontName=FONT_SANS_BOLD,
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#f2ca50"),
        alignment=TA_LEFT,
    )
)
styles.add(
    ParagraphStyle(
        name="CoverTitle",
        fontName=FONT_SERIF_BOLD,
        fontSize=31,
        leading=33,
        textColor=colors.HexColor("#f8f1e7"),
    )
)
styles.add(
    ParagraphStyle(
        name="CoverLead",
        fontName=FONT_SANS,
        fontSize=12,
        leading=18,
        textColor=colors.HexColor("#efe8da"),
    )
)
styles.add(
    ParagraphStyle(
        name="RetreatTitle",
        fontName=FONT_SERIF_BOLD,
        fontSize=22,
        leading=26,
        textColor=colors.HexColor("#11151a"),
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName=FONT_SANS,
        fontSize=10.4,
        leading=15,
        textColor=colors.HexColor("#39414a"),
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        fontName=FONT_SANS,
        fontSize=9,
        leading=13,
        textColor=colors.HexColor("#55606b"),
    )
)
styles.add(
    ParagraphStyle(
        name="CardTitle",
        fontName=FONT_SERIF_BOLD,
        fontSize=15,
        leading=18,
        textColor=colors.HexColor("#11151a"),
    )
)
styles.add(
    ParagraphStyle(
        name="Center",
        fontName=FONT_SANS,
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#39414a"),
    )
)
styles.add(
    ParagraphStyle(
        name="CenterLight",
        fontName=FONT_SANS,
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#efe8da"),
    )
)


def asset(*parts: str) -> str:
    return str((ASSETS / Path(*parts)).resolve())


def stitch_asset(name: str) -> str:
    return str((STITCH / name).resolve())


def image(path: str, width=None, height=None):
    if width is None and height is None:
        return Image(path)
    reader = ImageReader(path)
    iw, ih = reader.getSize()
    if width is None:
        width = height * iw / ih
    if height is None:
        height = width * ih / iw
    return Image(path, width=width, height=height)


def card(rows, widths, bg="#ffffff", border="#ddd4c7", pad=10):
    table = Table(rows, colWidths=widths, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor(bg)),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor(border)),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, colors.HexColor(border)),
                ("LEFTPADDING", (0, 0), (-1, -1), pad),
                ("RIGHTPADDING", (0, 0), (-1, -1), pad),
                ("TOPPADDING", (0, 0), (-1, -1), pad - 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), pad - 2),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return table


def cover_bg(canvas, doc):
    canvas.saveState()
    sea = stitch_asset("hero-sea.jpg")
    if Path(sea).exists():
        canvas.drawImage(sea, 0, 0, width=A4[0], height=A4[1], preserveAspectRatio=True, anchor="c")
    canvas.setFillColor(colors.Color(0.06, 0.08, 0.1, alpha=0.34))
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setFillColor(colors.Color(0.95, 0.79, 0.31, alpha=0.14))
    canvas.circle(A4[0] * 0.14, A4[1] * 0.87, 62, fill=1, stroke=0)
    canvas.setFillColor(colors.Color(0.67, 0.82, 0.9, alpha=0.12))
    canvas.circle(A4[0] * 0.88, A4[1] * 0.80, 72, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#f2ca50"))
    canvas.roundRect(0, A4[1] - 14, A4[0], 4, 2, fill=1, stroke=0)
    canvas.restoreState()


def inner_bg(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(colors.HexColor("#f7f2eb"))
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setFillColor(colors.Color(0.49, 0.78, 0.89, alpha=0.08))
    canvas.circle(A4[0] * 0.82, A4[1] * 0.86, 85, fill=1, stroke=0)
    canvas.setFillColor(colors.Color(0.95, 0.79, 0.31, alpha=0.10))
    canvas.circle(A4[0] * 0.14, A4[1] * 0.14, 70, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#f2ca50"))
    canvas.rect(0, A4[1] - 8, A4[0], 3, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#a59a8d"))
    canvas.setFont(FONT_SANS, 8)
    canvas.drawRightString(A4[0] - 16 * mm, 10 * mm, f"Страница {doc.page}")
    canvas.restoreState()


days = [
    (
        "День 1",
        "Остановка и возвращение к себе",
        "Сбавить скорость, выйти из режима автоматизма и начать слышать себя.",
        "Человек перестаёт жить на инерции и впервые за долгое время чувствует, что с ним происходит.",
    ),
    (
        "День 2",
        "Эмоции и внутреннее состояние",
        "Научиться понимать свои реакции, усталость, раздражение и скрытое напряжение.",
        "Появляется контроль через понимание, а не через усилие и подавление.",
    ),
    (
        "День 3",
        "Внутренняя опора и ясность",
        "Убрать шум, который мешает видеть себя и свой путь.",
        "Возникает спокойное ощущение: я понимаю, что со мной происходит, и могу на это опереться.",
    ),
    (
        "День 4",
        "Собирание себя и направление",
        "Собрать опыт, увидеть главные выводы и перевести их в действие.",
        "Участницы уезжают не воодушевлённые на час, а собранные и спокойные.",
    ),
]

will_happen = [
    "понимание эмоций и реакций",
    "работа с усталостью и выгоранием",
    "снижение внутреннего напряжения",
    "восстановление энергии",
    "возвращение ясности",
]

results = [
    "снижение тревоги и перегрузки",
    "понимание эмоций и реакций",
    "контакт с телом и внутренним состоянием",
    "внутренняя ясность",
    "ощущение направления и опоры",
    "ресурс и энергия",
]

story = []

# Cover
cover_left = [
    Paragraph("ГЕЛЕНДЖИК", styles["Eyebrow"]),
    Spacer(1, 4),
    Paragraph("4 дня себе", styles["CoverTitle"]),
    Spacer(1, 6),
    Paragraph("15–18 июня 2026", styles["Eyebrow"]),
    Spacer(1, 12),
    Paragraph(
        "Перезагрузка состояния, восстановление, ясность, внутренняя устойчивость.",
        styles["CoverLead"],
    ),
    Spacer(1, 6),
    Paragraph(
        "Глубокая, но мягкая психологическая работа, встроенная в отдых у моря.",
        styles["CoverLead"],
    ),
    Spacer(1, 14),
    Paragraph("4 дня • 3–4 часа в день • живая группа • всё включено", styles["CoverLead"]),
    Spacer(1, 16),
    Paragraph(f"Бронирование: {BOOKING_NAME} • {BOOKING_PHONE}", styles["CoverLead"]),
]

hero_portrait = card(
    [
        [image(asset("tatiana-gallery-1.jpg"), width=76 * mm)],
        [Paragraph("<b>Татьяна Мунн</b><br/>Дипломированный психолог МГУ, ведущая ретрита", styles["Center"])],
    ],
    [76 * mm],
    bg="#fdfaf4",
    border="#ded4c5",
    pad=8,
)

cover_layout = Table([[cover_left, hero_portrait]], colWidths=[100 * mm, 76 * mm])
cover_layout.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ]
    )
)

cover_stats = card(
    [
        [
            Paragraph("<b>60 000 ₽</b><br/>актуальная стоимость", styles["CenterLight"]),
            Paragraph("<font color='#cbbca7'><strike>100 000 ₽</strike></font><br/>прежняя стоимость", styles["CenterLight"]),
            Paragraph("проживание, питание,<br/>практики и консультации", styles["CenterLight"]),
        ]
    ],
    [58 * mm, 58 * mm, 58 * mm],
    bg="#16242f",
    border="#314455",
    pad=10,
)

story.extend(
    [
        Spacer(1, 18 * mm),
        cover_layout,
        Spacer(1, 10 * mm),
        cover_stats,
        Spacer(1, 8 * mm),
        card(
            [[Paragraph("Геленджик • недалеко от моря • дом с очень особой атмосферой", styles["CenterLight"])]],
            [176 * mm],
            bg="#16242f",
            border="#314455",
            pad=10,
        ),
        PageBreak(),
    ]
)

# Place + audience
story.extend(
    [
        Paragraph("Место силы", styles["Eyebrow"]),
        Spacer(1, 2 * mm),
        Paragraph("Геленджик, недалеко от моря, в доме с очень особой атмосферой", styles["RetreatTitle"]),
        Spacer(1, 4 * mm),
        Paragraph(
            "Это не просто локация для размещения. Это пространство, где мягкий ритм, приятные хозяева и близость к морю создают ту самую среду, в которой восстановление происходит легче и глубже.",
            styles["Body"],
        ),
        Spacer(1, 6 * mm),
    ]
)

place_gallery = Table(
    [
        [
            image(stitch_asset("house.jpg"), width=116 * mm, height=72 * mm),
            image(stitch_asset("beach.jpg"), width=56 * mm, height=72 * mm),
        ],
        [
            image(stitch_asset("interior.jpg"), width=86 * mm, height=52 * mm),
            card(
                [[Paragraph("Море и воздух задают спокойный ритм. Дом и хозяева создают редкое ощущение бережного гостеприимства. Пространство поддерживает тишину, глубину и мягкую внутреннюю трансформацию.", styles["Body"])]],
                [86 * mm],
                bg="#fdfaf4",
                border="#ded4c5",
                pad=10,
            ),
            "",
        ],
    ],
    colWidths=[116 * mm, 56 * mm],
)
place_gallery.setStyle(
    TableStyle(
        [
            ("SPAN", (0, 1), (1, 1)),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]
    )
)
story.append(place_gallery)
story.append(Spacer(1, 4 * mm))
story.append(
    card(
        [
            [
                Paragraph("Для кого", styles["Eyebrow"]),
                Paragraph("Для женщин, которые хотят не просто отдохнуть, а восстановиться.", styles["Body"]),
            ],
            [
                Paragraph("Что отличает программу", styles["Eyebrow"]),
                Paragraph("Без давления и насильственной трансформации. Через состояние, внимание, телесное проживание и осознание.", styles["Body"]),
            ],
        ],
        [52 * mm, 124 * mm],
        bg="#ffffff",
        border="#ded4c5",
        pad=10,
    )
)
story.append(PageBreak())

# Program
story.extend(
    [
        Paragraph("Программа по дням", styles["Eyebrow"]),
        Spacer(1, 2 * mm),
        Paragraph("Четыре дня, которые мягко ведут от замедления к ясности", styles["RetreatTitle"]),
        Spacer(1, 4 * mm),
        Paragraph(
            "Каждый день — это отдельный шаг: остановка, понимание эмоций, внутренняя опора и собирание себя в спокойное направление.",
            styles["Body"],
        ),
        Spacer(1, 6 * mm),
    ]
)

day_cards = []
for day, title, goal, result in days:
    day_cards.append(
        card(
            [
                [Paragraph(day, styles["Eyebrow"])],
                [Paragraph(title, styles["CardTitle"])],
                [Paragraph(f"<b>Цель.</b> {goal}<br/><br/><b>Результат.</b> {result}", styles["Body"])],
            ],
            [84 * mm],
            bg="#ffffff",
            border="#ded4c5",
            pad=10,
        )
    )

program_grid = Table(
    [
        [day_cards[0], day_cards[1]],
        [day_cards[2], day_cards[3]],
    ],
    colWidths=[88 * mm, 88 * mm],
)
program_grid.setStyle(
    TableStyle(
        [
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]
    )
)
story.append(program_grid)
story.append(Spacer(1, 2 * mm))
story.append(
    card(
        [
            [
                Paragraph("Что будет", styles["Eyebrow"]),
                Paragraph(" • ".join(will_happen), styles["Body"]),
            ]
        ],
        [34 * mm, 142 * mm],
        bg="#fdfaf4",
        border="#ded4c5",
        pad=10,
    )
)
story.append(PageBreak())

# Results + Tatiana + contacts
story.extend(
    [
        Paragraph("Результат и условия", styles["Eyebrow"]),
        Spacer(1, 2 * mm),
        Paragraph("Что уносят участницы и как забронировать место", styles["RetreatTitle"]),
        Spacer(1, 4 * mm),
        Paragraph(
            "Это не про внешний эффект. Это про более спокойное состояние, ясность, контакт с собой и ощущение, что внутри снова появляется опора.",
            styles["Body"],
        ),
        Spacer(1, 6 * mm),
    ]
)

result_rows = [[Paragraph(f"• {item}", styles["Body"])] for item in results]
story.append(card(result_rows, [176 * mm], bg="#ffffff", border="#ded4c5", pad=10))
story.append(Spacer(1, 6 * mm))

pricing = card(
    [
        [
            Paragraph("<b>60 000 ₽</b><br/>актуальная стоимость", styles["Center"]),
            Paragraph("<font color='#9a8870'><strike>100 000 ₽</strike></font><br/>прежняя стоимость", styles["Center"]),
            Paragraph("всё включено,<br/>кроме перелёта", styles["Center"]),
        ],
        [
            Paragraph("проживание и питание", styles["Center"]),
            Paragraph("все мероприятия и практики", styles["Center"]),
            Paragraph("личные консультации", styles["Center"]),
        ],
    ],
    [58 * mm, 58 * mm, 58 * mm],
    bg="#fbf7f0",
    border="#ded4c5",
    pad=10,
)
story.append(pricing)
story.append(PageBreak())

about_layout = Table(
    [
        [
            image(asset("tatiana-hero.jpg"), width=52 * mm, height=70 * mm),
            [
                Paragraph("Татьяна Мунн", styles["Eyebrow"]),
                Spacer(1, 2 * mm),
                Paragraph("Дипломированный психолог МГУ, специалист по состоянию и эмоциям", styles["RetreatTitle"]),
                Spacer(1, 3 * mm),
                Paragraph(
                    "Работает с тем, что действительно влияет на жизнь человека: внутренним состоянием, уровнем энергии, ясностью мышления и способностью понимать себя.",
                    styles["Body"],
                ),
                Spacer(1, 3 * mm),
                Paragraph(
                    "Главная ценность — возвращение контакта с собой, из которого уже рождаются решения, энергия и направление.",
                    styles["Body"],
                ),
            ],
        ]
    ],
    colWidths=[56 * mm, 120 * mm],
)
about_layout.setStyle(
    TableStyle(
        [
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]
    )
)
story.append(about_layout)
story.append(Spacer(1, 6 * mm))

story.append(
    card(
        [
            [Paragraph("Контакты для бронирования", styles["Eyebrow"])],
            [Paragraph(f"<b>{BOOKING_NAME}</b> • WhatsApp {BOOKING_PHONE}<br/>{BOOKING_LINK}", styles["Body"])],
            [Paragraph(f"Место проведения: {VENUE_LINK}", styles["Small"])],
        ],
        [176 * mm],
        bg="#16242f",
        border="#314455",
        pad=10,
    )
)


def build_pdf():
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="4 дня себе — Геленджик",
        author="Татьяна Мунн",
    )
    doc.build(story, onFirstPage=cover_bg, onLaterPages=inner_bg)


if __name__ == "__main__":
    build_pdf()
