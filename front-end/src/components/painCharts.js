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
const recharts_1 = require("recharts");
// Styled container and toggle button using Emotion
const Container = styled_1.default.div `
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
`;
const ToggleContainer = styled_1.default.div `
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const ToggleButton = styled_1.default.button `
  padding: 10px 20px;
  margin: 0 5px;
  background: ${(props) => (props.active ? "#3498db" : "#ecf0f1")};
  color: ${(props) => (props.active ? "#fff" : "#2c3e50")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${(props) => (props.active ? "#2980b9" : "#bdc3c7")};
  }
`;
/**
 * Color Code:
 *  - Pain Level:    #8884d8
 *  - Paracetamol:   #82ca9d
 *  - Ibuprofen:     #ffc658
 */
const COLORS = {
    pain: "#8884d8",
    paracetamol: "#82ca9d",
    ibuprofen: "#ffc658",
};
// Utility: generate a random pain level between 0 and 10
const generateRandomPainLevel = () => {
    return Math.round(Math.random() * 10);
};
// Generate data for the current day (12 points: every 2 hours)
const generateDayData = () => {
    const data = [];
    for (let hour = 0; hour < 24; hour += 2) {
        const pain = generateRandomPainLevel();
        const timeLabel = `${hour.toString().padStart(2, "0")}:00`;
        data.push({
            time: timeLabel,
            pain,
            paracetamol: parseFloat((pain * 0.2).toFixed(2)),
            ibuprofen: parseFloat((pain * 0.1).toFixed(2)),
        });
    }
    return data;
};
// Generate average pain level data for the past N days
const generateAverageData = (days) => {
    const data = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const pain = generateRandomPainLevel();
        // Format as "M/D"
        const dateLabel = `${date.getMonth() + 1}/${date.getDate()}`;
        data.push({
            time: dateLabel,
            pain,
            paracetamol: parseFloat((pain * 0.2).toFixed(2)),
            ibuprofen: parseFloat((pain * 0.1).toFixed(2)),
        });
    }
    return data;
};
const PainChartComponent = () => {
    // The range can be 'day', '7days', or '30days'
    const [selectedRange, setSelectedRange] = (0, react_1.useState)("day");
    const [chartData, setChartData] = (0, react_1.useState)([]);
    // Update the chart data whenever the selected range changes
    (0, react_1.useEffect)(() => {
        if (selectedRange === "day") {
            setChartData(generateDayData());
        }
        else if (selectedRange === "7days") {
            setChartData(generateAverageData(7));
        }
        else if (selectedRange === "30days") {
            setChartData(generateAverageData(30));
        }
    }, [selectedRange]);
    return (<Container>
      <ToggleContainer>
        <ToggleButton active={selectedRange === "day"} onClick={() => setSelectedRange("day")}>
          Today
        </ToggleButton>
        <ToggleButton active={selectedRange === "7days"} onClick={() => setSelectedRange("7days")}>
          Last 7 Days
        </ToggleButton>
        <ToggleButton active={selectedRange === "30days"} onClick={() => setSelectedRange("30days")}>
          Last 30 Days
        </ToggleButton>
      </ToggleContainer>
      <recharts_1.ResponsiveContainer width="100%" height={400}>
        <recharts_1.LineChart data={chartData}>
          <recharts_1.CartesianGrid strokeDasharray="3 3"/>
          <recharts_1.XAxis dataKey="time"/>
          <recharts_1.YAxis domain={[0, 10]}/>
          <recharts_1.Tooltip />
          <recharts_1.Line type="monotone" dataKey="pain" stroke={COLORS.pain} dot={{ r: 3 }} activeDot={{ r: 5 }}/>
          <recharts_1.Line type="monotone" dataKey="paracetamol" stroke={COLORS.paracetamol} dot={{ r: 3 }} activeDot={{ r: 5 }}/>
          <recharts_1.Line type="monotone" dataKey="ibuprofen" stroke={COLORS.ibuprofen} dot={{ r: 3 }} activeDot={{ r: 5 }}/>
        </recharts_1.LineChart>
      </recharts_1.ResponsiveContainer>
    </Container>);
};
exports.default = PainChartComponent;
