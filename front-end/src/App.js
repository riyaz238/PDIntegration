"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const routes_1 = __importDefault(require("./routes"));
const react_query_1 = require("@tanstack/react-query");
const App = () => (<react_router_dom_1.BrowserRouter>
    <react_query_1.QueryClientProvider client={new react_query_1.QueryClient()}>
      <routes_1.default />
    </react_query_1.QueryClientProvider>
  </react_router_dom_1.BrowserRouter>);
exports.default = App;
