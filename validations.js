import { body } from "express-validator";

export const loginValidation = [
  body("email", "Некоректний формат пошти").isEmail(),
  body("password", "Пароль повинен містити мінімум 5 символів").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Некоректний формат пошти").isEmail(),
  body("password", "Пароль повинен містити мінімум 5 символів").isLength({
    min: 5,
  }),
  body("fullName", "Вкажіть ім'я").isLength({ min: 3 }),
  body("avatarUrl", "Некоректне посилання на аватар").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Введіть загаловок статті").isLength({ min: 3 }).isString(),
  body("text", "Введіть текст статті").isLength({ min: 3 }).isString(),
  body("tags", "Невірний формат тегів").optional().isArray(),
  body("imageUrl", "Невірне посилання на зображення").optional().isString(),
];
