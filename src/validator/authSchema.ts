import vine from "@vinejs/vine";

export const registerSchema = vine.object({
  name: vine.string().trim().minLength(2).maxLength(15),
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(10).confirmed(),
});

export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(10),
});
