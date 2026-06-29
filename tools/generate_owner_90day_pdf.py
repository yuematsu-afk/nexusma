from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)
PDF_PATH = OUT / "owner-90day-absence-guide.pdf"

FONT_SANS = r"C:\Windows\Fonts\NotoSansJP-VF.ttf"
FONT_SERIF = r"C:\Windows\Fonts\NotoSerifJP-VF.ttf"
pdfmetrics.registerFont(TTFont("NotoSansJP", FONT_SANS))
pdfmetrics.registerFont(TTFont("NotoSerifJP", FONT_SERIF))

PAGE_W, PAGE_H = A4
NAVY = colors.HexColor("#07131F")
NAVY2 = colors.HexColor("#0B1B30")
GOLD = colors.HexColor("#C6A664")
GOLD_L = colors.HexColor("#F2EBDB")
PAPER = colors.HexColor("#FBFAF6")
INK = colors.HexColor("#1E2633")
MUTED = colors.HexColor("#5E687A")
LINE = colors.HexColor("#E6E1D4")
RED_L = colors.HexColor("#FBEAE4")
GREEN_L = colors.HexColor("#E4F3EB")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="NXBody", fontName="NotoSansJP", fontSize=9.4, leading=16, textColor=INK, spaceAfter=7))
styles.add(ParagraphStyle(name="NXBodySmall", fontName="NotoSansJP", fontSize=8.0, leading=12.5, textColor=MUTED, spaceAfter=5))
styles.add(ParagraphStyle(name="NXH1", fontName="NotoSerifJP", fontSize=18, leading=27, textColor=NAVY, spaceBefore=6, spaceAfter=14))
styles.add(ParagraphStyle(name="NXH2", fontName="NotoSansJP", fontSize=12.5, leading=19, textColor=NAVY, spaceBefore=8, spaceAfter=7))
styles.add(ParagraphStyle(name="NXH3", fontName="NotoSansJP", fontSize=10.3, leading=15.5, textColor=NAVY, spaceBefore=5, spaceAfter=5))
styles.add(ParagraphStyle(name="NXBoxTitle", fontName="NotoSansJP", fontSize=10.5, leading=16, textColor=NAVY, spaceAfter=4))


def p(text, style="NXBody"):
    return Paragraph(text, styles[style])


def bullets(items):
    rows = [[p("・"), p(item)] for item in items]
    table = Table(rows, colWidths=[6 * mm, 158 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ]))
    return table


def note_box(title, body, bg=GOLD_L):
    table = Table([[p(title, "NXBoxTitle")], [p(body)]], colWidths=[164 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return table


def check_table(rows):
    data = [[p("確認項目", "NXH3"), p("社長不在時に起きること", "NXH3"), p("最初の対応", "NXH3")]]
    for row in rows:
        data.append([p(row[0], "NXBodySmall"), p(row[1], "NXBodySmall"), p(row[2], "NXBodySmall")])
    table = Table(data, colWidths=[36 * mm, 67 * mm, 61 * mm], repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY2),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.35, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("BACKGROUND", (0, 1), (-1, -1), colors.white),
    ]))
    return table


