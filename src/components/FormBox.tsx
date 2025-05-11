import { useState, ChangeEvent, FormEvent } from 'react';

// *component: 폼 박스 컴포넌트
// #ISSUE: 폼 데이터(이름, 이메일, 메시지)와 파일 업로드 처리 백엔드 API 구현 필요

interface FormBoxProps {
    buttonText?: string;
    className?: string;
    showTimeGuarantee?: boolean;
    formId?: string;
    onSubmit?: (e: FormEvent) => void;
}

const FormBox = ({
    buttonText = 'Get Your Free Quote',
    className = '',
    showTimeGuarantee = false,
    formId = 'contact-form',
    onSubmit,
}: FormBoxProps) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName(null);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        } else {
            console.log('Form submitted - functionality to be implemented by backend developer');
        }
    };

    return (
        <form
            id={formId}
            className={`form_box ${className}`}
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
        >
            <div className="list list1">
                <div className="item">
                    <label htmlFor={`${formId}-name`} className="title">
                        Your Name
                    </label>
                    <input type="text" id={`${formId}-name`} name="name" placeholder="Enter your name" required />
                </div>
                <div className="item">
                    <label htmlFor={`${formId}-email`} className="title">
                        Email Address
                    </label>
                    <input type="email" id={`${formId}-email`} name="email" placeholder="Enter your email" required />
                </div>
            </div>

            <div className="list list2">
                <label htmlFor={`${formId}-file`} className="title">
                    Attach File
                </label>
                <div className="file_box">
                    {!fileName && <span className="upload">Choose File to Upload</span>}
                    {fileName && <span className="selected">{fileName}</span>}

                    <input
                        type="file"
                        id={`${formId}-file`}
                        name="attachment"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor={`${formId}-file`} className="btn btn_green">
                        {fileName ? 'change file' : 'upload file'}
                    </label>
                </div>
            </div>

            <div className="list list3">
                <label htmlFor={`${formId}-message`} className="title">
                    Message
                </label>
                <textarea
                    id={`${formId}-message`}
                    name="message"
                    placeholder="Describe your project and any specific requirements"
                    required
                ></textarea>
            </div>

            <div className="btn_box">
                <button type="submit" className="btn btn_shadow">
                    {buttonText}
                </button>
            </div>

            {showTimeGuarantee && (
                <div className="time">
                    <img src="/images/h_s3_i1.png" alt="" />
                    <p>Guaranteed response within 24 hours</p>
                </div>
            )}
        </form>
    );
};

export default FormBox;
