export class AuthResponse {
  static async serialize(data) {
    
    return {
      message: 'Usuário logado com sucesso!',
      user: data.username,
      token: data.access_token,
    }
  }
}