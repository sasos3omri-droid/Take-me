import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';

export default function App() {
  const [destination, setDestination] = useState('');

  const openWaze = async () => {
    if (!destination.trim()) {
      Alert.alert('تنبيه', 'اكتب الوجهة أولاً');
      return;
    }

    const url =
      'https://waze.com/ul?q=' +
      encodeURIComponent(destination.trim()) +
      '&navigate=yes';

    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('خطأ', 'لم أستطع فتح Waze');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>🚕</Text>

        <Text style={styles.title}>Take Me</Text>

        <Text style={styles.subtitle}>
          مساعد السائق الذكي
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>إلى أين تريد الذهاب؟</Text>

          <TextInput
            style={styles.input}
            placeholder="مثلاً: مطار بن غوريون"
            placeholderTextColor="#777"
            value={destination}
            onChangeText={setDestination}
            textAlign="right"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={openWaze}
          >
            <Text style={styles.buttonText}>
              افتح الوجهة في Waze
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.micButton}>
          <Text style={styles.mic}>🎤</Text>
        </TouchableOpacity>

        <Text style={styles.micText}>
          قريباً: اضغط وتحدث
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101114',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 65,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 
