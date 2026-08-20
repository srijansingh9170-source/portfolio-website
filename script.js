'use strict';

var CFG = {
  lc: 'srijansingh23',
  gh: 'srijansingh9170-source',
  li: 'https://www.linkedin.com/in/srijan-singh-113173373',
  email: 'srijansingh9170@gmail.com'
};

var TR = {
  en:{
    pg:'Srijan Singh — AI/ML Engineer & CS Student',
    nav_about:'about',nav_skills:'skills',nav_projects:'projects',nav_leetcode:'leetcode',nav_cv:'resume',nav_contact:'contact',
    badge_otw:'Open to work',hero_eyebrow:'B.Tech CSE · AI & ML',
    hero_h:'Building intelligent systems,<br><span class="accent">one commit</span> at a time.',
    typing:['training on AI & ML fundamentals','building open-source tools','solving DSA problems','debugging... everything','crafting this portfolio'],
    btn_projects:'Explore work',btn_cv:'Open resume',btn_ping:"Let's talk",btn_linkedin:'Connect on LinkedIn',
    meta_proj:'projects',meta_tech:'technologies',meta_open:'open to work',
    sec_about:'About',sec_about_tag:'01 — profile',sec_skills:'Skills',sec_skills_tag:'02 — toolkit',
    sec_projects:'Projects',sec_projects_tag:'03 — shipped',sec_github:'GitHub Stats',sec_github_tag:'04 — metrics',
    sec_lc:'LeetCode',sec_lc_tag:'05 — problem solving',sec_cv:'Resume',sec_cv_tag:'06 — credentials',
    sec_contact:'Contact',sec_contact_tag:'07 — reach out',
    cfg_role_k:'role',cfg_role_v:'CSE Student',cfg_focus_k:'focus',cfg_focus_v:'AI & ML',
    cfg_int_k:'interests',cfg_int_v:'Open Source',cfg_status_k:'status',cfg_status_v:'available',
    about_p1:"I'm a Computer Science student specializing in AI & ML. Most of my time goes into building projects, working through algorithmic problems, and figuring out how systems actually behave once you run them.",
    about_p2:"I care about writing code that's easy for the next person to read, and I like contributing to open source because it forces both of those habits.",
    proj1_t:'Python File Organizer',proj1_d:'Automatically sorts files into folders based on file type, so downloads and desktops stay usable.',
    proj2_t:'DSA Practice',proj2_d:'A running collection of solved Data Structures & Algorithms problems, used to sharpen problem-solving speed.',
    proj3_t:'Portfolio Website',proj3_d:'This site — built from scratch with HTML, CSS and JavaScript, no framework in the way.',
    badge_shipped:'shipped',badge_practice:'practice',view_src:'→ View source',
    cv_h:'A quick snapshot',cv_desc:'My resume covers my education, projects, technical skills, and open-source work. Updated and ready to share.',
    cv_note:'Open the current version directly as a PDF.',
    ct_h:"Let's connect",ct_desc:'Open to internships, collaborations, and interesting problems. Drop a message any time.',
    ct_email_l:'email:',ct_gh_l:'github:',
    btn_email:'Email me',btn_copy:'Copy email',btn_copied:'Copied!',btn_github:'Open source',btn_stack:'View stack',
    footer_tag:'designed & built by hand — no template'
  },
  hi:{
    pg:'श्रीजन सिंह — एआई/एमएल इंजीनियर',
    nav_about:'परिचय',nav_skills:'कौशल',nav_projects:'प्रोजेक्ट्स',nav_leetcode:'लीटकोड',nav_cv:'रेज़ुमे',nav_contact:'संपर्क',
    badge_otw:'काम के लिए उपलब्ध',hero_eyebrow:'बी.टेक सीएसई · एआई और एमएल',
    hero_h:'हर कमिट के साथ,<br><span class="accent">बुद्धिमान सिस्टम</span> बना रहा हूँ।',
    typing:['एआई और एमएल सीख रहा हूँ','ओपन-सोर्स टूल्स बना रहा हूँ','DSA हल कर रहा हूँ','...डीबग कर रहा हूँ','यह पोर्टफोलियो बना रहा हूँ'],
    btn_projects:'प्रोजेक्ट देखें',btn_cv:'Resume खोलें',btn_ping:'बात करें',btn_linkedin:'LinkedIn से जुड़ें',
    meta_proj:'प्रोजेक्ट्स',meta_tech:'तकनीकें',meta_open:'काम के लिए उपलब्ध',
    sec_about:'परिचय',sec_about_tag:'०१ — प्रोफ़ाइल',sec_skills:'कौशल',sec_skills_tag:'०२ — टूलकिट',
    sec_projects:'प्रोजेक्ट्स',sec_projects_tag:'०३ — पूर्ण',sec_github:'गिटहब आंकड़े',sec_github_tag:'०४ — मेट्रिक्स',
    sec_lc:'लीटकोड',sec_lc_tag:'०५ — समस्या समाधान',sec_cv:'रेज़ुमे',sec_cv_tag:'०६ — क्रेडेंशियल',
    sec_contact:'संपर्क करें',sec_contact_tag:'०७ — जुड़ें',
    cfg_role_k:'भूमिका',cfg_role_v:'सीएसई छात्र',cfg_focus_k:'फोकस',cfg_focus_v:'एआई और एमएल',
    cfg_int_k:'रुचियाँ',cfg_int_v:'ओपन सोर्स',cfg_status_k:'स्थिति',cfg_status_v:'उपलब्ध',
    about_p1:'मैं कंप्यूटर साइंस का छात्र हूँ और AI/ML में विशेषज्ञता हासिल कर रहा हूँ।',
    about_p2:'मैं ऐसा कोड लिखने में विश्वास रखता हूँ जिसे आसानी से समझा जा सके।',
    proj1_t:'पायथन फ़ाइल ऑर्गनाइज़र',proj1_d:'फ़ाइलों को प्रकार के आधार पर स्वचालित रूप से व्यवस्थित करता है।',
    proj2_t:'DSA अभ्यास',proj2_d:'हल की गई डेटा स्ट्रक्चर्स और एल्गोरिद्म समस्याओं का संग्रह।',
    proj3_t:'पोर्टफोलियो वेबसाइट',proj3_d:'HTML, CSS और JavaScript से बनाई गई, बिना किसी फ्रेमवर्क के।',
    badge_shipped:'पूर्ण',badge_practice:'अभ्यास',view_src:'→ सोर्स देखें',
    cv_h:'मेरा रेज़ुमे',cv_desc:'शिक्षा, प्रोजेक्ट्स और तकनीकी कौशल।',cv_note:'वर्तमान रिज़्यूमे को PDF के रूप में खोलें।',
    ct_h:'जुड़ें',ct_desc:'इंटर्नशिप, सहयोग और दिलचस्प समस्याओं के लिए उपलब्ध हूँ।',
    ct_email_l:'ईमेल:',ct_gh_l:'गिटहब:',
    btn_email:'ईमेल करें',btn_copy:'ईमेल कॉपी करें',btn_copied:'कॉपी हो गया!',btn_github:'ओपन सोर्स',btn_stack:'स्टैक देखें',
    footer_tag:'हाथ से डिज़ाइन — कोई टेम्पलेट नहीं'
  },
  es:{
    pg:'Srijan Singh — Ingeniero de IA/ML',
    nav_about:'acerca',nav_skills:'habilidades',nav_projects:'proyectos',nav_leetcode:'leetcode',nav_cv:'currículum',nav_contact:'contacto',
    badge_otw:'Disponible para trabajar',hero_eyebrow:'Ing. en Sistemas · IA y ML',
    hero_h:'Construyendo sistemas inteligentes,<br><span class="accent">un commit</span> a la vez.',
    typing:['aprendiendo IA y ML','creando tools open source','resolviendo DSA','depurando todo','creando este portafolio'],
    btn_projects:'Ver proyectos',btn_cv:'Abrir CV',btn_ping:'Hablemos',btn_linkedin:'No LinkedIn conectar',
    meta_proj:'proyectos',meta_tech:'tecnologías',meta_open:'disponible',
    sec_about:'Acerca de mí',sec_about_tag:'01 — perfil',sec_skills:'Habilidades',sec_skills_tag:'02 — herramientas',
    sec_projects:'Proyectos',sec_projects_tag:'03 — publicados',sec_github:'GitHub Stats',sec_github_tag:'04 — métricas',
    sec_lc:'LeetCode',sec_lc_tag:'05 — resolución',sec_cv:'Currículum',sec_cv_tag:'06 — credenciales',
    sec_contact:'Contacto',sec_contact_tag:'07 — hablemos',
    cfg_role_k:'rol',cfg_role_v:'Estudiante CS',cfg_focus_k:'enfoque',cfg_focus_v:'IA y ML',
    cfg_int_k:'intereses',cfg_int_v:'Código abierto',cfg_status_k:'estado',cfg_status_v:'disponible',
    about_p1:'Soy estudiante de CS especializado en IA y ML.',about_p2:'Me importa escribir código fácil de leer.',
    proj1_t:'Organizador Python',proj1_d:'Organiza archivos automáticamente según su tipo.',
    proj2_t:'Práctica DSA',proj2_d:'Colección de problemas de estructuras de datos.',
    proj3_t:'Portafolio web',proj3_d:'HTML, CSS y JS, sin framework.',
    badge_shipped:'publicado',badge_practice:'práctica',view_src:'→ Ver código',
    cv_h:'Mi Currículum',cv_desc:'Cubre educación, proyectos y habilidades.',cv_note:'Abre la versión actual como PDF.',
    ct_h:'Conectemos',ct_desc:'Abierto a prácticas y colaboraciones.',ct_email_l:'correo:',ct_gh_l:'github:',
    btn_email:'Enviar correo',btn_copy:'Copiar correo',btn_copied:'¡Copiado!',btn_github:'Código abierto',btn_stack:'Ver stack',
    footer_tag:'diseñado y construido a mano'
  },
  fr:{
    pg:'Srijan Singh — Ingénieur IA/ML',
    nav_about:'à propos',nav_skills:'compétences',nav_projects:'projets',nav_leetcode:'leetcode',nav_cv:'cv',nav_contact:'contact',
    badge_otw:'Disponible',hero_eyebrow:'Licence Info · IA et ML',
    hero_h:'Construire des systèmes intelligents,<br><span class="accent">un commit</span> à la fois.',
    typing:["j'apprends l'IA et le ML",'outils open source','résolution DSA','débogage de tout','création de ce portfolio'],
    btn_projects:'Voir les projets',btn_cv:'Ouvrir le CV',btn_ping:'Échangeons',btn_linkedin:'Se connecter sur LinkedIn',
    meta_proj:'projets',meta_tech:'technologies',meta_open:'disponible',
    sec_about:'À propos',sec_about_tag:'01 — profil',sec_skills:'Compétences',sec_skills_tag:'02 — outils',
    sec_projects:'Projets',sec_projects_tag:'03 — publiés',sec_github:'GitHub Stats',sec_github_tag:'04 — métriques',
    sec_lc:'LeetCode',sec_lc_tag:'05 — résolution',sec_cv:'CV',sec_cv_tag:'06 — crédentiels',
    sec_contact:'Contact',sec_contact_tag:'07 — écrire',
    cfg_role_k:'rôle',cfg_role_v:'Étudiant en info',cfg_focus_k:'axe',cfg_focus_v:'IA et ML',
    cfg_int_k:'intérêts',cfg_int_v:'Open source',cfg_status_k:'statut',cfg_status_v:'disponible',
    about_p1:'Étudiant en CS spécialisé en IA et ML.',about_p2:"Je tiens à écrire du code lisible.",
    proj1_t:'Organisateur Python',proj1_d:'Trie automatiquement les fichiers par type.',
    proj2_t:'Entraînement DSA',proj2_d:'Collection de problèmes de structures et algorithmes.',
    proj3_t:'Site portfolio',proj3_d:'HTML, CSS et JS, sans framework.',
    badge_shipped:'publié',badge_practice:'entraînement',view_src:'→ Voir le code',
    cv_h:'Mon CV',cv_desc:'Éducation, projets et compétences.',cv_note:'Ouvrez la version actuelle en PDF.',
    ct_h:'Me contacter',ct_desc:'Ouvert aux stages et collaborations.',ct_email_l:'e-mail :',ct_gh_l:'github :',
    btn_email:"M'écrire",btn_copy:"Copier l'e-mail",btn_copied:'Copié !',btn_github:'Open source',btn_stack:'Voir le stack',
    footer_tag:'conçu à la main — sans modèle'
  },
  de:{
    pg:'Srijan Singh — KI/ML-Ingenieur',
    nav_about:'über mich',nav_skills:'fähigkeiten',nav_projects:'projekte',nav_leetcode:'leetcode',nav_cv:'lebenslauf',nav_contact:'kontakt',
    badge_otw:'Offen für Aufgaben',hero_eyebrow:'B.Tech Informatik · KI & ML',
    hero_h:'Intelligente Systeme bauen,<br>ein <span class="accent">Commit</span> nach dem anderen.',
    typing:['lerne KI & ML','Open-Source Tools','DSA lösen','debugge alles','baue dieses Portfolio'],
    btn_projects:'Projekte ansehen',btn_cv:'CV ansehen',btn_ping:'Kontakt aufnehmen',btn_linkedin:'Auf LinkedIn verbinden',
    meta_proj:'Projekte',meta_tech:'Technologien',meta_open:'verfügbar',
    sec_about:'Über mich',sec_about_tag:'01 — profil',sec_skills:'Fähigkeiten',sec_skills_tag:'02 — werkzeuge',
    sec_projects:'Projekte',sec_projects_tag:'03 — veröffentlicht',sec_github:'GitHub Stats',sec_github_tag:'04 — kennzahlen',
    sec_lc:'LeetCode',sec_lc_tag:'05 — problemlösung',sec_cv:'Lebenslauf',sec_cv_tag:'06 — dokumente',
    sec_contact:'Kontakt',sec_contact_tag:'07 — schreiben',
    cfg_role_k:'rolle',cfg_role_v:'Informatikstudent',cfg_focus_k:'fokus',cfg_focus_v:'KI & ML',
    cfg_int_k:'interessen',cfg_int_v:'Open Source',cfg_status_k:'status',cfg_status_v:'verfügbar',
    about_p1:'Informatikstudent mit Schwerpunkt KI und ML.',about_p2:'Lesbarer Code und Open-Source-Beiträge sind mir wichtig.',
    proj1_t:'Python-Datei-Organizer',proj1_d:'Sortiert Dateien automatisch nach Typ.',
    proj2_t:'DSA-Übung',proj2_d:'Sammlung gelöster Algorithmen-Aufgaben.',
    proj3_t:'Portfolio-Website',proj3_d:'HTML, CSS und JS, ohne Framework.',
    badge_shipped:'veröffentlicht',badge_practice:'übung',view_src:'→ Quellcode',
    cv_h:'Mein Lebenslauf',cv_desc:'Ausbildung, Projekte und Fähigkeiten.',cv_note:'Die aktuelle Version als PDF öffnen.',
    ct_h:'Kontakt aufnehmen',ct_desc:'Offen für Praktika und Zusammenarbeit.',ct_email_l:'e-mail:',ct_gh_l:'github:',
    btn_email:'E-Mail schreiben',btn_copy:'E-Mail kopieren',btn_copied:'Kopiert!',btn_github:'Open Source',btn_stack:'Stack ansehen',
    footer_tag:'von Hand gebaut — keine Vorlage'
  },
  pt:{
    pg:'Srijan Singh — Engenheiro de IA/ML',
    nav_about:'sobre',nav_skills:'habilidades',nav_projects:'projetos',nav_leetcode:'leetcode',nav_cv:'currículo',nav_contact:'contato',
    badge_otw:'Disponível',hero_eyebrow:'CC · IA e ML',
    hero_h:'Construindo sistemas inteligentes,<br><span class="accent">um commit</span> de cada vez.',
    typing:['aprendendo IA e ML','criando ferramentas open source','resolvendo DSA','depurando tudo','criando este portfólio'],
    btn_projects:'Projetos ansehen',btn_cv:'CV öffnen',btn_ping:'Vamos conversar',btn_linkedin:'No LinkedIn conectar',
    meta_proj:'projetos',meta_tech:'tecnologias',meta_open:'disponível',
    sec_about:'Sobre',sec_about_tag:'01 — perfil',sec_skills:'Habilidades',sec_skills_tag:'02 — ferramentas',
    sec_projects:'Projetos',sec_projects_tag:'03 — publicados',sec_github:'GitHub Stats',sec_github_tag:'04 — métricas',
    sec_lc:'LeetCode',sec_lc_tag:'05 — resolução',sec_cv:'Currículo',sec_cv_tag:'06 — credenciais',
    sec_contact:'Contato',sec_contact_tag:'07 — falar',
    cfg_role_k:'função',cfg_role_v:'Estudante de CC',cfg_focus_k:'foco',cfg_focus_v:'IA e ML',
    cfg_int_k:'interesses',cfg_int_v:'Código aberto',cfg_status_k:'status',cfg_status_v:'disponível',
    about_p1:'Estudante de CC especializado em IA e ML.',about_p2:'Código fácil de ler e contribuição open source.',
    proj1_t:'Organizador Python',proj1_d:'Organiza arquivos por tipo automaticamente.',
    proj2_t:'Prática DSA',proj2_d:'Coleção de problemas de estruturas de dados.',
    proj3_t:'Site portfólio',proj3_d:'HTML, CSS e JS, sem framework.',
    badge_shipped:'publicado',badge_practice:'prática',view_src:'→ Ver código',
    cv_h:'Meu Currículo',cv_desc:'Educação, projetos e habilidades.',cv_note:'Abra a versão atual em PDF.',
    ct_h:'Vamos conversar',ct_desc:'Aberto a estágios e colaborações.',ct_email_l:'e-mail:',ct_gh_l:'github:',
    btn_email:'Enviar e-mail',btn_copy:'Copiar e-mail',btn_copied:'Copiado!',btn_github:'Open source',btn_stack:'Ver stack',
    footer_tag:'feito à mão — sem template'
  },
  ja:{
    pg:'Srijan Singh — AI/MLエンジニア',
    nav_about:'概要',nav_skills:'スキル',nav_projects:'プロジェクト',nav_leetcode:'LeetCode',nav_cv:'履歴書',nav_contact:'連絡先',
    badge_otw:'就業可能',hero_eyebrow:'CS学士課程 · AI & ML',
    hero_h:'ひとつひとつのコミットで、<br><span class="accent">知的なシステム</span>を築く。',
    typing:['AIとMLを学習中','オープンソース開発','DSA問題解決中','デバッグ中','このポートフォリオ作成中'],
    btn_projects:'プロジェクトを見る',btn_cv:'Resumeを見る',btn_ping:'話しましょう',btn_linkedin:'LinkedInでつながる',
    meta_proj:'プロジェクト',meta_tech:'技術',meta_open:'就業可能',
    sec_about:'概要',sec_about_tag:'01 — プロフィール',sec_skills:'スキル',sec_skills_tag:'02 — ツールキット',
    sec_projects:'プロジェクト',sec_projects_tag:'03 — 公開済み',sec_github:'GitHub統計',sec_github_tag:'04 — メトリクス',
    sec_lc:'LeetCode',sec_lc_tag:'05 — 問題解決',sec_cv:'履歴書',sec_cv_tag:'06 — 書類',
    sec_contact:'連絡先',sec_contact_tag:'07 — お問い合わせ',
    cfg_role_k:'役割',cfg_role_v:'CS学生',cfg_focus_k:'専門',cfg_focus_v:'AI & ML',
    cfg_int_k:'興味',cfg_int_v:'オープンソース',cfg_status_k:'状態',cfg_status_v:'対応可能',
    about_p1:'AIとMLを専門とするCS学生です。',about_p2:'読みやすいコードとオープンソース貢献を大切にしています。',
    proj1_t:'ファイル整理ツール',proj1_d:'ファイルを自動整理します。',
    proj2_t:'DSA練習',proj2_d:'アルゴリズム問題コレクション。',
    proj3_t:'ポートフォリオ',proj3_d:'HTML・CSS・JSのみで構築。',
    badge_shipped:'公開済み',badge_practice:'練習',view_src:'→ ソース',
    cv_h:'履歴書',cv_desc:'教育・プロジェクト・スキルを掲載。',cv_note:'現在の履歴書をPDFで開きます。',
    ct_h:'連絡する',ct_desc:'インターンや協力を募集中。',ct_email_l:'メール：',ct_gh_l:'GitHub：',
    btn_email:'メール送信',btn_copy:'メールコピー',btn_copied:'コピー済！',btn_github:'オープンソース',btn_stack:'技術スタック',
    footer_tag:'手作業で設計・制作'
  },
  zh:{
    pg:'Srijan Singh — AI/ML工程师',
    nav_about:'关于',nav_skills:'技能',nav_projects:'项目',nav_leetcode:'力扣',nav_cv:'简历',nav_contact:'联系',
    badge_otw:'招募中',hero_eyebrow:'CS学士 · AI与ML',
    hero_h:'用每一次提交，<br>构建<span class="accent">智能系统</span>。',
    typing:['学习AI与ML','构建开源工具','解决DSA问题','调试一切','构建此作品集'],
    btn_projects:'查看项目',btn_cv:'打开简历',btn_ping:'聊聊吧',btn_linkedin:'在 LinkedIn 连接',
    meta_proj:'项目',meta_tech:'技术',meta_open:'招募中',
    sec_about:'关于我',sec_about_tag:'01 — 简介',sec_skills:'技能',sec_skills_tag:'02 — 工具',
    sec_projects:'项目',sec_projects_tag:'03 — 已完成',sec_github:'GitHub数据',sec_github_tag:'04 — 指标',
    sec_lc:'力扣',sec_lc_tag:'05 — 题解',sec_cv:'简历',sec_cv_tag:'06 — 资质',
    sec_contact:'联系',sec_contact_tag:'07 — 联系我',
    cfg_role_k:'角色',cfg_role_v:'CS学生',cfg_focus_k:'方向',cfg_focus_v:'AI与ML',
    cfg_int_k:'兴趣',cfg_int_v:'开源',cfg_status_k:'状态',cfg_status_v:'可联系',
    about_p1:'专注于AI与ML的CS专业学生。',about_p2:'编写易读代码，贡献开源项目。',
    proj1_t:'Python文件整理',proj1_d:'自动按类型整理文件。',
    proj2_t:'DSA练习',proj2_d:'持续增长的算法题解集合。',
    proj3_t:'作品集网站',proj3_d:'HTML、CSS和JS，无框架。',
    badge_shipped:'已完成',badge_practice:'练习',view_src:'→ 查看源码',
    cv_h:'我的简历',cv_desc:'教育、项目和技能。',cv_note:'打开当前版本的 PDF 简历。',
    ct_h:'联系我',ct_desc:'欢迎实习、合作和有趣项目。',ct_email_l:'邮箱：',ct_gh_l:'GitHub：',
    btn_email:'发邮件',btn_copy:'复制邮箱',btn_copied:'已复制！',btn_github:'GitHub',
    footer_tag:'手工设计——无模板'
  }
};

