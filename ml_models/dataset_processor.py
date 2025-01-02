import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer

class MedicalDatasetProcessor:
    def __init__(self, dataset_path):
        self.dataset_path = dataset_path
        self.raw_data = None
        self.processed_data = None
        self.preprocessor = None

    def load_dataset(self):
        """Load medical dataset from various sources"""
        if self.dataset_path.endswith('.csv'):
            self.raw_data = pd.read_csv(self.dataset_path)
        elif self.dataset_path.endswith('.xlsx'):
            self.raw_data = pd.read_excel(self.dataset_path)
        else:
            raise ValueError("Unsupported file format")

    def preprocess_data(self, target_column='risk_category'):
        """Advanced data preprocessing with multiple strategies"""
        # Separate features and target
        X = self.raw_data.drop(target_column, axis=1)
        y = self.raw_data[target_column]

        # Identify numeric and categorical columns
        numeric_features = X.select_dtypes(include=['int64', 'float64']).columns
        categorical_features = X.select_dtypes(include=['object', 'category']).columns

        # Create preprocessor with advanced techniques
        numeric_transformer = Pipeline(steps=[
            ('imputer', SimpleImputer(strategy='median')),
            ('scaler', StandardScaler())
        ])

        categorical_transformer = Pipeline(steps=[
            ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
            ('onehot', OneHotEncoder(handle_unknown='ignore'))
        ])

        preprocessor = ColumnTransformer(
            transformers=[
                ('num', numeric_transformer, numeric_features),
                ('cat', categorical_transformer, categorical_features)
            ])

        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )

        return X_train, X_test, y_train, y_test, preprocessor

    def generate_synthetic_data(self, num_samples=1000):
        """Generate synthetic medical data for model training"""
        synthetic_data = {
            'age': np.random.normal(55, 15, num_samples),
            'systolic_bp': np.random.normal(130, 20, num_samples),
            'diastolic_bp': np.random.normal(80, 10, num_samples),
            'cholesterol': np.random.normal(200, 40, num_samples),
            'glucose': np.random.normal(100, 25, num_samples),
            'smoking': np.random.choice([0, 1], num_samples, p=[0.7, 0.3]),
            'diabetes': np.random.choice([0, 1], num_samples, p=[0.9, 0.1]),
            'risk_category': np.random.choice(['low', 'medium', 'high'], num_samples)
        }

        return pd.DataFrame(synthetic_data)