import FormBox from '../components/FormBox';

// *PAGE: StartProject 페이지
const StartProject = () => {
    return (
        <main className="start_project">
            <section className="simple">
                <div className="container">
                    <h2>Design In, Code Out. Simple.</h2>
                    <p className="subtitle">
                        We turn your designs into frontend code, so you can focus on backend magic
                    </p>

                    <div className="process_steps">
                        <div className="step">
                            <div className="circle">
                                <img src="/images/h_i1.png" alt="Design Submission Icon" />
                                <span className="number">1</span>
                            </div>
                            <div className="line"></div>
                            <div className="step_content">
                                <strong>Design Submission</strong>
                                <p>Submit any design: Figma, images, sketches. Get a fast quote.</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="circle">
                                <img src="/images/h_i2.png" alt="Requirement Check Icon" />
                                <span className="number">2</span>
                            </div>
                            <div className="line"></div>
                            <div className="step_content">
                                <strong>Requirement Check</strong>
                                <p>Figma link creation, customer-tailored design consultation & revisions.</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="circle">
                                <img src="/images/h_i3.png" alt="Development Icon" />
                                <span className="number">3</span>
                            </div>
                            <div className="line"></div>
                            <div className="step_content">
                                <strong>Development</strong>
                                <p>Our team converts your design into code with updates along the way</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="circle">
                                <img src="/images/h_i4.png" alt="Review & Revisions Icon" />
                                <span className="number">4</span>
                            </div>
                            <div className="line"></div>
                            <div className="step_content">
                                <strong>Review & Revisions</strong>
                                <p>You check the preview, and we make final tweaks</p>
                            </div>
                        </div>

                        <div className="step">
                            <div className="circle">
                                <img src="/images/h_i5.png" alt="Final Delivery Icon" />
                                <span className="number">5</span>
                            </div>
                            <div className="step_content">
                                <strong>Final Delivery</strong>
                                <p>Get your fully coded files, ready to integrate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inquiry">
                <div className="container">
                    <h2 className="title">Inquiry / Quote</h2>
                    <p className="sub_title">Have questions? We're here to provide you with a speedy quote</p>
                    <div className="i_wrap">
                        <div className="left">
                            <div className="il_item">
                                <div className="box">
                                    <img src="/images/h_s2_i1.png" alt="" />
                                </div>
                                <p className="iq_text">Quick Quote Consultation</p>
                            </div>
                            <div className="il_item">
                                <div className="box">
                                    <img src="/images/h_s2_i2.png" alt="" />
                                </div>
                                <p className="iq_text">Response within 24 hours</p>
                            </div>
                            <div className="il_item">
                                <div className="box">
                                    <img src="/images/h_s2_i3.png" alt="" />
                                </div>
                                <p className="iq_text">
                                    Expert guidance from
                                    <br /> experienced professionals
                                </p>
                            </div>
                            <div className="il_item">
                                <div className="box">
                                    <img src="/images/h_s2_i4.png" alt="" />
                                </div>
                                <p className="iq_text">
                                    Secure and
                                    <br /> confidential process
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <FormBox buttonText="Request Free Consultation" showTimeGuarantee={true} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StartProject;
