import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Building2,
  Droplets,
  FlaskConical,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Recycle,
  Route as RouteIcon,
  ShoppingCart,
  Sprout,
  Truck,
  Warehouse,
  Wrench,
  Factory,
  ArrowLeft,
  Award,
  BadgeCheck,
  ChevronDown,
  ClipboardList,
  Compass,
  FileSearch,
  Handshake,
  LineChart,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";

import logo from "@/assets/radc-logo.png.asset.json";
import heroFields from "@/assets/hero-fields.jpg";
import greenhouse from "@/assets/greenhouse.jpg";
import aboutField from "@/assets/about-field.jpg";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "شركة الموارد والتنمية الزراعية | حلول زراعية وبيئية متكاملة" },
      {
        name: "description",
        content:
          "شركة الموارد والتنمية الزراعية (RADC) في الرياض: دراسات جدوى، خدمات زراعية وبيئية، مقاولات مزارع وبيوت محمية، شبكات ري، نقل وتخزين، ودعم إداري وفق رؤية 2030.",
      },
      { property: "og:title", content: "شركة الموارد والتنمية الزراعية (RADC)" },
      {
        property: "og:description",
        content:
          "حلول زراعية وبيئية متكاملة من الدراسة والتصميم حتى التنفيذ والتشغيل — الرياض، المملكة العربية السعودية.",
      },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#process", label: "منهجية العمل" },
  { href: "#vision", label: "رؤية 2030" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
];

const STATS = [
  { value: "+14", label: "موقعاً جغرافياً" },
  { value: "+5,200", label: "عينة محللة ومُقرَّرة" },
  { value: "+850", label: "عميلاً وشريكاً" },
  { value: "2022", label: "سنة التأسيس" },
];

const SERVICES = [
  {
    icon: FlaskConical,
    title: "دراسات الجدوى الفنية والاقتصادية",
    desc: "إعداد وتوصيف دراسات الجدوى الفنية والاقتصادية لمشاريع القطاع الزراعي بمعايير دقيقة.",
  },
  {
    icon: Sprout,
    title: "الخدمات الزراعية المتخصصة",
    desc: "بحوث وحلول تقنية للممارسات الزراعية المستدامة وإنتاج الغذاء بكفاءة عالية.",
  },
  {
    icon: Droplets,
    title: "شبكات الري والمياه",
    desc: "إنشاء شبكات الري والسقيا والقنوات وأبراج تخزين المياه وحفر الآبار وصيانتها.",
  },
  {
    icon: Recycle,
    title: "المياه والصرف وإدارة النفايات",
    desc: "أنشطة إمداد المياه والصرف الصحي وإدارة النفايات ومعالجتها لبيئة أكثر استدامة.",
  },
  {
    icon: Building2,
    title: "البناء والتشييد",
    desc: "مقاولات وإنشاءات لمزارع الدواجن والأسماك والبيوت المحمية والمرافق الملحقة.",
  },
  {
    icon: RouteIcon,
    title: "الطرق والجسور والأنفاق",
    desc: "توريد مستلزمات ومعدات إنشاء الطرق والأرصفة والأنفاق والجسور الرابطة للمشاريع.",
  },
  {
    icon: Leaf,
    title: "الحدائق والمسطحات الخضراء",
    desc: "تنسيق المواقع وأعمال المشاتل والعناية بالحدائق والمسطحات الخضراء وصيانتها.",
  },
  {
    icon: Wrench,
    title: "التشغيل والصيانة",
    desc: "أعمال التشغيل والصيانة والإصلاح للمشاريع الزراعية والمعدات والشبكات.",
  },
  {
    icon: Truck,
    title: "النقل والتخزين",
    desc: "حلول نقل وتخزين آمنة وموثوقة تلبي الاحتياجات اللوجستية للمشاريع الزراعية.",
  },
  {
    icon: Factory,
    title: "الصناعات التحويلية",
    desc: "صناعات تعيد تشكيل خدمات التنمية الزراعية عبر الزراعة الدقيقة والابتكار التقني.",
  },
  {
    icon: ShoppingCart,
    title: "التجارة الإلكترونية والأتمتة",
    desc: "تفعيل دور التجارة الإلكترونية وأتمتة العمليات في المجال الزراعي والبيئي.",
  },
  {
    icon: Landmark,
    title: "العلاقات العامة والدعم الإداري",
    desc: "المتابعة والتمثيل لدى الجهات الحكومية والخاصة وخدمات الدعم الإداري.",
  },
];

