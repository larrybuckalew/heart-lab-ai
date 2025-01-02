import numpy as np
import tensorflow as tf
from sklearn.metrics import classification_report, confusion_matrix

class AdvancedRiskModel:
    def __init__(self, input_shape, num_classes=3):
        self.model = self._build_model(input_shape, num_classes)

    def _build_model(self, input_shape, num_classes):
        model = tf.keras.Sequential([
            # Input layer
            tf.keras.layers.Input(shape=input_shape),
            
            # Feature extraction layers
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.3),
            
            tf.keras.layers.Dense(32, activation='relu'),
            tf.keras.layers.BatchNormalization(),
            tf.keras.layers.Dropout(0.3),

            # Output layer
            tf.keras.layers.Dense(num_classes, activation='softmax')
        ])

        # Compile the model
        model.compile(
            optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )

        return model

    def train(self, X_train, y_train, X_val=None, y_val=None, epochs=50, batch_size=32):
        """Train the advanced risk prediction model"""
        # Convert labels to categorical
        y_train_cat = tf.keras.utils.to_categorical(y_train)
        
        # Prepare validation data if provided
        validation_data = None
        if X_val is not None and y_val is not None:
            y_val_cat = tf.keras.utils.to_categorical(y_val)
            validation_data = (X_val, y_val_cat)

        # Train the model
        history = self.model.fit(
            X_train, y_train_cat,
            epochs=epochs,
            batch_size=batch_size,
            validation_data=validation_data,
            callbacks=[
                tf.keras.callbacks.EarlyStopping(
                    monitor='val_loss', 
                    patience=10, 
                    restore_best_weights=True
                )
            ]
        )

        return history

    def evaluate(self, X_test, y_test):
        """Evaluate model performance"""
        y_test_cat = tf.keras.utils.to_categorical(y_test)
        evaluation = self.model.evaluate(X_test, y_test_cat)
        
        # Predict and generate detailed report
        y_pred = self.model.predict(X_test)
        y_pred_classes = np.argmax(y_pred, axis=1)
        
        print(classification_report(y_test, y_pred_classes))
        print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred_classes))
        
        return evaluation