import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
    const [activeWork, setActiveWork] = useState<number | null>(null);

    const works = [
        { id: 1, title: 'AI Concept Art', category: 'Generative AI', color: '#ff0055' },
        { id: 2, title: 'Neural Interface', category: 'UI/UX Design', color: '#00ccff' },
        { id: 3, title: 'Synthetic Landscapes', category: '3D Motion', color: '#ffcc00' },
    ];

    return (
        <div style={{ width: '100%', minHeight: '100vh', padding: '0 2rem' }}>

            {/* Navigation */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Orbitron' }}
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
                            style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '5rem', lineHeight: 1.1, margin: 0, background: 'linear-gradient(to right, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                    DESIGNING <br /> INTELLIGENCE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginTop: '2rem', maxWidth: '600px', color: '#888' }}
                >
                    Explorations in finding the ghost in the machine. A portfolio of generative art, UI interactions, and AI-driven experiences.
                </motion.p>
            </header>

            {/* Works Section */}
            <section id="work" style={{ padding: '0 0 5rem 0' }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2rem', marginBottom: '3rem' }}
                >
                    SELECTED WORKS
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {works.map((work) => (
                        <motion.div
                            key={work.id}
                            layoutId={`work-${work.id}`}
                            onClick={() => setActiveWork(activeWork === work.id ? null : work.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            style={{
                                height: '400px',
                                background: '#111',
                                borderRadius: '16px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                border: '1px solid #222',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: `radial-gradient(circle at top right, ${work.color}22, transparent 60%)`,
                                zIndex: 0
                            }} />
                            <h3 style={{ margin: 0, zIndex: 1, fontSize: '1.5rem' }}>{work.title}</h3>
                            <p style={{ margin: '0.5rem 0 0 0', color: '#666', zIndex: 1 }}>{work.category}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            {/* About Section */}
            <section id="about" style={{ padding: '8rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
                        MORE THAN <br /> JUST PIXELS.
                    </h2>
                    <div style={{ width: '50px', height: '4px', background: '#646cff', marginBottom: '2rem' }}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '1.1rem', color: '#aaa', lineHeight: 1.6 }}
                >
                    <p style={{ marginBottom: '1.5rem' }}>
                        I am a creative technologist bridging the gap between human intuition and artificial intelligence. My work explores how generative algorithms can amplify design intent, creating interfaces that feel alive.
                    </p>
                    <p>
                        With a background in traditional UI/UX and a passion for neural networks, I build digital experiences that are not just functional, but adaptive and surprising.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        {['Generative AI', 'UI/UX Strategy', 'React/Three.js', 'Prototyping'].map(skill => (
                            <span key={skill} style={{ border: '1px solid #333', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', color: '#fff' }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: '8rem 0 4rem 0', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>READY TO COLLABORATE?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '3rem' }}>
                        Let's build the future of interaction together.
                    </p>

                    <a href="mailto:qazplm5996@gmail.com" style={{ textDecoration: 'none' }}>
                        <button style={{ fontSize: '1.2rem', padding: '1rem 3rem', borderRadius: '50px', background: '#fff', color: '#000', fontWeight: 'bold' }}>
                            qazplm5996@gmail.com
                        </button>
                    </a>
                </motion.div>

                {/* Footer Content moved inside Contact */}
                <div style={{ marginTop: '5rem', borderTop: '1px solid #222', paddingTop: '2rem', color: '#444' }}>
                    <p>© 2025 Eunsi Lab. Built with React & AI.</p>
                </div>
            </section>

        </div>
    )
}

export default App