var DLANG = 'en';
var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* i18n */
function tr(lang, key) {
  var d = TR[lang] || TR[DLANG];
  return d[key] !== undefined ? d[key] : (TR[DLANG][key] || '');
}
function applyLang(lang) {
  if (!TR[lang]) lang = DLANG;
  document.documentElement.setAttribute('lang', lang);
  document.title = tr(lang, 'pg');
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = tr(lang, el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    el.innerHTML = tr(lang, el.getAttribute('data-i18n-html'));
  });
  var s = document.getElementById('langSelect');
  if (s) s.value = lang;
  Typer.setStatuses(tr(lang, 'typing'));
}

/* Typing effect */
var Typer = (function() {
  var el = document.getElementById('typingOut');
  var sts = ['training on AI & ML fundamentals'];
  var si = 0, ci = 0, del = false, tmr = null;
  function tick() {
    if (!el) return;
    var cur = sts[si % sts.length];
    if (!del) {
      ci++; el.textContent = cur.slice(0, ci);
      if (ci >= cur.length) { del = true; tmr = setTimeout(tick, 1600); return; }
    } else {
      ci--; el.textContent = cur.slice(0, Math.max(ci, 0));
      if (ci <= 0) { del = false; si = (si + 1) % sts.length; }
    }
    tmr = setTimeout(tick, del ? 30 : 48);
  }
  function start() {
    if (!el) return;
    if (noMotion) { el.textContent = sts[0]; return; }
    if (tmr) clearTimeout(tmr);
    si = 0; ci = 0; del = false; el.textContent = ''; tick();
  }
  function setStatuses(ns) {
    sts = (ns && ns.length) ? ns : sts; si = 0;
    if (noMotion && el) el.textContent = sts[0];
  }
  return { start: start, setStatuses: setStatuses };
})();