def cover(canvas, _doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#102742"))
    canvas.circle(PAGE_W * 0.82, PAGE_H * 0.83, 72 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.HexColor("#0D223A"))
    canvas.circle(PAGE_W * 0.14, PAGE_H * 0.18, 58 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(colors.Color(1, 1, 1, alpha=0.08))
    for x in range(0, int(PAGE_W), 38):
        canvas.line(x, 0, x, PAGE_H)
    for y in range(0, int(PAGE_H), 38):
        canvas.line(0, y, PAGE_W, y)
    canvas.setFont("NotoSansJP", 9)
    canvas.setFillColor(GOLD)
    canvas.drawCentredString(PAGE_W / 2, PAGE_H - 58 * mm, "NexusM&A 無料資料")
    canvas.setFont("NotoSerifJP", 24)
    canvas.setFillColor(colors.white)
    y = PAGE_H - 82 * mm
    for line in ["経営者が90日間、", "業務を離れることになったら"]:
        canvas.drawCentredString(PAGE_W / 2, y, line)
        y -= 12 * mm
    canvas.setFont("NotoSansJP", 10.5)
    canvas.setFillColor(colors.HexColor("#D9E0EA"))
    for line in ["会社・家族・従業員・取引先を守るための", "社長依存チェックガイド"]:
        canvas.drawCentredString(PAGE_W / 2, y - 3 * mm, line)
        y -= 8 * mm
    canvas.setFillColor(GOLD)
    canvas.roundRect(50 * mm, 154 * mm, 110 * mm, 12 * mm, 5, fill=1, stroke=0)
    canvas.setFillColor(NAVY)
    canvas.setFont("NotoSansJP", 9)
    canvas.drawCentredString(PAGE_W / 2, 158 * mm, "売却を決める前に、まず止まる業務を見える化する")
    canvas.setFillColor(colors.white)
    canvas.setFont("NotoSansJP", 9)
    canvas.drawCentredString(PAGE_W / 2, 32 * mm, "SASAERU合同会社 / NexusM&A")
    canvas.setFont("NotoSansJP", 7.5)
    canvas.setFillColor(colors.HexColor("#A9B4C2"))
    canvas.drawCentredString(PAGE_W / 2, 25 * mm, "https://sasa-eru.com/  |  y.uematsu@sasa-eru.com")
    canvas.restoreState()


def later(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(NAVY)
    canvas.rect(0, PAGE_H - 18 * mm, PAGE_W, 18 * mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.setFont("NotoSansJP", 8)
    canvas.drawString(18 * mm, PAGE_H - 11.5 * mm, "NexusM&A | 社長不在90日チェックガイド")
    canvas.setFillColor(colors.HexColor("#8A93A3"))
    canvas.setFont("NotoSansJP", 7.2)
    canvas.drawRightString(PAGE_W - 16 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


def on_page(canvas, doc):
    if doc.page == 1:
        cover(canvas, doc)
    else:
        later(canvas, doc)


story = [Spacer(1, 220 * mm), PageBreak()]
story += [
    p("この資料の目的", "NXH1"),
    p("この資料は、会社を売るかどうかを決めるための資料ではありません。経営者が急に動けなくなったとき、会社のどこが止まり、誰にどの影響が出るのかを確認するための資料です。"),
    p("多くの中小企業では、売上、顧客対応、資金繰り、金融機関対応、従業員への判断が、気づかないうちに社長一人へ集中しています。普段はそれで回っていても、入院、事故、体調不良、家族事情などで90日間会社を離れると、会社の弱点が一気に表面化します。"),
    note_box("前提", "M&Aや事業承継は、社長を急に辞めさせる話ではありません。社長が続けたい役割を残しながら、会社・家族・従業員に残るリスクを段階的に軽くする選択肢でもあります。"),
    p("まず見るべき5つの領域", "NXH2"),
    bullets([
        "お金: 給与、仕入、借入返済、税金、資金繰り表",
        "人: 従業員の指示系統、キーパーソン、採用、退職リスク",
        "顧客: 主要取引先、営業、クレーム、価格交渉",
        "外部: 金融機関、税理士、許認可、行政、地域信用",
        "家族: 連帯保証、株式、相続、生活費、緊急時の意思決定",
    ]),
]
story += [
    PageBreak(),
    p("1. 社長が90日不在になると、最初に止まりやすいこと", "NXH1"),
    check_table([
        ["資金繰り", "入出金予定を社長しか把握していない。支払優先順位を決められない。", "月次資金繰り表、借入一覧、支払予定表を1つにまとめる。"],
        ["給与支払", "給与計算、承認、振込権限が社長に集中している。", "給与支払日、担当者、承認権限、緊急時代理者を確認する。"],
        ["取引先対応", "主要顧客が社長に直接連絡し、現場が判断できない。", "上位10社の担当者、契約、価格、対応履歴を整理する。"],
        ["金融機関対応", "借入条件、担保、保証、返済予定を社長しか説明できない。", "金融機関別の借入・保証・担保一覧を作る。"],
        ["意思決定", "値引き、採用、発注、投資、クレーム対応が止まる。", "金額別・内容別に誰が決められるかを決める。"],
        ["許認可・契約", "更新期限や重要契約の所在が不明になる。", "許認可、契約書、期限、管理者を一覧化する。"],
    ]),
    Spacer(1, 5 * mm),
    note_box("見方", "「社長がいないと困ること」を責める必要はありません。大切なのは、止まる業務を先に見つけて、会社の価値を下げない準備をすることです。", GREEN_L),
]
story += [
    PageBreak(),
    p("2. 家族に残りやすいリスク", "NXH1"),
    p("会社の問題は、会社の中だけで終わるとは限りません。経営者保証、借入、株式、役員報酬、生活費、相続が絡むと、配偶者や家族が急に判断を迫られることがあります。"),
    bullets([
        "金融機関から借入や保証の説明を求められる",
        "会社の株式や代表者変更について判断が必要になる",
        "役員報酬が止まり、生活費に影響が出る",
        "会社の資金と個人の資金の境界が分かりにくい",
        "後継者候補がいないまま、家族が従業員や取引先へ説明することになる",
    ]),
    note_box("家族に共有しておきたい最低限の情報", "主要金融機関、借入残高、保証の有無、株式の保有者、顧問税理士、会社の重要印鑑・通帳・契約書の保管場所、緊急時に連絡すべき社内外の人。"),
]
story += [
    PageBreak(),
    p("3. 従業員・取引先に起きること", "NXH1"),
    p("社長不在時に最も早く不安が広がるのは、従業員と取引先です。会社の方針が分からない、支払は大丈夫か、納期は守れるか、担当者は誰かという不安が出ます。"),
    check_table([
        ["従業員", "給与、雇用、指示系統への不安が出る。", "緊急時の社内説明者を決め、給与支払予定を明確にする。"],
        ["主要顧客", "納期、品質、対応継続に不安を持つ。", "主要顧客別に代替担当者と対応ルールを決める。"],
        ["仕入先", "支払遅延や発注停止を警戒する。", "支払予定と発注責任者を整理する。"],
        ["金融機関", "代表者不在時の返済・保証・資金繰りを確認する。", "顧問税理士や経理担当と説明資料を用意する。"],
    ]),
    Spacer(1, 5 * mm),
    note_box("従業員を不安にさせないために", "この資料を従業員へ直接配布する必要はありません。まず経営者自身が状況を把握し、必要な範囲で幹部・家族・専門家と共有するための資料として使ってください。", RED_L),
]
story += [
    PageBreak(),
    p("4. M&A・事業承継につながる確認項目", "NXH1"),
    p("社長依存が強い会社でも、すぐに売却できないとは限りません。ただし、買い手にとっては「社長が抜けたあと何が残るのか」が重要です。以下の情報が整理されているほど、マッチング後の齟齬を減らしやすくなります。"),
    bullets([
        "顧客依存: 売上上位10社と社長個人への依存度",
        "営業依存: 新規案件や見積判断を誰が行っているか",
        "技術依存: 社長しか分からない技術・品質判断・ノウハウ",
        "判断依存: 値引き、採用、投資、支払優先順位の決定者",
        "金融機関対応依存: 借入、保証、担保、資金繰り説明の担当者",
        "地域信用依存: 地域団体、紹介、顧客との関係が社長個人に寄っていないか",
    ]),
    note_box("買い手が見たい情報", "会社の弱点を隠すことではなく、弱点を分解して説明できることが重要です。説明できる依存は、引継ぎ計画や譲渡後の社長関与によって補える可能性があります。", GREEN_L),
]
story += [
    PageBreak(),
    p("5. 社長を続けながら責任を軽くする選択肢", "NXH1"),
    p("事業承継は、社長を急に辞める話だけではありません。会社によっては、譲渡後も一定期間は社長、会長、顧問、営業支援、技術支援として関与する設計が考えられます。"),
    check_table([
        ["即時退任型", "譲渡後すぐに経営から離れる。", "後継体制が整っている会社向き。"],
        ["段階退任型", "一定期間、代表・会長・顧問として残る。", "顧客・従業員・金融機関への移行期間を設ける。"],
        ["一部事業承継型", "会社全体ではなく、一部事業や資産から整理する。", "社長が続けたい領域と移したい領域を分ける。"],
        ["外部補完型", "買い手の人材・管理体制・営業力で社長依存を補う。", "買い手候補の条件整理が重要。"],
    ]),
    Spacer(1, 5 * mm),
    p("社長を続けたい気持ちは、事業承継の障害とは限りません。むしろ、どの役割を続けたいのか、どの責任を軽くしたいのかを分けることで、現実的な承継方法が見えやすくなります。"),
]
story += [
    PageBreak(),
    p("6. まず行う90日チェック", "NXH1"),
    p("以下のうち、3つ以上が当てはまる場合は、すぐに売却を決める必要はありませんが、社長依存の整理を始める価値があります。"),
    bullets([
        "月次資金繰りを社長以外が説明できない",
        "主要顧客との価格・納期交渉を社長しかできない",
        "給与支払や借入返済の承認権限が社長に集中している",
        "経営者保証や担保の一覧がすぐに出せない",
        "従業員が次の判断者を知らない",
        "家族が会社の借入・株式・顧問先を把握していない",
        "後継者候補はいるが、本人の意思や権限が曖昧である",
        "社長が退任すると売上が大きく下がる可能性がある",
    ]),
    note_box("次の一歩", "NexusM&Aの「社長不在90日診断」では、会社名・電話番号を入力せずに現在地を確認できます。診断後、必要に応じて無料相談フォームから具体的な整理も可能です。"),
    p("診断URL: https://sasa-eru.com/#/diagnosis", "NXH2"),
    p("無料相談: https://sasa-eru.com/#/contact", "NXH2"),
]
story += [
    PageBreak(),
    p("ご利用にあたって", "NXH1"),
    p("本資料は、一般的な情報提供を目的として作成したものです。個別の法務、税務、会計、労務、金融機関対応については、弁護士、税理士、社会保険労務士、金融機関等の専門家へご確認ください。"),
    p("NexusM&Aは、中小企業の事業承継・M&Aに関する初期相談を無料で承っています。売却を前提にしない段階でも、社長依存、後継者不在、買い手候補との相性、譲渡後の社長の残り方を整理できます。"),
    Spacer(1, 8 * mm),
    note_box("NexusM&A / SASAERU合同会社", "受付メール: y.uematsu@sasa-eru.com<br/>Web: https://sasa-eru.com/<br/>対象地域: 全国<br/>対象業種: 全業種"),
]

doc = SimpleDocTemplate(str(PDF_PATH), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=28 * mm, bottomMargin=18 * mm)
doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(PDF_PATH)
