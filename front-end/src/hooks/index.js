"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddPainDiary = void 0;
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../api");
const useAddPainDiary = () => {
    return (0, react_query_1.useMutation)({
        mutationFn: (entry) => (0, api_1.addPainDiaryRecord)(entry),
    });
};
exports.useAddPainDiary = useAddPainDiary;
