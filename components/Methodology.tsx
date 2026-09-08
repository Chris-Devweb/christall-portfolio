"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Methodology() {
  const { language } = useLanguage();

  const steps = language === "fr" ? [
    {
      number: "1",
      title: "Échange",
      desc: "Immersion dans votre univers, définition des objectifs et cadrage stratégique.",
    },
    {
      number: "2",
      title: "Recherche",
      desc: "Veille concurrentielle, moodboards et pistes créatives pour orienter l'intention.",
    },
    {
      number: "3",
      title: "Conception",
      desc: "Création itérative, design des écrans ou supports avec présentations régulières.",
    },
    {
      number: "4",
      title: "Révélation",
      desc: "Livraison des assets finaux dans tous les formats, avec guide d'utilisation complet.",
    },
  ] : [
    {
      number: "1",
      title: "Discovery",
      desc: "Deep dive into your ecosystem, defining core goals and strategic framework.",
    },
    {
      number: "2",
      title: "Research",
      desc: "Benchmark analysis, moodboards, and creative directions to align the vision.",
    },
    {
      number: "3",
      title: "Design",
      desc: "Iterative creation, UX/UI screen design, and regular prototype presentations.",
    },
    {
      number: "4",
      title: "Delivery",
      desc: "Handoff of production-ready assets across all formats with complete guidelines.",
    },
  ];

  return (
    <section
      id="methodologie"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden text-slate-900 border-t border-slate-100"
    >
      {/* Subtle Logo Watermark */}
      <div className="absolute right-0 bottom-0 w-[240px] sm:w-[380px] h-[190px] sm:h-[300px] pointer-events-none select-none opacity-[0.03] -z-0">
        <svg viewBox="0 0 1501 1165" fill="none" className="w-full h-full text-slate-900 fill-current">
          <path d="M746.042 177.662C725.945 221.52 706.412 265.93 687.453 310.908C668.482 355.898 650.362 399.963 633.098 443.098C615.828 486.244 599.621 527.835 584.477 567.869C569.332 607.903 555.607 644.825 543.29 678.623C530.984 712.433 520.154 742.493 510.812 768.798C501.471 795.108 494.111 816.05 488.739 831.605C478.829 860.46 470.2 885.576 462.84 906.931C455.475 928.297 449.104 946.896 443.732 962.733C438.349 978.581 433.609 992.236 429.507 1003.69C425.399 1015.15 421.504 1025.54 417.827 1034.88C413.581 1045.64 408.704 1053.98 403.177 1059.92C397.662 1065.86 391.566 1070.17 384.919 1072.86C378.266 1075.55 371.125 1077.1 363.484 1077.53C355.843 1077.95 347.771 1078.17 339.285 1078.17C334.465 1078.17 328.456 1078.09 321.24 1077.95C314.024 1077.81 307.434 1077.6 301.494 1077.31L295.547 1073.07C304.889 1052.7 316.776 1026.11 331.213 993.287C345.645 960.471 361.852 923.554 379.823 882.532C397.794 841.511 417.115 797.52 437.786 750.549C458.445 703.596 479.53 655.707 501.051 606.904C522.555 558.102 544.071 509.586 565.581 461.341C587.096 413.107 607.756 367.21 627.577 323.633C647.38 280.067 666 239.97 683.408 203.323C700.81 166.694 716.029 135.79 729.047 110.605C731.874 105.236 735.562 100.774 740.09 97.2373C744.617 93.7002 749.575 90.8693 754.947 88.7447C760.318 86.6259 765.914 85.2133 771.722 84.5013C777.525 83.8007 783.247 83.439 788.918 83.439C797.122 83.439 805.188 84.151 813.116 85.5693C821.044 86.9934 829.53 89.6749 838.596 93.637C856.142 191.81 872.205 280.142 886.786 358.654C901.362 437.155 914.943 507.111 927.542 568.506C940.13 629.901 951.884 683.435 962.783 729.125C973.676 774.816 984.287 813.994 994.628 846.673C1004.96 879.346 1015.22 906.293 1025.41 927.511C1035.61 948.739 1046.15 965.426 1057.04 977.594C1067.94 989.761 1079.48 998.242 1091.65 1003.05C1103.81 1007.87 1117.12 1010.27 1131.56 1010.27C1141.18 1010.27 1150.94 1009.14 1160.86 1006.87C1170.76 1004.61 1181.66 1001.35 1193.55 997.111L1205.43 1031.91C1172.88 1048.03 1141.75 1060.34 1112.03 1068.83C1082.3 1077.31 1055.98 1081.56 1033.05 1081.56C1021.44 1081.56 1010.41 1079.71 999.937 1076.04C989.463 1072.36 979.059 1065.22 968.729 1054.62C958.394 1044.01 948.139 1029.01 937.947 1009.63C927.749 990.249 917.281 965.001 906.521 933.879C895.766 902.762 884.58 864.921 872.981 820.362C861.37 775.803 849.132 722.832 836.258 661.437C823.365 600.054 809.715 529.454 795.283 449.678C780.846 369.897 765.271 279.229 748.581 177.656H746.03L746.042 177.662Z" />
          <path d="M494.054 885.478L632.851 1041.45L586.033 634.765L494.054 885.478Z" />
          <path d="M839.647 919.943L672.757 1045.43L799.041 656.005L839.647 919.943Z" />
          <path d="M651.775 1037.02L606.561 619.003L727.6 277.495L784.373 639.732L651.775 1037.02Z" />
        </svg>
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#3f519f]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#3f519f]">
            {language === "fr" ? "MÉTHODOLOGIE" : "METHODOLOGY"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-4 font-heading max-w-2xl">
          {language === "fr" ? "Une démarche limpide" : "A Clear & Proven Approach"}
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 text-base sm:text-lg mb-10 sm:mb-16 max-w-2xl">
          {language === "fr"
            ? "Un processus structuré et itératif pour transformer votre vision en réalité avec sérénité."
            : "A structured and iterative process to transform your vision into reality with peace of mind."}
        </p>

        {/* Steps — 1 col mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-100/80 hover:bg-white hover:border-[#42aae1]/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#3f519f] group-hover:bg-[#42aae1] text-white font-bold text-sm flex items-center justify-center mb-5 sm:mb-6 shadow-md transition-colors duration-300">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-heading group-hover:text-[#3f519f] transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
