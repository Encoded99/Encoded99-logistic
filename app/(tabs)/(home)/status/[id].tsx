import React, { useState } from 'react';
import { View, StyleSheet, Alert,TouchableOpacity , } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, Button, RadioButton, useTheme, Card } from 'react-native-paper';
import packages from '@/app/data/packages';
import { MaterialIcons } from '@expo/vector-icons';



const STATUS_OPTIONS = ['Pending', 'In Transit', 'Delivered', 'Failed'];

export default function StatusScreen() {
  const { id } = useLocalSearchParams();
  const theme = useTheme();
  const router = useRouter();

  const pkg = packages.find((p) => p.id === id);
  const [status, setStatus] = useState('');

  if (!pkg) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Package not found</Text>
      </View>
    );
  }

  const handleSubmit = () => {
    if (!status) {
      Alert.alert('Validation Error', 'Please select a status.');
      return;
    }

    console.log(`Package ID: ${pkg.id} | New Status: ${status}`);
    Alert.alert('Status Updated', `New status: ${status}`);
    router.back(); // Navigate back to PackageDetails
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>

         <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                  <MaterialIcons name="arrow-back" size={26} color={theme.colors.primary} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>
                  {pkg.recipient}'s Package
                </Text>
                <View style={{ width: 26 }} /> {/* Spacer */}
              </View>




      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Title
          title="Update Package Status"
          subtitle={`For: ${pkg.recipient}`}
          titleStyle={[styles.title, { color: theme.colors.onSurface }]}
          subtitleStyle={{ color: theme.colors.outline, fontSize: 14 }}
        />
        <Card.Content>
          <RadioButton.Group onValueChange={setStatus} value={status}>
            {STATUS_OPTIONS.map((option) => (
              <View key={option} style={styles.optionRow}>
                <RadioButton value={option} color={theme.colors.primary} />
                <Text style={[styles.optionLabel, { color: theme.colors.onSurface }]}>
                  {option}
                </Text>
              </View>
            ))}
          </RadioButton.Group>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            buttonColor={theme.colors.primary}
            textColor={theme.colors.onPrimary}
            labelStyle={styles.buttonLabel}
          >
            Submit
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
 header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18, // Locked, not scalable
    fontWeight: 'bold',
  },



  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
  },
  card: {
    borderRadius: 12,
    paddingBottom: 16,
    marginVertical:30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    paddingHorizontal: 16,
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  optionLabel: {
    fontSize: 15,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});
