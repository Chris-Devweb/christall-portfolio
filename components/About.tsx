"use client";

import Image from "next/image";
import { Sparkles, Eye, Zap, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const qualities = language === "fr" ? [
    { name: "Créativité", icon: Sparkles },
    { name: "Clarté", icon: Eye },
    { name: "Impact", icon: Zap },
    { name: "Expérience", icon: Users },
  ] : [
    { name: "Creativity", icon: Sparkles },
    { name: "Clarity", icon: Eye },
    { name: "Impact", icon: Zap },
    { name: "Experience", icon: Users },
  ];

  return (
    <section
      id="a-propos"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden text-slate-900"
    >
      {/* Subtle Ambient Logo Watermark */}
      <div className="absolute -left-16 sm:-left-24 -bottom-10 sm:-bottom-20 w-[280px] sm:w-[480px] h-[220px] sm:h-[370px] pointer-events-none select-none opacity-[0.03] -z-0">
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
            {language === "fr" ? "À PROPOS" : "ABOUT ME"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-10 sm:mb-14 font-heading max-w-2xl">
          {language === "fr"
            ? "Moi c'est ChristΛll. Et je fais briller tes idées."
            : "I'm ChristΛll. And I bring your ideas into the light."}
        </h2>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image Card */}
          <div className="lg:col-span-6 relative group">
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-100 bg-slate-100">
              <Image
                src="/images/girl mockup.png"
                alt="Atelier ChristAll Architecture Brutaliste"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              {/* Badge */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 z-10">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-xs font-semibold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-[#3f519f] animate-pulse" />
                  <span>{language === "fr" ? "ChristΛll. • Un univers" : "ChristΛll. • A Universe"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-7 font-normal">
              {language === "fr"
                ? "Hello World ! Moi c'est ChristΛll, et je suis heureux de vous accueillir dans mon univers. Celui d'un designer passionnée par l'intersection de la pureté esthétique et de l'ergonomie, j'accompagne les marques audacieuses et les institutions dans la matérialisation de leur identité."
                : "Hello World! I'm ChristΛll, and I'm delighted to welcome you to my creative space. As a designer passionate about the intersection of aesthetic purity and ergonomics, I support forward-thinking brands and institutions in bringing their identity to life."}
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
              {qualities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-slate-50/70 hover:bg-slate-100/90 text-xs font-medium text-slate-700 transition-colors"
                  >
                    <IconComponent size={13} className="text-[#3f519f]" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-7 sm:pt-8 border-t border-slate-100">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#3f519f] tracking-tight font-heading mb-1">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {language === "fr" ? "SUR MESURE" : "TAILOR-MADE"}
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#3f519f] tracking-tight font-heading mb-1">
                  02+
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {language === "fr" ? "ANNÉES D'EXPLORATION" : "YEARS OF CRAFT"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
