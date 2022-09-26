"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs = require("fs");
var name = "JozianeNascimento";
function buscaInfoRepo() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get("https://api.github.com/users/" + name + "/repos");
        //console.log(response.data)
        var dados = response.data;
        fs.writeFile("./base_repo.json", JSON.stringify(dados, ["id", "name", "full_name", "size", "languages_url", "language"], 2), "utf-8", (error, result) => {
            if (error) {
                console.error(error);
                return;
            }
        });
    });
}
function leJson() {
    return __awaiter(this, void 0, void 0, function* () {
        fs.readFile("./base_repo.json", "utf-8", (error, data) => {
            try {
                const repos = JSON.parse(data);
                console.log(repos);
            }
            catch (e) {
                console.log(e);
            }
        });
    });
}
buscaInfoRepo();
leJson();