const VISION_POINTS = [
  "تعزيز الأمن الغذائي الوطني عبر مشاريع إنتاجية مستدامة.",
  "ترشيد استهلاك المياه وتقنيات الري الحديثة في البيئة الصحراوية.",
  "توطين التقنيات الزراعية ورفع نسبة المحتوى المحلي.",
  "تنمية الثروة النباتية والحيوانية والسمكية كركائز للاستراتيجية الوطنية.",
];

const VALUES = [
  {
    icon: BadgeCheck,
    title: "الجودة والاعتمادية",
    desc: "إجراءات عمل موثّقة وضوابط جودة في كل مرحلة، من الدراسة حتى التسليم النهائي.",
  },
  {
    icon: Users,
    title: "كوادر فنية متخصصة",
    desc: "مهندسون وباحثون زراعيون وخبراء إداريون يجمعون بين المعرفة العلمية والخبرة الميدانية.",
  },
  {
    icon: ShieldCheck,
    title: "الالتزام والشفافية",
    desc: "التزام كامل بالمواعيد والميزانيات ووضوح تام في التقارير والتواصل مع العميل.",
  },
  {
    icon: Award,
    title: "حلول مستدامة",
    desc: "ممارسات صديقة للبيئة وترشيد للموارد الطبيعية بما يتوافق مع أهداف التنمية المستدامة.",
  },
];

const PROCESS_STEPS = [
  {
    icon: FileSearch,
    step: "01",
    title: "الاستماع والدراسة",
    desc: "نستمع لاحتياجك ونقوم بتحليل أولي للموقع والموارد المتاحة والفرص الاستثمارية.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "دراسة الجدوى والتخطيط",
    desc: "إعداد دراسات فنية واقتصادية شاملة ووضع خطة تنفيذ واضحة بالأهداف والجداول الزمنية.",
  },
  {
    icon: Compass,
    step: "03",
    title: "التصميم والتنفيذ",
    desc: "تنفيذ أعمال الإنشاء والتشييد وشبكات الري والتجهيزات وفق أعلى المعايير الفنية.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "التشغيل والصيانة",
    desc: "تشغيل المشروع وتأهيل الكوادر وبرامج صيانة دورية لضمان استمرارية الإنتاج.",
  },
  {
    icon: LineChart,
    step: "05",
    title: "المتابعة والتطوير",
    desc: "قياس الأداء وتقديم تقارير دورية وتوصيات تطويرية لرفع العائد من المشروع.",
  },
];

const TESTIMONIALS = [
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
];

const FAQS = [
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
];

