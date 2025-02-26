"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_1 = __importDefault(require("@emotion/styled"));
const pain_diary3_png_1 = __importDefault(require("../assets/pain-diary3.png"));
const painCharts_1 = __importDefault(require("../components/painCharts"));
const PageContainer = styled_1.default.div `
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BackgroundImage = styled_1.default.img `
  width: 100%;
  height: 100%;
  opacity: 0.1;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; /* Puts the image behind other content */
`;
const HistoryPage = () => (<PageContainer>
    <BackgroundImage src={pain_diary3_png_1.default} alt="Large Background"/>
    <painCharts_1.default />
  </PageContainer>);
exports.default = HistoryPage;
