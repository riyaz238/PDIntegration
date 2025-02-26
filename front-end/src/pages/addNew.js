"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_1 = __importDefault(require("@emotion/styled"));
const pain_diary3_png_1 = __importDefault(require("../assets/pain-diary3.png"));
const bs_1 = require("react-icons/bs");
const hooks_1 = require("../hooks");
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
  z-index: -1; /* Putting the image behind other content */
`;
const QuestionSection = styled_1.default.div `
  position: realtive;
  width: 100%;
  height: 85%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(256, 256, 256, 0.8);
  border-radius: 10px;
  color: black;
  backdrop-filter: blur(8px);
`;
const QuestionContainer = styled_1.default.div `
  margin-top: 10px;
  width:90%
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
const time = [
    "08 AM",
    "10 AM",
    "12 PM",
    "02 PM",
    "04 PM",
    "06 PM",
    "08 PM",
    "10 PM",
    "00 AM",
    "02 AM",
    "04 AM",
    "06 AM",
];
const ButtonContainer = styled_1.default.div `
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  gap: 5px;
`;
const QuestionButton = styled_1.default.button `
  background-color: ${({ isAnswered, isNext }) => isAnswered ? "darkGreen" : isNext ? "lightBlue" : "rgba(0, 0, 0, 0.1)"};
  color: black;
  width: 60px; /* Increased width to fit text */
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  disabled: {isAnswered};
`;
const Heading = styled_1.default.h2 `
  font-size: 24px;
  width: 90%;
  text-align: center;
  word-spacing: -0.1em;
`;
const EmojiContainer = styled_1.default.div `
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 0px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
  width: 80%;
`;
const EmojiWrapper = styled_1.default.div `
  position: relative;
  font-size: 30px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: "${({ isSelected }) => (isSelected ? "✔️" : "")}";
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 20px;
    color: green;
  }
`;
const Emojis = [
    <bs_1.BsEmojiSmile color="darkGreen"/>,
    <bs_1.BsEmojiWink color="darkGreen"/>,
    <bs_1.BsEmojiNeutral color="green"/>,
    <bs_1.BsEmojiNeutral color="green"/>,
    <bs_1.BsEmojiExpressionless color="orange"/>,
    <bs_1.BsEmojiExpressionless color="orange"/>,
    <bs_1.BsEmojiAstonished color="red"/>,
    <bs_1.BsEmojiAstonished color="red"/>,
    <bs_1.BsEmojiTear color="darkRed"/>,
    <bs_1.BsEmojiTear color="darkRed"/>,
];
const FormContainer = styled_1.default.div `
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 90%;
  height: 100%;
`;
const FormWrapper = styled_1.default.form `
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 95%;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`;
const Table = styled_1.default.table `
  width: 90%;
  border-collapse: collapse;

  td {
    padding: 10px;
    text-align: left;
  }
  label {
    font-weight: bold;
  }
`;
const StyledTextArea = styled_1.default.textarea `
  width: 100%;
  min-height: 100px;
  resize: vertical;
  padding: 8px;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
const SelectWrapper = styled_1.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
// Styled select dropdown
const StyledSelect = styled_1.default.select `
  width: 80px;
  padding: 5px;
  font-size: 16px;
  border: 0px;
  border-radius: 8px;
  background-color: white;
  color: #333;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 91, 187, 0.5);
  }
`;
// Styled option (optional, mostly controlled by the browser)
const StyledOption = styled_1.default.option `
  background-color: white;
  color: black;
`;
const SubmitButton = styled_1.default.button `
  background: rgba(20, 20, 20, 0.5);
  color: white;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: green;
  }
  margin-left: 10px;
