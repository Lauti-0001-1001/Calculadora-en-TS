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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var OpcionMenu;
(function (OpcionMenu) {
    OpcionMenu[OpcionMenu["sumar"] = 1] = "sumar";
    OpcionMenu[OpcionMenu["restar"] = 2] = "restar";
    OpcionMenu[OpcionMenu["multiplicar"] = 3] = "multiplicar";
    OpcionMenu[OpcionMenu["dividir"] = 4] = "dividir";
    OpcionMenu[OpcionMenu["reingreso"] = 5] = "reingreso";
    OpcionMenu[OpcionMenu["salida"] = 6] = "salida";
})(OpcionMenu || (OpcionMenu = {}));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, //constante de entrada y salida de respuesta
});
function ingresonum(pregunta) {
    return __awaiter(this, void 0, void 0, function () {
        var input, numero;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, new Promise(function (resolve) { return rl.question(pregunta, resolve); })];
                case 1:
                    input = _a.sent();
                    numero = parseFloat(input);
                    if (!isNaN(numero)) {
                        return [2 /*return*/, numero]; //ingreso de numero
                    }
                    else {
                        console.log("\nNumero invalido, reingrese el numero");
                    }
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    });
}
function mostrarelmenu(valor1, valor2) {
    return __awaiter(this, void 0, void 0, function () {
        var input, opcion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("\nMenu de opciones \nNumero 1: %d     Numero 2: %d", valor1, valor2);
                    console.log("\n1) Sumar");
                    console.log("\n2) Restar");
                    console.log("\n3) multiplicar"); //funcion de MOSTRAR el menu
                    console.log("\n4) dividir");
                    console.log("\n5) Ingresar nuevos numeros");
                    console.log("\n6) salir del programa");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, new Promise(function (resolve) { return rl.question("\nSeleccione una opcion:", resolve); })];
                case 2:
                    input = _a.sent();
                    opcion = parseInt(input);
                    if (!isNaN(opcion) && opcion >= 1 && opcion <= 6) //validar opcion
                     {
                        return [2 /*return*/, opcion];
                    }
                    else {
                        console.log("\nOpcion invalida, Ingrese nuevamente un numero con opcion correcta");
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var salir, valor1, valor2, opcion, _a, validacion;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    salir = false;
                    return [4 /*yield*/, ingresonum("\nIngrese el primer numero:\t")];
                case 1:
                    valor1 = _b.sent();
                    return [4 /*yield*/, ingresonum("\ningrese el segundo numero:\t")];
                case 2:
                    valor2 = _b.sent();
                    _b.label = 3;
                case 3:
                    if (!!salir) return [3 /*break*/, 15];
                    return [4 /*yield*/, mostrarelmenu(valor1, valor2)];
                case 4:
                    opcion = _b.sent();
                    _a = opcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 5];
                        case 2: return [3 /*break*/, 6];
                        case 3: return [3 /*break*/, 7];
                        case 4: return [3 /*break*/, 8];
                        case 5: return [3 /*break*/, 9];
                        case 6: return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 14];
                case 5:
                    {
                        console.log("\nresultado: %d", valor1 + valor2); //opcion sumar
                        return [3 /*break*/, 14];
                    }
                    _b.label = 6;
                case 6:
                    {
                        console.log("\nresultado: %d", valor1 - valor2); //opcion resta
                        return [3 /*break*/, 14];
                    }
                    _b.label = 7;
                case 7:
                    {
                        console.log("\nresultado: %d", valor1 * valor2); //opcion multi
                        return [3 /*break*/, 14];
                    }
                    _b.label = 8;
                case 8:
                    {
                        if (valor2 == 0) //validacion de 0 cuando se divide
                         {
                            console.log("\nError, imposible la division por 0 (cero)"); //error al div por 0
                        }
                        else {
                            console.log("\nresultado: %d", valor1 / valor2); //division completa
                        }
                        return [3 /*break*/, 14];
                    }
                    _b.label = 9;
                case 9: return [4 /*yield*/, ingresonum("\ningrese el primer numero:\t")];
                case 10:
                    valor1 = _b.sent(); //pedida de reingreso
                    return [4 /*yield*/, ingresonum("\ningrese el segundo numero:\t")];
                case 11:
                    valor2 = _b.sent();
                    return [3 /*break*/, 14];
                case 12: return [4 /*yield*/, new Promise(function (resolve) {
                        return rl.question("\nSeguro de que quiere salir del programa? (0 para confirmar, X numero para negar):\t", resolve);
                    } //pregunta si quiere salior del programa
                    )];
                case 13:
                    validacion = _b.sent();
                    if (validacion === "0") {
                        console.log("\ncierre de programa");
                        salir = true;
                    }
                    else {
                        console.log("\nRegresando al menu de opcione");
                    }
                    return [3 /*break*/, 14];
                case 14: return [3 /*break*/, 3];
                case 15:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
//tsc(ts) para compilar y node(js) para ejecutar 
