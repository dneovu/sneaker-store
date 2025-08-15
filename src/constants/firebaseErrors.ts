const firebaseErrorMessages: Record<string, string> = {
  'auth/weak-password': 'Пароль должен быть не менее 6 символов',
  'auth/email-already-in-use': 'Эта почта уже зарегистрирована',
  'auth/invalid-email': 'Некорректный формат почты',
  'auth/user-not-found': 'Пользователь не найден',
  'auth/wrong-password': 'Неверный пароль',
};

export default firebaseErrorMessages;
