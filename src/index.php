<form action="login.php" method="POST">
  <input type="email" name="email" placeholder="Email" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>
<?php
echo password_hash("password123", PASSWORD_DEFAULT);
