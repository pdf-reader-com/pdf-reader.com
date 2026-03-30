import type { RootIndexUiLocale } from '@/lib/i18n/root-index-locale';
import { siteConfig } from '@/config/site';

export type RootIndexMessages = {
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  onlineToolsCta: string;
  onlineToolsHint: string;
  pdfReaderAppTitle: string;
  appIntroP1: string;
  appIntroP2: string;
  appIntroP3: string;
  downloadAndroid: string;
  openSource: string;
  chooseLanguageTitle: string;
  chooseLanguageHint: string;
  continueWithDefault: string;
};

export const rootIndexMessages: Record<RootIndexUiLocale, RootIndexMessages> = {
  en: {
    metaTitle: `${siteConfig.name} - Professional online PDF tools and Android reader`,
    metaDescription: siteConfig.description,
    heroDescription: siteConfig.description,
    onlineToolsCta: 'Open online PDF tools',
    onlineToolsHint:
      'Merge, split, compress, convert, and more — private, in your browser.',
    pdfReaderAppTitle: 'PDF Reader App',
    appIntroP1:
      'PDF Reader is a fast, lightweight and privacy-friendly PDF and document reader for everyday use. Built with Flutter, it runs smoothly across platforms and lets you open and preview PDF, Markdown, DOCX, PPT, XLSX and other common office formats — whether you need a simple viewer, a work reader, or a multi-format study tool.',
    appIntroP2:
      'You stay in control of your files: documents render on your device, so sensitive PDFs and office files are not uploaded to the cloud. The app offers a clean interface to browse files, open with one tap, and switch light/dark themes for comfortable reading. Flutter and built-in localization help keep a consistent experience across languages and platforms.',
    appIntroP3:
      'As a flexible open-source project, pdf_reader suits users and developers who want a capable yet simple reader. Use it daily for manuals, ebooks, slides, spreadsheets, and notes, or as a base for a custom document app. If you want a free, multi-format, offline-friendly reader that is easy to extend, pdf_reader is a solid choice.',
    downloadAndroid: 'Download Android App',
    openSource: 'Open Source',
    chooseLanguageTitle: 'Choose your language',
    chooseLanguageHint:
      'Pick a language to browse this site and use the online PDF tools.',
    continueWithDefault: 'Continue in English →',
  },
  zh: {
    metaTitle: `${siteConfig.name} - 专业在线 PDF 工具与 Android 阅读器`,
    metaDescription:
      '专业在线 PDF 工具与 Android 阅读器 — 免费、注重隐私、在浏览器中完成。在线合并、拆分、压缩、转换与编辑 PDF，无需上传到服务器。',
    heroDescription:
      '专业在线 PDF 工具与 Android 阅读器 — 免费、注重隐私、在浏览器中完成。合并、拆分、压缩、转换与编辑 PDF，无需上传到服务器。',
    onlineToolsCta: '进入在线 PDF 工具',
    onlineToolsHint: '合并、拆分、压缩、转换等 — 在浏览器中本地处理，保护隐私。',
    pdfReaderAppTitle: 'PDF Reader 应用',
    appIntroP1:
      'PDF Reader 是一款快速、轻量且注重隐私的日常 PDF 与文档阅读器。基于 Flutter，可流畅运行于多平台，支持打开与预览 PDF、Markdown、DOCX、PPT、XLSX 等常见办公格式，无论是简单阅览、办公阅读还是学习用途都很合适。',
    appIntroP2:
      '文件由您掌控：文档在本地渲染，敏感 PDF 与办公文件无需上传到云端。界面简洁，便于浏览文件、一键打开，并可在浅色/深色主题间切换。借助 Flutter 与内置本地化，可在多语言与多平台上保持一致的阅读体验。',
    appIntroP3:
      '作为灵活的开源项目，pdf_reader 适合需要简单却功能完整的阅读器的用户与开发者。可用于日常阅读手册、电子书、幻灯片、表格与笔记，也可作为定制文档应用的基础。若您需要免费、多格式、可离线使用且易于扩展的阅读器，pdf_reader 是值得考虑的选择。',
    downloadAndroid: '下载 Android 应用',
    openSource: '开源仓库',
    chooseLanguageTitle: '选择您的语言',
    chooseLanguageHint: '选择语言以浏览本站并使用在线 PDF 工具。',
    continueWithDefault: '使用英语继续 →',
  },
  'zh-TW': {
    metaTitle: `${siteConfig.name} - 專業線上 PDF 工具與 Android 閱讀器`,
    metaDescription:
      '專業線上 PDF 工具與 Android 閱讀器 — 免費、重視隱私、在瀏覽器中完成。線上合併、分割、壓縮、轉換與編輯 PDF，無需上傳至伺服器。',
    heroDescription:
      '專業線上 PDF 工具與 Android 閱讀器 — 免費、重視隱私、在瀏覽器中完成。合併、分割、壓縮、轉換與編輯 PDF，無需上傳至伺服器。',
    onlineToolsCta: '前往線上 PDF 工具',
    onlineToolsHint: '合併、分割、壓縮、轉換等 — 在瀏覽器中處理，更注重隱私。',
    pdfReaderAppTitle: 'PDF Reader 應用程式',
    appIntroP1:
      'PDF Reader 是快速、輕量且注重隱私的日常 PDF 與文件閱讀器。以 Flutter 打造，可流暢運行於多平台，支援開啟與預覽 PDF、Markdown、DOCX、PPT、XLSX 等常見辦公格式，無論簡單瀏覽、工作閱讀或學習用途皆適用。',
    appIntroP2:
      '檔案由您掌握：文件在裝置本機呈現，機密 PDF 與辦公檔案不必上傳雲端。介面簡潔，易於瀏覽檔案、一鍵開啟，並可切換淺色／深色主題。透過 Flutter 與內建在地化，可在多語言與多平台上維持一致體驗。',
    appIntroP3:
      '作為彈性的開源專案，pdf_reader 適合需要簡潔卻功能完整的閱讀器的使用者與開發者。可用於日常閱讀手冊、電子書、簡報、試算表與筆記，亦可作為自訂文件應用的基礎。若您需要免費、多格式、可離線使用且易於擴展的閱讀器，pdf_reader 是值得考慮的選擇。',
    downloadAndroid: '下載 Android 應用程式',
    openSource: '開源專案',
    chooseLanguageTitle: '選擇您的語言',
    chooseLanguageHint: '選擇語言以瀏覽本站並使用線上 PDF 工具。',
    continueWithDefault: '使用英文繼續 →',
  },
  ja: {
    metaTitle: `${siteConfig.name} - プロのオンラインPDFツールとAndroidリーダー`,
    metaDescription:
      '無料でプライバシー重視。ブラウザ上でPDFの結合・分割・圧縮・変換・編集。サーバーへのアップロード不要。Androidリーダーアプリも提供。',
    heroDescription:
      '無料でプライバシー重視。ブラウザ上でPDFの結合・分割・圧縮・変換・編集。サーバーへのアップロード不要。Android向けリーダーも利用可能。',
    onlineToolsCta: 'オンラインPDFツールを開く',
    onlineToolsHint:
      '結合・分割・圧縮・変換など — ブラウザ内で処理し、プライバシーを守ります。',
    pdfReaderAppTitle: 'PDF Reader アプリ',
    appIntroP1:
      'PDF Reader は、日常使いに適した高速で軽量、プライバシーに配慮したPDF／ドキュメントリーダーです。Flutter製でマルチプラットフォームで快適に動作し、PDF、Markdown、DOCX、PPT、XLSX など一般的なオフィス形式の閲覧・プレビューができます。',
    appIntroP2:
      'ファイルは自分のデバイス上で描画されるため、機密PDFやオフィス文書をクラウドに送らずに読めます。すっきりしたUIでファイルの閲覧やワンタップで開く操作、ライト／ダークテーマの切り替えが可能です。',
    appIntroP3:
      '柔軟なオープンソースプロジェクトとして、シンプルかつ高機能なリーダーを求めるユーザーと開発者に適しています。マニュアル、eBook、スライド、表計算、メモの日常利用や、独自ドキュメントアプリの土台にもなります。',
    downloadAndroid: 'Androidアプリを入手',
    openSource: 'オープンソース',
    chooseLanguageTitle: '言語を選択',
    chooseLanguageHint:
      '言語を選ぶと、このサイトを閲覧しオンラインPDFツールを利用できます。',
    continueWithDefault: '英語で続ける →',
  },
  ko: {
    metaTitle: `${siteConfig.name} - 전문 온라인 PDF 도구 및 Android 리더`,
    metaDescription:
      '무료이며 개인 정보를 중시합니다. 브라우저에서 PDF 병합·분할·압축·변환·편집. 서버 업로드 없이 처리. Android 리더 앱 제공.',
    heroDescription:
      '무료이며 개인 정보를 중시합니다. 브라우저에서 PDF 병합·분할·압축·변환·편집. 서버에 올리지 않고 처리합니다. Android 리더도 이용할 수 있습니다.',
    onlineToolsCta: '온라인 PDF 도구 열기',
    onlineToolsHint:
      '병합·분할·압축·변환 등 — 브라우저에서 처리하여 개인 정보를 보호합니다.',
    pdfReaderAppTitle: 'PDF Reader 앱',
    appIntroP1:
      'PDF Reader는 빠르고 가보며 일상에 적합한 프라이버시 친화적 PDF·문서 뷰어입니다. Flutter로 제작되어 여러 플랫폼에서 부드럽게 동작하며 PDF, Markdown, DOCX, PPT, XLSX 등 일반적인 오피스 형식을 열고 미리볼 수 있습니다.',
    appIntroP2:
      '문서는 기기에서 렌더링되어 민감한 PDF와 오피스 파일을 클라우드에 올리지 않고 읽을 수 있습니다. 깔끔한 인터페이스로 파일 탐색과 한 번에 열기, 라이트/다크 테마 전환이 가능합니다.',
    appIntroP3:
      '유연한 오픈 소스 프로젝트로, 단순하면서도 강력한 리더를 원하는 사용자와 개발자에게 적합합니다. 매뉴얼, 전자책, 슬라이드, 스프레드시트, 메모 등 일상 용도나 맞춤 문서 앱의 기반으로 활용할 수 있습니다.',
    downloadAndroid: 'Android 앱 다운로드',
    openSource: '오픈 소스',
    chooseLanguageTitle: '언어 선택',
    chooseLanguageHint:
      '언어를 고르면 이 사이트를 둘러보고 온라인 PDF 도구를 사용할 수 있습니다.',
    continueWithDefault: '영어로 계속 →',
  },
  es: {
    metaTitle: `${siteConfig.name} - Herramientas PDF online y lector Android`,
    metaDescription:
      'Herramientas PDF profesionales online y lector Android: gratis, privadas y en el navegador. Fusiona, divide, comprime, convierte y edita sin subir archivos a servidores.',
    heroDescription:
      'Herramientas PDF online y lector Android: gratis, privadas y en el navegador. Fusiona, divide, comprime, convierte y edita sin subir a servidores.',
    onlineToolsCta: 'Abrir herramientas PDF online',
    onlineToolsHint:
      'Fusionar, dividir, comprimir, convertir y más — en tu navegador, con privacidad.',
    pdfReaderAppTitle: 'Aplicación PDF Reader',
    appIntroP1:
      'PDF Reader es un lector de PDF y documentos rápido, ligero y respetuoso con la privacidad. Hecho con Flutter, funciona bien en varias plataformas y permite abrir y previsualizar PDF, Markdown, DOCX, PPT, XLSX y otros formatos habituales.',
    appIntroP2:
      'Tus archivos permanecen bajo tu control: el renderizado es local, sin subir documentos sensibles a la nube. La interfaz clara facilita explorar archivos, abrir con un toque y alternar temas claro/oscuro.',
    appIntroP3:
      'Como proyecto de código abierto flexible, encaja en quienes buscan un lector potente pero sencillo. Úsalo a diario para manuales, ebooks, diapositivas, hojas de cálculo y notas, o como base para una app propia.',
    downloadAndroid: 'Descargar app Android',
    openSource: 'Código abierto',
    chooseLanguageTitle: 'Elige tu idioma',
    chooseLanguageHint:
      'Selecciona un idioma para navegar el sitio y usar las herramientas PDF online.',
    continueWithDefault: 'Continuar en inglés →',
  },
  fr: {
    metaTitle: `${siteConfig.name} - Outils PDF en ligne et lecteur Android`,
    metaDescription:
      'Outils PDF professionnels en ligne et lecteur Android — gratuits, axés sur la confidentialité, dans le navigateur. Fusionner, diviser, compresser, convertir et modifier sans envoyer vos fichiers sur des serveurs.',
    heroDescription:
      'Outils PDF en ligne et lecteur Android — gratuits et confidentiels, dans le navigateur. Fusionner, diviser, compresser, convertir et modifier sans envoi vers des serveurs.',
    onlineToolsCta: 'Ouvrir les outils PDF en ligne',
    onlineToolsHint:
      'Fusion, division, compression, conversion et plus — dans le navigateur, en privé.',
    pdfReaderAppTitle: 'Application PDF Reader',
    appIntroP1:
      'PDF Reader est un lecteur PDF et documents rapide, léger et respectueux de la vie privée. Conçu avec Flutter, il fonctionne bien sur plusieurs plateformes et permet d’ouvrir et prévisualiser PDF, Markdown, DOCX, PPT, XLSX et d’autres formats courants.',
    appIntroP2:
      'Vous gardez le contrôle : le rendu est local sur l’appareil, sans envoyer des fichiers sensibles au cloud. Une interface épurée facilite la navigation, l’ouverture en un geste et le thème clair/sombre.',
    appIntroP3:
      'Projet open source flexible, il convient aux utilisateurs et développeurs qui veulent un lecteur simple mais complet. Idéal au quotidien pour manuels, ebooks, diapositives, tableurs et notes, ou comme base d’une app sur mesure.',
    downloadAndroid: 'Télécharger l’app Android',
    openSource: 'Open source',
    chooseLanguageTitle: 'Choisissez votre langue',
    chooseLanguageHint:
      'Choisissez une langue pour parcourir le site et utiliser les outils PDF en ligne.',
    continueWithDefault: 'Continuer en anglais →',
  },
  de: {
    metaTitle: `${siteConfig.name} - Professionelle Online-PDF-Tools und Android-Reader`,
    metaDescription:
      'Kostenlose, datenschutzfreundliche Online-PDF-Tools und Android-Reader im Browser. PDFs zusammenführen, teilen, komprimieren, konvertieren und bearbeiten — ohne Upload auf Server.',
    heroDescription:
      'Kostenlose Online-PDF-Tools und Android-Reader im Browser. PDFs zusammenführen, teilen, komprimieren, konvertieren und bearbeiten — ohne Upload auf Server.',
    onlineToolsCta: 'Online-PDF-Tools öffnen',
    onlineToolsHint:
      'Zusammenführen, Teilen, Komprimieren, Konvertieren u. v. m. — privat im Browser.',
    pdfReaderAppTitle: 'PDF Reader App',
    appIntroP1:
      'PDF Reader ist ein schneller, leichter und datenschutzfreundlicher PDF- und Dokumentenleser für den Alltag. Mit Flutter gebaut, läuft er plattformübergreifend flüssig und öffnet PDF, Markdown, DOCX, PPT, XLSX und gängige Office-Formate.',
    appIntroP2:
      'Ihre Dateien bleiben unter Ihrer Kontrolle: Dokumente werden lokal gerendert — keine sensiblen Uploads in die Cloud. Eine klare Oberfläche erleichtert Durchsuchen, Öffnen mit einem Tippen und Hell-/Dunkelmodus.',
    appIntroP3:
      'Als flexibles Open-Source-Projekt eignet sich pdf_reader für Nutzer und Entwickler, die einen schlanken, aber leistungsfähigen Leser suchen — täglich für Handbücher, E-Books, Folien, Tabellen und Notizen oder als Basis für eigene Apps.',
    downloadAndroid: 'Android-App herunterladen',
    openSource: 'Open Source',
    chooseLanguageTitle: 'Sprache wählen',
    chooseLanguageHint:
      'Wählen Sie eine Sprache, um die Website zu nutzen und die Online-PDF-Tools zu öffnen.',
    continueWithDefault: 'Weiter auf Englisch →',
  },
  pt: {
    metaTitle: `${siteConfig.name} - Ferramentas PDF online e leitor Android`,
    metaDescription:
      'Ferramentas PDF profissionais online e leitor Android — gratuitas, focadas em privacidade, no navegador. Unir, dividir, comprimir, converter e editar sem enviar arquivos a servidores.',
    heroDescription:
      'Ferramentas PDF online e leitor Android — gratuitas e privadas, no navegador. Unir, dividir, comprimir, converter e editar sem upload para servidores.',
    onlineToolsCta: 'Abrir ferramentas PDF online',
    onlineToolsHint:
      'Unir, dividir, comprimir, converter e mais — no navegador, com privacidade.',
    pdfReaderAppTitle: 'Aplicativo PDF Reader',
    appIntroP1:
      'O PDF Reader é um leitor de PDF e documentos rápido, leve e focado em privacidade. Feito com Flutter, funciona bem em várias plataformas e permite abrir e pré-visualizar PDF, Markdown, DOCX, PPT, XLSX e outros formatos comuns.',
    appIntroP2:
      'Você mantém o controle: a renderização é local, sem enviar arquivos sensíveis à nuvem. Interface limpa para navegar, abrir com um toque e alternar temas claro/escuro.',
    appIntroP3:
      'Como projeto open source flexível, atende quem busca um leitor simples e poderoso. Use no dia a dia para manuais, ebooks, slides, planilhas e notas, ou como base para um app próprio.',
    downloadAndroid: 'Baixar app Android',
    openSource: 'Código aberto',
    chooseLanguageTitle: 'Escolha seu idioma',
    chooseLanguageHint:
      'Selecione um idioma para navegar no site e usar as ferramentas PDF online.',
    continueWithDefault: 'Continuar em inglês →',
  },
  ar: {
    metaTitle: `${siteConfig.name} - أدوات PDF احترافية عبر الإنترنت وقارئ أندرويد`,
    metaDescription:
      'أدوات PDF مجانية عبر المتصفح مع احترام الخصوصية، وقارئ أندرويد. دمج وتقسيم وضغط وتحويل وتحرير PDF دون رفع الملفات إلى خوادم.',
    heroDescription:
      'أدوات PDF عبر الإنترنت وقارئ أندرويد — مجانية وتراعي الخصوصية في المتصفح. دمج وتقسيم وضغط وتحويل وتحرير دون رفع إلى خوادم.',
    onlineToolsCta: 'فتح أدوات PDF عبر الإنترنت',
    onlineToolsHint:
      'دمج وتقسيم وضغط وتحويل وغير ذلك — داخل المتصفح مع حماية أفضل للخصوصية.',
    pdfReaderAppTitle: 'تطبيق PDF Reader',
    appIntroP1:
      'PDF Reader قارئ PDF ومستندات سريع وخفيف ويحترم الخصوصية للاستخدام اليومي. مبني بـ Flutter ويعمل بسلاسة على عدة منصات ويدعم فتح ومعاينة PDF وMarkdown وDOCX وPPT وXLSX وصيغ مكتبية شائعة.',
    appIntroP2:
      'تبقى الملفات تحت سيطرتك: العرض محلي على الجهاز دون رفع مستندات حساسة إلى السحابة. واجهة بسيطة لتصفح الملفات والفتح بلمسة واحدة والتبديل بين الوضع الفاتح والداكن.',
    appIntroP3:
      'كمشروع مفتوح المصدر مرن، يناسب المستخدمين والمطورين الذين يريدون قارئًا بسيطًا وقويًا. استخدمه يوميًا للكتيبات والكتب الإلكترونية والعروض والجداول والملاحظات، أو كأساس لتطبيق مستندات مخصص.',
    downloadAndroid: 'تنزيل تطبيق أندرويد',
    openSource: 'مصدر مفتوح',
    chooseLanguageTitle: 'اختر لغتك',
    chooseLanguageHint:
      'اختر لغة لتصفح الموقع واستخدام أدوات PDF عبر الإنترنت.',
    continueWithDefault: 'المتابعة بالإنجليزية →',
  },
};
