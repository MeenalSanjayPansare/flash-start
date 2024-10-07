import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Dummy login function, implement actual logic here
    if (data.email === 'test@example.com' && data.password === 'password') {
      Alert.alert('Success', 'Logged in successfully!');
    } else {
      Alert.alert('Error', 'Invalid credentials!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
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

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text style={styles.error}>This is required.</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.recoveryLink} onPress={() => navigation.navigate('PasswordRecovery')}>
        Forgot Password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 10 },
  error: { color: 'red', marginBottom: 12 },
  recoveryLink: { color: 'blue', marginTop: 20, textAlign: 'center' }
});

export default LoginScreen;
