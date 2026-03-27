/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Droplets, 
  Printer, 
  ShieldCheck, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  CheckCircle2,
  FileText,
  HelpCircle,
  Building2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "시냅스의 특징", href: "#features" },
    { name: "제품 라인업", href: "#products" },
    { name: "활용 사례", href: "#use-cases" },
    { name: "자주 묻는 질문", href: "#faq" },
    { name: "문의하기", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Synaps Logo" 
              className="h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold text-primary">耐水紙시냅스</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors"
            >
              견적 문의
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-xl font-bold border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-primary text-white text-center py-4 rounded-xl text-lg font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                견적 문의하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6">
                환경 배려와 생산성 향상에 기여하는 차세대 내수지
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                종이처럼 인쇄하고,<br />
                <span className="text-primary">물에 젖지 않는</span><br />
                고기능성 합성지 시냅스
              </h1>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                시냅스(Synaps)는 PET 베이스의 합성지로, 종이의 질감과 뛰어난 내구성을 동시에 갖췄습니다. 
                별도의 라미네이팅 없이도 물과 열에 강하며, 일반 오프셋 인쇄기에서 바로 인쇄가 가능합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                  제품 샘플 신청하기
                </button>
                <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                  카탈로그 다운로드
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full hidden lg:block opacity-20">
          <img 
            src="https://picsum.photos/seed/paper/800/800" 
            alt="Synaps Paper" 
            className="w-full h-full object-cover rounded-l-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Reasons Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">시냅스가 선택받는 3가지 이유</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Droplets className="text-primary" size={48} />,
                title: "압도적인 내수성과 내구성",
                desc: "PET 베이스로 제작되어 물에 젖어도 변형되거나 찢어지지 않습니다. 야외나 습기가 많은 환경에서도 오랫동안 깨끗하게 유지됩니다."
              },
              {
                icon: <Printer className="text-primary" size={48} />,
                title: "일반 종이와 같은 인쇄 편의성",
                desc: "특수 코팅 처리를 통해 일반 오프셋 인쇄기나 디지털 인쇄기에서 별도의 조정 없이 고품질 인쇄가 가능합니다. 건조 속도도 매우 빠릅니다."
              },
              {
                icon: <ShieldCheck className="text-primary" size={48} />,
                title: "라미네이팅 공정 생략",
                desc: "용지 자체가 내수성을 갖추고 있어 번거로운 라미네이팅 공정이 필요 없습니다. 제작 시간을 단축하고 비용을 획기적으로 절감합니다."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">제품 라인업</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xl">XM</div>
                <h3 className="text-2xl font-bold">Synaps XM (디지털 인쇄용)</h3>
              </div>
              <p className="text-gray-600 mb-6">
                토너 방식의 디지털 인쇄기에 최적화된 제품입니다. 소량 다품종 인쇄에 적합하며, 즉시 사용 가능한 내수 출력물을 제공합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-primary" /> 두께: 135μm, 170μm, 230μm, 300μm, 450μm</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-primary" /> 용도: 메뉴판, 명찰, 매뉴얼, 실외 포스터</li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">자세히 보기</button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xl">OM</div>
                <h3 className="text-2xl font-bold">Synaps OM (오프셋 인쇄용)</h3>
              </div>
              <p className="text-gray-600 mb-6">
                대량 인쇄를 위한 오프셋 인쇄용 제품입니다. 일반 잉크로도 인쇄가 가능하며, 뛰어난 잉크 밀착력과 건조 성능을 자랑합니다.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-primary" /> 두께: 90μm, 135μm, 170μm, 230μm, 300μm, 450μm</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-primary" /> 용도: 지도, 카탈로그, 투표용지, 라벨</li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">자세히 보기</button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">시냅스 활용 사례</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: "음식점 메뉴판", img: "https://picsum.photos/seed/menu/400/500" },
              { title: "야외 포스터", img: "https://picsum.photos/seed/poster/400/500" },
              { title: "등산/관광 지도", img: "https://picsum.photos/seed/map/400/500" },
              { title: "공장 매뉴얼", img: "https://picsum.photos/seed/manual/400/500" },
              { title: "스포츠 배번", img: "https://picsum.photos/seed/sports/400/500" },
              { title: "원예용 라벨", img: "https://picsum.photos/seed/garden/400/500" },
              { title: "전시회 패널", img: "https://picsum.photos/seed/exhibit/400/500" },
              { title: "수험표/자격증", img: "https://picsum.photos/seed/id/400/500" },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[4/5]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-sm md:text-lg">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="section-title">자주 묻는 질문</h2>
          <div className="space-y-4">
            {[
              {
                q: "일반 종이와 시냅스의 가장 큰 차이점은 무엇인가요?",
                a: "시냅스는 PET 필름을 베이스로 하여 물에 젖지 않고 찢어지지 않는 강력한 내구성을 가집니다. 하지만 표면 처리를 통해 일반 종이와 같은 질감을 구현했으며, 일반 인쇄기로도 고품질 인쇄가 가능하다는 점이 가장 큰 차별점입니다."
              },
              {
                q: "가정용 잉크젯 프린터에서도 인쇄가 가능한가요?",
                a: "시냅스 XM은 레이저/토너 방식의 디지털 인쇄기용이며, OM은 오프셋 인쇄용입니다. 일반적인 수성 잉크젯 프린터에서는 잉크가 번질 수 있으므로 권장하지 않습니다."
              },
              {
                q: "라미네이팅 처리가 정말 필요 없나요?",
                a: "네, 그렇습니다. 시냅스 자체에 내수성과 내구성이 있기 때문에 라미네이팅 없이도 야외나 습한 환경에서 사용 가능합니다. 이는 비용 절감뿐만 아니라 플라스틱 사용량을 줄이는 효과도 있습니다."
              },
              {
                q: "재활용이 가능한가요?",
                a: "시냅스는 PET 베이스의 합성지로, 플라스틱류로 분류되어 재활용이 가능합니다. 종이와 플라스틱이 결합된 라미네이팅 종이보다 재활용 효율이 훨씬 높습니다."
              }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-primary" size={24} />
                    {item.q}
                  </div>
                  <ChevronRight className="transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black mb-6">시냅스 도입을 고민 중이신가요?</h2>
              <p className="text-white/80 text-lg mb-8">
                용도에 맞는 최적의 사양 제안부터 샘플 제공, 견적 안내까지 전문가가 친절히 도와드립니다. 
                지금 바로 문의해 보세요.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><Phone size={24} /></div>
                  <div>
                    <p className="text-sm text-white/60">대표 전화</p>
                    <p className="text-xl font-bold">02-2279-9080</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm text-white/60">이메일 문의</p>
                    <p className="text-xl font-bold">kpgraphics90@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-xl font-bold mb-6">빠른 문의하기</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">회사명/성함</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="010-0000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none h-24" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-all">문의 보내기</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="Synaps Logo" 
                  className="h-10 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xl font-bold">耐水紙시냅스</span>
              </div>
              <p className="text-gray-400 max-w-md mb-8">
                코리아프린팅그룹(주)은 고기능성 합성지 시냅스의 한국 공식 파트너로서, 
                최상의 인쇄 솔루션과 서비스를 제공합니다.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Building2 size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                {navItems.map((item) => (
                  <li key={item.name}><a href={item.href} className="hover:text-white transition-colors">{item.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company Info</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <Building2 size={18} className="shrink-0 text-primary" />
                  <span>코리아프린팅그룹(주)</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 text-primary" />
                  <span>서울 중구 퇴계로36가길 70</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="shrink-0 text-primary" />
                  <span>02-2279-9080</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 코리아프린팅그룹(주). All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
