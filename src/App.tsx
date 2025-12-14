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

// Optimized Floating Bubble - Organic Natural Movement
const FloatingBubble = ({ size, color, top, left, delay, duration }: any) => {
    // Randomize movement slightly for each instance to feel "natural"
    const randomY = Math.random() * 20 + 20; // 20px to 40px movement
    const randomX = Math.random() * 20 - 10; // -10px to 10px drift

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: top,
                left: left,
                width: size,
                height: size,
                borderRadius: '50%',
                background: color,
                opacity: 0.5, // Slightly higher base opacity
                filter: 'blur(30px)', // High blur for soft look
                zIndex: 0,
                pointerEvents: 'none',
                willChange: 'transform', // Performance optimization
            }}
            animate={{
                y: [0, -randomY, 0],
                x: [0, randomX, 0],
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        />
    );
};

function App() {
    const [activeWork, setActiveWork] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Dynamic Font Loading
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap';
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
        <div
            style={{
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: '#fff',
                minHeight: '100vh',
                color: '#333',
                overflowX: 'hidden',
                position: 'relative'
            }}>

            {/* --- Global Background Decorations --- */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                <FloatingBubble size="350px" color="rgba(160, 196, 255, 0.15)" top="-10%" left="60%" delay={0} duration={18} />
                <FloatingBubble size="450px" color="rgba(189, 178, 255, 0.15)" top="40%" left="-10%" delay={5} duration={22} />
                <FloatingBubble size="300px" color="rgba(255, 198, 255, 0.2)" top="80%" left="80%" delay={2} duration={15} />
            </div>

            {/* Navigation */}
            <nav style={{
                padding: '1.5rem 4rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 100,
                backdropFilter: 'blur(12px)',
                background: 'rgba(255, 255, 255, 0.7)',
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#333', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '-0.5px' }}>
                    <span style={{ width: '10px', height: '10px', background: '#A0C4FF', borderRadius: '50%' }}></span>
                    Eunseo Kim
                </div>
                <div style={{ display: 'flex', gap: '2.5rem' }}>
                    {['Work', 'About', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#555', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}>
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{
                minHeight: '85vh',
                padding: '8rem 4rem 4rem 4rem',
                background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)',
                borderRadius: '0 0 80px 80px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                zIndex: 1
            }}>
                {/* Hero Specific Decorations - Natural Flow */}
                <FloatingBubble size="80px" color="#BDB2FF" top="20%" left="15%" delay={0} duration={10} />
                <FloatingBubble size="60px" color="#FFC6FF" top="20%" left="85%" delay={2} duration={12} />
                <FloatingBubble size="100px" color="#A0C4FF" top="60%" left="80%" delay={1} duration={14} />
                <FloatingBubble size="40px" color="#BDB2FF" top="70%" left="10%" delay={4} duration={8} />
                <FloatingBubble size="180px" color="rgba(255,255,255,0.8)" top="10%" left="50%" delay={0} duration={16} />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 10 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            background: '#fff',
                            padding: '0.6rem 1.8rem',
                            borderRadius: '50px',
                            boxShadow: '0 8px 20px rgba(160, 196, 255, 0.2)',
                            marginBottom: '2.5rem',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#A0C4FF',
                            letterSpacing: '0.5px'
                        }}
                    >
                        ✨ Creative Technologist
                    </motion.div>

                    <h1 style={{
                        fontSize: '5.5rem',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        marginBottom: '2rem',
                        letterSpacing: '-2.5px',
                        color: '#222'
                    }}>
                        Crafting <span style={{ position: 'relative', display: 'inline-block' }}>
                            <span style={{ position: 'relative', zIndex: 1, color: '#222' }}>Magic</span>
                            <span style={{ position: 'absolute', bottom: '15px', left: 0, right: 0, height: '20px', background: '#FFC6FF', borderRadius: '10px', zIndex: 0, opacity: 0.8 }}></span>
                        </span><br />
                        with <span style={{ color: '#BDB2FF' }}>Code & Design.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.3rem',
                        color: '#666',
                        maxWidth: '650px',
                        margin: '0 auto 3.5rem auto',
                        lineHeight: 1.7,
                        fontWeight: 400
                    }}>
                        Hi, I'm <b>Eunseo</b>. I build digital experiences that feel alive, intuitive, and just a little bit playful.
                    </p>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href="#work" style={{
                            display: 'inline-block',
                            padding: '1.2rem 3rem',
                            background: '#333',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                        }}>
                            View Selected Works
                        </a>
                    </motion.div>
                </motion.div>
            </header>

            <main style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

                {/* Works Section with New Background Bubbles */}
                <section id="work" style={{ padding: '2rem 3rem 10rem 3rem', position: 'relative' }}>
                    {/* Richer Background decorations for Works section */}
                    <FloatingBubble size="300px" color="rgba(160, 196, 255, 0.25)" top="5%" left="-10%" delay={0} duration={20} />
                    <FloatingBubble size="400px" color="rgba(255, 198, 255, 0.2)" top="30%" left="85%" delay={5} duration={25} />
                    <FloatingBubble size="250px" color="rgba(189, 178, 255, 0.25)" top="60%" left="5%" delay={2} duration={18} />

                    {/* Small playful accents */}
                    <FloatingBubble size="60px" color="#FFC6FF" top="15%" left="20%" delay={1} duration={12} />
                    <FloatingBubble size="40px" color="#A0C4FF" top="25%" left="70%" delay={3} duration={15} />
                    <FloatingBubble size="80px" color="#BDB2FF" top="45%" left="10%" delay={2} duration={14} />
                    <FloatingBubble size="50px" color="#FFC6FF" top="75%" left="80%" delay={4} duration={16} />
                    <FloatingBubble size="30px" color="#A0C4FF" top="85%" left="30%" delay={0} duration={10} />
                    <FloatingBubble size="120px" color="rgba(255,255,255,0.6)" top="50%" left="50%" delay={6} duration={20} />

                    <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 2 }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>Playground</h2>
                        <p style={{ color: '#888', fontSize: '1.1rem' }}>Selected projects & experiments</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', position: 'relative', zIndex: 2 }}>
                        {works.map((work, index) => (
                            <motion.div
                                key={work.id}
                                layoutId={`work-${work.id}`}
                                onClick={() => handleOpenWork(work.id)}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -15, scale: 1.02 }}
                                style={{
                                    height: '480px',
                                    background: '#fff',
                                    borderRadius: '32px',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                                    border: '1px solid rgba(0,0,0,0.03)'
                                }}
                            >
                                <div style={{
                                    flex: 1,
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    marginBottom: '1.5rem',
                                    position: 'relative',
                                    background: work.image ? '#f8f8f8' : `${work.color}15`
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
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                            <span style={{ fontSize: '4rem', opacity: 0.2 }}>🎨</span>
                                        </div>
                                    )}
                                    {/* Hover Overlay Effect */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 50%)',
                                        opacity: 0.6
                                    }} />
                                </div>

                                <div style={{ padding: '0 0.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                        <span style={{
                                            background: work.color,
                                            color: '#fff',
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase'
                                        }}>
                                            {work.category}
                                        </span>
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 700, color: '#222' }}>{work.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" style={{ padding: '4rem 0 10rem 0', display: 'grid', gridTemplateColumns: '40% 60%', gap: '5rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, rotate: -5 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1.2',
                            background: '#E0E7FF',
                            borderRadius: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative Blobs behind profile */}
                            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: '#FFC6FF', borderRadius: '50%', filter: 'blur(30px)' }}></div>
                            <div style={{ zIndex: 1 }}>👩‍💻</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}>
                            More than <br /> <span style={{ color: '#A0C4FF' }}>Pixels & Code</span>
                        </h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#555', marginBottom: '2rem' }}>
                            Hello! I'm <b>Eunseo</b>. I'm obsessed with how technology can feel more human.
                            My work sits at the intersection of product design and creative coding, always aiming to bring a spark of joy to the user.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {['Prototyping', 'Visual Design', 'Creative Coding', 'React', 'Three.js'].map(skill => (
                                <span key={skill} style={{
                                    padding: '0.8rem 1.5rem',
                                    border: '2px solid #eee',
                                    borderRadius: '50px',
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    color: '#555'
                                }}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ padding: '4rem 0 8rem 0', textAlign: 'center' }}>
                    <motion.div
                        whileInView={{ scale: [0.95, 1] }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        style={{
                            background: '#222',
                            borderRadius: '50px',
                            padding: '6rem 2rem',
                            position: 'relative',
                            overflow: 'hidden',
                            color: 'white'
                        }}
                    >
                        {/* Dark Mode Bubbles */}
                        <div style={{ position: 'absolute', top: -50, left: -50, width: '200px', height: '200px', background: '#A0C4FF', borderRadius: '50%', opacity: 0.2, filter: 'blur(40px)' }}></div>
                        <div style={{ position: 'absolute', bottom: -50, right: -50, width: '250px', height: '250px', background: '#FFC6FF', borderRadius: '50%', opacity: 0.2, filter: 'blur(40px)' }}></div>

                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Let's make something<br />unforgettable.</h2>
                        <p style={{ fontSize: '1.3rem', color: '#aaa', marginBottom: '3rem' }}>Open for collaborations and fun projects.</p>

                        <a href="mailto:hello@eunseo.design" style={{
                            display: 'inline-block',
                            padding: '1.5rem 4rem',
                            background: 'white',
                            color: '#222',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 800,
                            fontSize: '1.2rem',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            Say Hello 👋
                        </a>
                    </motion.div>
                </section>

                <footer style={{ padding: '3rem 0', borderTop: '1px solid #f0f0f0', textAlign: 'center', color: '#bbb', fontSize: '0.9rem', fontWeight: 500 }}>
                    © 2025 Eunseo Kim. Crafted with 💜.
                </footer>
            </main>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        layoutId={`work-${selectedWork.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(255, 255, 255, 0.98)',
                            zIndex: 2000,
                            padding: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <motion.button
                            onClick={(e) => { e.stopPropagation(); setActiveWork(null); }}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '30px',
                                background: '#f0f0f0',
                                border: 'none',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 201
                            }}
                        >
                            ×
                        </motion.button>

                        <div style={{ width: '100%', maxWidth: '1100px', height: '90vh', display: 'flex', flexDirection: 'column', overflowY: 'auto', padding: '1rem' }}>
                            <div style={{
                                flex: '0 0 auto',
                                width: '100%',
                                height: '60vh',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
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
                                            background: 'rgba(255,255,255,0.9)',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '60px',
                                            height: '60px',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
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
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#f9f9f9' }}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: `${selectedWork.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: selectedWork.color }}>
                                        <span>No Image Available</span>
                                    </div>
                                )}

                                {/* Image Counter */}
                                {selectedWork.images && selectedWork.images.length > 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '30px',
                                        right: '30px',
                                        background: 'rgba(255,255,255,0.9)',
                                        color: '#333',
                                        padding: '8px 16px',
                                        borderRadius: '30px',
                                        fontSize: '0.9rem',
                                        fontWeight: 700,
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}>
                                        {currentImageIndex + 1} / {selectedWork.images.length}
                                    </div>
                                )}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                            >
                                <span style={{
                                    background: selectedWork.color,
                                    color: '#fff',
                                    padding: '0.5rem 1.2rem',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    display: 'inline-block',
                                    marginBottom: '1rem'
                                }}>
                                    {selectedWork.category}
                                </span>
                                <h2 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1.5rem 0', color: '#222', lineHeight: 1.1 }}>{selectedWork.title}</h2>
                                <p style={{ fontSize: '1.2rem', lineHeight: 1.7, color: '#555' }}>
                                    This project explores the relationship between digital interfaces and human perception.
                                    Designed with a focus on usability and aesthetic pleasure.
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
