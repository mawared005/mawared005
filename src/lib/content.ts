export type Lang = "ar" | "en";

export const CONTENT = {
  ar: {
    dir: "rtl" as const,
    switchLabel: "English",
    topbar: {
      phone: "+966 56 911 1192",
      email: "info@mawared.group",
      location: "الرياض، المملكة العربية السعودية",
    },
    brand: { name: "الموارد والتنمية الزراعية", short: "RADC" },
    logoAlt: "شعار شركة الموارد والتنمية الزراعية",
    nav: [
      { href: "#home", label: "الرئيسية" },
      { href: "#about", label: "من نحن" },
      { href: "#services", label: "خدماتنا" },
      { href: "#sectors", label: "القطاعات" },
      { href: "#process", label: "منهجية العمل" },
      { href: "#vision", label: "رؤية 2030" },
      { href: "#faq", label: "الأسئلة الشائعة" },
      { href: "#contact", label: "تواصل معنا" },
    ],
    navCta: "اطلب استشارة",
    hero: {
      badge: "تأسست عام 2022 — الرياض",
      title: "شركة الموارد والتنمية الزراعية",
      subtitle: "حلول زراعية وبيئية متكاملة",
      desc: "نقدّم خدمات واستشارات زراعية وبيئية متخصصة، من دراسات الجدوى وتحليل التربة والمياه، إلى تنفيذ المزارع والبيوت المحمية وشبكات الري والبنية التحتية، بكوادر فنية مؤهلة وجودة تخدم مستهدفات رؤية المملكة 2030.",
      cta1: "تعرّف على خدماتنا",
      cta2: "اطلب اتصالاً",
      imgAlt: "حقول ري محوري دائرية في الصحراء السعودية",
    },
    stats: [
      { value: "+14", label: "موقعاً جغرافياً" },
      { value: "+5,200", label: "عينة محللة ومُقرَّرة" },
      { value: "+850", label: "عميلاً وشريكاً" },
      { value: "2022", label: "سنة التأسيس" },
    ],
    about: {
      title: "من نحن",
      p1: "تأسست شركة الموارد والتنمية الزراعية (RADC) عام 2022 بهدف إحداث نقلة نوعية في مجال الزراعة والاستشارات الزراعية، عبر رفع مستوى جودة الخدمات المقدمة لعملائنا داخل المملكة وخارجها.",
      p2: "تضم الشركة كوادر فنية متخصصة في التحاليل والبحوث وإعداد الدراسات الفنية والاقتصادية، وتقدّم الحلول الرقمية ونماذج الأعمال والخدمات الإدارية والإنشائية. كما تنفّذ أعمال المقاولات والإنشاءات للمزارع (الدواجن، الأسماك، البيوت المحمية)، والحدائق والمسطحات الخضراء وتنسيق المواقع وأعمال المشاتل، وإنشاء الطرق والأرصفة، وتمديد الأنابيب وخطوط المياه وشبكات الري وأبراج التخزين، وحفر الآبار، وتأجير وتوريد وتركيب المعدات الزراعية.",
      cards: [
        { t: "الجودة أولاً", d: "معايير عمل مُوثّقة وفريق فني مؤهل." },
        { t: "خدمة شاملة", d: "من الدراسة والتصميم حتى التشغيل والصيانة." },
      ],
      imgAlt1: "مهندس زراعي يفحص عينات التربة في أحد المشاريع",
      imgAlt2: "بيت محمي حديث بشبكة ري بالتنقيط",
    },
    why: {
      title: "لماذا تختار الموارد والتنمية الزراعية؟",
      desc: "نجمع بين الخبرة العلمية والكفاءة الميدانية لنقدّم حلولاً زراعية وبيئية تحقق نتائج ملموسة لعملائنا في القطاعين الحكومي والخاص.",
      values: [
        {
          title: "الجودة والاعتمادية",
          desc: "إجراءات عمل موثّقة وضوابط جودة في كل مرحلة، من الدراسة حتى التسليم النهائي.",
        },
        {
          title: "كوادر فنية متخصصة",
          desc: "مهندسون وباحثون زراعيون وخبراء إداريون يجمعون بين المعرفة العلمية والخبرة الميدانية.",
        },
        {
          title: "الالتزام والشفافية",
          desc: "التزام كامل بالمواعيد والميزانيات ووضوح تام في التقارير والتواصل مع العميل.",
        },
        {
          title: "حلول مستدامة",
          desc: "ممارسات صديقة للبيئة وترشيد للموارد الطبيعية بما يتوافق مع أهداف التنمية المستدامة.",
        },
      ],
    },
    services: {
      title: "خدماتنا وأنشطتنا",
      desc: "منظومة خدمات متكاملة تغطي القطاع الزراعي والبيئي والإنشائي، مصممة لخدمة المشاريع الحكومية والخاصة بمختلف أحجامها.",
      items: [
        {
          title: "دراسات الجدوى الفنية والاقتصادية",
          desc: "إعداد وتوصيف دراسات الجدوى الفنية والاقتصادية لمشاريع القطاع الزراعي بمعايير دقيقة.",
        },
        {
          title: "الخدمات الزراعية المتخصصة",
          desc: "بحوث وحلول تقنية للممارسات الزراعية المستدامة وإنتاج الغذاء بكفاءة عالية.",
        },
        {
          title: "شبكات الري والمياه",
          desc: "إنشاء شبكات الري والسقيا والقنوات وأبراج تخزين المياه وحفر الآبار وصيانتها.",
        },
        {
          title: "المياه والصرف وإدارة النفايات",
          desc: "أنشطة إمداد المياه والصرف الصحي وإدارة النفايات ومعالجتها لبيئة أكثر استدامة.",
        },
        {
          title: "البناء والتشييد",
          desc: "مقاولات وإنشاءات لمزارع الدواجن والأسماك والبيوت المحمية والمرافق الملحقة.",
        },
        {
          title: "الطرق والجسور والأنفاق",
          desc: "توريد مستلزمات ومعدات إنشاء الطرق والأرصفة والأنفاق والجسور الرابطة للمشاريع.",
        },
        {
          title: "الحدائق والمسطحات الخضراء",
          desc: "تنسيق المواقع وأعمال المشاتل والعناية بالحدائق والمسطحات الخضراء وصيانتها.",
        },
        {
          title: "التشغيل والصيانة",
          desc: "أعمال التشغيل والصيانة والإصلاح للمشاريع الزراعية والمعدات والشبكات.",
        },
        {
          title: "النقل والتخزين",
          desc: "حلول نقل وتخزين آمنة وموثوقة تلبي الاحتياجات اللوجستية للمشاريع الزراعية.",
        },
        {
          title: "الصناعات التحويلية",
          desc: "صناعات تعيد تشكيل خدمات التنمية الزراعية عبر الزراعة الدقيقة والابتكار التقني.",
        },
        {
          title: "التجارة الإلكترونية والأتمتة",
          desc: "تفعيل دور التجارة الإلكترونية وأتمتة العمليات في المجال الزراعي والبيئي.",
        },
        {
          title: "العلاقات العامة والدعم الإداري",
          desc: "المتابعة والتمثيل لدى الجهات الحكومية والخاصة وخدمات الدعم الإداري.",
        },
      ],
    },
    sectors: {
      title: "القطاعات التي نخدمها",
      desc: "نعمل عبر سلسلة القيمة الزراعية كاملة، من الإنتاج النباتي والحيواني والسمكي إلى البنية التحتية والمياه والمعدات.",
      items: [
        {
          title: "الزراعة والغابات والثروة السمكية",
          desc: "خدمات شاملة في الزراعة والغابات والصيد لمستقبل إنتاجي مستدام، مع حلول للزراعة المحمية والحقلية.",
        },
        {
          title: "مزارع الدواجن والإنتاج الحيواني",
          desc: "إنشاء وتجهيز مزارع تربية وإنتاج الدواجن بمختلف أنواعها، وتوريد المعدات والأنظمة التشغيلية.",
        },
        {
          title: "الاستزراع السمكي",
          desc: "تصميم وتنفيذ أحواض الاستزراع السمكي وأنظمة التدوير والمعالجة وضبط جودة المياه.",
        },
        {
          title: "تنسيق المواقع والمشاتل",
          desc: "الحدائق والمسطحات الخضراء وأعمال المشاتل وتنسيق المواقع للمشاريع السكنية والتجارية.",
        },
        {
          title: "المياه والآبار",
          desc: "حفر الآبار الأنبوبية واليدوية، ومد خطوط المياه وأبراج التخزين وصيانتها وإصلاحها.",
        },
        {
          title: "تأجير وتوريد المعدات الزراعية",
          desc: "تأجير المعدات الزراعية وتوريد وتركيب البيوت المحمية ومستلزمات التشغيل.",
        },
      ],
    },
    capabilities: {
      title: "قدراتنا التنفيذية",
      desc: "اعتماداً على شبكة الروابط والخدمات اللوجستية التي تمتلكها الشركة، ننفّذ أعمالاً متنوعة تغطي احتياجات المشروع الزراعي من البنية التحتية حتى التشغيل.",
      pillars: [
        {
          title: "الأدوات",
          desc: "معدات وتقنيات حديثة وأنظمة قياس دقيقة تضمن تنفيذاً مطابقاً للمواصفات.",
        },
        {
          title: "التصميم",
          desc: "تصاميم هندسية مدروسة تراعي طبيعة الموقع والمناخ وترشيد استهلاك الموارد.",
        },
        {
          title: "الجودة",
          desc: "الجودة أولويتنا القصوى: كوادر مؤهلة في التحليل والبحث والدراسات الفنية والاقتصادية.",
        },
      ],
      list: [
        "مقاولات وإنشاءات مزارع الدواجن والأسماك والبيوت المحمية والمرافق الملحقة بها.",
        "إنشاء الطرق والشوارع والأرصفة وتوريد مستلزماتها، وإنشاء وإصلاح وصيانة الجسور والأنفاق.",
        "مد أنابيب الكهرباء والاتصالات وخطوط المياه بمختلف أنواعها وأقطارها.",
        "إنشاء شبكات الري والسقيا والقنوات وأبراج تخزين المياه ومدّها وإصلاحها وصيانتها.",
        "حفر آبار المياه الأنبوبية أو اليدوية وتجهيزها بأنظمة الضخ والتحكم.",
        "تأجير المعدات الزراعية وتوريد وإنشاء وتركيب البيوت المحمية بمختلف أنواعها.",
        "حلول رقمية ونماذج أعمال وخدمات إدارية وإنشائية داعمة لمنظومة الزراعة.",
        "خدمات لوجستية متكاملة تشمل النقل والتخزين وسلاسل الإمداد للمشاريع الزراعية.",
      ],
    },
    coverage: {
      title: "نطاق التغطية والشراكات",
      desc: "شبكة واسعة من الشركاء والعملاء الراضين، من المملكة العربية السعودية إلى خارجها، عبر أكثر من 14 موقعاً جغرافياً.",
      items: [
        { region: "منطقة الرياض", note: "المقر الرئيسي وأغلب مشاريع الإنشاء والتشغيل" },
        { region: "المنطقة الوسطى", note: "القصيم وحائل — مشاريع إنتاج نباتي وحيواني" },
        { region: "المنطقة الشرقية والغربية", note: "بيوت محمية وشبكات ري ومشاريع لوجستية" },
        { region: "خارج المملكة", note: "شراكات وخدمات استشارية للأسواق المجاورة" },
      ],
      partnerNote: "نقيس نجاحنا برضا عملائنا، ونعمل جنباً إلى جنب معهم لتحقيق رؤية المملكة 2030.",
      partnerCta: "كن شريكاً لنا",
    },
    process: {
      title: "منهجية العمل",
      desc: "خمس مراحل واضحة تأخذ مشروعك من الفكرة إلى إنتاج مستدام، بمتابعة وتقارير دورية في كل خطوة.",
      steps: [
        {
          title: "الاستماع والدراسة",
          desc: "نستمع لاحتياجك ونقوم بتحليل أولي للموقع والموارد المتاحة والفرص الاستثمارية.",
        },
        {
          title: "دراسة الجدوى والتخطيط",
          desc: "إعداد دراسات فنية واقتصادية شاملة ووضع خطة تنفيذ واضحة بالأهداف والجداول الزمنية.",
        },
        {
          title: "التصميم والتنفيذ",
          desc: "تنفيذ أعمال الإنشاء والتشييد وشبكات الري والتجهيزات وفق أعلى المعايير الفنية.",
        },
        {
          title: "التشغيل والصيانة",
          desc: "تشغيل المشروع وتأهيل الكوادر وبرامج صيانة دورية لضمان استمرارية الإنتاج.",
        },
        {
          title: "المتابعة والتطوير",
          desc: "قياس الأداء وتقديم تقارير دورية وتوصيات تطويرية لرفع العائد من المشروع.",
        },
      ],
    },
    vision: {
      title: "شركاء في رؤية المملكة 2030",
      desc: "الزراعة مفتاح التنمية وأهم روافد الأمن الغذائي وركيزة أساسية للاقتصاد الوطني. ومن هذا المنطلق تعمل الشركة على المساهمة الفاعلة في تحقيق مستهدفات الاستراتيجية الوطنية للزراعة ضمن رؤية المملكة 2030.",
      points: [
        "تعزيز الأمن الغذائي الوطني عبر مشاريع إنتاجية مستدامة.",
        "ترشيد استهلاك المياه وتقنيات الري الحديثة في البيئة الصحراوية.",
        "توطين التقنيات الزراعية ورفع نسبة المحتوى المحلي.",
        "تنمية الثروة النباتية والحيوانية والسمكية كركائز للاستراتيجية الوطنية.",
      ],
      imgAlt: "زراعة محمية حديثة داخل بيوت محمية",
      badge: "رؤية المملكة",
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      desc: "ثقة عملائنا هي أثمن ما نحققه — شراكات طويلة الأمد مبنية على الجودة والنتائج.",
      items: [
        {
          quote:
            "من الدراسة الأولى حتى التسليم، أثبت الفريق احترافية عالية والتزاماً بالمواعيد. مشروعنا الزراعي يعمل اليوم بكفاءة تفوق التوقعات.",
          name: "مستثمر في القطاع الزراعي",
          role: "صاحب مشروع بيوت محمية — الرياض",
        },
        {
          quote:
            "دراسة الجدوى التي قدّمها فريق الشركة كانت دقيقة وواقعية، وساعدتنا في اتخاذ قرار الاستثمار بثقة كاملة.",
          name: "عميل دراسات جدوى",
          role: "مشروع إنتاج حيواني — القصيم",
        },
        {
          quote:
            "أعمال تنسيق المسطحات الخضراء وشبكات الري نُفّذت بجودة ممتازة، والصيانة الدورية مستمرة دون أي ملاحظات.",
          name: "عميل تنسيق مواقع",
          role: "مجمع تجاري — الرياض",
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      desc: "إجابات سريعة عن أكثر الأسئلة التي تصلنا حول خدماتنا وآلية العمل معنا.",
      items: [
        {
          q: "ما هي خدمات شركة الموارد والتنمية الزراعية؟",
          a: "نقدّم منظومة متكاملة تشمل دراسات الجدوى الفنية والاقتصادية، الخدمات الزراعية والبيئية، مقاولات وإنشاء المزارع والبيوت المحمية، شبكات الري وحفر الآبار، تنسيق الحدائق والمشاتل، النقل والتخزين، والدعم الإداري والعلاقات العامة.",
        },
        {
          q: "هل تقدّمون خدماتكم خارج مدينة الرياض؟",
          a: "نعم، مقرّنا الرئيسي في الرياض ونخدم عملاءنا في جميع مناطق المملكة العربية السعودية وخارجها عبر أكثر من 14 موقعاً جغرافياً.",
        },
        {
          q: "كيف يمكنني طلب دراسة جدوى لمشروع زراعي؟",
          a: "يمكنك التواصل معنا عبر نموذج الموقع أو الاتصال المباشر على الرقم +966569111192، وسيحدد فريقنا اجتماعاً لفهم مشروعك ثم يقدّم عرضاً فنياً ومالياً مفصّلاً.",
        },
        {
          q: "هل تشمل خدماتكم مرحلة التشغيل والصيانة بعد التنفيذ؟",
          a: "بالتأكيد، نقدّم عقود تشغيل وصيانة شاملة للمزارع والبيوت المحمية وشبكات الري، تشمل المتابعة الدورية وتأهيل الكوادر وضمان استمرارية الإنتاج.",
        },
        {
          q: "هل تتعاملون مع الجهات الحكومية والخاصة؟",
          a: "نعم، نقدّم خدماتنا للقطاعين الحكومي والخاص، كما نقدّم خدمات المتابعة والتمثيل وإنهاء الإجراءات لدى الجهات الحكومية والخاصة.",
        },
      ],
    },
    cta: {
      title: "لديك مشروع زراعي أو بيئي؟ دعنا نتحدث",
      desc: "فريقنا جاهز لتقديم استشارة مجانية أولية والإجابة عن استفساراتك خلال يوم عمل واحد.",
      whatsapp: "تواصل عبر واتساب",
      send: "أرسل طلبك",
    },
    contact: {
      title: "تواصل معنا",
      desc: "فريقنا جاهز لتقديم الاستشارة المناسبة لمشروعك الزراعي أو البيئي.",
      phoneLabel: "الهاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      addressLabel: "العنوان",
      address: "الشيخ عبدالعزيز بن عبدالرحمن بن بشر، حي عبدالرحمن، الرياض — ص.ب 13223",
      hoursLabel: "ساعات العمل",
      hours: "الأحد – الخميس، 8 ص – 5 م",
      followUs: "تابعنا على",
      form: {
        name: "الاسم الكامل",
        namePh: "اكتب اسمك",
        phone: "رقم الجوال",
        email: "البريد الإلكتروني",
        message: "تفاصيل الطلب",
        messagePh: "اشرح لنا طبيعة مشروعك واحتياجك",
        submit: "إرسال الطلب",
        success: "تم استلام طلبك، سنعاود التواصل معك قريباً.",
        toast: "تم استلام رسالتك، سنتواصل معك قريباً بإذن الله.",
      },
    },
    socials: [
      { label: "واتساب", href: "https://wa.me/966569111192" },
      { label: "إنستغرام", href: "https://www.instagram.com/emawared/" },
      { label: "إكس (تويتر)", href: "https://x.com/mawared005" },
      { label: "فيسبوك", href: "https://www.facebook.com/MAWARED05/" },
    ],
    footer: {
      about:
        "شركة الموارد والتنمية الزراعية (RADC) — خدمات وحلول زراعية وبيئية شاملة من الرياض إلى العالم.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدماتنا",
      followTitle: "تابعنا",
      rights: "شركة الموارد والتنمية الزراعية. جميع الحقوق محفوظة.",
    },
  },

  en: {
    dir: "ltr" as const,
    switchLabel: "العربية",
    topbar: {
      phone: "+966 56 911 1192",
      email: "info@mawared.group",
      location: "Riyadh, Kingdom of Saudi Arabia",
    },
    brand: { name: "Resources & Agricultural Development", short: "RADC" },
    logoAlt: "Resources and Agricultural Development Company logo",
    nav: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About Us" },
      { href: "#services", label: "Services" },
      { href: "#sectors", label: "Sectors" },
      { href: "#process", label: "Our Process" },
      { href: "#vision", label: "Vision 2030" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    navCta: "Request a consultation",
    hero: {
      badge: "Founded in 2022 — Riyadh",
      title: "Resources & Agricultural Development Co.",
      subtitle: "Integrated agricultural and environmental solutions",
      desc: "We deliver specialised agricultural and environmental services and consultancy — from feasibility studies and soil and water analysis to building farms, greenhouses, irrigation networks and infrastructure — with qualified technical teams and quality that supports Saudi Vision 2030.",
      cta1: "Explore our services",
      cta2: "Request a call",
      imgAlt: "Circular pivot irrigation fields in the Saudi desert",
    },
    stats: [
      { value: "+14", label: "Geographic locations" },
      { value: "+5,200", label: "Samples analysed" },
      { value: "+850", label: "Clients and partners" },
      { value: "2022", label: "Year founded" },
    ],
    about: {
      title: "About Us",
      p1: "Resources & Agricultural Development Company (RADC) was founded in 2022 to create a qualitative shift in agriculture and agricultural consultancy by raising the quality of the services we provide to clients inside and outside the Kingdom.",
      p2: "Our team includes specialists in analysis, research and technical and economic studies, and we provide digital solutions, business models, and administrative and construction services. We also carry out contracting and construction for farms (poultry, fish, greenhouses), gardens and landscaping, nurseries and site works, roads and pavements, pipelines and water lines, irrigation networks and storage towers, well drilling, and the rental, supply and installation of agricultural equipment.",
      cards: [
        { t: "Quality first", d: "Documented work standards and a qualified technical team." },
        { t: "End-to-end service", d: "From study and design through to operation and maintenance." },
      ],
      imgAlt1: "Agricultural engineer inspecting soil samples on site",
      imgAlt2: "Modern greenhouse with a drip irrigation network",
    },
    why: {
      title: "Why choose RADC?",
      desc: "We combine scientific expertise with field efficiency to deliver agricultural and environmental solutions with tangible results for government and private sector clients.",
      values: [
        {
          title: "Quality and reliability",
          desc: "Documented procedures and quality controls at every stage, from study to final handover.",
        },
        {
          title: "Specialised technical teams",
          desc: "Engineers, agricultural researchers and management experts combining science with field experience.",
        },
        {
          title: "Commitment and transparency",
          desc: "Full commitment to schedules and budgets, with clear reporting and client communication.",
        },
        {
          title: "Sustainable solutions",
          desc: "Environmentally friendly practices and efficient use of natural resources aligned with sustainable development goals.",
        },
      ],
    },
    services: {
      title: "Our Services & Activities",
      desc: "An integrated portfolio covering the agricultural, environmental and construction sectors, designed for public and private projects of every size.",
      items: [
        {
          title: "Technical & economic feasibility studies",
          desc: "Preparing and documenting technical and economic feasibility studies for agricultural projects to precise standards.",
        },
        {
          title: "Specialised agricultural services",
          desc: "Research and technical solutions for sustainable agricultural practices and efficient food production.",
        },
        {
          title: "Irrigation & water networks",
          desc: "Building irrigation and water networks, canals, storage towers, plus well drilling and maintenance.",
        },
        {
          title: "Water, sanitation & waste management",
          desc: "Water supply, sanitation, and waste management and treatment for a more sustainable environment.",
        },
        {
          title: "Building & construction",
          desc: "Contracting and construction for poultry and fish farms, greenhouses and supporting facilities.",
        },
        {
          title: "Roads, bridges & tunnels",
          desc: "Supplying materials and equipment for roads, pavements, tunnels and bridges linking projects.",
        },
        {
          title: "Gardens & green spaces",
          desc: "Landscaping, nursery works, and the care and maintenance of gardens and green areas.",
        },
        {
          title: "Operation & maintenance",
          desc: "Operation, maintenance and repair for agricultural projects, equipment and networks.",
        },
        {
          title: "Transport & storage",
          desc: "Safe, reliable transport and storage solutions meeting the logistics needs of agricultural projects.",
        },
        {
          title: "Manufacturing industries",
          desc: "Industries reshaping agricultural development through precision farming and technical innovation.",
        },
        {
          title: "E-commerce & automation",
          desc: "Activating e-commerce and automating operations across the agricultural and environmental field.",
        },
        {
          title: "Public relations & admin support",
          desc: "Follow-up and representation with government and private entities, plus administrative support services.",
        },
      ],
    },
    sectors: {
      title: "Sectors We Serve",
      desc: "We work across the full agricultural value chain, from crop, livestock and fish production to infrastructure, water and equipment.",
      items: [
        {
          title: "Agriculture, forestry & fisheries",
          desc: "Comprehensive services in agriculture, forestry and fishing for a sustainable productive future, covering protected and open-field farming.",
        },
        {
          title: "Poultry farms & livestock",
          desc: "Building and equipping poultry breeding and production farms of all types, and supplying equipment and operating systems.",
        },
        {
          title: "Aquaculture",
          desc: "Designing and building fish farming ponds, recirculation and treatment systems, and water quality control.",
        },
        {
          title: "Landscaping & nurseries",
          desc: "Gardens, green spaces, nursery works and landscaping for residential and commercial projects.",
        },
        {
          title: "Water & wells",
          desc: "Drilling tube and hand-dug wells, extending water lines and storage towers, plus maintenance and repair.",
        },
        {
          title: "Agricultural equipment rental & supply",
          desc: "Renting agricultural equipment and supplying and installing greenhouses and operating essentials.",
        },
      ],
    },
    capabilities: {
      title: "Our Execution Capabilities",
      desc: "Backed by the company's network of partners and logistics services, we deliver work covering every need of an agricultural project, from infrastructure through to operation.",
      pillars: [
        {
          title: "Tools",
          desc: "Modern equipment, technologies and precise measurement systems ensuring execution to specification.",
        },
        {
          title: "Design",
          desc: "Considered engineering designs that account for site, climate and efficient resource use.",
        },
        {
          title: "Quality",
          desc: "Quality is our top priority: qualified teams in analysis, research and technical and economic studies.",
        },
      ],
      list: [
        "Contracting and construction of poultry and fish farms, greenhouses and their supporting facilities.",
        "Building roads, streets and pavements and supplying their materials; constructing, repairing and maintaining bridges and tunnels.",
        "Laying electricity and telecom conduits and water lines of all types and diameters.",
        "Building irrigation networks, canals and water storage towers, plus extension, repair and maintenance.",
        "Drilling tube or hand-dug water wells and equipping them with pumping and control systems.",
        "Renting agricultural equipment and supplying, building and installing greenhouses of all kinds.",
        "Digital solutions, business models, and administrative and construction services supporting agriculture.",
        "Integrated logistics covering transport, storage and supply chains for agricultural projects.",
      ],
    },
    coverage: {
      title: "Coverage & Partnerships",
      desc: "A wide network of partners and satisfied clients, inside Saudi Arabia and beyond, across more than 14 geographic locations.",
      items: [
        { region: "Riyadh Region", note: "Head office and most construction and operation projects" },
        { region: "Central Region", note: "Qassim and Hail — crop and livestock production projects" },
        { region: "Eastern & Western Regions", note: "Greenhouses, irrigation networks and logistics projects" },
        { region: "Outside the Kingdom", note: "Partnerships and advisory services for neighbouring markets" },
      ],
      partnerNote:
        "We measure our success by client satisfaction, working side by side with them to achieve Saudi Vision 2030.",
      partnerCta: "Become a partner",
    },
    process: {
      title: "How We Work",
      desc: "Five clear stages that take your project from idea to sustainable production, with follow-up and regular reporting at every step.",
      steps: [
        {
          title: "Listening & assessment",
          desc: "We listen to your needs and carry out an initial analysis of the site, available resources and investment opportunities.",
        },
        {
          title: "Feasibility & planning",
          desc: "Comprehensive technical and economic studies plus a clear execution plan with objectives and timelines.",
        },
        {
          title: "Design & execution",
          desc: "Delivering construction, irrigation networks and equipment to the highest technical standards.",
        },
        {
          title: "Operation & maintenance",
          desc: "Operating the project, training staff and running periodic maintenance to keep production continuous.",
        },
        {
          title: "Monitoring & improvement",
          desc: "Measuring performance and providing regular reports and improvement recommendations to raise returns.",
        },
      ],
    },
    vision: {
      title: "Partners in Saudi Vision 2030",
      desc: "Agriculture is a key to development, a pillar of food security and a cornerstone of the national economy. On that basis the company contributes actively to the goals of the National Agriculture Strategy within Saudi Vision 2030.",
      points: [
        "Strengthening national food security through sustainable productive projects.",
        "Rationalising water use with modern irrigation technologies in a desert environment.",
        "Localising agricultural technologies and raising local content.",
        "Developing crop, livestock and fish resources as pillars of the national strategy.",
      ],
      imgAlt: "Modern protected cultivation inside greenhouses",
      badge: "Saudi Vision",
    },
    testimonials: {
      title: "What Our Clients Say",
      desc: "Our clients' trust is our most valuable achievement — long-term partnerships built on quality and results.",
      items: [
        {
          quote:
            "From the first study to handover, the team showed real professionalism and met every deadline. Our farm now runs beyond expectations.",
          name: "Agricultural sector investor",
          role: "Greenhouse project owner — Riyadh",
        },
        {
          quote:
            "The feasibility study the team delivered was accurate and realistic, and it helped us make the investment decision with full confidence.",
          name: "Feasibility study client",
          role: "Livestock production project — Qassim",
        },
        {
          quote:
            "The landscaping and irrigation network were executed to excellent quality, and regular maintenance continues without a single issue.",
          name: "Landscaping client",
          role: "Commercial complex — Riyadh",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      desc: "Quick answers to the questions we hear most about our services and how we work.",
      items: [
        {
          q: "What services does RADC provide?",
          a: "We offer an integrated portfolio including technical and economic feasibility studies, agricultural and environmental services, farm and greenhouse contracting, irrigation networks and well drilling, landscaping and nurseries, transport and storage, and administrative support and public relations.",
        },
        {
          q: "Do you work outside Riyadh?",
          a: "Yes. Our head office is in Riyadh and we serve clients across all regions of Saudi Arabia and beyond, through more than 14 geographic locations.",
        },
        {
          q: "How can I request a feasibility study for an agricultural project?",
          a: "Contact us through the website form or call +966569111192 directly. Our team will arrange a meeting to understand your project, then provide a detailed technical and financial proposal.",
        },
        {
          q: "Do your services include operation and maintenance after delivery?",
          a: "Absolutely. We provide full operation and maintenance contracts for farms, greenhouses and irrigation networks, including periodic follow-up, staff training and production continuity.",
        },
        {
          q: "Do you work with both government and private entities?",
          a: "Yes. We serve both the public and private sectors, and also handle follow-up, representation and procedure completion with government and private entities.",
        },
      ],
    },
    cta: {
      title: "Have an agricultural or environmental project? Let's talk",
      desc: "Our team is ready to offer a free initial consultation and answer your questions within one business day.",
      whatsapp: "Chat on WhatsApp",
      send: "Send your request",
    },
    contact: {
      title: "Contact Us",
      desc: "Our team is ready to advise on your agricultural or environmental project.",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      addressLabel: "Address",
      address: "Sheikh Abdulaziz bin Abdulrahman bin Bishr, Abdulrahman District, Riyadh — P.O. Box 13223",
      hoursLabel: "Working hours",
      hours: "Sunday – Thursday, 8 AM – 5 PM",
      followUs: "Follow us",
      form: {
        name: "Full name",
        namePh: "Enter your name",
        phone: "Mobile number",
        email: "Email address",
        message: "Request details",
        messagePh: "Tell us about your project and what you need",
        submit: "Send request",
        success: "We received your request and will get back to you shortly.",
        toast: "Your message has been received. We'll be in touch soon.",
      },
    },
    socials: [
      { label: "WhatsApp", href: "https://wa.me/966569111192" },
      { label: "Instagram", href: "https://www.instagram.com/emawared/" },
      { label: "X (Twitter)", href: "https://x.com/mawared005" },
      { label: "Facebook", href: "https://www.facebook.com/MAWARED05/" },
    ],
    footer: {
      about:
        "Resources & Agricultural Development Company (RADC) — comprehensive agricultural and environmental services from Riyadh to the world.",
      quickLinks: "Quick links",
      servicesTitle: "Our services",
      followTitle: "Follow us",
      rights: "Resources & Agricultural Development Company. All rights reserved.",
    },
  },
} satisfies Record<Lang, unknown>;
