import { useEffect, useState, useRef } from 'react';
import FormBox from '../components/FormBox';

// *PAGE: 메인 페이지
export default function Main() {
    const ctaRef = useRef<HTMLElement>(null);

    const scrollToCta = () => {
        ctaRef.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    // FAQ 각 항목의 열림/닫힘 상태 관리
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // FAQ 클릭 시 토글
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // FAQ 데이터 (질문과 답변)
    const faqs = [
        {
            question: 'What design files do you support?',
            answer: 'We support design tool files like Figma, Adobe XD, Sketch, as well as image files such as JPG, PNG, and PDF.',
        },
        {
            question: 'How long does it take to complete a project?',
            answer: 'We support design tool files like Figma, Adobe XD, Sketch, as well as image files such as JPG, PNG, and PDF.',
        },
        {
            question: 'Do you make the design responsive?',
            answer: 'We support design tool files like Figma, Adobe XD, Sketch, as well as image files such as JPG, PNG, and PDF.',
        },
        {
            question: 'Can I place an order without a design file?',
            answer: 'We support design tool files like Figma, Adobe XD, Sketch, as well as image files such as JPG, PNG, and PDF.',
        },
        {
            question: 'Is the code easy for developers to maintain?',
            answer: 'We support design tool files like Figma, Adobe XD, Sketch, as well as image files such as JPG, PNG, and PDF.',
        },
    ];

    // 현재 활성화된 단계 관리
    const [activeStep, setActiveStep] = useState(-1); // -1로 초기화
    const [isResetting, setIsResetting] = useState(false); // 초기화 상태 관리

    useEffect(() => {
        const steps = [
            { circle: 1, line: null }, // circle 1
            { circle: null, line: 1 }, // line 1
            { circle: 2, line: null }, // circle 2
            { circle: null, line: 2 }, // line 2
            { circle: 3, line: null }, // circle 3
        ];

        let interval: ReturnType<typeof setInterval>;
        const initialDelay = setTimeout(() => {
            setActiveStep(0); // 첫 단계 시작
            interval = setInterval(() => {
                setActiveStep((prev) => {
                    if (prev === steps.length - 1) {
                        // 마지막 단계(03)에서 초기화
                        setIsResetting(true); // 애니메이션 비활성화
                        setTimeout(() => {
                            setIsResetting(false); // 애니메이션 재활성화
                            setActiveStep(0); // 01부터 재시작
                        }, 2000); // 2초 딜레이
                        return -1; // 즉시 초기화
                    }
                    return prev + 1;
                });
            }, 1500); // 1.5초마다 다음 단계
        }, 2000); // 초기 2초 딜레이

        // 정리
        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);

    return (
        <main className="main">
            <section className="hero">
                <img src="/images/logo_bg3.png" alt="" className="bg" />
                <div className="container">
                    <div className="hero_wrap">
                        <h2>Skip the Frontend Hassle</h2>
                        <p>
                            Get clean, production-ready <br /> HTML, CSS & JS from your design.
                            <br />
                            Focus on building your backend.
                        </p>
                        <div className="img_box">
                            <img src="/images/hero1.png" alt="" className="ib1" />
                            <img src="/images/hero2.png" alt="" className="ib2" />
                        </div>
                        <button type="button" onClick={scrollToCta} className="btn btn_primary">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
            <section className="process">
                <div className="container">
                    <h2>How It Works</h2>

                    <div className="steps">
                        <div className="step_line" id="stepLine">
                            <div className={`circle ${activeStep >= 0 ? 'on' : ''}`} data-step="1">
                                {activeStep >= 0 ? (
                                    <img src="/images/check.png" alt="Check" className="check-icon" />
                                ) : (
                                    '01'
                                )}
                            </div>
                            <div
                                className={`line ${activeStep >= 1 ? 'on' : ''} ${isResetting ? 'no-transition' : ''}`}
                            ></div>
                            <div className={`circle ${activeStep >= 2 ? 'on' : ''}`} data-step="2">
                                {activeStep >= 2 ? (
                                    <img src="/images/check.png" alt="Check" className="check-icon" />
                                ) : (
                                    '02'
                                )}
                            </div>
                            <div
                                className={`line ${activeStep >= 3 ? 'on' : ''} ${isResetting ? 'no-transition' : ''}`}
                            ></div>
                            <div className={`circle ${activeStep >= 4 ? 'on' : ''}`} data-step="3">
                                {activeStep >= 4 ? (
                                    <img src="/images/check.png" alt="Check" className="check-icon" />
                                ) : (
                                    '03'
                                )}
                            </div>
                        </div>

                        <div className="step_labels">
                            <span>
                                Submit
                                <br /> Your Design
                            </span>
                            <span>
                                Match &<br /> Development
                            </span>
                            <span>
                                Receive
                                <br /> Your Code
                            </span>
                        </div>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <img src="/images/pro1.png" alt="Submit Design" />
                            <p className="desc">
                                Provide your Figma, XD, or hand-drawn sketch. We'll assist in refining the details
                            </p>
                        </div>
                        <div className="card">
                            <img src="/images/pro2.png" alt="Match" />
                            <p className="desc">
                                Get paired with a skilled frontend developer. Track progress in real-time.
                            </p>
                        </div>
                        <div className="card">
                            <img src="/images/pro3.png" alt="Receive Code" />
                            <p className="desc">
                                Delivered as clean, production-ready HTML, CSS & JS. Ongoing support available if
                                needed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="message_box">
                <img src="/images/logo_bg3.png" alt="" className="bg" />
                <div className="container">
                    <div className="wrap">
                        <h2>
                            AI Can’t,
                            <br /> But We Can.
                        </h2>
                        <div className="right">
                            <div className="message message1">
                                <strong>From Any Image to Code</strong>
                                <p>
                                    Bring us any sketch—even hand-drawn—and we’ll turn it <br /> into clean,
                                    human-written HTML, CSS, and JavaScript.
                                </p>
                            </div>
                            <div className="message message2">
                                <strong>We Make Ugly Look Good</strong>
                                <p>
                                    Messy design? No problem.
                                    <br /> We refine and beautify it for a professional look
                                </p>
                            </div>
                            <div className="message message1">
                                <strong>Honest prices with high quality</strong>
                                <p>
                                    Get expert-level code for the price of an AI tool.
                                    <br /> No middlemen, just great results
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta" ref={ctaRef}>
                <img src="/images/m_s3_bg.png" alt="" />
                <div className="container">
                    <h2>Ready to turn your design into code?</h2>
                    <p>
                        Upload your design files, share your ideas, and we’ll turn them into high-quality, responsive
                        code. <br /> Fill out the form below to get started — it’s fast, easy, and free to request a
                        quote!
                    </p>
                    <FormBox buttonText="Get Your Free Quote" />
                </div>
            </section>

            <section className="faq">
                <div className="container">
                    <div className="faq_wrap">
                        <h2>FAQ</h2>
                        <ul>
                            {faqs.map((faq, index: number) => (
                                <li key={index}>
                                    <div
                                        className="question"
                                        onClick={() => toggleFaq(index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === 'Enter' && toggleFaq(index)}
                                    >
                                        <h3>{faq.question}</h3>
                                        <button type="button">
                                            <img
                                                src="/images/arr_down.png"
                                                alt={openFaq === index ? 'Close' : 'Open'}
                                                style={{
                                                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className="answer"
                                        style={{
                                            display: openFaq === index ? 'block' : 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <p>{faq.answer}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
