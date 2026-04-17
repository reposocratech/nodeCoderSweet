const z = require('zod');

const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/

const registerUserSchema = z
.object({
    name: z
        .string({message:"tipo no válido, solo admine texto"})
        .min(3, {message:"demasiado corto, mínimo 3 caracteres"})
        .max(20, {message:"demasiado largo, máximo 20 caracteres"}),
    lastname: z
        .string({message:"apellido obligatorio!"})
        .max(50, {message:"demasiado largo, max 50"}),
    year: z
        .number({message: "solo admite números"})
        .min(1905, {message: "la checha debe ser mayor de 1905"})
        .max(2155, {message: "la checha debe ser menor de 2155"}),
    email: z
        .string({message: "email no válido"})
        .email({message: "email formato no válido"}),
    password: z 
        .string({message: "password obligatorio"})
        .regex(passRegEx, {message: "la contraseña no cumple los requisitos de seguridad"}),
    repPass: z
        .string({message:"Rep pass es obligatorio"})
})
.refine((data)=> data.password === data.repPass, {
    message: "Las contraseñas no son iguales",
    path: ["repPass"]
});

module.exports = registerUserSchema;