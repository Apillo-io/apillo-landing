'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Users, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    name: 'Oemtalks',
    description: 'Teknoloji ve yazılım odaklı sosyal medya içerikleri. Instagram + YouTube.',
    status: 'Aktif',
    link: 'https://instagram.com/oemtalks',
    icon: '📱',
  },
  {
    name: 'KOBİ SaaS',
    description: 'Küçük işletmeler için dijital operasyon yönetim platformu. Stealth mode.',
    status: 'Geliştiriliyor',
    link: '#',
    icon: '🏪',
  },
  {
    name: 'Eğitim Platformu',
    description: 'İçerik üreticileri ve kurumlar için all-in-one eğitim SaaS çözümü.',
    status: 'Planlanıyor',
    link: '#',
    icon: '🎓',
  },
]

const stats = [
  { label: 'KOBİ Odaklı', value: '100%', icon: '🏪' },
  { label: 'Tek Veri Mimarisi', value: '1', icon: '🔗' },
  { label: 'Ekip Kapasitesi', value: '5+', icon: '👥' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] flex items-center justify-center font-bold text-xl text-white">
                A
              </div>
              <span className="text-xl font-bold text-white">Apillo</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projeler</a>
              <a href="#vision" className="text-gray-400 hover:text-white transition-colors">Vizyon</a>
              <a href="#tech" className="text-gray-400 hover:text-white transition-colors">Teknoloji</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">İletişim</a>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-2 flex flex-col gap-4"
            >
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Projeler</a>
              <a href="#vision" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Vizyon</a>
              <a href="#tech" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>Teknoloji</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>İletişim</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-[128px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0F3460]/30 rounded-full blur-[128px] animate-float" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white">Apillo — </span>
              <span className="gradient-text">Dijital Güç</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
              Türkiye'nin KOBİ'lere güç veren teknoloji şirketi. 
              Dijital operasyonlar, veri ekosistemleri ve inovasyon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                Projelerimizi Keşfet
              </a>
              <a 
                href="#vision"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
              >
                Vizyonumuz
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#projects" className="text-gray-500 hover:text-white transition-colors">
              <ChevronDown size={32} className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'KOBİ Odaklı', value: '100%', icon: '🏪' },
              { label: 'Tek Veri Mimarisi', value: '1', icon: '🔗' },
              { label: 'Ekip Kapasitesi', value: '5+', icon: '👥' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projelerimiz</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Her projemiz KOBİ ekosistemini güçlendirmek için tasarlandı.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#FF6B35]/50 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{project.icon}</div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B35] transition-colors">
                    {project.name}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    project.status === 'Aktif' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Geliştiriliyor' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-gradient-to-b from-[#1A1A2E]/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vizyonumuz
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                KOBİ'lerin dijital operasyonlarını yöneten, farklı sektörlerde çalışan ama 
                arka planda tek bir veri ve ağ sistemine bağlı yaşayan bir ekosistem kuruyoruz.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Hız', desc: 'KOBİ\'lerin dijital dönüşümünü hızlandırıyoruz' },
                  { icon: Shield, title: 'Güven', desc: 'Veri güvenliği ve iş sürekliliği önceliğimiz' },
                  { icon: TrendingUp, title: 'Büyüme', desc: 'Tek veri mimarisiyle ölçeklenebilir çözümler' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-[#FF6B35]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#0F3460]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Hedef Sektörler</h3>
                <div className="flex flex-wrap gap-3">
                  {['Kafeler', 'Kuaförler', 'Çiçekçiler', 'Mikro Turizm', 'Bungalov', 'Perakende'].map((sector) => (
                    <span 
                      key={sector}
                      className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm hover:bg-[#FF6B35]/20 hover:text-white transition-colors cursor-default"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-500">Yeni sektörler ekleniyor...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Teknoloji Stack</h2>
            <p className="text-gray-400 text-lg">Kullandığımız modern teknolojiler</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js 14', 'TypeScript', 'TailwindCSS', 'Spring Boot', 'Java 21', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'AI/ML', 'GitHub Actions', 'Vercel'].map((tech) => (
              <span 
                key={tech}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#FF6B35]/50 hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">İletişime Geç</h2>
            <p className="text-gray-400 text-lg mb-8">
              KOBİ dijitalleşmesi hakkında konuşmak, işbirliği yapmak veya sadece merhaba demek için.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@apillo.io"
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                info@apillo.io
              </a>
              <a 
                href="https://github.com/Apillo-io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] flex items-center justify-center font-bold text-sm text-white">
              A
            </div>
            <span className="font-semibold text-white">Apillo</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Apillo. Türkiye'nin KOBİ'lere güç veren teknoloji şirketi.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Apillo-io" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://instagram.com/oemtalks" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}