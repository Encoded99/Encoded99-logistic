import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import packages from '@/app/data/packages';
import { Text, Button, Card, Divider, useTheme } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function PackageDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const theme = useTheme();

  const pkg = packages.find((p) => p.id === id);

  if (!pkg) return <Text style={{ fontSize: 16 }}>Package not found</Text>;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={26} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>
          {pkg.recipient}'s Package
        </Text>
        <View style={{ width: 26 }} /> {/* Spacer */}
      </View>

      {/* Package Details Card */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Title
          title={pkg.recipient}
          subtitle={`Status: ${pkg.status}`}
          titleStyle={{ color: theme.colors.onSurface, fontSize: 18 }}
          subtitleStyle={{ color: theme.colors.outline, fontSize: 14 }}
          left={(props) => (
            <MaterialIcons name="local-shipping" size={28} color={theme.colors.primary} />
          )}
        />
        <Card.Content>
          <Text style={[styles.label, { color: theme.colors.onSurface }]}>
            Weight: <Text style={styles.bold}>{pkg.weight}</Text>
          </Text>
          <Text style={[styles.label, { color: theme.colors.onSurface }]}>
            Type: <Text style={styles.bold}>{pkg.type}</Text>
          </Text>
        </Card.Content>
        <Divider style={{ marginVertical: 10, backgroundColor: theme.colors.outline }} />
        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            icon="check"
            onPress={() => alert('Marked as delivered')}
            style={styles.button}
            buttonColor={theme.colors.primary}
            textColor={theme.colors.onPrimary}
            labelStyle={styles.buttonLabel}
          >
            Mark as Delivered
          </Button>

          <Button
            mode="outlined"
            icon="phone"
            onPress={() => Linking.openURL(`tel:${pkg.phone}`)}
            style={styles.button}
            textColor={theme.colors.primary}
            labelStyle={styles.buttonLabel}
          >
            Call Recipient
          </Button>

          {/* ✅ New Update Status Button */}
          <Button
            mode="contained-tonal"
            icon="pencil"
            onPress={() => router.push(`/status/${pkg.id}`)}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Update Status
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
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
  card: {
    borderRadius: 12,
    paddingBottom: 16,
    marginVertical: 16,
  },
  actions: {
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  button: {
    width: '100%',
  },
  buttonLabel: {
    fontSize: 14, // Locked font size
    fontWeight: '600',
  },
  bold: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15, // Locked font size
    marginBottom: 8,
  },
});
