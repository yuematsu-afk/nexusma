from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)
PDF_PATH = OUT / "family-guarantee-risk-guide.pdf"

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
BLUE_L = colors.HexColor("#EAF0F7")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="NXBody", fontName="NotoSansJP", fontSize=9.4, leading=16, textColor=INK, spaceAfter=7))
styles.add(ParagraphStyle(name="NXBodySmall", fontName="NotoSansJP", fontSize=8.0, leading=12.5, textColor=MUTED, spaceAfter=5))
styles.add(ParagraphStyle(name="NXH1", fontName="NotoSerifJP", fontSize=18, leading=27, textColor=NAVY, spaceBefore=6, spaceAfter=14))
styles.add(ParagraphStyle(name="NXH2", fontName="NotoSansJP", fontSize=12.5, leading=19, textColor=NAVY, spaceBefore=8, spaceAfter=7))
styles.add(ParagraphStyle(name="NXH3", fontName="NotoSansJP", fontSize=10.3, leading=15.5, textColor=NAVY, spaceBefore=5, spaceAfter=5))
styles.add(ParagraphStyle(name="NXBoxTitle", fontName="NotoSansJP", fontSize=10.5, leading=16, textColor=NAVY, spaceAfter=4))


def p(text, style="NXBody"):
    text = text.replace("NexusM&A", "NexusM&amp;A")
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
    data = [[p("確認項目", "NXH3"), p("家族が困る理由", "NXH3"), p("最初の整理", "NXH3")]]
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
    canvas.setFont("NotoSerifJP", 23)
    canvas.setFillColor(colors.white)
    y = PAGE_H - 82 * mm
    for line in ["社長が倒れた時、", "家族が困る借入と保証"]:
        canvas.drawCentredString(PAGE_W / 2, y, line)
        y -= 12 * mm
    canvas.setFont("NotoSansJP", 10.5)
    canvas.setFillColor(colors.HexColor("#D9E0EA"))
    for line in ["会社の借入・経営者保証・個人資産を", "家族に残さないための整理ガイド"]:
        canvas.drawCentredString(PAGE_W / 2, y - 3 * mm, line)
        y -= 8 * mm
    canvas.setFillColor(GOLD)
    canvas.roundRect(45 * mm, 154 * mm, 120 * mm, 12 * mm, 5, fill=1, stroke=0)
    canvas.setFillColor(NAVY)
    canvas.setFont("NotoSansJP", 9)
    canvas.drawCentredString(PAGE_W / 2, 158 * mm, "売却前提ではなく、まず家族が困る論点を見える化する")
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
    canvas.drawString(18 * mm, PAGE_H - 11.5 * mm, "NexusM&A | 家族と経営者保証の整理ガイド")
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
    p("この資料は、会社売却を決めるための資料ではありません。社長が急に倒れた時、配偶者や家族が会社借入、経営者保証、従業員、取引先、金融機関対応で困らないように、事前に整理しておく項目をまとめたものです。"),
    p("中小企業では、会社の信用と社長個人の信用が強く結びついています。普段は問題なく回っていても、社長が急病・事故・長期入院で動けなくなると、会社と家族の双方に判断が集中します。"),
    note_box("前提", "家族に話すべきことは、会社を売る話ではありません。会社にどのような借入・保証・支払・重要契約があり、社長が動けない時に誰が何を確認するかを決める話です。"),
    p("最初に確認する5つの論点", "NXH2"),
    bullets([
        "会社借入: 借入先、残高、返済予定、担保、保証人を一覧にする",
        "経営者保証: 社長個人、配偶者、親族が保証しているかを確認する",
        "会社と個人の資産: 不動産、車両、保険、口座、役員貸付・借入を分ける",
        "支払と給与: 給与、仕入、税金、社会保険、借入返済を何日分払えるかを見る",
        "判断権限: 社長不在時に金融機関、従業員、取引先へ誰が説明するかを決める",
    ]),
]
story += [
    PageBreak(),
    p("1. 家族が最初に困るのは借入と保証です", "NXH1"),
    p("社長が動けなくなった時、家族が最初に聞かれやすいのは、会社を続けるかどうかではありません。多くの場合、金融機関、従業員、仕入先、税理士などから、会社の資金繰りと借入の状況を聞かれます。"),
    check_table([
        ["会社借入", "どこから、いくら借りているか分からないと、返済や条件変更の相談ができない。", "金融機関別に借入残高、返済月額、返済期限を一覧化する。"],
        ["経営者保証", "社長個人や配偶者が保証していると、会社の問題が家族の生活に影響する。", "保証契約、担保、連帯保証人を確認する。"],
        ["担保・保険", "自宅や個人資産が担保に入っている場合、家族が判断を迫られる。", "担保不動産、保険、質権設定の有無をまとめる。"],
        ["役員貸付・借入", "会社と社長個人のお金が混ざると、承継や廃業時に整理が難しくなる。", "役員貸付金、役員借入金、立替金を税理士と確認する。"],
        ["支払予定", "給与、仕入、税金、社会保険の支払が止まると、信用が急速に落ちる。", "翌月までの支払予定と不足額を確認する。"],
    ]),
    Spacer(1, 5 * mm),
    note_box("重要", "借入や保証を整理することは、売却準備に限りません。会社を続ける場合、親族に承継する場合、社内に任せる場合、第三者に承継する場合のどれでも必要になります。", GREEN_L),
]
story += [
    PageBreak(),
    p("2. 会社と個人のお金を分けて見る", "NXH1"),
    p("中小企業では、会社名義と個人名義の資産・負債が近いところにあります。ここが整理されていないと、社長不在時に家族が会社の支払と個人の生活費を同時に考えなければならなくなります。"),
    bullets([
        "会社名義の口座、借入、保険、車両、不動産を一覧化する",
        "社長個人名義の不動産、借入、保険、担保提供の有無を確認する",
        "会社から社長への貸付金、社長から会社への借入金を確認する",
        "法人カード、個人カード、引落口座を分けて確認する",
        "税金、社会保険、リース、家賃など毎月必ず出ていく支払を把握する",
    ]),
    note_box("家族に残さないための視点", "家族が困るのは、金額の大きさだけではありません。どこに何があり、誰に聞けばよく、いつまでに判断すべきかが分からないことです。資料を完璧に作るよりも、まず一覧を作ることが重要です。", BLUE_L),
    p("最低限の一覧表に入れる項目", "NXH2"),
    bullets([
        "金融機関名、支店名、担当者名、連絡先",
        "借入残高、毎月返済額、返済期限、担保、保証人",
        "保険会社、保険種類、契約者、受取人、証券保管場所",
        "税理士、社労士、弁護士などの相談先",
        "会社の通帳、印鑑、契約書、許認可、重要IDの保管場所",
    ]),
]
story += [
    PageBreak(),
    p("3. 従業員と取引先に何を説明するか", "NXH1"),
    p("社長が急に不在になると、従業員や取引先は会社の将来に不安を持ちます。説明が遅れるほど、退職、取引停止、支払条件の変更などが起きやすくなります。"),
    check_table([
        ["従業員", "給与、勤務継続、指示系統が分からないと不安が広がる。", "社長不在時の説明者と給与支払予定を決める。"],
        ["主要顧客", "納期や品質に不安を持たれると受注が止まる。", "上位顧客ごとに担当者、契約、対応履歴を整理する。"],
        ["仕入先", "支払不安が出ると掛取引や納品条件が変わる。", "支払予定、担当者、代替連絡先を確認する。"],
        ["金融機関", "説明が遅れると資金繰りの相談が後手になる。", "月次資料、資金繰り表、今後の見通しを準備する。"],
    ]),
    Spacer(1, 5 * mm),
    note_box("社員に直接配る資料ではありません", "この資料は、社長自身、家族、幹部、専門家が整理するための資料です。従業員へ不用意に配布すると不安を広げる可能性があります。社内説明は、状況とタイミングを見て慎重に行ってください。", RED_L),
]
story += [
    PageBreak(),
    p("4. M&A・事業承継につながる確認項目", "NXH1"),
    p("社長依存が強い会社でも、整理を始めることで選択肢は増えます。重要なのは、会社の弱点を隠すことではなく、どこに依存があるかを説明できる状態にすることです。"),
    bullets([
        "顧客依存: 売上上位顧客と社長個人の関係性",
        "営業依存: 新規案件、見積、価格交渉を誰が行っているか",
        "技術依存: 社長しか分からない技術、品質判断、ノウハウ",
        "判断依存: 採用、投資、値引き、クレーム対応の決裁者",
        "金融機関対応依存: 借入、保証、資金繰り説明の担当者",
        "地域信用依存: 地域、紹介者、古くからの取引先との関係",
    ]),
    note_box("買い手が見たい情報", "買い手は、弱点がない会社だけを探しているわけではありません。弱点が整理され、引き継ぎ方法が見えている会社は検討しやすくなります。社長依存を分析することは、会社の価値を下げる作業ではなく、引き継ぎ可能性を高める作業です。", GREEN_L),
]
story += [
    PageBreak(),
    p("5. まず行う30分チェック", "NXH1"),
    p("以下のうち3つ以上が当てはまる場合、会社売却を決める必要はありませんが、社長不在時の整理を始める価値があります。"),
    bullets([
        "会社の借入一覧を社長以外がすぐに出せない",
        "経営者保証や担保の内容を家族が把握していない",
        "給与や仕入の支払予定を社長以外が説明できない",
        "主要顧客との関係が社長個人に集中している",
        "金融機関への説明を社長しか行っていない",
        "後継候補はいるが、権限や責任範囲が曖昧である",
        "社長が退くと売上や信用が大きく下がる可能性がある",
        "家族が会社の株式、借入、保証の全体像を知らない",
    ]),
    note_box("次の一歩", "NexusM&Aでは、売却前提ではなく、社長依存・経営者保証・会社借入・家族への影響を整理する無料相談を受け付けています。まずは匿名診断またはメール相談から始められます。"),
    p("診断URL: https://sasa-eru.com/#/diagnosis", "NXH2"),
    p("無料相談: https://sasa-eru.com/#/contact", "NXH2"),
]
story += [
    PageBreak(),
    p("ご利用にあたって", "NXH1"),
    p("本資料は、一般的な情報提供を目的として作成したものです。個別の法務、税務、会計、労務、金融機関対応については、弁護士、税理士、公認会計士、社会保険労務士、金融機関等の専門家へご確認ください。"),
    p("NexusM&Aは、中小企業の事業承継・M&Aに関する初期相談を無料で承っています。売却を前提にしない段階でも、社長依存、後継者不在、買い手候補との相性、譲渡後の社長の残り方を整理できます。"),
    Spacer(1, 8 * mm),
    note_box("NexusM&A / SASAERU合同会社", "受付メール: y.uematsu@sasa-eru.com<br/>Web: https://sasa-eru.com/<br/>対象地域: 全国<br/>対象業種: 全業種"),
]

doc = SimpleDocTemplate(str(PDF_PATH), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=28 * mm, bottomMargin=18 * mm)
doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(PDF_PATH)
