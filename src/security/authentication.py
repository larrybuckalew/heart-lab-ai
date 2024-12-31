import bcrypt
import re
from cryptography.fernet import Fernet

class UserAuthenticator:
    def __init__(self, encryption_key=None):
        # Generate or use provided encryption key
        self.encryption_key = encryption_key or Fernet.generate_key()
        self.cipher_suite = Fernet(self.encryption_key)
        self.users = {}  # In-memory user store (replace with database in production)
    
    def validate_password(self, password):
        # Password complexity requirements
        if len(password) < 8:
            return False
        if not re.search(r'[A-Z]', password):
            return False
        if not re.search(r'[a-z]', password):
            return False
        if not re.search(r'[0-9]', password):
            return False
        if not re.search(r'[!@#$%^&*(),.?":{}|<>]', password):
            return False
        return True
    
    def hash_password(self, password):
        # Salt and hash password
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
        return hashed
    
    def verify_password(self, stored_password, provided_password):
        return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password)
    
    def register_user(self, username, password, email):
        if not self.validate_password(password):
            raise ValueError('Password does not meet complexity requirements')
        
        # Encrypt sensitive user data
        encrypted_email = self.cipher_suite.encrypt(email.encode())
        
        # Store hashed password
        self.users[username] = {
            'password': self.hash_password(password),
            'email': encrypted_email
        }
        return True
    
    def authenticate_user(self, username, password):
        if username not in self.users:
            return False
        return self.verify_password(self.users[username]['password'], password)