function Home() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("تم استلام رسالتك، سنتواصل معك قريباً بإذن الله.");
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />

      {/* Top bar */}
      <div className="hidden bg-primary text-primary-foreground/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="size-3.5 text-accent" />
              <span dir="ltr">+966 56 911 1192</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="size-3.5 text-accent" />
              info@mawared.group
            </span>
          </div>
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-accent" />
            الرياض، المملكة العربية السعودية
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="شعار شركة الموارد والتنمية الزراعية"
              width={44}
              height={62}
              className="h-12 w-auto"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-base font-bold text-primary">
                الموارد والتنمية الزراعية
              </span>
              <span className="block text-[11px] tracking-[0.25em] text-muted-foreground">
                RADC
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-steel"
          >
            اطلب استشارة
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-primary">
        <img
          src={heroFields}
          alt="حقول ري محوري دائرية في الصحراء السعودية"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-l from-primary via-primary/85 to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl rise">
            <span className="inline-block border border-accent/40 px-3 py-1 text-xs font-medium tracking-wide text-accent">
              تأسست عام 2022 — الرياض
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.2] text-primary-foreground md:text-6xl">
              شركة الموارد والتنمية الزراعية
              <span className="mt-3 block text-sand">حلول زراعية وبيئية متكاملة</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
              نقدّم خدمات واستشارات زراعية وبيئية متخصصة، من دراسات الجدوى وتحليل التربة والمياه، إلى
              تنفيذ المزارع والبيوت المحمية وشبكات الري والبنية التحتية، بكوادر فنية مؤهلة وجودة
              تخدم مستهدفات رؤية المملكة 2030.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-accent px-7 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                تعرّف على خدماتنا
                <ArrowLeft className="size-4" />
              </a>
              <a
                href="#contact"
                className="border border-primary-foreground/25 px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                اطلب اتصالاً
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-12 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 text-center md:border-l md:border-border md:last:border-l-0">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl" dir="ltr">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary rule-accent md:text-4xl">
              من نحن
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              تأسست شركة الموارد والتنمية الزراعية (RADC) عام 2022 بهدف إحداث نقلة نوعية في مجال
              الزراعة والاستشارات الزراعية، عبر رفع مستوى جودة الخدمات المقدمة لعملائنا داخل المملكة
              وخارجها.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              تضم الشركة كوادر فنية متخصصة في التحاليل والبحوث وإعداد الدراسات الفنية والاقتصادية،
              وتقدّم الحلول الرقمية ونماذج الأعمال والخدمات الإدارية والإنشائية. كما تنفّذ أعمال
              المقاولات والإنشاءات للمزارع (الدواجن، الأسماك، البيوت المحمية)، والحدائق والمسطحات
              الخضراء وتنسيق المواقع وأعمال المشاتل، وإنشاء الطرق والأرصفة، وتمديد الأنابيب وخطوط
              المياه وشبكات الري وأبراج التخزين، وحفر الآبار، وتأجير وتوريد وتركيب المعدات الزراعية.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { t: "الجودة أولاً", d: "معايير عمل مُوثّقة وفريق فني مؤهل." },
                { t: "خدمة شاملة", d: "من الدراسة والتصميم حتى التشغيل والصيانة." },
              ].map((c) => (
                <div key={c.t} className="border-r-2 border-accent bg-surface p-5">
                  <div className="font-display font-bold text-primary">{c.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutField}
              alt="مهندس زراعي يفحص عينات التربة في أحد المشاريع"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full object-cover shadow-panel"
            />
            <img
              src={greenhouse}
              alt="بيت محمي حديث بشبكة ري بالتنقيط"
              width={1200}
              height={1200}
              loading="lazy"
              className="absolute -bottom-10 left-0 hidden w-48 border-8 border-background object-cover shadow-panel md:block lg:w-60"
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-primary rule-accent md:text-4xl">
              لماذا تختار الموارد والتنمية الزراعية؟
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              نجمع بين الخبرة العلمية والكفاءة الميدانية لنقدّم حلولاً زراعية وبيئية تحقق نتائج
              ملموسة لعملائنا في القطاعين الحكومي والخاص.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="border border-border bg-background p-8 transition-shadow hover:shadow-panel">
                <span className="flex size-12 items-center justify-center bg-primary/5">
                  <v.icon className="size-6 text-steel" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold text-primary rule-accent md:text-4xl">
            خدماتنا وأنشطتنا
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            منظومة خدمات متكاملة تغطي القطاع الزراعي والبيئي والإنشائي، مصممة لخدمة المشاريع
            الحكومية والخاصة بمختلف أحجامها.
          </p>

          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="group bg-card p-8 transition-colors hover:bg-primary">
                <s.icon className="size-7 text-steel transition-colors group-hover:text-accent" />
                <h3 className="mt-6 font-display text-lg font-bold text-primary transition-colors group-hover:text-primary-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/75">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-primary rule-accent md:text-4xl">
            منهجية العمل
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            خمس مراحل واضحة تأخذ مشروعك من الفكرة إلى إنتاج مستدام، بمتابعة وتقارير دورية في كل
            خطوة.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {PROCESS_STEPS.map((p, i) => (
            <li key={p.step} className="relative border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-accent" dir="ltr">
                  {p.step}
                </span>
                <p.icon className="size-6 text-steel" />
              </div>
              <h3 className="mt-5 font-display font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              {i < PROCESS_STEPS.length - 1 && (
                <ArrowLeft className="absolute -left-4 top-1/2 hidden size-5 -translate-y-1/2 text-border lg:block" />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Vision 2030 */}
      <section id="vision" className="relative overflow-hidden bg-primary py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-foreground rule-accent md:text-4xl">
              شركاء في رؤية المملكة 2030
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-primary-foreground/75">
              الزراعة مفتاح التنمية وأهم روافد الأمن الغذائي وركيزة أساسية للاقتصاد الوطني. ومن هذا
              المنطلق تعمل الشركة على المساهمة الفاعلة في تحقيق مستهدفات الاستراتيجية الوطنية
              للزراعة ضمن رؤية المملكة 2030.
            </p>
            <ul className="mt-10 space-y-4">
              {VISION_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-4 text-primary-foreground/90">
                  <span className="mt-2 size-2 shrink-0 bg-accent" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={greenhouse}
              alt="زراعة محمية حديثة داخل بيوت محمية"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden bg-accent px-8 py-6 md:block">
              <div className="font-display text-3xl font-bold text-accent-foreground" dir="ltr">
                2030
              </div>
              <div className="text-xs font-medium text-accent-foreground/70">رؤية المملكة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary rule-accent md:text-4xl">
              تواصل معنا
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              فريقنا جاهز لتقديم الاستشارة المناسبة لمشروعك الزراعي أو البيئي.
            </p>
            <div className="mt-10 space-y-7">
              {[
                { icon: Phone, label: "الهاتف / واتساب", value: "+966 56 911 1192", ltr: true },
                { icon: Mail, label: "البريد الإلكتروني", value: "info@mawared.group", ltr: true },
                {
                  icon: MapPin,
                  label: "العنوان",
                  value:
                    "الشيخ عبدالعزيز بن عبدالرحمن بن بشر، حي عبدالرحمن، الرياض — ص.ب 13223",
                  ltr: false,
                },
                { icon: Warehouse, label: "ساعات العمل", value: "الأحد – الخميس، 8 ص – 5 م", ltr: false },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-surface">
                    <c.icon className="size-4 text-steel" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-1 text-primary" dir={c.ltr ? "ltr" : "rtl"}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-surface p-8 md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold tracking-widest text-muted-foreground">
                  الاسم الكامل
                </span>
                <input
                  required
                  name="name"
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-steel"
                  placeholder="اكتب اسمك"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold tracking-widest text-muted-foreground">
                  رقم الجوال
                </span>
                <input
                  required
                  name="phone"
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-steel"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-xs font-semibold tracking-widest text-muted-foreground">
                  البريد الإلكتروني
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-steel"
                  placeholder="name@example.com"
                  dir="ltr"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-xs font-semibold tracking-widest text-muted-foreground">
                  تفاصيل الطلب
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-steel"
                  placeholder="اشرح لنا طبيعة مشروعك واحتياجك"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-primary py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-steel"
            >
              إرسال الطلب
            </button>
            {sent && (
              <p className="mt-4 text-center text-sm text-leaf">
                تم استلام طلبك، سنعاود التواصل معك قريباً.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-14 text-primary-foreground/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div>
            <img
              src={logo.url}
              alt="شعار شركة الموارد والتنمية الزراعية"
              width={44}
              height={62}
              loading="lazy"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              شركة الموارد والتنمية الزراعية (RADC) — خدمات وحلول زراعية وبيئية شاملة من الرياض إلى
              العالم.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-primary-foreground">روابط سريعة</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-primary-foreground">تابعنا</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/966569111192"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  واتساب
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/emawared/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  إنستغرام
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/mawared005"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  إكس (تويتر)
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/MAWARED05/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  فيسبوك
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/10 px-6 pt-6 text-center text-xs">
          © {new Date().getFullYear()} شركة الموارد والتنمية الزراعية. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
