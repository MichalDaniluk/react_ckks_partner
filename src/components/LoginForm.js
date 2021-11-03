const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>E-mail</label>
          <input type="text" name="login" className="form-control" />
        </div>
        <div className="form-group">
          <label>Hasło</label>
          <input type="text" name="password" className="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
