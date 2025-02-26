"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const navbar_1 = __importDefault(require("./components/navbar"));
const home_1 = __importDefault(require("./pages/home"));
const history_1 = __importDefault(require("./pages/history"));
const addNew_1 = __importDefault(require("./pages/addNew"));
const instructions_1 = __importDefault(require("./pages/instructions"));
const AppRoutes = () => (<>
    <navbar_1.default /> {/* Navbar is now inside Router */}
    <react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<home_1.default />}/>
      <react_router_dom_1.Route path="/instructions" element={<instructions_1.default />}/>
      <react_router_dom_1.Route path="/new-record" element={<addNew_1.default />}/>
      <react_router_dom_1.Route path="/history" element={<history_1.default />}/>
    </react_router_dom_1.Routes>
  </>);
exports.default = AppRoutes;