/* Theme */
(function() {
  var btn = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  if (!btn) return;
  function sync() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    if (icon) icon.textContent = dark ? '☀️' : '🌙';
    var img = document.getElementById('lcHeatmap');
    if (img) img.src = 'https://leetcard.jacoblin.cool/' + CFG.lc + '?theme=' + (dark ? 'dark' : 'light') + '&font=JetBrains%20Mono&ext=heatmap&border=0&radius=8';
  }
  sync();
  btn.addEventListener('click', function() {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    sync();
    showToast(next === 'dark' ? '🌙 Dark mode' : '☀️ Light mode', 'info');
  });
})();

/* Language select */
(function() {
  var s = document.getElementById('langSelect');
  if (!s) return;
  s.addEventListener('change', function() { applyLang(s.value); showToast('🌐 Language updated', 'info'); });
})();

/* Hamburger */
(function() {
  var ham = document.getElementById('ham');
  var nl = document.getElementById('navLinks');
  if (!ham || !nl) return;
  ham.addEventListener('click', function() {
    var o = nl.classList.toggle('open');
    ham.classList.toggle('active', o);
    ham.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  nl.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      nl.classList.remove('open'); ham.classList.remove('active'); ham.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* Copy email */
(function() {
  var btn = document.getElementById('copyEmailBtn');
  if (!btn) return;
  function fb(t) {
    var ta = document.createElement('textarea');
    ta.value = t; ta.style.cssText = 'position:fixed;left:-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(ta);
  }
  btn.addEventListener('click', function() {
    var email = btn.getAttribute('data-email') || CFG.email;
    var lang = document.documentElement.getAttribute('lang') || DLANG;
    var sp = btn.querySelector('span'), ic = btn.querySelector('i');
    function done() {
      if (sp) sp.textContent = tr(lang, 'btn_copied');
      if (ic) ic.className = 'fas fa-check';
      btn.classList.add('btn-ok');
      showToast('📋 Email copied!', 'ok');
      setTimeout(function() {
        btn.classList.remove('btn-ok');
        if (sp) sp.textContent = tr(lang, 'btn_copy');
        if (ic) ic.className = 'fas fa-copy';
      }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(email).then(done).catch(function() { fb(email); done(); });
    else { fb(email); done(); }
  });
})();

/* Scroll reveal */
(function() {
  var els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
  if (noMotion || !('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('is-visible'); }); return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el) { obs.observe(el); });
})();

/* Custom cursor */
(function() {
  var c = document.getElementById('cur'), f = document.getElementById('cfl');
  if (!c || !f || window.innerWidth < 768) return;
  var mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    c.style.left = mx + 'px'; c.style.top = my + 'px';
  });
  (function af() {
    fx += (mx - fx) * 0.13; fy += (my - fy) * 0.13;
    f.style.left = fx + 'px'; f.style.top = fy + 'px';
    requestAnimationFrame(af);
  })();
  document.querySelectorAll('a,button,.sk-card,.proj-card,.lc-chip,select').forEach(function(el) {
    el.addEventListener('mouseenter', function() { c.classList.add('exp'); f.classList.add('exp'); });
    el.addEventListener('mouseleave', function() { c.classList.remove('exp'); f.classList.remove('exp'); });
  });
})();

/* Particles */
(function() {
  var cv = document.getElementById('pc'); if (!cv) return;
  var ctx = cv.getContext('2d'), W, H, pts = [];
  function rs() { W = cv.width = innerWidth; H = cv.height = innerHeight; } rs();
  window.addEventListener('resize', rs);
  var dk = function() { return document.documentElement.getAttribute('data-theme') === 'dark'; };
  function P() { this.reset(); }
  P.prototype.reset = function() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.s = Math.random() * 1.3 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.32; this.vy = (Math.random() - 0.5) * 0.32;
    this.o = Math.random() * 0.4 + 0.07;
    this.col = Math.random() > 0.5 ? '108,134,255' : '47,79,255';
  };
  P.prototype.update = function() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  };
  P.prototype.draw = function() {
    ctx.save(); ctx.globalAlpha = this.o * (dk() ? 0.9 : 0.28);
    ctx.fillStyle = 'rgba(' + this.col + ',1)';
    ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  };
  for (var i = 0; i < 55; i++) pts.push(new P());
  function conn() {
    for (var i = 0; i < pts.length; i++) for (var j = i + 1; j < pts.length; j++) {
      var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx + dy*dy);
      if (d < 88) {
        ctx.save(); ctx.globalAlpha = (1 - d/88) * 0.1 * (dk() ? 0.9 : 0.22);
        ctx.strokeStyle = 'rgba(108,134,255,1)'; ctx.lineWidth = 0.4;
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); ctx.restore();
      }
    }
  }
  (function anim() { ctx.clearRect(0,0,W,H); pts.forEach(function(p){p.update();p.draw();}); conn(); requestAnimationFrame(anim); })();
})();

/* Loader */
(function() {
  var ld = document.getElementById('loader'), ldT = document.getElementById('ldText');
  if (!ld) return;
  var msgs = ['compiling assets...', 'loading modules...', 'fetching LeetCode stats...', 'almost ready...'];
  var i = 0;
  var iv = setInterval(function() { if (i < msgs.length && ldT) ldT.textContent = msgs[i++]; else clearInterval(iv); }, 440);
  setTimeout(function() { ld.classList.add('out'); fetchLCStats(); initPost(); }, 1850);
})();

function initPost() { initCounters(); initTilt(); initTrail(); }

/* Navbar */
(function() {
  var hdr = document.getElementById('hdr'), pb = document.getElementById('pbar'), btt = document.getElementById('btt');
  window.addEventListener('scroll', function() {
    var sy = window.scrollY;
    if (hdr) sy > 30 ? hdr.classList.add('scrolled') : hdr.classList.remove('scrolled');
    if (pb) pb.style.width = (sy / (document.documentElement.scrollHeight - innerHeight) * 100) + '%';
    if (btt) sy > 380 ? btt.classList.add('vis') : btt.classList.remove('vis');
    upLink();
  }, { passive: true });
  function upLink() {
    var secs = document.querySelectorAll('section[id]'), links = document.querySelectorAll('.nav-links a'), cur = '';
    secs.forEach(function(s) { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach(function(l) { l.classList.toggle('active', l.getAttribute('href').replace('#','') === cur); });
  }
  if (btt) btt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();

/* Count-up */
function initCounters() {
  if (!('IntersectionObserver' in window)) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var el = e.target.querySelector('.hsn[data-target]');
        if (el && !el.dataset.done) { el.dataset.done = '1'; animC(el); }
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.hero-stat').forEach(function(c) { obs.observe(c); });
}
function animC(el) {
  var t = +el.getAttribute('data-target'), dur = 1200, s = performance.now();
  (function u(now) {
    var p = Math.min((now - s) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * t);
    if (p < 1) requestAnimationFrame(u); else el.textContent = t;
  })(s);
}

/* LeetCode stats */
function fetchLCStats() {
  var u = CFG.lc, term = document.getElementById('lcTerm');
  function setT(lines) {
    if (!term) return; term.innerHTML = '';
    lines.forEach(function(l) { var d = document.createElement('div'); d.className = 'tline'; d.innerHTML = l; term.appendChild(d); });
  }
  function setR(id, solved, total) {
    var el = document.getElementById(id); if (!el) return;
    var pct = total > 0 ? Math.min(solved / total, 1) : 0;
    setTimeout(function() { el.style.strokeDashoffset = 201 - (pct * 201); }, 400);
  }
  function setV(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  setT([
    '<span class="tprompt">›</span><span>leetcode stats --user <span class="cgrn">' + u + '</span></span>',
    '<span class="tdim">fetching from API...</span>'
  ]);
  fetch('https://leetcode-stats-api.herokuapp.com/' + u)
    .then(function(r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function(d) {
      if (d.status !== 'success') throw new Error('non-success');
      var easy=d.easySolved||0, eT=d.totalEasy||1, med=d.mediumSolved||0, mT=d.totalMedium||1, hard=d.hardSolved||0, hT=d.totalHard||1;
      var total=d.totalSolved||0, rank=d.ranking?'#'+Number(d.ranking).toLocaleString():'N/A', rate=d.acceptanceRate?d.acceptanceRate.toFixed(1)+'%':'N/A', rep=d.contributionPoints||d.reputation||0;
      setV('lcEasy',easy); setV('lcMed',med); setV('lcHard',hard);
      setV('lcTotal',total); setV('lcRank',rank); setV('lcRate',rate); setV('lcRep',rep);
      setR('ringEasy',easy,eT); setR('ringMed',med,mT); setR('ringHard',hard,hT);
      setT([
        '<span class="tprompt">›</span><span>leetcode stats --user <span class="cgrn">'+u+'</span></span>',
        '<span class="tdim">status:</span>       <span class="cgrn">✓ fetched successfully</span>',
        '<span class="tdim">total_solved:</span>  <span class="camb">'+total+'</span>',
        '<span class="tdim">easy:</span>          <span style="color:var(--easy)">'+easy+' / '+eT+'</span>',
        '<span class="tdim">medium:</span>        <span style="color:var(--med)">'+med+' / '+mT+'</span>',
        '<span class="tdim">hard:</span>          <span style="color:var(--hard)">'+hard+' / '+hT+'</span>',
        '<span class="tdim">ranking:</span>       <span class="ptext">'+rank+'</span>',
        '<span class="tdim">acceptance:</span>    <span class="ptext">'+rate+'</span>',
        '<span class="tprompt">›</span><span class="tdim">_</span>'
      ]);
    })
    .catch(function(err) {
      console.warn('LC API:', err.message);
      setT([
        '<span class="tprompt">›</span><span>leetcode --user <span class="cgrn">'+u+'</span></span>',
        '<span style="color:var(--rose)">✗ API unavailable (CORS / rate limit)</span>',
        '<span class="tdim"># Activity heatmap is shown below</span>',
        '<span class="tprompt">›</span><span>open <span class="cgrn">leetcode.com/'+u+'</span></span>'
      ]);
    });
}

/* 3D Tilt */
function initTilt() {
  if (window.innerWidth < 768 || noMotion) return;
  document.querySelectorAll('.proj-card,.cfg-panel,.lc-chip').forEach(function(c) {
    c.addEventListener('mousemove', function(e) {
      var r = c.getBoundingClientRect(), rx = (e.clientY-r.top)/r.height-0.5, ry = (e.clientX-r.left)/r.width-0.5;
      c.style.transform = 'perspective(900px) rotateX('+(-rx*7)+'deg) rotateY('+(ry*7)+'deg) translateY(-5px)';
    });
    c.addEventListener('mouseleave', function() { c.style.transition='transform .5s ease'; c.style.transform=''; });
    c.addEventListener('mouseenter', function() { c.style.transition='none'; });
  });
}

/* Mouse trail */
function initTrail() {
  if (window.innerWidth < 768 || noMotion) return;
  document.addEventListener('mousemove', function(e) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;left:'+e.clientX+'px;top:'+e.clientY+'px;width:4px;height:4px;border-radius:50%;background:rgba(108,134,255,.28);pointer-events:none;z-index:9997;transform:translate(-50%,-50%);animation:mtrail .6s ease forwards';
    document.body.appendChild(d);
    setTimeout(function() { if (d.parentNode) d.parentNode.removeChild(d); }, 600);
  });
}

/* Toast */
function showToast(msg, type) {
  var el = document.getElementById('toast'); if (!el) return;
  el.textContent = msg; el.className = 'toast show ' + (type || 'info');
  clearTimeout(el._t); el._t = setTimeout(function() { el.classList.remove('show'); }, 2800);
}

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* Footer year */
var yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

/* Init */
Typer.start();
applyLang(DLANG);