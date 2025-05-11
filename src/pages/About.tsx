import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <main className="about">
            <section className="intro">
                <div className="container">
                    <h2 className="title">
                        Not AI,
                        <br /> but Experts We deliver flawless code,
                        <br />
                        crafted by professionals.{' '}
                    </h2>
                    <p className="sub_title">
                        Converting design to code isn't easy. Any Image to Code provides precision and <br />
                        perfection beyond AI, transforming your design into pixel-perfect code.
                    </p>
                    <ul>
                        <li>
                            <div className="left">
                                <strong>Pixel-Perfect HTML/CSS</strong>
                                <p>
                                    Every element is positioned and
                                    <br />
                                    styled exactly as in your design file.
                                </p>
                            </div>
                            <div className="right">
                                <div className="r_box">
                                    <img src="/images/a_s1_i1.png" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <strong>Responsive Web Publishing</strong>
                                <p>
                                    Optimized for all devices,
                                    <br /> from mobile to desktop.
                                </p>
                            </div>
                            <div className="right">
                                <div className="r_box">
                                    <img src="/images/a_s1_i2.png" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <strong>JavaScript Features</strong>
                                <p>
                                    Seamlessly integrate animations,
                                    <br /> sliders, modals, and more.
                                </p>
                            </div>
                            <div className="right">
                                <div className="r_box">
                                    <img src="/images/a_s1_i3.png" alt="" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <strong>FTP Upload & SEO Optimization</strong>
                                <p>
                                    We deploy your site and ensure
                                    <br />
                                    SEO-friendly code.
                                </p>
                            </div>
                            <div className="right">
                                <div className="r_box">
                                    <img src="/images/a_s1_i4.png" alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="difference">
                <div className="container">
                    <h2 className="title">AI vs. Any Image to Code</h2>
                    <p className="sub_title">
                        See the difference between automated AI code conversion and our expert service.
                    </p>

                    <table>
                        <thead>
                            <tr>
                                <th className="th1">Feature</th>
                                <th className="th2 th_ai">AI Code Conversion</th>
                                <th className="th3">Any Image To Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className="tr_wrap tr_wrap1"
                                onClick={() => handleAccordionClick(1)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="td1">
                                    <strong>Design Accuracy</strong>
                                </td>
                                <td className="td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i1.png" alt="X" /> <strong>Limited</strong>
                                    </div>
                                    <span>Pixel misalignment, layout issues</span>
                                </td>
                                <td className="td2 m_td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i2.png" alt="Check" />{' '}
                                        <strong>100% Pixel-Perfect</strong>
                                    </div>
                                    <span>Identical to the design file</span>
                                </td>
                                <td className="down">
                                    <img
                                        src="/images/arr_down2.png"
                                        alt=""
                                        className={openAccordion === 1 ? 'rotated' : ''}
                                    />
                                </td>
                            </tr>
                            <tr className="tr_des tr_des1" style={{ display: openAccordion === 1 ? 'flex' : 'none' }}>
                                <td className="left">
                                    <h4 className="des_title">AI Code Conversion</h4>
                                    <img src="/images/about_design2.gif" alt="" />
                                    <span>설명</span>
                                </td>
                                <td className="right">
                                    <h4 className="des_title">Any Image To Code</h4>
                                    <img src="/images/about_design1.gif" alt="" />
                                    <span>설명</span>
                                </td>
                            </tr>
                            <tr
                                className="tr_wrap tr_wrap2"
                                onClick={() => handleAccordionClick(2)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="td1">
                                    <strong>Responsive Support</strong>
                                </td>
                                <td className="td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i1.png" alt="X" /> <strong>Basic</strong>
                                    </div>
                                    <span>Applies templates only, lacks optimization</span>
                                </td>
                                <td className="td2 m_td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i2.png" alt="Check" /> <strong>Fully Optimized</strong>
                                    </div>
                                    <span>Perfect for mobile, tablet, and desktop</span>
                                </td>
                                <td className="down">
                                    <img
                                        src="/images/arr_down2.png"
                                        alt=""
                                        className={openAccordion === 2 ? 'rotated' : ''}
                                    />
                                </td>
                            </tr>
                            <tr className="tr_des tr_des2" style={{ display: openAccordion === 2 ? 'flex' : 'none' }}>
                                <td className="left">
                                    <h4 className="des_title">AI Code Conversion</h4>
                                    <img src="/images/about_responsive2.gif" alt="" />
                                    <span>설명</span>
                                </td>
                                <td className="right">
                                    <h4 className="des_title">Any Image To Code</h4>
                                    <img src="/images/about_responsive1.gif" alt="" />
                                    <span>설명</span>
                                </td>
                            </tr>
                            <tr
                                className="tr_wrap tr_wrap3"
                                onClick={() => handleAccordionClick(3)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="td1">
                                    <strong>Code Quality</strong>
                                </td>
                                <td className="td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i1.png" alt="X" /> <strong>Inefficient</strong>
                                    </div>
                                    <span>Excessive , messy class names, non-standard code</span>
                                </td>
                                <td className="td2 m_td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i2.png" alt="Check" />{' '}
                                        <strong>Clean & Structured</strong>
                                    </div>
                                    <span>Uses semantic tags, readable, and easy to maintain</span>
                                </td>
                                <td className="down">
                                    <img
                                        src="/images/arr_down2.png"
                                        alt=""
                                        className={openAccordion === 3 ? 'rotated' : ''}
                                    />
                                </td>
                            </tr>
                            <tr className="tr_des tr_des3" style={{ display: openAccordion === 3 ? 'flex' : 'none' }}>
                                <td className="left">
                                    <h4 className="des_title">AI Code Conversion</h4>
                                    <pre>
                                        <code className="lang-html">
                                            <div>
                                                &lt;<div className="tag">div </div>
                                                <div className="class">className</div>="
                                                <div className="attr">wrapper flex items-center justify-center</div>
                                                "&gt;
                                            </div>

                                            <br />

                                            <div className="code_left">
                                                &lt;<div className="tag">div </div>
                                                <div className="class">className</div>="
                                                <div className="attr">
                                                    card-container p-4 bg-white shadow-md rounded-lg
                                                </div>
                                                "&gt;
                                            </div>

                                            <br />

                                            <div className="code_left2">
                                                &lt;
                                                <div className="tag">div </div>
                                                <div className="class">className</div>
                                                ="<div className="attr">card-content w-full</div>"&gt;
                                            </div>
                                            <br />

                                            <div className="code_left3">
                                                &lt;
                                                <div className="tag">h2 </div>
                                                <div className="class">className</div>
                                                ="<div className="attr">card-title text-lg font-bold</div>"&gt;
                                                <br />
                                                <div className="code_left4">
                                                    <div className="mark">&#123;</div>
                                                    <div className="">title</div>
                                                    <div className="mark">&#125;</div>
                                                </div>
                                                <br />
                                                &lt;
                                                <div className="tag">/h2</div>&gt;
                                            </div>

                                            <br />

                                            <div className="code_left3">
                                                &lt;<div className="tag">p</div>
                                                <div className="class">className</div>="
                                                <div className="attr">card-description text-gray-600</div>"&gt;
                                                <br />
                                                <div className="code_left4">
                                                    <div className="mark">&#123;</div>
                                                    <div className="">description</div>
                                                    <div className="mark">&#125;</div>
                                                </div>
                                                <br />
                                                &lt;
                                                <div className="tag">/p</div>&gt;
                                            </div>

                                            <br />
                                            <div className="code_left2">
                                                &lt;<div className="tag">/div</div>&gt;
                                            </div>

                                            <br />

                                            <div className="code_left">
                                                &lt;<div className="tag">/div</div>&gt;
                                            </div>

                                            <br />

                                            <div>
                                                &lt;<div className="tag">/div</div>&gt;
                                            </div>
                                        </code>
                                    </pre>

                                    <span>설명</span>
                                </td>
                                <td className="right">
                                    <h4 className="des_title">Any Image To Code</h4>

                                    <pre>
                                        <code className="lang-html">
                                            <div>
                                                &lt;<div className="tag">div </div>
                                                <div className="class">className</div>="
                                                <div className="attr">card p-4 bg-white shadow-md rounded-lg</div>"&gt;
                                            </div>

                                            <br />

                                            <div className="code_left">
                                                &lt;
                                                <div className="tag">h2</div>
                                                <div className="class">className</div>
                                                ="<div className="attr">text-lg font-bold</div>"&gt;
                                                <br />
                                                <div className="code_left4">
                                                    <div className="mark">&#123;</div>
                                                    <div className="">title</div>
                                                    <div className="mark">&#125;</div>
                                                </div>
                                                <br />
                                                &lt;
                                                <div className="tag">/h2</div>&gt;
                                            </div>

                                            <br />

                                            <div className="code_left">
                                                &lt;<div className="tag">p</div>
                                                <div className="class">className</div>="
                                                <div className="attr">text-gray-600</div>"&gt;
                                                <br />
                                                <div className="code_left4">
                                                    <div className="mark">&#123;</div>
                                                    <div className="">description</div>
                                                    <div className="mark">&#125;</div>
                                                </div>
                                                <br />
                                                &lt;
                                                <div className="tag">/p</div>&gt;
                                            </div>

                                            <br />

                                            <div>
                                                &lt;<div className="tag">/div</div>&gt;
                                            </div>
                                        </code>
                                    </pre>
                                    <span>설명</span>
                                </td>
                            </tr>
                            <tr
                                className="tr_wrap tr_wrap4"
                                onClick={() => handleAccordionClick(4)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="td1">
                                    <strong>Custom Features</strong>
                                </td>
                                <td className="td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i1.png" alt="X" /> <strong>Not possible</strong>
                                    </div>
                                    <span>Limited dynamic functionality</span>
                                </td>
                                <td className="td2 m_td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i2.png" alt="Check" />{' '}
                                        <strong>Fully Customizable</strong>
                                    </div>
                                    <span>Supports animations, interactions, and complex features</span>
                                </td>
                                <td className="down">
                                    <img
                                        src="/images/arr_down2.png"
                                        alt=""
                                        className={openAccordion === 4 ? 'rotated' : ''}
                                    />
                                </td>
                            </tr>
                            <tr className="tr_des tr_des4" style={{ display: openAccordion === 4 ? 'flex' : 'none' }}>
                                <td>
                                    While AI-based code generators can handle basic static layouts, they often fall
                                    short when it comes to dynamic features, complex animations, user interactions, or
                                    data-driven components. These advanced functionalities usually require additional
                                    manual development. <br /> <br />
                                    <strong>Any Image To Code</strong> offers fully customized solutions — we hand-code
                                    advanced animations, interactive UI components, responsive layouts, and even data
                                    visualizations. Every detail is tailored to your specific needs, ensuring your
                                    design is brought to life exactly as intended.
                                </td>
                            </tr>
                            <tr
                                className="tr_wrap tr_wrap5 tr_wrap_last"
                                onClick={() => handleAccordionClick(5)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="td1">
                                    <strong>SEO Optimization</strong>
                                </td>
                                <td className="td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i1.png" alt="X" /> <strong>Poor</strong>
                                    </div>
                                    <span>Autogenerated code, lacks meta optimization</span>
                                </td>
                                <td className="td2 m_td2">
                                    <div className="top">
                                        <img src="/images/a_s2_i2.png" alt="Check" /> <strong>SEO-Friendly</strong>
                                    </div>
                                    <span>Semantic markup and optimized meta tags</span>
                                </td>
                                <td className="down">
                                    <img
                                        src="/images/arr_down2.png"
                                        alt=""
                                        className={openAccordion === 5 ? 'rotated' : ''}
                                    />
                                </td>
                            </tr>
                            <tr className="tr_des tr_des5" style={{ display: openAccordion === 5 ? 'flex' : 'none' }}>
                                <td>
                                    AI-generated code rarely prioritizes SEO. It often lacks semantic HTML structure,
                                    proper metadata, and accessibility considerations — all of which are critical for
                                    ranking well on search engines. <br /> <br />
                                    <strong>Any Image To Code</strong> follows SEO best practices from the start. We use
                                    semantic tags like &lt;header&gt;, &lt;nav &gt;, and &lt;section&gt;, implement
                                    meaningful metadata, and ensure your site is both search-friendly and accessible to
                                    all users.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <p>*AI only provides basic code conversion, but we deliver high-quality results.</p>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <h2>Your Project Deserves More Than AI</h2>
                    <p>Send us your design, and we'll handle the rest.</p>
                    <Link to="/start-project" className="btn btn_shadow">
                        Request Free Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default About;
