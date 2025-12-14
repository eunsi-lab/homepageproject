import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import project1 from './assets/project1.png';
import project1_2 from './assets/project1_2.png';
import project1_3 from './assets/project1_3.png';
import project2 from './assets/project2.png';
import project2_2 from './assets/project2_2.png';
import project2_3 from './assets/project2_3.png';
import project3 from './assets/project3.png';
import project3_2 from './assets/project3_2.png';

interface Work {
    id: number;
    title: string;
    category: string;
    color: string;
    image?: string;
    images?: string[];
}

import project6 from './assets/project6.png';
import project6_2 from './assets/project6_2.png';

function App() {
    const [activeWork, setActiveWork] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const works: Work[] = [
        {
            id: 1,
            title: 'AI Concept Art',
            category: 'Generative AI',
            color: '#A0C4FF', // Pastel Blue
            image: project1,
            images: [project1, project1_2, project1_3]
        },
        {
            id: 4,
            title: 'Smart Home Hub',
            category: 'Product Design',
            color: '#A0C4FF',
        },
        {
            id: 5,
            title: 'VR Experience',
            category: 'Immersive Tech',
            color: '#BDB2FF',
        },
        {
            id: 6,
            title: 'Brand Identity',
            category: 'Visual Design',
            color: '#FFC6FF',
            image: project6,
            images: [project6, project6_2]
        },
        {
            id: 2,
            title: 'Neural Interface',
            category: 'UI/UX Design',
            color: '#BDB2FF', // Pastel Purple
            image: project2,
            images: [project2, project2_2, project2_3]
        },
        {
            id: 3,
            title: 'Synthetic Landscapes',
            category: '3D Motion',
            color: '#FFC6FF', // Pastel Pink
            image: project3,
            images: [project3, project3_2]
        },
    ];

    const selectedWork = works.find(w => w.id === activeWork);

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedWork?.images) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedWork.images!.length);
        }
    };

    const handleOpenWork = (id: number) => {
        setActiveWork(id);
        setCurrentImageIndex(0);
    };

    // New Color Palette
    const colors = {
        bg: '#FAFAFA',
        textPrimary: '#333333',
        textSecondary: '#666666',
        accent: '#A0C4FF',
        cardBg: '#FFFFFF',
        shadow: '0 20px 40px rgba(0,0,0,0.05)',
    };

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: colors.bg,
            color: colors.textPrimary,
            fontFamily: '"Helvetica Neue", sans-serif',
            overflowX: 'hidden'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Navigation */}
                <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-1px', color: colors.accent }}
                    >
                        EUNSI LAB
                    </motion.div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {['Work', 'About', 'Contact'].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    textDecoration: 'none',
                                    color: colors.textSecondary,
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    transition: 'color 0.2s'
                                }}
                                whileHover={{ color: colors.accent }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </nav>

                {/* Hero Section */}
                <header style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100px' }}
                        transition={{ duration: 1 }}
                        style={{ height: '4px', background: colors.accent, marginBottom: '2rem', borderRadius: '2px' }}
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '5rem',
                            lineHeight: 1.1,
                            margin: 0,
                            fontWeight: 800,
                            color: colors.textPrimary,
                            letterSpacing: '-2px'
                        }}
                    >
                        DESIGNING <br />
                        <span style={{ color: colors.accent }}>INTELLIGENCE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ fontSize: '1.2rem', marginTop: '2rem', maxWidth: '500px', color: colors.textSecondary, lineHeight: 1.6 }}
                    >
                        Bridging human intuition and artificial intelligence.
                        A portfolio of generative art, UI interactions, and AI-driven experiences.
                    </motion.p>
                </header>

                {/* Works Section */}
                <section id="work" style={{ padding: '0 0 8rem 0' }}>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 700, letterSpacing: '-1px' }}
                    >
                        Selected Works
                    </motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {works.map((work) => (
                            <motion.div
                                key={work.id}
                                layoutId={`work-${work.id}`}
                                onClick={() => handleOpenWork(work.id)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                style={{
                                    background: colors.cardBg,
                                    borderRadius: '24px',
                                    padding: '1.5rem',
                                    cursor: 'pointer',
                                    boxShadow: colors.shadow,
                                    border: '1px solid rgba(0,0,0,0.02)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem'
                                }}
                            >
                                <div style={{
                                    height: '280px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    background: work.image ? '#f0f0f0' : `linear-gradient(135deg, ${work.color}11, ${work.color}22)`
                                }}>
                                    {work.image && (
                                        <img
                                            src={work.image}
                                            alt={work.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                        />
                                    )}
                                </div>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700, color: colors.textPrimary }}>{work.title}</h3>
                                    <p style={{ margin: '0.5rem 0 0 0', color: colors.accent, fontWeight: 600, fontSize: '0.9rem' }}>{work.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" style={{ padding: '4rem 0 8rem 0', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '700px' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 700 }}>
                            More Than Just Pixels
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: colors.textSecondary, lineHeight: 1.8, marginBottom: '2rem' }}>
                            I am a creative technologist exploring the intersection of design and machine agency.
                            My work is characterized by a minimalist aesthetic powered by complex neural networks.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {['Generative AI', 'UI/UX Strategy', 'React/Three.js', 'Prototyping'].map(skill => (
                                <span key={skill} style={{
                                    background: '#F0F4FF',
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '30px',
                                    fontSize: '0.9rem',
                                    color: colors.textPrimary,
                                    fontWeight: 600
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ padding: '0 0 6rem 0', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: '#F0F4FF',
                            padding: '4rem 2rem',
                            borderRadius: '32px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <h2 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 700, color: colors.textPrimary }}>Ready to Collaborate?</h2>
                        <p style={{ fontSize: '1.1rem', color: colors.textSecondary, maxWidth: '500px', margin: 0 }}>
                            Let's map the future of interaction together.
                        </p>
                        <a href="mailto:qazplm5996@gmail.com" style={{ textDecoration: 'none' }}>
                            <button style={{
                                fontSize: '1.1rem',
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                background: colors.accent,
                                color: '#fff',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px rgba(160, 196, 255, 0.4)',
                                transition: 'transform 0.2s'
                            }}>
                                qazplm5996@gmail.com
                            </button>
                        </a>
                    </motion.div>

                    <div style={{ marginTop: '4rem', color: '#999', fontSize: '0.9rem' }}>
                        <p>© 2025 Eunsi Lab. Built with React & AI.</p>
                    </div>
                </section>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeWork && selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveWork(null)}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(255,255,255,0.85)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 1000,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            layoutId={`work-${activeWork}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: '#fff',
                                width: '100%',
                                maxWidth: '1000px',
                                maxHeight: '90vh',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                            }}
                        >
                            <button
                                onClick={() => setActiveWork(null)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'rgba(255,255,255,0.9)',
                                    border: 'none',
                                    color: '#333',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    fontSize: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                }}
                            >
                                ×
                            </button>

                            <div style={{ flex: 1, minHeight: '500px', position: 'relative', background: '#f5f5f5' }}>
                                {selectedWork.images ? (
                                    <>
                                        <img
                                            src={selectedWork.images[currentImageIndex]}
                                            alt={selectedWork.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                        <button
                                            onClick={handleNextImage}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                right: '20px',
                                                transform: 'translateY(-50%)',
                                                background: 'rgba(255,255,255,0.8)',
                                                border: 'none',
                                                color: '#333',
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                zIndex: 5,
                                                fontSize: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                            }}
                                        >
                                            &gt;
                                        </button>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            right: '20px',
                                            background: 'rgba(255,255,255,0.8)',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '20px',
                                            color: '#333',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                                        }}>
                                            {currentImageIndex + 1} / {selectedWork.images.length}
                                        </div>
                                    </>
                                ) : selectedWork.image ? (
                                    <img
                                        src={selectedWork.image}
                                        alt={selectedWork.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: `radial-gradient(circle at top right, ${selectedWork.color}22, transparent 60%)`,
                                    }} />
                                )}
                            </div>

                            <div style={{ padding: '2.5rem' }}>
                                <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', color: colors.textPrimary, fontWeight: 700 }}>{selectedWork.title}</h2>
                                <p style={{ fontSize: '1.2rem', color: colors.accent, margin: 0, fontWeight: 500 }}>{selectedWork.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
