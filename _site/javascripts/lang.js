

$(function() {

  var t = {
    "Home": {
      en: "Home",
      arabic: "منمنزل",
      chinesesimplified: "家",
      chinesetradtional: "家",
      french: "maison",
      german: "Zuhause",
      japanese: "自宅",
      korean: "홈",
      portuguese: "casa",
      spanish: "casa"
    },
    "About SelectUSA": {
      en: "About SelectUSA",
      arabic: "حول SelectUSA",
      chinesesimplified: "关于选择美国",
      chinesetradtional: "關於選擇美國",
      french: "À propos SelectUSA",
      german: "Über SelectUSA",
      japanese: "SelectUSAについて",
      korean: "SelectUSA 소개",
      portuguese: "Sobre SelectUSA",
      spanish: "Acerca SelectUSA"
    },
	"Reading Room": {
      en: "Reading Room",
      arabic: "حجرة القراءة",
      chinesesimplified: "阅览室",
      chinesetradtional: "閱覽室",
      french: "Salle de lecture",
      german: "Leseraum",
      japanese: "閲覧室",
      korean: "열람실",
      portuguese: "Sala De Leitura",
      spanish: "Sala De Lectura"
	 },
	"SelectUSA Leadership": {
      en: "SelectUSA Leadership",
      arabic: "SelectUSA القيادة",
      chinesesimplified: "选择美国领导力",
      chinesetradtional: "選擇美國領導力",
      french: "SelectUSA leadership",
      german: "SelectUSA Führung",
      japanese: "SelectUSAリーダーシップ",
      korean: "SelectUSA 리더십",
      portuguese: "SelectUSA Leadership",
      spanish: "SelectUSA Liderazgo"
	 },
	"Career Opportunities": {
      en: "Career Opportunities",
      arabic: "فرص عمل",
      chinesesimplified: "就业机会",
      chinesetradtional: "就業機會",
      french: "Opportunités De Carrière",
      german: "Berufschancen",
      japanese: "求人情報",
      korean: "채용 정보",
      portuguese: "Oportunidades De Carreira",
      spanish: "Oportunidades Profesionales"
	 },
	"Why Select USA?": {
      en: "Why Select USA?",
      arabic: "لماذا حدد USA؟",
      chinesesimplified: "为什么选择美国？",
      chinesetradtional: "為什麼選擇美國？",
      french: "Pourquoi Select USA?",
      german: "USA Warum wählen?",
      japanese: "なぜセレクトUSA？",
      korean: "왜 선택 USA?",
      portuguese: "Por Select EUA?",
      spanish: "¿Por qué Elegir EE.UU.?"
	 },
	"Federal Incentives": {
      en: "Federal Incentives",
      arabic: "الحوافز الاتحادية",
      chinesesimplified: "联邦激励",
      chinesetradtional: "聯邦激勵",
      french: "incitatifs fédéraux",
      german: "Bundes Incentives",
      japanese: "連邦インセンティブ",
      korean: "연방 인센티브",
      portuguese: "Incentivos federais",
      spanish: "Incentivos federales"
 	},
	"State Incentives": {
      en: "State Incentives",
      arabic: "الحوافز الدولة",
      chinesesimplified: "国家的鼓励政策",
      chinesetradtional: "國家的鼓勵政策",
      french: "Incitations publiques",
      german: "staatliche Anreize",
      japanese: "国家インセンティブ",
      korean: "주 인센티브",
      portuguese: "Incentivos estaduais",
      spanish: "Incentivos Estatales"
	 },
	"Testimonials": {
      en: "Testimonials",
      arabic: "الشهادات",
      chinesesimplified: "褒奖",
      chinesetradtional: "褒獎",
      french: "Témoignages",
      german: "Kundenreferenzen",
      japanese: "お客様の声",
      korean: "고객의 소리",
      portuguese: "Depoimentos",
      spanish: "Testimonios"
 	},
	"Services": {
      en: "Services",
      arabic: "الخدمات",
      chinesesimplified: "服务",
      chinesetradtional: "服務",
      french: "services",
      german: "Dienstleistungen",
      japanese: "サービス",
      korean: "서비스",
      portuguese: "serviços",
      spanish: "servicios"
 	},
	"Business Solutions for Investors": {
      en: "Business Solutions for Investors",
      arabic: "حلول الأعمال للمستثمرين",
      chinesesimplified: "业务解决方案投资者",
      chinesetradtional: "業務解決方案投資者",
      french: "Solutions d'affaires pour les investisseurs",
      german: "Business Solutions für Investoren",
      japanese: "投資家のためのビジネスソリューション",
      korean: "투자자를위한 비즈니스 솔루션",
      portuguese: "Soluções de Negócios para Investidores",
      spanish: "Soluciones empresariales para inversores"
 	},
	"Ombudsman": {
      en: "Ombudsman",
      arabic: "أمين المظالم",
      chinesesimplified: "监察员",
      chinesetradtional: "監察員",
      french: "Médiateur",
      german: "Ombudsmann",
      japanese: "オンブズマン",
      korean: "옴부즈맨",
      portuguese: "Provedor de Justiça",
      spanish: "Defensor del Pueblo"
	 },
	"Advocacy": {
      en: "Advocacy",
      arabic: "تأييد",
      chinesesimplified: "拥护",
      chinesetradtional: "擁護",
      french: "plaidoyer",
      german: "Eintreten",
      japanese: "擁護",
      korean: "옹호",
      portuguese: "advocacia",
      spanish: "defensa"
	 },
	"Single Location Promotion": {
      en: "Single Location Promotion",
      arabic: "واحد المكان ترويج",
      chinesesimplified: "单位置促销",
      chinesetradtional: "單位置促銷",
      french: "Emplacement unique Promotion",
      german: "Einzelstandortförderung",
      japanese: "単一の場所の昇進",
      korean: "단일 위치 추진",
      portuguese: "Promoção Localização Individual",
      spanish: "Ubicación Promoción Individual"
	 },
	"Facilitated Investment Mission": {
      en: "Facilitated Investment Mission",
      arabic: "بعثة الاستثمار الميسر",
      chinesesimplified: "易化投资的使命",
      chinesetradtional: "易化投資的使命",
      french: "Mission facilité d'investissement",
      german: "Erleichterten Investitions Mission",
      japanese: "ファシリテ投資ミッション",
      korean: "투자의 촉진 미션",
      portuguese: "Missão Investimento Facilitado",
      spanish: "Facilitada Misión de Inversión"
	 },
	"Economic Development Organization Counseling": {
      en: "Economic Development Organization Counseling",
      arabic: "منظمة التنمية الاقتصادية الإرشاد",
      chinesesimplified: "经济发展组织辅导",
      chinesetradtional: "經濟發展組織輔導",
      french: "Organisme de développement économique Counseling",
      german: "Wirtschaftliche Entwicklung Organigramm Counseling",
      japanese: "経済開発機構のカウンセリング",
      korean: "경제 개발기구 상담",
      portuguese: "Organização de Desenvolvimento Econômico Counseling",
      spanish: "Consejería Organización de Desarrollo Económico"
	 },
	"Industries": {
      en: "Industries",
      arabic: "الصناعات",
      chinesesimplified: "行业",
      chinesetradtional: "行業",
      french: "industries",
      german: "Branchen",
      japanese: "インダストリーズ",
      korean: "산업",
      portuguese: "Indústrias",
      spanish: "Industrias"
 	},
	"Resources": {
      en: "Resources",
      arabic: "موارد",
      chinesesimplified: "资源",
      chinesetradtional: "資源",
      french: "ressources",
      german: "Ressourcen",
      japanese: "リソース",
      korean: "자원",
      portuguese: "recursos",
      spanish: "recursos"
	},
		"Reports": {
      en: "Reports",
      arabic: "تقارير",
      chinesesimplified: "报告",
      chinesetradtional: "報告",
      french: "rapports",
      german: "Berichte",
      japanese: "レポート",
      korean: "보고서",
      portuguese: "relatórios",
      spanish: "Informes"
	},
	"News": {
      en: "News",
      arabic: "أخبار",
      chinesesimplified: "新闻",
      chinesetradtional: "新聞",
      french: "nouvelles",
      german: "Nachrichten",
      japanese: "ニュース",
      korean: "뉴스",
      portuguese: "notícia",
      spanish: "noticias"
	},
	"2015 Summit": {
      en: "2015 Summit",
      arabic: "قمة 2015",
      chinesesimplified: "2015峰会",
      chinesetradtional: "2015峰會",
      french: "2015 Sommet",
      german: "2015 Summit",
      japanese: "2015年サミット",
      korean: "2015 정상 회담",
      portuguese: "2015 Summit",
      spanish: "2015 Cumbre"
	},
	"Events": {
      en: "Events",
      arabic: "أحداث",
      chinesesimplified: "事件",
      chinesetradtional: "事件",
      french: "événements",
      german: "Geschehen",
      japanese: "イベント",
      korean: "이벤트",
      portuguese: "Eventos",
      spanish: "Eventos"
	},
	"Upcoming": {
      en: "Upcoming",
      arabic: "القادمة",
      chinesesimplified: "即将到来",
      chinesetradtional: "即將到來",
      french: "prochain",
      german: "Bevorstehende",
      japanese: "来たる",
      korean: "다가오는",
      portuguese: "Próximas",
      spanish: "próximas"
	},
	"Past": {
      en: "Past",
      arabic: "الماضي",
      chinesesimplified: "过去",
      chinesetradtional: "過去",
      french: "passé",
      german: "Vergangenheit",
      japanese: "過去",
      korean: "지난",
      portuguese: "passado",
      spanish: "pasado"
 	},
 	"FREQUENTLY ASKED QUESTIONS": {
      en: "FREQUENTLY ASKED QUESTIONS",
      arabic: "أسئلة مكررة",
      chinesesimplified: "常问问题",
      chinesetradtional: "常問問題",
      french: "questions fréquemment posées",
      german: "häufig gestellte fragen",
      japanese: "よくある質問",
      korean: "자주 묻는 질문",
      portuguese: "perguntas frequentes",
      spanish: "preguntas frecuentes"
 	},
  	"CONTACT US": {
      en: "CONTACT US",
      arabic: "اتصل بنا",
      chinesesimplified: "联系我们",
      chinesetradtional: "聯繫我們",
      french: "contactez nous",
      german: "kontaktieren sie uns",
      japanese: "お問い合わせ",
      korean: "문의",
      portuguese: "entre em contato conosco",
      spanish: "contáctenos"
 	},
  	"SIGN UP": {
      en: "SIGN UP",
      arabic: "سجل",
      chinesesimplified: "报名",
      chinesetradtional: "報名",
      french: "signer",
      german: "anmelden",
      japanese: "サインアップ",
      korean: "가입",
      portuguese: "inscrever-se",
      spanish: "contratar"
 	},
  	"TWITTER": {
      en: "TWITTER",
      arabic: "تغريد",
      chinesesimplified: "叽叽喳喳",
      chinesetradtional: "嘰嘰喳喳",
      french: "gazouillement",
      german: "zwitschern",
      japanese: "さえずり",
      korean: "지저귐",
      portuguese: "chilro",
      spanish: "gorjeo"
 	},
  	"English": {
      en: "English",
      arabic: "الإنجليزية",
      chinesesimplified: "英语",
      chinesetradtional: "英語",
      french: "anglais",
      german: "Englisch",
      japanese: "英語",
      korean: "영어",
      portuguese: "Inglês",
      spanish: "Inglés"
 	},
  	"Arabic": {
      en: "Arabic",
      arabic: "العربية",
      chinesesimplified: "阿拉伯语",
      chinesetradtional: "阿拉伯語",
      french: "arabe",
      german: "Arabisch",
      japanese: "アラビア語",
      korean: "아라비아 말",
      portuguese: "árabe",
      spanish: "árabe"
 	},
  	"Chinese (Simplified)": {
      en: "Chinese (Simplified)",
      arabic: "الصينية المبسطة",
      chinesesimplified: "中国简化",
      chinesetradtional: "中國簡化",
      french: "chinois simplifié",
      german: "chinesisch vereinfacht",
      japanese: "簡体字中国語",
      korean: "중국어 간체",
      portuguese: "chinês simplificado",
      spanish: "chino simplificado"
 	},
  	"Chinese (Traditional)": {
      en: "Chinese (Traditional)",
      arabic: "الصينية التقليدية",
      chinesesimplified: "中国传统",
      chinesetradtional: "中國傳統",
      french: "chinois traditionnel",
      german: "chinesische tradition",
      japanese: "繁体字中国語",
      korean: "전통적인 중국",
      portuguese: "chinês tradicional",
      spanish: "chino tradicional"
 	},
  	"French": {
      en: "French",
      arabic: "اللغة الفرنسية",
      chinesesimplified: "法国",
      chinesetradtional: "法國",
      french: "français",
      german: "Französisch",
      japanese: "フランス語",
      korean: "프랑스의",
      portuguese: "francês",
      spanish: "francés"
 	},
  	"German": {
      en: "German",
      arabic: "ألماني",
      chinesesimplified: "德国",
      chinesetradtional: "德國",
      french: "allemand",
      german: "Deutsch",
      japanese: "ドイツ語",
      korean: "독일어",
      portuguese: "alemão",
      spanish: "alemán"
 	},
  	"Japanese": {
      en: "Japanese",
      arabic: "اليابانية",
      chinesesimplified: "日本",
      chinesetradtional: "日本",
      french: "japonais",
      german: "japanisch",
      japanese: "日本人",
      korean: "일본의",
      portuguese: "japonês",
      spanish: "japonés"
 	},
  	"Korean": {
      en: "Korean",
      arabic: "كوري",
      chinesesimplified: "朝鲜的",
      chinesetradtional: "朝鮮的",
      french: "coréen",
      german: "Koreanisch",
      japanese: "韓国語",
      korean: "한국의",
      portuguese: "coreano",
      spanish: "coreano"
 	},
  	"Portuguese": {
      en: "Portuguese",
      arabic: "البرتغالية",
      chinesesimplified: "葡萄牙",
      chinesetradtional: "葡萄牙",
      french: "Portugais",
      german: "Portugiesisch",
      japanese: "ポルトガル語",
      korean: "포르투갈어",
      portuguese: "português",
      spanish: "portugués"
 	},
   	"Spanish": {
      en: "Spanish",
      arabic: "الأسبانية",
      chinesesimplified: "西班牙语",
      chinesetradtional: "西班牙語",
      french: "espagnol",
      german: "Spanisch",
      japanese: "スペイン語",
      korean: "스페인어",
      portuguese: "espanhol",
      spanish: "español"
 	},
   	"What is SelectUSA?": {
      en: "What is SelectUSA?",
      arabic: "ما هو SelectUSA؟",
      chinesesimplified: "什么是选择美国？",
      chinesetradtional: "什麼是選擇美國？",
      french: "Quel est SelectUSA?",
      german: "Was ist SelectUSA?",
      japanese: "SelectUSAとは何ですか？",
      korean: "SelectUSA은 무엇입니까?",
      portuguese: "O que é SelectUSA?",
      spanish: "¿Cuál es SelectUSA?"
 	},
    "Upcoming Events": {
      en: "Upcoming Events",
      arabic: "الأحداث القادمة",
      chinesesimplified: "即将举行的活动",
      chinesetradtional: "即將舉行的活動",
      french: "Évènements À Venir",
      german: "kommende Veranstaltungen",
      japanese: "今後のイベント",
      korean: "다가오는 이벤트",
      portuguese: "Próximos Eventos",
      spanish: "Próximos Eventos"
 	},
    "Browse Business Incentives Offered by States and Territories": {
      en: "Browse Business Incentives Offered by States and Territories",
      arabic: "تصفح الحوافز التجارية التي تقدمها الولايات والأراضي",
      chinesesimplified: "浏览企业提供的激励各国及地区",
      chinesetradtional: "瀏覽企業提供的激勵各國及地區",
      french: "Parcourir incitations commerciales offertes par les États et Territoires",
      german: "Stöbern Business Incentives Angeboten von Staaten und Territorien",
      japanese: "米国＆準州が提供するビジネスインセンティブを見る",
      korean: "국가 및 영토에 의해 제공 사업 인센티브 검색",
      portuguese: "Navegue Incentivos de negócios oferecidas por Estados e Territórios",
      spanish: "Explorar Incentivos del negocio ofrecidos por los Estados y Territorios"
 	},
     "SelectUSA seeks to highlight the many advantages the United States offers as a location for business and investment.": {
      en: "SelectUSA seeks to highlight the many advantages the United States offers as a location for business and investment.",
      arabic: "تسعى SelectUSA لتسليط الضوء على العديد من المزايا تقدم الولايات المتحدة كموقع للأعمال التجارية والاستثمار.",
      chinesesimplified: "选择美国力求突出许多优点美国提供的业务和投资的地点。",
      chinesetradtional: "選擇美國力求突出許多優點美國提供的業務和投資的地點。",
      french: "SelectUSA cherche à mettre en évidence les nombreux avantages aux États-Unis offre comme un lieu d'affaires et de l'investissement.",
      german: "SelectUSA versucht, die vielen Vorteile der Vereinigten Staaten bietet als Standort für Unternehmen und Investitionen zu markieren.",
      japanese: "SelectUSAは、米国がビジネスや投資のための場所として提供しています多くの利点を強調しようとしています。",
      korean: "SelectUSA는 미국 사업 및 투자의 위치로 제공하는 많은 장점을 강조하고자한다.",
      portuguese: "SelectUSA procura destacar as muitas vantagens dos Estados Unidos oferece como um local para negócios e investimentos.",
      spanish: "SelectUSA pretende dar a conocer las múltiples ventajas que ofrece Estados Unidos como un lugar para los negocios y la inversión."
 	},
      "From a vast domestic market, to a transparent legal system, to the most innovative companies in the world, America is the place for business.": {
      en: "From a vast domestic market, to a transparent legal system, to the most innovative companies in the world, America is the place for business.",
      arabic: "من السوق المحلية واسعة، إلى نظام قانوني شفاف، إلى الشركات الأكثر ابتكارا في العالم، وأمريكا هي مكان للأعمال التجارية.",
      chinesesimplified: "从广阔的国内市场，以透明的法律体系，以最创新的公司在世界上，美国是商业的地方。",
      chinesetradtional: "從廣闊的國內市場，以透明的法律體系，以最創新的公司在世界上，美國是商業的地方。",
      french: "D'un vaste marché intérieur, à un système juridique transparent, pour les entreprises les plus innovantes dans le monde, l'Amérique est l'endroit pour les affaires.",
      german: "Aus einer riesigen heimischen Markt, zu einem transparenten Rechtssystems, zu den innovativsten Unternehmen der Welt, Amerika ist der Ort für die Wirtschaft.",
      japanese: "広大な国内市場からは、透明な法制度に、世界で最も革新的な企業に、アメリカは、ビジネスのための場所です。",
      korean: "광대 한 내수 시장에서, 투명한 법률 시스템에, 세계에서 가장 혁신적인 기업으로, 미국은 비즈니스를위한 장소입니다.",
      portuguese: "De um vasto mercado interno, a um sistema jurídico transparente, para as empresas mais inovadoras do mundo, a América é o lugar para os negócios.",
      spanish: "A partir de un vasto mercado interno, a un sistema legal transparente, a las empresas más innovadoras del mundo, Estados Unidos es el lugar para los negocios."
 	},	
       "Each state and territory offers its own unique set of incentives for business investment. Browse the offerings by clicking on the map or state/territory name below.": {
      en: "Each state and territory offers its own unique set of incentives for business investment. Browse the offerings by clicking on the map or state/territory name below.",
      arabic: "كل ولاية وإقليم تقدم مجموعة فريدة من نوعها من الحوافز للاستثمار التجاري. تصفح العروض من خلال النقر على الخريطة أو الدولة اسم / الإقليم أدناه.",
      chinesesimplified: "每个国家和地区拥有自己的一套独特的企业投资奖励。浏览该产品通过点击地图或低于国家/地区名称上。",
      chinesetradtional: "每個國家和地區擁有自己的一套獨特的企業投資獎勵。瀏覽該產品通過點擊地圖或低於國家/地區名稱上。",
      french: "Chaque état et territoire propose son propre ensemble de mesures incitatives pour l'investissement des entreprises. Parcourir les offres en cliquant sur la carte ou un nom d'état / territoire ci-dessous.",
      german: "Jeder Staat und Territorium bietet seinen eigenen einzigartigen Satz von Anreizen für Unternehmensinvestitionen. Durchsuchen Sie das Angebot ab, indem Sie auf der Karte oder Staat / Gebiet Namen unten.",
      japanese: "各状態と領土は事業投資のためのインセンティブの独自のセットを提供します。マップまたは下記の状態/地域名をクリックすることで製品を参照します。",
      korean: "각 주와 테리토리는 기업 투자에 대한 인센티브의 고유 한 세트를 제공합니다. 지도 또는 아래 주 / 준주 이름을 클릭하여 제품을 검색 할 수 있습니다.",
      portuguese: "Cada estado e território oferece seu próprio conjunto de incentivos para o investimento empresarial. Percorrer as ofertas clicando no mapa ou nome de estado / território abaixo.",
      spanish: "Cada estado y territorio ofrece su propio conjunto único de incentivos para la inversión empresarial. Examinar las ofrendas haciendo clic en el mapa o estado nombre / territorio a continuación."
 	},
      "Why Select the USA?": {
      en: "Why Select the USA?",
      arabic: "لماذا حدد USA؟",
      chinesesimplified: "为什么选择美国？",
      chinesetradtional: "為什麼選擇美國？",
      french: "Pourquoi Sélectionnez Etats-Unis?",
      german: "Warum Wählen Sie die USA?",
      japanese: "なぜアメリカを選択します？",
      korean: "왜 미국을 선택?",
      portuguese: "Por Selecione os EUA?",
      spanish: "¿Por qué elegir los EE.UU.?"
 	},
       "Learn why the U.S. is the world’s top location for business and investment.": {
      en: "Learn why the U.S. is the world’s top location for business and investment.",
      arabic: "تعلم لماذا الولايات المتحدة هي موقع في العالم العلوي لرجال الأعمال والاستثمار.",
      chinesesimplified: "了解为什么美国是世界顶尖的位置，为企业和投资。",
      chinesetradtional: "了解為什麼美國是世界頂尖的位置，為企業和投資。",
      french: "Découvrez pourquoi les Etats-Unis haut lieu du monde pour les affaires et les investissements.",
      german: "Erfahren Sie, warum die USA ist der weltweit Top-Standort für Unternehmen und Investitionen.",
      japanese: "米国では、ビジネスや投資の世界のトップの場所である理由を学んでください。",
      korean: "미국 사업 및 투자에 대한 세계 최고의 위치가 왜 알아 봅니다.",
      portuguese: "Saiba por que os EUA é a localização de topo do mundo para negócios e investimentos.",
      spanish: "Conozca por qué los EE.UU. es lugar más importante del mundo para los negocios y la inversión."
 	},
    "SELECTUSA": {
      en: "SELECTUSA",
      arabic: "اختيار الولايات المتحدة الأمريكية",
      chinesesimplified: "选择美国",
      chinesetradtional: "選擇美國",
      french: "SELECTUSA",
      german: "wählen usa",
      japanese: "USAを選択",
      korean: "미국을 선택",
      portuguese: "selecionar EUA",
      spanish: "seleccione EE.UU."
 	},
   "Federal Programs and Incentives for Business": {
      en: "Federal Programs and Incentives for Business",
      arabic: "برامج الاتحادية وحوافز للمؤسسات",
      chinesesimplified: "联邦计划和激励企业",
      chinesetradtional: "聯邦計劃和激勵企業",
      french: "Programmes et mesures incitatives pour les entreprises fédérales",
      german: "Bundesprogramme und Incentives für Unternehmen",
      japanese: "連邦プログラムとビジネスのためのインセンティブ",
      korean: "연방 프로그램 및 비즈니스를위한 인센티브",
      portuguese: "Programas Federais e Incentivos para Empresas",
      spanish: "Programas Federales e Incentivos para el negocio"
 	},
     "Programs and incentives to help your business succeed.": {
      en: "Programs and incentives to help your business succeed.",
      arabic: "برامج وحوافز للمساعدة في عملك تنجح.",
      chinesesimplified: "计划和激励措施，以帮助您的企业获得成功。",
      chinesetradtional: "計劃和激勵措施，以幫助您的企業獲得成功。",
      french: "Programmes et incitatifs pour aider votre entreprise à réussir.",
      german: "Programme und Anreize zu helfen, Ihr Geschäft erfolgreich zu sein.",
      japanese: "プログラムとインセンティブがあなたのビジネスの成功を支援します。",
      korean: "프로그램 및 인센티브가 귀사의 비즈니스 성공에 도움이됩니다.",
      portuguese: "Programas e incentivos para ayudar a su negocio tenga éxito.",
      spanish: "seleccione EE.UU."
 	},
     "FIND OUT MORE": {
      en: "FIND OUT MORE",
      arabic: "معرفة المزيد",
      chinesesimplified: "了解更多",
      chinesetradtional: "了解更多",
      french: "en savoir plus",
      german: "finde mehr heraus",
      japanese: "もっと知る",
      korean: "자세한 내용을 보려면",
      portuguese: "descubra mais",
      spanish: "saber más"
 	},
     "They Chose the USA": {
      en: "They Chose the USA",
      arabic: "اختاروا الولايات المتحدة الأمريكية",
      chinesesimplified: "他们选择了美国",
      chinesetradtional: "他們選擇了美國",
      french: "Ils ont choisi les États-Unis",
      german: "Sie wählten den USA",
      japanese: "彼らは米国を選んだ",
      korean: "그들은 미국을 선택했다",
      portuguese: "Eles escolheram os EUA",
      spanish: "Eligieron el EE.UU."
 	},
     "Learn why business is choosing America to expand and invest": {
      en: "Learn why business is choosing America to expand and invest",
      arabic: "تعلم لماذا الأعمال هو اختيار أمريكا لتوسيع والاستثمار",
      chinesesimplified: "了解为什么企业是选择美国扩大和投资",
      chinesetradtional: "了解為什麼企業是選擇美國擴大和投資",
      french: "Apprenez pourquoi les entreprises est de choisir l'Amérique d'étendre et investir",
      german: "Erfahren Sie, warum Unternehmen ist die Wahl Amerika expandieren und investieren",
      japanese: "ビジネスが拡大し、投資するアメリカを選んでいる理由はこちらをご覧ください",
      korean: "사업 확장 및 투자 미국을 선택하는 이유를 알아보기",
      portuguese: "Saiba por que o negócio está escolhendo America para expandir e investir",
      spanish: "Sepa por qué negocio es la elección de los Estados Unidos para ampliar e invertir"
 	},
    "CHOOSE USA": {
      en: "CHOOSE USA",
      arabic: "اختيار الولايات المتحدة الأمريكية",
      chinesesimplified: "选择美国",
      chinesetradtional: "選擇美國",
      french: "choisir usa",
      german: "wählen usa",
      japanese: "USAを選択",
      korean: "미국을 선택",
      portuguese: "escolher EUA",
      spanish: "elegir EE.UU."
 	}
  };
  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");
  console.log(str);


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    console.log(lang);
    ev.preventDefault();
  });



});



    
    
