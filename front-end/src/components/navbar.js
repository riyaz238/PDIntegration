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
const react_router_dom_1 = require("react-router-dom");
const Navbar = styled_1.default.nav `
  margin-right: 20px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 10px 6%;
  background: rgba(256, 256, 256, 0.1);
  border-radius: 5px;
  backdrop-filter: blur(2px);
  color: black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
`;
const UserMenu = styled_1.default.div `
  position: relative;
  display: inline-block;
`;
const Dropdown = styled_1.default.div `
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  right: 0px;
  background: rgba(256, 256, 256, 0.6);
  color: lightGray;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 120px;
  z-index: 1000;
`;
const DropdownItem = styled_1.default.button `
  display: block;
  width: 100%;
  padding: 5px;
  text-align: left;
  background: transparent;
  border: none;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  &:hover {
    background: transparent;
  }
`;
const NavbarComponent = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<Navbar>
      <div onClick={() => {
            navigate("/");
        }}>
        Pain Diary Home
      </div>
      <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
        }}>
        <UserMenu>
          <span onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
            Navigate to
          </span>
          <Dropdown isOpen={isOpen}>
            <DropdownItem onClick={() => {
            setIsOpen(false);
            navigate("/instructions");
        }}>
              Instructions
            </DropdownItem>
            <DropdownItem onClick={() => {
            setIsOpen(false);
            navigate("/new-record");
        }}>
              Add New
            </DropdownItem>
            <DropdownItem onClick={() => {
            setIsOpen(false);
            navigate("/history");
        }}>
              History
            </DropdownItem>
          </Dropdown>
        </UserMenu>
      </div>
    </Navbar>);
};
exports.default = NavbarComponent;
