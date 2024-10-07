import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const PasswordRecoveryScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Implement the logic for password recovery (send reset email, etc.)
    Alert.alert('Password Recovery', `Password reset link sent to ${data.email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text style={styles.error}>This is required.</Text>}

      <Button title="Send Reset Link" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.backLink} onPress={() => navigation.goBack()}>
        Back to Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 10 },
  error: { color: 'red', marginBottom: 12 },
  backLink: { color: 'blue', marginTop: 20, textAlign: 'center' }
});

export default PasswordRecoveryScreen;
