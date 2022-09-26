import React from "react";
import { FooterBase } from "./styles";
import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaNpm,
    FaYarn,
    FaDatabase,
    FaCss3,
    FaPhp,
} from "react-icons/fa";

const Footer: React.FC = (props) => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <FooterBase>
            <div>
                <div>
                    <FaHtml5 size={40} style={{ color: "#EB3C32" }} />
                </div>
                <div>
                    <FaCss3 size={40} style={{ color: "#016EB6" }} />
                </div>
                <div>
                    <FaReact size={40} style={{ color: "#7AE3F8" }} />
                </div>
                <div>
                    <FaNodeJs size={40} style={{ color: "#7CB701" }} />
                </div>
                <div>
                    <FaNpm size={40} style={{ color: "#EB3C32" }} />
                </div>
                <div>
                    <FaYarn size={40} style={{ color: "#00F67E" }} />
                </div>
                <div>
                    <FaDatabase size={40} style={{ color: "#F6B524" }} />
                </div>
               
            </div>

            <span>
                Políticas de Privacidade | Copyright {year} © - Marcelo Cerqueira
                {/* <span className="coraçao" style={{ color: "#EB3C32" }}>❤</span> */}
            </span>
        </FooterBase>
    );
};

export default Footer;
