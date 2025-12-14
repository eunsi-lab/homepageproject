import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import project1 from './assets/project1.png';
import project1_2 from './assets/project1_2.png';
import project1_3 from './assets/project1_3.png';
import project2 from './assets/project2.png';
import project2_2 from './assets/project2_2.png';
import project2_3 from './assets/project2_3.png';
import project3 from './assets/project3.png';
import project3_2 from './assets/project3_2.png';

import project4 from './assets/project4.jpg';
import project4_2 from './assets/project4_2.jpg';
import project4_3 from './assets/project4_3.jpg';

import project5 from './assets/project5.jpg';
import project5_2 from './assets/project5_2.jpg';
import project5_3 from './assets/project5_3.jpg';

import project6 from './assets/project6.png';
import project6_2 from './assets/project6_2.png';

interface Work {
    id: number;
    title: string;
    category: string;
    color: string;
    image?: string;
    images?: string[];
}

function App() {
    const [activeWork, setActiveWork] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Dynamic Font Loading
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

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
            image: project4,
            images: [project4, project4_2, project4_3]
        },
        {
            id: 5,
            title: 'VR Experience',
            category: 'Immersive Tech',
            color: '#BDB2FF',
            image: project5,
            images: [project5, project5_2, project5_3]
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
        if (selectedWork && selectedWork.images) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedWork.images!.length);
        }
    };

    const handleOpenWork = (workId: number) => {
        setActiveWork(workId);
        setCurrentImageIndex(0);
    }

    return (
        <div style={{
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: '#FAFAFA',
            minHeight: '100vh',
            color: '#333',
            overflowX: 'hidden',
            position: 'relative'
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'fixed',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(160, 196, 255, 0.2) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'fixed',
                bottom: '10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255, 198, 255, 0.15) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            {/* Navigation */}
            <nav style={{
                padding: '2rem 4rem',
                display: 'flex',
                justifyContent: 'space-between', // Fixed type in original code 'justifyBox' -> 'justifyContent'
                alignItems: 'center',
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 100,
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.8)'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '12px', height: '12px', background: '#A0C4FF', borderRadius: '50%', display: 'inline-block' }}></span>
                    Minji Kim
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['Work', 'About', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#666', fontWeight: 500, transition: 'color 0.2s' }}>
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{
                padding: '8rem 4rem 6rem 4rem',
                background: '#F0F7FF', // Very light blue
                marginBottom: '4rem',
                borderRadius: '0 0 60px 60px', // Curved bottom
                position: 'relative',
                overflow: 'hidden',
                zIndex: 1
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
                >
                    <div style={{
                        display: 'inline-block',
                        background: '#fff',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        marginBottom: '2rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#A0C4FF'
                    }}>
                        ✨ Product Designer & AI Artist
                    </div>
                    <h1 style={{
                        fontSize: '4.5rem',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(135deg, #333 0%, #666 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-1px'
                    }}>
                        Crafting Ideas<br />
                        <span style={{ color: '#A0C4FF', WebkitTextFillColor: '#A0C4FF' }}>Into Reality.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto 3rem auto',
                        lineHeight: 1.6
                    }}>
                        Blending creative design with artificial intelligence to build immersive and intuitive digital experiences.
                    </p>
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            background: '#A0C4FF',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            boxShadow: '0 10px 20px rgba(160, 196, 255, 0.4)',
                            transition: 'background 0.3s'
                        }}
                    >
                        Explore My Work
                    </motion.a>
                </motion.div>

                {/* Decorative floating shapes in Hero */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '20%', left: '10%', width: '60px', height: '60px', borderRadius: '50%', border: '4px solid #fff', opacity: 0.5 }}
                />
                <motion.div
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ position: 'absolute', bottom: '20%', right: '15%', width: '40px', height: '40px', borderRadius: '50%', background: '#BDB2FF', opacity: 0.6 }}
                />

            </header>

            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

                {/* Works Section */}
                <section id="work" style={{ padding: '0 0 8rem 0' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Selected Works</h2>
                        <div style={{ width: '60px', height: '6px', background: '#A0C4FF', borderRadius: '3px', margin: '0 auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {works.map((work) => (
                            <motion.div
                                key={work.id}
                                layoutId={`work-${work.id}`}
                                onClick={() => handleOpenWork(work.id)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                style={{
                                    height: '420px',
                                    background: '#fff',
                                    borderRadius: '24px',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{
                                    flex: 1,
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    marginBottom: '1.5rem',
                                    position: 'relative',
                                    background: work.image ? 'transparent' : `${work.color}15`
                                }}>
                                    {work.image ? (
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${work.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.5s ease'
                                        }} />
                                    ) : (
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '100%',
                                            color: work.color,
                                            fontSize: '3rem',
                                            opacity: 0.3
                                        }}>●</div>
                                    )}
                                </div>

                                <div>
                                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.4rem', fontWeight: 700 }}>{work.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: work.color }}></span>
                                        <p style={{ margin: 0, color: '#888', fontSize: '0.95rem', fontWeight: 500 }}>{work.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" style={{ padding: '4rem 0 8rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '100%',
                            height: '500px',
                            background: '#E6E6FA', // Lavender
                            borderRadius: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '5rem',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Placeholder for Profile Img */}
                            👱‍♀️
                            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', background: '#FFC6FF', borderRadius: '50%', opacity: 0.5 }}></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>Designing with<br /><span style={{ color: '#BDB2FF' }}>Empathy & AI</span></h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555', marginBottom: '2rem' }}>
                            Hello! I'm Minji, a product designer who loves exploring the intersection of human creativity and machine intelligence.
                            I believe technology should be warm, approachable, and delightful to use.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                            Based in Seoul, I create digital experiences that not only solve problems but also bring a smile to user's faces.
                        </p>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                            {['UI/UX', '3D Modeling', 'Generative AI', 'Prototyping'].map(skill => (
                                <span key={skill} style={{ padding: '0.6rem 1.2rem', background: '#F5F5F5', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 600, color: '#555' }}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ padding: '4rem 0 8rem 0', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            background: '#F0F7FF',
                            borderRadius: '40px',
                            padding: '4rem 2rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ position: 'absolute', top: -50, left: -50, width: '150px', height: '150px', background: '#FFC6FF', borderRadius: '50%', opacity: 0.2 }}></div>
                        <div style={{ position: 'absolute', bottom: -50, right: -50, width: '200px', height: '200px', background: '#A0C4FF', borderRadius: '50%', opacity: 0.2 }}></div>

                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Let's Create Something<br />Amazing Together!</h2>
                        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>Have a project in mind? Just want to say hi? <br />I'd love to hear from you.</p>
                        <a href="mailto:hello@minji.design" style={{
                            display: 'inline-block',
                            padding: '1.2rem 3.5rem',
                            background: '#333',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            Get in Touch
                        </a>
                    </motion.div>
                </section>

                <footer style={{ padding: '2rem 0', borderTop: '1px solid #eee', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
                    © 2024 Minji Kim. All Rights Reserved.
                </footer>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        layoutId={`work-${selectedWork.id}`}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 200,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto'
                        }}
                    >
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); setActiveWork(null); }}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: '#f5f5f5',
                                border: 'none',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 201
                            }}
                            whileHover={{ scale: 1.1, background: '#eee' }}
                        >
                            ×
                        </motion.button>

                        <div style={{ maxWidth: '1000px', margin: '2rem auto', width: '100%', flex: 1 }}>
                            <div style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                marginBottom: '2rem',
                                position: 'relative',
                                background: '#fff'
                            }}>
                                {/* Navigation Button */}
                                {selectedWork.images && selectedWork.images.length > 1 && (
                                    <button
                                        onClick={handleNextImage}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '20px',
                                            transform: 'translateY(-50%)',
                                            background: 'rgba(255,255,255,0.7)',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '50px',
                                            height: '50px',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            zIndex: 10,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#333'
                                        }}
                                    >
                                        &gt;
                                    </button>
                                )}

                                {selectedWork.images ? (
                                    <motion.img
                                        key={currentImageIndex}
                                        src={selectedWork.images[currentImageIndex]}
                                        alt={selectedWork.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                ) : (
                                    <div style={{ height: '500px', background: `${selectedWork.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: selectedWork.color }}>
                                        <span>No Image Available</span>
                                    </div>
                                )}

                                {/* Image Counter */}
                                {selectedWork.images && selectedWork.images.length > 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                        background: 'rgba(0,0,0,0.6)',
                                        color: 'white',
                                        padding: '5px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}>
                                        {currentImageIndex + 1} / {selectedWork.images.length}
                                    </div>
                                )}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span style={{
                                    background: selectedWork.color,
                                    color: 'white', // White text on color tag
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase'
                                }}>
                                    {selectedWork.category}
                                </span>
                                <h2 style={{ fontSize: '3rem', fontWeight: 800, margin: '1rem 0', color: '#333' }}>{selectedWork.title}</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
