import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    attempts: 5,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <username@demomailtrap.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h1 style="text-align: center;">Bem-vindo ao Sistema de Filas!</h1>
          <p>Olá, ${user.name},</p>
          <p>Estamos muito felizes por você ter se juntado a nós. Aqui estão algumas informações que você pode achar úteis:</p>
          <ul>
            <li>Seu nome de usuário é: ${user.name}</li>
            <li>Seu e-mail é: ${user.email}</li>
          </ul>
          <p>Se você tiver alguma dúvida, não hesite em nos contatar.</p>
          <p>Atenciosamente,</p>
          <p>Equipe do Sistema de Filas</p>
        </div>
      `,
    });
  },
};
