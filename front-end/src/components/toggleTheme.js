"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_1 = __importDefault(require("@emotion/styled"));
const PageContainer = styled_1.default.div `
  min-height: 100vh;
  transition: background 0.3s ease;
  background: ${({ isBackgroundActive }) => isBackgroundActive
    ? `url('your-image-path.jpg') no-repeat center center fixed`
    : "#fff"};
  background-size: cover;
`;
const ToggleButton = styled_1.default.button `
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
const App = () => {
    const [isBackgroundActive, setIsBackgroundActive] = (0, react_1.useState)(false);
    return (<PageContainer isBackgroundActive={isBackgroundActive}>
      <ToggleButton onClick={() => setIsBackgroundActive((prev) => !prev)}>
        {isBackgroundActive ? "Remove Background" : "Apply Background"}
      </ToggleButton>
      {/* Additional page content can go here */}
    </PageContainer>);
};
exports.default = App;