`;
const AddNewPage = () => {
    const [answeredQuestions, setAnsweredQuestions] = (0, react_1.useState)(new Array(time.length).fill(false));
    const [submitDisabled, setSubmitDisabled] = (0, react_1.useState)(false);
    const [isNext, setIsNext] = (0, react_1.useState)(1);
    const [selectedEmojiIndex, setSelectedEmojiIndex] = (0, react_1.useState)(0);
    const [formData, setFormData] = (0, react_1.useState)({
        patientId: "123456",
        date: "23-02-2025",
        activity: "",
        painlevel: "",
        medication: "",
        timePeriod: "08 AM",
    });
    const { mutate } = (0, hooks_1.useAddPainDiary)();
    const today = new Date().toDateString();
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnsweredQuestions = [...answeredQuestions];
        newAnsweredQuestions[isNext - 1] = true;
        setAnsweredQuestions(newAnsweredQuestions);
        for (let i = isNext + 1; i <= time.length + 1; i++) {
            if (i == time.length + 1) {
                setIsNext(0);
                setSubmitDisabled(true);
            }
            else if (answeredQuestions[i - 1]) {
                continue;
            }
            else {
                setIsNext(i);
                break;
            }
        }
        mutate(formData);
        /* setFormData({
          patientId: "",
          date: "",
          activity: "",
          painlevel: "",
          medication: "",
          timePeriod: "",
        }); */
    };
    const handleSelectChange = (e) => {
        const painLevel = e.target.value;
        setFormData(Object.assign(Object.assign({}, formData), { painlevel: painLevel }));
        setSelectedEmojiIndex(parseInt(painLevel) - 1);
    };
    const handleEmojiClick = (index) => {
        setSelectedEmojiIndex(index);
        setFormData(Object.assign(Object.assign({}, formData), { painlevel: "" + (index + 1) }));
        formData.painlevel = `index`;
    };
    return (<PageContainer>
      <BackgroundImage src={pain_diary3_png_1.default} alt="Large Background"/>
      <Heading>Start recording your details for today</Heading>
      <FormContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <QuestionSection>
            <QuestionContainer>
              <p>
                Date: {today} / Time:{" "}
                {isNext === 1 ? time[time.length - 1] : time[isNext - 2]} AM
                till {time[isNext - 1]}
              </p>
            </QuestionContainer>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name">Activity:</label>
                  </td>
                  <td>
                    <StyledTextArea id="activity" name="activity" value={formData.activity} onChange={handleChange} required rows={6} cols={60}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="painLevel">Pain Level Felt:</label>
                  </td>
                  <td>
                    <SelectWrapper>
                      <StyledSelect id="painLevel" name="painLevel" value={formData.painlevel} onChange={handleSelectChange} required>
                        <StyledOption value="0">Select</StyledOption>
                        <StyledOption value="1">1</StyledOption>
                        <StyledOption value="2">2</StyledOption>
                        <StyledOption value="3">3</StyledOption>
                        <StyledOption value="4">4</StyledOption>
                        <StyledOption value="5">5</StyledOption>
                        <StyledOption value="6">6</StyledOption>
                        <StyledOption value="7">7</StyledOption>
                        <StyledOption value="8">8</StyledOption>
                        <StyledOption value="9">9</StyledOption>
                        <StyledOption value="10">10</StyledOption>
                      </StyledSelect>
                    </SelectWrapper>

                    <EmojiContainer>
                      {Emojis.map((emoji, index) => (<EmojiWrapper key={index} isSelected={selectedEmojiIndex === index} onClick={() => handleEmojiClick(index)}>
                          {emoji}
                        </EmojiWrapper>))}
                    </EmojiContainer>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Medication if any:</label>
                  </td>
                  <td>
                    <StyledTextArea id="medication" name="medication" value={formData.medication} onChange={handleChange} required rows={3} cols={60}/>
                  </td>
                </tr>
              </tbody>
            </Table>
          </QuestionSection>
          <ButtonContainer>
            {time.map((label, index) => (<QuestionButton key={index} isAnswered={answeredQuestions[index]} isNext={index === isNext - 1} onClick={(e) => {
                e.preventDefault();
                setIsNext(index + 1);
            }}>
                {label}
              </QuestionButton>))}
            <SubmitButton disabled={submitDisabled} type="submit">
              Submit
            </SubmitButton>
          </ButtonContainer>
        </FormWrapper>
      </FormContainer>
    </PageContainer>);
};
exports.default = AddNewPage;
